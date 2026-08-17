import { NextResponse } from "next/server";
import {
  getBearerToken,
  verifyIntakeSession,
} from "@/lib/security/intake-session";
import { enforceRateLimit } from "@/lib/security/request-protection";
import { detectSupportedVideo } from "@/lib/security/video-validation";
import { getSupabaseAdmin, hasSupabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    if (!hasSupabaseAdmin()) {
      return NextResponse.json(
        { error: "Supabase is not configured" },
        { status: 503 },
      );
    }

    const session = verifyIntakeSession(getBearerToken(request));
    if (!session) {
      return NextResponse.json(
        { error: "Invalid or expired intake session" },
        { status: 401 },
      );
    }

    const supabase = getSupabaseAdmin();
    const rateLimit = await enforceRateLimit(supabase, request, {
      scope: `intake-upload:${session.sessionId}`,
      maxRequests: 3,
      windowSeconds: 30 * 60,
    });
    if (!rateLimit.ok) {
      return NextResponse.json(
        { error: rateLimit.error },
        { status: rateLimit.status },
      );
    }

    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large" }, { status: 413 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const detected = detectSupportedVideo(bytes);
    if (!detected) {
      return NextResponse.json(
        { error: "Unsupported or invalid video file" },
        { status: 415 },
      );
    }

    const path = `${session.sessionId}/${crypto.randomUUID()}.${detected.extension}`;

    const { error } = await supabase.storage
      .from("intake-videos")
      .upload(path, bytes, {
        contentType: detected.mimeType,
        upsert: false,
      });

    if (error) {
      console.error("[intake/upload]", {
        code: "storage_upload_failed",
        message: error.message,
      });
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    return NextResponse.json({ path });
  } catch (err) {
    console.error("[intake/upload]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
