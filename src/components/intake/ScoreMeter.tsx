"use client";

import type { NeedProfile } from "@/lib/intake";

const LEVELS: NeedProfile[] = ["explore", "frame", "execute"];

export function ScoreMeter({
  level,
  label,
  hint,
  title,
  body,
  levelLabels,
}: {
  level: NeedProfile;
  label: string;
  hint: string;
  title: string;
  body: string;
  levelLabels: Record<NeedProfile, string>;
}) {
  return (
    <div className="intake-score" aria-live="polite">
      <p className="mb-2 type-caption text-muted-3">{label}</p>
      <p className="type-h3 text-fg">{title}</p>
      <p className="mt-2 type-body-sm text-muted">{body}</p>
      <ol className="mt-4 grid grid-cols-3 gap-1.5" aria-label={label}>
        {LEVELS.map((item) => {
          const active = item === level;
          return (
            <li
              key={item}
              className={`rounded-xl border px-2 py-2 text-center type-caption leading-tight ${
                active
                  ? "border-accent/50 bg-accent/10 text-accent-soft"
                  : "border-white/10 text-muted-3"
              }`}
              aria-current={active ? "true" : undefined}
            >
              {levelLabels[item]}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 type-caption text-muted-3">{hint}</p>
    </div>
  );
}
