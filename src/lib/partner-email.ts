import { Resend } from "resend";

export async function sendPartnerEmail(input: {
  to: string;
  name: string;
  email: string;
  company: string | null;
  partnerType: string;
  message: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[partners] RESEND_API_KEY missing — lead logged below");
    console.info(JSON.stringify(input, null, 2));
    return false;
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.INTAKE_FROM_EMAIL ||
    "TWM Advisory <notifications@twm.expert>";

  const html = `
    <h2>Proposition partenariat — ${escapeHtml(input.name)}</h2>
    <p>
      <strong>Email:</strong> ${escapeHtml(input.email)}<br/>
      <strong>Société:</strong> ${escapeHtml(input.company ?? "—")}<br/>
      <strong>Type:</strong> ${escapeHtml(input.partnerType)}
    </p>
    <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:13px;line-height:1.5;background:#0b0f18;color:#f2efea;padding:16px;border-radius:12px;">${escapeHtml(input.message)}</pre>
  `;

  await resend.emails.send({
    from,
    to: input.to,
    subject: `[TWM] Partenariat — ${input.name} (${input.partnerType})`,
    html,
    text: input.message,
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
