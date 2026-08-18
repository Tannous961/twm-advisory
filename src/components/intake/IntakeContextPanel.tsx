"use client";

import type {
  DataConstraint,
  EntryOffer,
  IntentId,
  OrgSize,
  Urgency,
} from "@/lib/intake";
import { PathMap } from "./PathMap";
import { ScoreMeter } from "./ScoreMeter";

type OfferLabels = Record<EntryOffer, string>;

export function IntakeContextPanel({
  intent,
  intentLabel,
  orgSize,
  orgSizeLabel,
  urgency,
  urgencyLabel,
  dataConstraint,
  dataConstraintLabel,
  score,
  scoreLabel,
  entryOffer,
  offerLabels,
  offerDescription,
  feedbackItems,
  feedbackLabel,
  contextTitle,
  situationLabel,
  contextAnswersLabel,
  entryLabel,
  pathLabel,
  pathEntryHint,
  orientationPending,
  contextPending,
  compact = false,
}: {
  intent: IntentId | null;
  intentLabel: string | null;
  orgSize: OrgSize | null;
  orgSizeLabel: string | null;
  urgency: Urgency | null;
  urgencyLabel: string | null;
  dataConstraint: DataConstraint | null;
  dataConstraintLabel: string | null;
  score: number;
  scoreLabel: string;
  entryOffer: EntryOffer | null;
  offerLabels: OfferLabels;
  offerDescription: string | null;
  feedbackItems: string[];
  feedbackLabel: string;
  contextTitle: string;
  situationLabel: string;
  contextAnswersLabel: string;
  entryLabel: string;
  pathLabel: string;
  pathEntryHint: string;
  orientationPending: string;
  contextPending: string;
  compact?: boolean;
}) {
  const hasContext = orgSize || urgency || dataConstraint;
  const contextComplete = orgSize && urgency && dataConstraint;

  return (
    <div
      className={`glass-card rounded-3xl ${compact ? "p-4" : "p-5 lg:sticky lg:top-24"}`}
    >
      <p className="mb-4 type-label tracking-[0.12em] text-accent">
        {contextTitle}
      </p>

      {!intent ? (
        <p className="type-body-sm text-muted">{orientationPending}</p>
      ) : (
        <>
          <div className="mb-4">
            <p className="mb-2 type-caption text-muted-3">{situationLabel}</p>
            <p className="type-body-sm font-medium text-fg">{intentLabel}</p>
          </div>

          {entryOffer ? (
            <div className="mb-4 border-t border-white/8 pt-4">
              <p className="mb-2 type-caption text-muted-3">{entryLabel}</p>
              <p className="type-h3 text-fg">{offerLabels[entryOffer]}</p>
              {offerDescription ? (
                <p className="mt-2 type-body-sm text-muted">
                  {offerDescription}
                </p>
              ) : null}
            </div>
          ) : null}

          {hasContext ? (
            <div className="mb-4 border-t border-white/8 pt-4">
              <p className="mb-2 type-caption text-muted-3">
                {contextAnswersLabel}
              </p>
              <ul className="flex flex-wrap gap-2">
                {orgSize && orgSizeLabel ? (
                  <li className="rounded-full border border-white/10 bg-panel px-3 py-1 type-caption text-muted">
                    {orgSizeLabel}
                  </li>
                ) : null}
                {urgency && urgencyLabel ? (
                  <li className="rounded-full border border-white/10 bg-panel px-3 py-1 type-caption text-muted">
                    {urgencyLabel}
                  </li>
                ) : null}
                {dataConstraint && dataConstraintLabel ? (
                  <li className="rounded-full border border-white/10 bg-panel px-3 py-1 type-caption text-muted">
                    {dataConstraintLabel}
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}

          {contextComplete ? (
            <div className="mb-4 border-t border-white/8 pt-4">
              <ScoreMeter score={score} label={scoreLabel} />
            </div>
          ) : null}

          {contextComplete && entryOffer ? (
            <div className="border-t border-white/8 pt-4">
              <PathMap
                entryOffer={entryOffer}
                labels={offerLabels}
                pathLabel={pathLabel}
                pathEntryHint={pathEntryHint}
              />
            </div>
          ) : null}

          {feedbackItems.length > 0 ? (
            <div
              className={`${contextComplete || hasContext ? "mt-5 border-t border-white/8 pt-5" : "border-t border-white/8 pt-4"}`}
            >
              <p className="mb-3 type-caption text-muted-3">{feedbackLabel}</p>
              <ul className="space-y-2">
                {feedbackItems.map((item, index) => (
                  <li
                    key={`${index}-${item.slice(0, 24)}`}
                    className="type-body-sm text-muted before:mr-2 before:text-accent before:content-['·']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {!hasContext && intent ? (
            <p className="mt-4 type-body-sm text-muted">{contextPending}</p>
          ) : null}
        </>
      )}
    </div>
  );
}
