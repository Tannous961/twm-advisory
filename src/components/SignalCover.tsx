"use client";

import type { IntentId } from "@/lib/intake";

const coverConfig: Record<
  IntentId,
  { code: string; axis: string; rings: number }
> = {
  discover: { code: "AUDIT", axis: "01—05", rings: 3 },
  use_case: { code: "BUILD", axis: "02—05", rings: 2 },
  has_agents: { code: "VERIFY", axis: "03—05", rings: 4 },
  strategy: { code: "DIRECT", axis: "04—05", rings: 1 },
  training: { code: "JUDGE", axis: "05—05", rings: 5 },
};

export function SignalCover({
  intent,
  index,
  compact = false,
}: {
  intent: IntentId;
  index: number;
  compact?: boolean;
}) {
  const config = coverConfig[intent];

  return (
    <div
      className={`signal-cover relative isolate overflow-hidden border border-white/8 bg-panel ${
        compact
          ? "aspect-[16/9] rounded-2xl"
          : "aspect-[16/7] rounded-[2rem]"
      }`}
      aria-hidden
    >
      <div className="absolute inset-0 signal-cover-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgb(var(--accent-rgb)/0.25),transparent_35%)]" />

      <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.18em] text-muted-3 uppercase sm:top-7 sm:left-7">
        TWM / SIGNAL
      </div>
      <div className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.18em] text-accent sm:top-7 sm:right-7">
        {config.axis}
      </div>

      <div className="absolute top-1/2 left-[8%] -translate-y-1/2">
        <p className="font-display text-[clamp(2rem,7vw,5.5rem)] leading-none tracking-[-0.05em] text-fg/90">
          {config.code}
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-muted-3 uppercase">
          signal {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="absolute top-1/2 right-[11%] aspect-square w-[34%] max-w-44 -translate-y-1/2">
        {Array.from({ length: config.rings }).map((_, ring) => (
          <span
            key={ring}
            className="absolute rounded-full border border-accent/30"
            style={{
              inset: `${ring * 9}%`,
              opacity: 1 - ring * 0.12,
            }}
          />
        ))}
        <span className="absolute inset-[42%] rounded-full bg-accent shadow-[0_0_32px_rgb(var(--accent-rgb)/0.7)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
    </div>
  );
}
