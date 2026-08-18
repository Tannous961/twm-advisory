import { createHmac } from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type ProtectionResult =
  | { ok: true; degraded?: boolean }
  | { ok: false; status: 429 | 503; error: string };

const fallbackLimits = new Map<
  string,
  { count: number; windowEndsAt: number }
>();
let warnedMissingTurnstile = false;

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

function enforceFallbackRateLimit(
  bucketKey: string,
  options: { maxRequests: number; windowSeconds: number },
): ProtectionResult {
  const now = Date.now();
  const current = fallbackLimits.get(bucketKey);

  if (!current || current.windowEndsAt <= now) {
    fallbackLimits.set(bucketKey, {
      count: 1,
      windowEndsAt: now + options.windowSeconds * 1_000,
    });
    return { ok: true, degraded: true };
  }

  if (current.count >= options.maxRequests) {
    return {
      ok: false,
      status: 429,
      error: "Too many requests. Please try again later.",
    };
  }

  current.count += 1;
  return { ok: true, degraded: true };
}

export async function enforceRateLimit(
  supabase: SupabaseClient,
  request: Request,
  options: { scope: string; maxRequests: number; windowSeconds: number },
): Promise<ProtectionResult> {
  const bucketKey = hashClient(options.scope, request);
  const { data, error } = await supabase.rpc("consume_api_rate_limit", {
    p_bucket_key: bucketKey,
    p_window_seconds: options.windowSeconds,
    p_max_requests: options.maxRequests,
  });

  if (error) {
    console.warn("[security] database rate limit unavailable; using local fallback", {
      scope: options.scope,
      code: error.code,
    });
    return enforceFallbackRateLimit(bucketKey, options);
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
    if (process.env.TURNSTILE_REQUIRED === "true") {
      console.error("[security] TURNSTILE_SECRET_KEY is missing");
      return {
        ok: false,
        status: 503,
        error: "Bot protection is not configured",
      };
    }
    if (!warnedMissingTurnstile) {
      console.warn(
        "[security] Turnstile is not configured; continuing with rate limiting",
      );
      warnedMissingTurnstile = true;
    }
    return { ok: true, degraded: true };
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
