import { Resend } from "resend";

export type EmailDelivery = {
  ok: boolean;
  id?: string;
  error?: string;
};

type IntakeEmailInput = {
  leadId: string;
  to: string;
  name: string;
  email: string;
  company: string | null;
  score: number;
  entryOffer: string;
  briefMd: string;
  videoUrl: string | null;
};

function getEmailClient(): {
  resend: Resend;
  from: string;
} | null {
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

export async function sendIntakeNotification(
  input: IntakeEmailInput,
): Promise<EmailDelivery> {
  const client = getEmailClient();
  if (!client) return { ok: false, error: "Email is not configured" };

  const html = `
    <h2>Nouveau briefing — ${escapeHtml(input.name)}</h2>
    <p>
      <strong>Email:</strong> ${escapeHtml(input.email)}<br/>
      <strong>Société:</strong> ${escapeHtml(input.company ?? "—")}<br/>
      <strong>Score:</strong> ${input.score}<br/>
      <strong>Porte d'entrée:</strong> ${escapeHtml(input.entryOffer)}
    </p>
    ${
      input.videoUrl
        ? `<p><a href="${escapeHtml(input.videoUrl)}">Voir la vidéo (lien signé)</a></p>`
        : ""
    }
    <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:13px;line-height:1.5;background:#0b0f18;color:#f2efea;padding:16px;border-radius:12px;">${escapeHtml(input.briefMd)}</pre>
  `;

  const { data, error } = await client.resend.emails.send({
    from: client.from,
    to: input.to,
    replyTo: input.email,
    subject: `[TWM] Briefing ${input.name} — ${input.entryOffer} (${input.score})`,
    html,
    text: input.briefMd,
  }, {
    idempotencyKey: `intake-notify-${input.leadId}`,
  });

  if (error || !data?.id) {
    return {
      ok: false,
      error: error?.message || "Resend returned no delivery identifier",
    };
  }

  return { ok: true, id: data.id };
}

export async function sendIntakeConfirmation(input: {
  leadId: string;
  to: string;
  name: string;
  lang: "fr" | "en";
  entryOffer: string;
}): Promise<EmailDelivery> {
  const client = getEmailClient();
  if (!client) return { ok: false, error: "Email is not configured" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.twm.expert";
  const isFrench = input.lang === "fr";
  const subject = isFrench
    ? "Votre demande TWM Advisory a bien été reçue"
    : "TWM Advisory received your request";
  const intro = isFrench
    ? `Bonjour ${input.name}, votre demande a bien été enregistrée.`
    : `Hello ${input.name}, your request has been recorded.`;
  const next = isFrench
    ? "Nous allons l'examiner et vous proposer un créneau sous deux jours ouvrés."
    : "We will review it and propose a time within two business days.";
  const recommendation = isFrench
    ? `Orientation initiale : ${input.entryOffer}. Elle sera confirmée lors du premier échange.`
    : `Initial direction: ${input.entryOffer}. We will confirm it during the first conversation.`;
  const privacy = isFrench ? "Politique de confidentialité" : "Privacy policy";
  const text = `${intro}\n\n${next}\n\n${recommendation}\n\n${privacy}: ${siteUrl}/confidentialite`;

  const { data, error } = await client.resend.emails.send(
    {
      from: client.from,
      to: input.to,
      subject,
      text,
      html: `
        <p>${escapeHtml(intro)}</p>
        <p>${escapeHtml(next)}</p>
        <p>${escapeHtml(recommendation)}</p>
        <p><a href="${escapeHtml(siteUrl)}/confidentialite">${privacy}</a></p>
      `,
    },
    {
      idempotencyKey: `intake-confirm-${input.leadId}`,
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
