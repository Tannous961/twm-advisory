"use client";

import type { EntryOffer } from "@/lib/intake";
import { OFFER_ORDER } from "@/lib/intake";

type NodeLabel = Record<EntryOffer, string>;

export function PathMap({
  entryOffer,
  labels,
  pathLabel,
  pathEntryHint,
}: {
  entryOffer: EntryOffer | null;
  labels: NodeLabel;
  pathLabel: string;
  pathEntryHint: string;
}) {
  if (!entryOffer) return null;

  const entryIndex = OFFER_ORDER.indexOf(entryOffer);

  return (
    <div className="intake-path" role="region" aria-label={pathLabel}>
      <p className="mb-1 type-caption text-muted-3">{pathLabel}</p>
      <p className="mb-4 type-body-sm text-muted">{pathEntryHint}</p>
      <ol className="relative flex flex-col gap-0 sm:flex-row sm:items-stretch sm:justify-between sm:gap-2">
        {OFFER_ORDER.map((offer, i) => {
          const isEntry = entryOffer === offer;
          const isBefore = i < entryIndex;
          return (
            <li
              key={offer}
              className="relative flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center"
            >
              {i < OFFER_ORDER.length - 1 ? (
                <span
                  aria-hidden
                  className={`intake-path-line absolute top-3 left-3 h-[calc(100%+0.25rem)] w-px sm:top-3 sm:left-[50%] sm:h-px sm:w-full sm:translate-x-0 ${
                    isBefore || isEntry ? "bg-accent/35" : "bg-white/10"
                  }`}
                />
              ) : null}
              <span
                className={`type-caption relative z-1 mt-0.5 flex shrink-0 items-center justify-center rounded-full border transition duration-500 ${
                  isEntry
                    ? "size-8 border-accent bg-accent text-ink shadow-[0_0_24px_rgb(var(--accent-rgb)/0.45)]"
                    : isBefore
                      ? "size-6 border-accent/40 bg-accent/10 text-accent-soft"
                      : "size-6 border-white/15 bg-panel text-muted-3"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`pt-0.5 type-body-sm leading-snug sm:pt-2 ${
                  isEntry
                    ? "font-medium text-fg"
                    : isBefore
                      ? "text-muted-3"
                      : "text-muted-3/70"
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
