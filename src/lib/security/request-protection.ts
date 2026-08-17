import { createHmac } from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type ProtectionResult =
  | { ok: true }
  | { ok: false; status: 429 | 503; error: string };

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function hashClient(scope: string, request: Request): string {
  const salt =
    process.env.RATE_LIMIT_SALT ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    "twm-local-rate-limit";

  return createHmac("sha256", salt)
    .update(`${scope}:${getClientIp(request)}`)
    .digest("hex");
}

export async function enforceRateLimit(
  supabase: SupabaseClient,
  request: Request,
  options: { scope: string; maxRequests: number; windowSeconds: number },
): Promise<ProtectionResult> {
  const { data, error } = await supabase.rpc("consume_api_rate_limit", {
    p_bucket_key: hashClient(options.scope, request),
    p_window_seconds: options.windowSeconds,
    p_max_requests: options.maxRequests,
  });

  if (error) {
    console.error("[security] rate limit unavailable", {
      scope: options.scope,
      code: error.code,
    });
    return {
      ok: false,
      status: 503,
      error: "Request protection is temporarily unavailable",
    };
  }

  if (data !== true) {
    return {
      ok: false,
      status: 429,
      error: "Too many requests. Please try again later.",
    };
  }

  return { ok: true };
}

export async function verifyTurnstile(
  request: Request,
  token: string | null | undefined,
  expectedAction: "intake" | "partner",
): Promise<ProtectionResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.error("[security] TURNSTILE_SECRET_KEY is missing");
      return {
        ok: false,
        status: 503,
        error: "Bot protection is not configured",
      };
    }
    return { ok: true };
  }

  if (!token) {
    return { ok: false, status: 429, error: "Bot verification required" };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: getClientIp(request),
  });
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8_000),
    },
  );

  if (!response.ok) {
    console.error("[security] Turnstile verification unavailable", {
      status: response.status,
    });
    return {
      ok: false,
      status: 503,
      error: "Bot verification is temporarily unavailable",
    };
  }

  const result = (await response.json()) as TurnstileResponse;
  const allowedHosts = (process.env.TURNSTILE_ALLOWED_HOSTNAMES || "")
    .split(",")
    .map((hostname) => hostname.trim())
    .filter(Boolean);
  const hostnameAllowed =
    allowedHosts.length === 0 ||
    (result.hostname ? allowedHosts.includes(result.hostname) : false);

  if (
    !result.success ||
    result.action !== expectedAction ||
    !hostnameAllowed
  ) {
    console.warn("[security] Turnstile verification rejected", {
      action: result.action,
      hostname: result.hostname,
      codes: result["error-codes"],
    });
    return { ok: false, status: 429, error: "Bot verification failed" };
  }

  return { ok: true };
}
