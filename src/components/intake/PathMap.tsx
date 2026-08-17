"use client";

import type { EntryOffer } from "@/lib/intake";
import { OFFER_ORDER } from "@/lib/intake";

type NodeLabel = Record<EntryOffer, string>;

export function PathMap({
  litPath,
  entryOffer,
  labels,
  pathLabel,
}: {
  litPath: EntryOffer[];
  entryOffer: EntryOffer | null;
  labels: NodeLabel;
  pathLabel: string;
}) {
  const lit = new Set(litPath);

  return (
    <div className="intake-path" role="region" aria-label={pathLabel}>
      <p className="mb-4 type-caption text-muted-3">
        {pathLabel}
      </p>
      <ol className="relative flex flex-col gap-0 sm:flex-row sm:items-stretch sm:justify-between sm:gap-2">
        {OFFER_ORDER.map((offer, i) => {
          const active = lit.has(offer);
          const isEntry = entryOffer === offer;
          return (
            <li
              key={offer}
              className="relative flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center"
            >
              {i < OFFER_ORDER.length - 1 ? (
                <span
                  aria-hidden
                  className={`intake-path-line absolute top-3 left-3 h-[calc(100%+0.25rem)] w-px sm:top-3 sm:left-[50%] sm:h-px sm:w-full sm:translate-x-0 ${
                    active && lit.has(OFFER_ORDER[i + 1])
                      ? "bg-accent/70"
                      : "bg-white/10"
                  }`}
                />
              ) : null}
              <span
                className={`type-caption relative z-1 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border transition duration-500 ${
                  isEntry
                    ? "border-accent bg-accent text-ink shadow-[0_0_24px_rgb(var(--accent-rgb)/0.45)]"
                    : active
                      ? "border-accent/80 bg-accent/20 text-accent-soft"
                      : "border-white/15 bg-panel text-muted-3"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`pt-0.5 type-body-sm leading-snug sm:pt-2 ${
                  isEntry
                    ? "font-medium text-fg"
                    : active
                      ? "text-muted"
                      : "text-muted-3"
                }`}
              >
                {labels[offer]}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
