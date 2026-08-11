import { NextResponse } from "next/server";
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

    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large" }, { status: 413 });
    }

    const ext = file.type.includes("mp4")
      ? "mp4"
      : file.type.includes("quicktime")
        ? "mov"
        : "webm";
    const path = `${crypto.randomUUID()}.${ext}`;
    const bytes = Buffer.from(await file.arrayBuffer());
    const supabase = getSupabaseAdmin();

    const { error } = await supabase.storage
      .from("intake-videos")
      .upload(path, bytes, {
        contentType: file.type || "video/webm",
        upsert: false,
      });

    if (error) {
      console.error("[intake/upload]", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ path });
  } catch (err) {
    console.error("[intake/upload]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
