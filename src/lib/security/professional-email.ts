const CONSUMER_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.fr",
  "yahoo.co.uk",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.fr",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.fr",
  "live.com",
  "live.fr",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "gmx.com",
  "gmx.fr",
  "gmx.net",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "tutanota.com",
  "tuta.io",
  "fastmail.com",
  "hey.com",
  "orange.fr",
  "wanadoo.fr",
  "free.fr",
  "sfr.fr",
  "laposte.net",
  "numericable.fr",
  "bbox.fr",
  "aliceadsl.fr",
  "skynet.be",
  "telenet.be",
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "yopmail.com",
]);

const EMAIL_PATTERN = /^[^\s@]+@([^\s@]+)$/;

function emailDomain(email: string): string | null {
  const match = email.trim().toLowerCase().match(EMAIL_PATTERN);
  if (!match) return null;
  const domain = match[1]?.replace(/\.+$/, "");
  return domain || null;
}

function isConsumerDomain(domain: string): boolean {
  if (CONSUMER_EMAIL_DOMAINS.has(domain)) return true;
  for (const blocked of CONSUMER_EMAIL_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) return true;
  }
  return false;
}

export function isProfessionalEmail(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain || !domain.includes(".")) return false;
  return !isConsumerDomain(domain);
}
