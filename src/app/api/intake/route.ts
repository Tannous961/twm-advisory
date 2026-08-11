import { NextResponse } from "next/server";
import { z } from "zod";
import { buildIntakeBrief } from "@/lib/intake-brief";
import { sendIntakeEmail } from "@/lib/intake-email";
import {
  computeMaturity,
  type DataConstraint,
  type IntentId,
  type OrgSize,
  type Urgency,
} from "@/lib/intake";
import { getSupabaseAdmin, hasSupabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 120;

const bodySchema = z.object({
  lang: z.enum(["fr", "en"]),
  intent: z.enum([
    "discover",
    "use_case",
    "has_agents",
    "strategy",
    "training",
  ]),
  answers: z.object({
    orgSize: z.enum(["solo", "small", "mid", "large"]),
    urgency: z.enum(["explore", "quarter", "now"]),
    dataConstraint: z.enum(["open", "sensitive", "strict"]),
  }),
  score: z.number().int().min(0).max(100),
  entryOffer: z.enum([
    "audit",
    "deploy",
    "certify",
    "advisory",
    "training",
  ]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).nullable(),
  signalText: z.string().trim().max(8000).nullable(),
  videoPath: z.string().trim().max(240).nullable(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    if (!hasSupabaseAdmin()) {
      return NextResponse.json(
        { error: "Supabase is not configured" },
        { status: 503 },
      );
    }

    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;
    if (!data.signalText && !data.videoPath) {
      return NextResponse.json(
        { error: "Signal required" },
        { status: 400 },
      );
    }

    const maturity = computeMaturity(data.intent as IntentId, {
      orgSize: data.answers.orgSize as OrgSize,
      urgency: data.answers.urgency as Urgency,
      dataConstraint: data.answers.dataConstraint as DataConstraint,
    });

    const supabase = getSupabaseAdmin();
    const consentAt = new Date().toISOString();

    const { data: row, error: insertError } = await supabase
      .from("intake_leads")
      .insert({
        lang: data.lang,
        intent: data.intent,
        answers: data.answers,
        score: maturity.score,
        entry_offer: maturity.entryOffer,
        name: data.name,
        email: data.email,
        company: data.company,
        signal_text: data.signalText,
        video_path: data.videoPath,
        consent_at: consentAt,
        status: "received",
      })
      .select("id")
      .single();

    if (insertError || !row) {
      console.error("[intake] insert", insertError);
      return NextResponse.json(
        { error: "Could not save lead" },
        { status: 500 },
      );
    }

    let videoBytes: Buffer | null = null;
    let videoMime: string | null = null;
    let videoUrl: string | null = null;

    if (data.videoPath) {
      const { data: file, error: downloadError } = await supabase.storage
        .from("intake-videos")
        .download(data.videoPath);

      if (!downloadError && file) {
        videoBytes = Buffer.from(await file.arrayBuffer());
        videoMime = file.type || "video/webm";
      }

      const { data: signed } = await supabase.storage
        .from("intake-videos")
        .createSignedUrl(data.videoPath, 60 * 60 * 24 * 7);
      videoUrl = signed?.signedUrl ?? null;
    }

    const { transcript, briefMd } = await buildIntakeBrief({
      lang: data.lang,
      intent: data.intent,
      answers: data.answers,
      score: maturity.score,
      entryOffer: maturity.entryOffer,
      name: data.name,
      company: data.company,
      signalText: data.signalText,
      videoBytes,
      videoMime,
    });

    await supabase
      .from("intake_leads")
      .update({
        transcript,
        brief_md: briefMd,
        status: "briefed",
      })
      .eq("id", row.id);

    const notifyTo =
      process.env.INTAKE_NOTIFY_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "";

    let emailed = false;
    if (notifyTo) {
      emailed = await sendIntakeEmail({
        to: notifyTo,
        name: data.name,
        email: data.email,
        company: data.company,
        score: maturity.score,
        entryOffer: maturity.entryOffer,
        briefMd,
        videoUrl,
      });
    } else {
      console.info("[intake] no notify email configured");
      console.info(briefMd);
    }

    if (emailed) {
      await supabase
        .from("intake_leads")
        .update({ status: "emailed" })
        .eq("id", row.id);
    }

    return NextResponse.json({
      id: row.id,
      score: maturity.score,
      entryOffer: maturity.entryOffer,
    });
  } catch (err) {
    console.error("[intake]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
