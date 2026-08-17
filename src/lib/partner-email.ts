import { Resend } from "resend";
import type { EmailDelivery } from "@/lib/intake-email";

type PartnerEmailInput = {
  leadId: string;
  to: string;
  name: string;
  email: string;
  company: string | null;
  partnerType: string;
  message: string;
};

function getEmailClient(): { resend: Resend; from: string } | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[email] RESEND_API_KEY is missing");
    return null;
  }

  return {
    resend: new Resend(apiKey),
    from:
      process.env.INTAKE_FROM_EMAIL ||
      "TWM Advisory <notifications@twm.expert>",
  };
}

export async function sendPartnerNotification(
  input: PartnerEmailInput,
): Promise<EmailDelivery> {
  const client = getEmailClient();
  if (!client) return { ok: false, error: "Email is not configured" };

  const html = `
    <h2>Proposition partenariat — ${escapeHtml(input.name)}</h2>
    <p>
      <strong>Email:</strong> ${escapeHtml(input.email)}<br/>
      <strong>Société:</strong> ${escapeHtml(input.company ?? "—")}<br/>
      <strong>Type:</strong> ${escapeHtml(input.partnerType)}
    </p>
    <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:13px;line-height:1.5;background:#0b0f18;color:#f2efea;padding:16px;border-radius:12px;">${escapeHtml(input.message)}</pre>
  `;

  const { data, error } = await client.resend.emails.send({
    from: client.from,
    to: input.to,
    replyTo: input.email,
    subject: `[TWM] Partenariat — ${input.name} (${input.partnerType})`,
    html,
    text: input.message,
  }, {
    idempotencyKey: `partner-notify-${input.leadId}`,
  });

  if (error || !data?.id) {
    return {
      ok: false,
      error: error?.message || "Resend returned no delivery identifier",
    };
  }

  return { ok: true, id: data.id };
}

export async function sendPartnerConfirmation(input: {
  leadId: string;
  to: string;
  name: string;
  lang: "fr" | "en";
}): Promise<EmailDelivery> {
  const client = getEmailClient();
  if (!client) return { ok: false, error: "Email is not configured" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.twm.expert";
  const isFrench = input.lang === "fr";
  const subject = isFrench
    ? "Votre proposition de partenariat a bien été reçue"
    : "Your partnership proposal was received";
  const intro = isFrench
    ? `Bonjour ${input.name}, votre proposition de partenariat a bien été enregistrée.`
    : `Hello ${input.name}, your partnership proposal has been recorded.`;
  const next = isFrench
    ? "Nous allons l'examiner et vous répondre sous deux jours ouvrés."
    : "We will review it and reply within two business days.";
  const privacy = isFrench ? "Politique de confidentialité" : "Privacy policy";
  const text = `${intro}\n\n${next}\n\n${privacy}: ${siteUrl}/confidentialite`;

  const { data, error } = await client.resend.emails.send(
    {
      from: client.from,
      to: input.to,
      subject,
      text,
      html: `
        <p>${escapeHtml(intro)}</p>
        <p>${escapeHtml(next)}</p>
        <p><a href="${escapeHtml(siteUrl)}/confidentialite">${privacy}</a></p>
      `,
    },
    {
      idempotencyKey: `partner-confirm-${input.leadId}`,
    },
  );

  if (error || !data?.id) {
    return {
      ok: false,
      error: error?.message || "Resend returned no delivery identifier",
    };
  }

  return { ok: true, id: data.id };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
