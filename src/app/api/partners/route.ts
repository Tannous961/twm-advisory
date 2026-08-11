import { NextResponse } from "next/server";
import { z } from "zod";
import { sendPartnerEmail } from "@/lib/partner-email";
import { getSupabaseAdmin, hasSupabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

const bodySchema = z.object({
  lang: z.enum(["fr", "en"]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).nullable(),
  partnerType: z.enum([
    "introducer",
    "tech",
    "domain",
    "codelivery",
    "other",
  ]),
  message: z.string().trim().min(20).max(4000),
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
    const supabase = getSupabaseAdmin();

    const { data: row, error: insertError } = await supabase
      .from("partner_leads")
      .insert({
        lang: data.lang,
        name: data.name,
        email: data.email,
        company: data.company,
        partner_type: data.partnerType,
        message: data.message,
        consent_at: new Date().toISOString(),
        status: "received",
      })
      .select("id")
      .single();

    if (insertError || !row) {
      console.error("[partners] insert", insertError);
      return NextResponse.json(
        { error: "Could not save lead" },
        { status: 500 },
      );
    }

    const notifyTo =
      process.env.INTAKE_NOTIFY_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "";

    let emailed = false;
    if (notifyTo) {
      emailed = await sendPartnerEmail({
        to: notifyTo,
        name: data.name,
        email: data.email,
        company: data.company,
        partnerType: data.partnerType,
        message: data.message,
      });
    } else {
      console.info("[partners] no notify email configured");
    }

    if (emailed) {
      await supabase
        .from("partner_leads")
        .update({ status: "emailed" })
        .eq("id", row.id);
    }

    return NextResponse.json({ id: row.id });
  } catch (err) {
    console.error("[partners]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
