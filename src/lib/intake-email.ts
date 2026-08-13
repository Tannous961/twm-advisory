import { Resend } from "resend";

export async function sendIntakeEmail(input: {
  to: string;
  name: string;
  email: string;
  company: string | null;
  score: number;
  entryOffer: string;
  briefMd: string;
  videoUrl: string | null;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[intake] RESEND_API_KEY missing — brief logged below");
    console.info(input.briefMd);
    return false;
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.INTAKE_FROM_EMAIL ||
    "TWM Advisory <notifications@twm.expert>";

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

  await resend.emails.send({
    from,
    to: input.to,
    subject: `[TWM] Briefing ${input.name} — ${input.entryOffer} (${input.score})`,
    html,
    text: input.briefMd,
  });

  return true;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
