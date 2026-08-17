import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

const SESSION_TTL_SECONDS = 30 * 60;

type IntakeSessionPayload = {
  sessionId: string;
  expiresAt: number;
};

function getSecret(): string {
  const secret =
    process.env.INTAKE_SESSION_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error(
      "Missing INTAKE_SESSION_SECRET or SUPABASE_SERVICE_ROLE_KEY",
    );
  }

  return secret;
}

function sign(encodedPayload: string): string {
  return createHmac("sha256", getSecret())
    .update(encodedPayload)
    .digest("base64url");
}

export function createIntakeSession(
  now = Date.now(),
): { token: string; sessionId: string; expiresAt: string } {
  const payload: IntakeSessionPayload = {
    sessionId: randomUUID(),
    expiresAt: Math.floor(now / 1000) + SESSION_TTL_SECONDS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );

  return {
    token: `${encodedPayload}.${sign(encodedPayload)}`,
    sessionId: payload.sessionId,
    expiresAt: new Date(payload.expiresAt * 1000).toISOString(),
  };
}

export function verifyIntakeSession(
  token: string | null,
  now = Date.now(),
): IntakeSessionPayload | null {
  if (!token) return null;

  const [encodedPayload, signature, extra] = token.split(".");
  if (!encodedPayload || !signature || extra) return null;

  const expected = Buffer.from(sign(encodedPayload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as Partial<IntakeSessionPayload>;

    if (
      typeof payload.sessionId !== "string" ||
      !/^[0-9a-f-]{36}$/i.test(payload.sessionId) ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt <= Math.floor(now / 1000)
    ) {
      return null;
    }

    return payload as IntakeSessionPayload;
  } catch {
    return null;
  }
}

export function getBearerToken(request: Request): string | null {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return null;
  return authorization.slice(7).trim() || null;
}
