"use client";

import type { EntryOffer } from "@/lib/intake";
import { OFFER_ORDER } from "@/lib/intake";

type NodeLabel = Record<EntryOffer, string>;

export function PathMap({
  entryOffer,
  labels,
  pathLabel,
  pathEntryHint,
  recommendedLabel,
}: {
  entryOffer: EntryOffer | null;
  labels: NodeLabel;
  pathLabel: string;
  pathEntryHint: string;
  recommendedLabel: string;
}) {
  if (!entryOffer) return null;

  return (
    <div className="intake-path" role="region" aria-label={pathLabel}>
      <p className="mb-1 type-caption text-muted-3">{pathLabel}</p>
      <p className="mb-4 type-body-sm text-muted">{pathEntryHint}</p>
      <ol className="space-y-2">
        {OFFER_ORDER.map((offer) => {
          const isEntry = entryOffer === offer;
          return (
            <li
              key={offer}
              className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 ${
                isEntry
                  ? "border-accent/45 bg-accent/10"
                  : "border-white/8 bg-panel/40"
              }`}
            >
              <span
                className={`type-body-sm ${
                  isEntry ? "font-medium text-fg" : "text-muted-3"
                }`}
              >
                {labels[offer]}
              </span>
              {isEntry ? (
                <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 type-caption text-ink">
                  {recommendedLabel}
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
