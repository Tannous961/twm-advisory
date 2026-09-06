const DEFAULT_CALENDLY_URL = "https://calendly.com/tannous-twm";

export function getCalendlyBaseUrl(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL;
}

/** Build a Calendly scheduling URL with optional name/email prefill. */
export function buildCalendlyUrl(opts?: {
  name?: string;
  email?: string;
  source?: string;
}): string {
  const url = new URL(getCalendlyBaseUrl());

  const name = opts?.name?.trim();
  const email = opts?.email?.trim();
  const source = opts?.source?.trim();

  if (name) url.searchParams.set("name", name);
  if (email) url.searchParams.set("email", email);
  if (source) url.searchParams.set("utm_source", source);

  return url.toString();
}
