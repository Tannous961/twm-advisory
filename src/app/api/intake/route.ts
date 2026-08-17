import { NextResponse } from "next/server";
import { z } from "zod";
import { buildIntakeBrief } from "@/lib/intake-brief";
import {
  sendIntakeConfirmation,
  sendIntakeNotification,
  type EmailDelivery,
} from "@/lib/intake-email";
import {
  computeMaturity,
  type DataConstraint,
  type IntentId,
  type OrgSize,
  type Urgency,
} from "@/lib/intake";
import {
  reportOperationalError,
  toProcessingError,
  withRetry,
} from "@/lib/operations";
import {
  getBearerToken,
  verifyIntakeSession,
} from "@/lib/security/intake-session";
import { enforceRateLimit } from "@/lib/security/request-protection";
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

async function retryEmail(
  operation: () => Promise<EmailDelivery>,
): Promise<EmailDelivery> {
  return withRetry(async () => {
    const result = await operation();
    if (!result.ok) throw new Error(result.error || "Email delivery failed");
    return result;
  });
}

function fallbackBrief(data: z.infer<typeof bodySchema>, score: number): string {
  return [
    `# Brief — ${data.name}`,
    "",
    `- Intent: ${data.intent}`,
    `- Score: ${score}`,
    `- Entry offer: ${data.entryOffer}`,
    `- Org: ${data.answers.orgSize} · Urgency: ${data.answers.urgency} · Data: ${data.answers.dataConstraint}`,
    `- Company: ${data.company ?? "—"}`,
    "",
    "## Signal",
    data.signalText ?? "(video submitted — automated brief unavailable)",
  ].join("\n");
}

export async function POST(request: Request) {
  let leadId: string | null = null;

  try {
    if (!hasSupabaseAdmin()) {
      return NextResponse.json(
        { error: "Supabase is not configured" },
        { status: 503 },
      );
    }

    const session = verifyIntakeSession(getBearerToken(request));
    if (!session) {
      return NextResponse.json(
        { error: "Invalid or expired intake session" },
        { status: 401 },
      );
    }

    const supabase = getSupabaseAdmin();
    const rateLimit = await enforceRateLimit(supabase, request, {
      scope: `intake-submit:${session.sessionId}`,
      maxRequests: 2,
      windowSeconds: 30 * 60,
    });
    if (!rateLimit.ok) {
      return NextResponse.json(
        { error: rateLimit.error },
        { status: rateLimit.status },
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
    if (
      data.videoPath &&
      !data.videoPath.startsWith(`${session.sessionId}/`)
    ) {
      return NextResponse.json(
        { error: "Video does not belong to this intake session" },
        { status: 403 },
      );
    }

    const maturity = computeMaturity(data.intent as IntentId, {
      orgSize: data.answers.orgSize as OrgSize,
      urgency: data.answers.urgency as Urgency,
      dataConstraint: data.answers.dataConstraint as DataConstraint,
    });

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
        processing_attempts: 1,
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
    leadId = row.id;

    await supabase
      .from("intake_leads")
      .update({ status: "processing" })
      .eq("id", row.id);

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

    let transcript: string | null = null;
    let briefMd: string;
    let briefStatus: "completed" | "fallback" = "completed";
    let processingError: string | null = null;

    try {
      const brief = await withRetry(() =>
        buildIntakeBrief({
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
        }),
      );
      transcript = brief.transcript;
      briefMd = brief.briefMd;
    } catch (error) {
      briefStatus = "fallback";
      briefMd = fallbackBrief(data, maturity.score);
      processingError = toProcessingError(error);
      await reportOperationalError({
        event: "intake_brief_failed",
        recordId: row.id,
        error,
      });
    }

    await supabase
      .from("intake_leads")
      .update({
        transcript,
        brief_md: briefMd,
        brief_status: briefStatus,
      })
      .eq("id", row.id);

    const notifyTo =
      process.env.INTAKE_NOTIFY_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "";

    let notificationStatus: "sent" | "failed" | "skipped" = "skipped";
    if (notifyTo) {
      try {
        await retryEmail(() =>
          sendIntakeNotification({
            leadId: row.id,
            to: notifyTo,
            name: data.name,
            email: data.email,
            company: data.company,
            score: maturity.score,
            entryOffer: maturity.entryOffer,
            briefMd,
            videoUrl,
          }),
        );
        notificationStatus = "sent";
      } catch (error) {
        notificationStatus = "failed";
        processingError ??= toProcessingError(error);
        await reportOperationalError({
          event: "intake_notification_failed",
          recordId: row.id,
          error,
        });
      }
    } else {
      await reportOperationalError({
        event: "intake_notify_address_missing",
        recordId: row.id,
        error: new Error("INTAKE_NOTIFY_EMAIL is not configured"),
      });
    }

    let confirmationStatus: "sent" | "failed" = "failed";
    try {
      await retryEmail(() =>
        sendIntakeConfirmation({
          leadId: row.id,
          to: data.email,
          name: data.name,
          lang: data.lang,
          entryOffer: maturity.entryOffer,
        }),
      );
      confirmationStatus = "sent";
    } catch (error) {
      processingError ??= toProcessingError(error);
      await reportOperationalError({
        event: "intake_confirmation_failed",
        recordId: row.id,
        error,
      });
    }

    const completed =
      briefStatus === "completed" &&
      notificationStatus === "sent" &&
      confirmationStatus === "sent";
    const { error: finalUpdateError } = await supabase
      .from("intake_leads")
      .update({
        status: completed ? "completed" : "partial",
        notification_status: notificationStatus,
        confirmation_status: confirmationStatus,
        processing_error: processingError,
      })
      .eq("id", row.id);

    if (finalUpdateError) {
      await reportOperationalError({
        event: "intake_status_update_failed",
        recordId: row.id,
        error: finalUpdateError,
      });
    }

    return NextResponse.json({
      id: row.id,
      score: maturity.score,
      entryOffer: maturity.entryOffer,
      confirmationSent: confirmationStatus === "sent",
    });
  } catch (err) {
    console.error("[intake]", err);
    if (leadId && hasSupabaseAdmin()) {
      await getSupabaseAdmin()
        .from("intake_leads")
        .update({
          status: "failed",
          processing_error: toProcessingError(err),
        })
        .eq("id", leadId);
      await reportOperationalError({
        event: "intake_processing_failed",
        recordId: leadId,
        error: err,
      });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
