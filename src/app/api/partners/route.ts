import { NextResponse } from "next/server";
import { z } from "zod";
import type { EmailDelivery } from "@/lib/intake-email";
import {
  sendPartnerConfirmation,
  sendPartnerNotification,
} from "@/lib/partner-email";
import {
  reportOperationalError,
  toProcessingError,
  withRetry,
} from "@/lib/operations";
import {
  enforceRateLimit,
  verifyTurnstile,
} from "@/lib/security/request-protection";
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
  turnstileToken: z.string().min(1).max(4096).nullable(),
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

export async function POST(request: Request) {
  let leadId: string | null = null;

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
    const rateLimit = await enforceRateLimit(supabase, request, {
      scope: "partner-submit",
      maxRequests: 3,
      windowSeconds: 60 * 60,
    });
    if (!rateLimit.ok) {
      return NextResponse.json(
        { error: rateLimit.error },
        { status: rateLimit.status },
      );
    }

    const turnstile = await verifyTurnstile(
      request,
      data.turnstileToken,
      "partner",
    );
    if (!turnstile.ok) {
      return NextResponse.json(
        { error: turnstile.error },
        { status: turnstile.status },
      );
    }

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
        processing_attempts: 1,
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
    leadId = row.id;

    await supabase
      .from("partner_leads")
      .update({ status: "processing" })
      .eq("id", row.id);

    const notifyTo =
      process.env.INTAKE_NOTIFY_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "";

    let processingError: string | null = null;
    let notificationStatus: "sent" | "failed" | "skipped" = "skipped";
    if (notifyTo) {
      try {
        await retryEmail(() =>
          sendPartnerNotification({
            leadId: row.id,
            to: notifyTo,
            name: data.name,
            email: data.email,
            company: data.company,
            partnerType: data.partnerType,
            message: data.message,
          }),
        );
        notificationStatus = "sent";
      } catch (error) {
        notificationStatus = "failed";
        processingError = toProcessingError(error);
        await reportOperationalError({
          event: "partner_notification_failed",
          recordId: row.id,
          error,
        });
      }
    } else {
      await reportOperationalError({
        event: "partner_notify_address_missing",
        recordId: row.id,
        error: new Error("INTAKE_NOTIFY_EMAIL is not configured"),
      });
    }

    let confirmationStatus: "sent" | "failed" = "failed";
    try {
      await retryEmail(() =>
        sendPartnerConfirmation({
          leadId: row.id,
          to: data.email,
          name: data.name,
          lang: data.lang,
        }),
      );
      confirmationStatus = "sent";
    } catch (error) {
      processingError ??= toProcessingError(error);
      await reportOperationalError({
        event: "partner_confirmation_failed",
        recordId: row.id,
        error,
      });
    }

    const completed =
      notificationStatus === "sent" && confirmationStatus === "sent";
    const { error: finalUpdateError } = await supabase
      .from("partner_leads")
      .update({
        status: completed ? "completed" : "partial",
        notification_status: notificationStatus,
        confirmation_status: confirmationStatus,
        processing_error: processingError,
      })
      .eq("id", row.id);

    if (finalUpdateError) {
      await reportOperationalError({
        event: "partner_status_update_failed",
        recordId: row.id,
        error: finalUpdateError,
      });
    }

    return NextResponse.json({
      id: row.id,
      confirmationSent: confirmationStatus === "sent",
    });
  } catch (err) {
    console.error("[partners]", err);
    if (leadId && hasSupabaseAdmin()) {
      await getSupabaseAdmin()
        .from("partner_leads")
        .update({
          status: "failed",
          processing_error: toProcessingError(err),
        })
        .eq("id", leadId);
      await reportOperationalError({
        event: "partner_processing_failed",
        recordId: leadId,
        error: err,
      });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
