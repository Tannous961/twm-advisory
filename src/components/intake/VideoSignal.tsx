"use client";

import { useEffect, useRef, useState } from "react";

const MAX_MS = 90_000;

type Props = {
  onBlob: (blob: Blob | null) => void;
  labels: {
    record: string;
    stop: string;
    retake: string;
    camDenied: string;
  };
};

export function VideoSignal({ onBlob, labels }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const [ready, setReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function boot() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: { ideal: 1280 } },
          audio: true,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        mediaRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch(() => undefined);
        }
        setReady(true);
      } catch {
        setError(labels.camDenied);
        setReady(false);
      }
    }

    void boot();

    return () => {
      cancelled = true;
      if (timerRef.current) window.clearInterval(timerRef.current);
      recorderRef.current?.stop();
      mediaRef.current?.getTracks().forEach((t) => t.stop());
      mediaRef.current = null;
    };
  }, [labels.camDenied]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function start() {
    const stream = mediaRef.current;
    if (!stream) return;

    chunksRef.current = [];
    const mime = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")
      ? "video/webm;codecs=vp9,opus"
      : MediaRecorder.isTypeSupported("video/webm")
        ? "video/webm"
        : undefined;

    const recorder = mime
      ? new MediaRecorder(stream, { mimeType: mime })
      : new MediaRecorder(stream);

    recorderRef.current = recorder;
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: recorder.mimeType || "video/webm",
      });
      const url = URL.createObjectURL(blob);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      onBlob(blob);
      setRecording(false);
      if (timerRef.current) window.clearInterval(timerRef.current);
    };

    recorder.start(250);
    setRecording(true);
    setElapsed(0);
    setPreviewUrl(null);
    onBlob(null);

    const started = Date.now();
    timerRef.current = window.setInterval(() => {
      const ms = Date.now() - started;
      setElapsed(ms);
      if (ms >= MAX_MS) stop();
    }, 200);
  }

  function stop() {
    if (recorderRef.current?.state === "recording") {
      recorderRef.current.stop();
    }
  }

  function retake() {
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    onBlob(null);
    setElapsed(0);
    if (videoRef.current && mediaRef.current) {
      videoRef.current.srcObject = mediaRef.current;
      void videoRef.current.play().catch(() => undefined);
    }
  }

  const seconds = Math.min(90, Math.floor(elapsed / 1000));

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-panel">
      <div className="relative aspect-video bg-black">
        {previewUrl ? (
          <video
            src={previewUrl}
            className="size-full object-cover"
            controls
            playsInline
            aria-label={labels.retake}
          />
        ) : (
          <video
            ref={videoRef}
            className="size-full scale-x-[-1] object-cover"
            muted
            playsInline
            aria-label={labels.record}
          />
        )}
        {recording ? (
          <span
            className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 font-mono text-[11px] text-fg"
            role="status"
            aria-live="polite"
          >
            <span className="size-2 animate-pulse rounded-full bg-red-500" aria-hidden />
            {seconds}s / 90s
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-3 p-4">
        {error ? (
          <p role="alert" className="text-sm text-muted">
            {error}
          </p>
        ) : previewUrl ? (
          <button type="button" className="btn-secondary rounded-full px-5 py-2.5 text-sm" onClick={retake}>
            {labels.retake}
          </button>
        ) : recording ? (
          <button type="button" className="btn-primary rounded-full px-5 py-2.5 text-sm" onClick={stop}>
            {labels.stop}
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
            onClick={start}
            disabled={!ready}
            aria-disabled={!ready}
          >
            {labels.record}
          </button>
        )}
      </div>
    </div>
  );
}
