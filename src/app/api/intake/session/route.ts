import { NextResponse } from "next/server";
import { z } from "zod";
import { createIntakeSession } from "@/lib/security/intake-session";
import {
  enforceRateLimit,
  verifyTurnstile,
} from "@/lib/security/request-protection";
import { getSupabaseAdmin, hasSupabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

const bodySchema = z.object({
  turnstileToken: z.string().min(1).max(4096).nullable(),
});

export async function POST(request: Request) {
  if (!hasSupabaseAdmin()) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 },
    );
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const rateLimit = await enforceRateLimit(supabase, request, {
    scope: "intake-session",
    maxRequests: 5,
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
    parsed.data.turnstileToken,
    "intake",
  );
  if (!turnstile.ok) {
    return NextResponse.json(
      { error: turnstile.error },
      { status: turnstile.status },
    );
  }

  return NextResponse.json(createIntakeSession());
}
