"use client";

import { useEffect, useState } from "react";

export function ScoreMeter({
  score,
  label,
}: {
  score: number;
  label: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const from = display;
    const to = score;
    const start = performance.now();
    const duration = 420;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animate from last painted value
  }, [score]);

  return (
    <div className="intake-score" aria-live="polite">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="type-caption text-muted-3">
          {label}
        </span>
        <span className="font-display text-3xl leading-none text-accent tabular-nums">
          {display}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${Math.max(4, display)}%` }}
        />
      </div>
    </div>
  );
}
