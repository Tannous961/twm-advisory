export type IntentId =
  | "discover"
  | "use_case"
  | "has_agents"
  | "strategy"
  | "training";

export type OrgSize = "solo" | "small" | "mid" | "large";
export type Urgency = "explore" | "quarter" | "now";
export type DataConstraint = "open" | "sensitive" | "strict";

export type EntryOffer =
  | "audit"
  | "deploy"
  | "certify"
  | "advisory"
  | "training";

export type IntakeAnswers = {
  orgSize: OrgSize;
  urgency: Urgency;
  dataConstraint: DataConstraint;
};

export type MaturityResult = {
  score: number;
  entryOffer: EntryOffer;
  litPath: EntryOffer[];
  feedbackKeys: string[];
};

export const INTENT_TO_OFFER: Record<IntentId, EntryOffer> = {
  discover: "audit",
  use_case: "deploy",
  has_agents: "certify",
  strategy: "advisory",
  training: "training",
};

export const OFFER_ORDER: EntryOffer[] = [
  "audit",
  "deploy",
  "certify",
  "advisory",
  "training",
];

const SIZE_SCORE: Record<OrgSize, number> = {
  solo: 12,
  small: 22,
  mid: 32,
  large: 40,
};

const URGENCY_SCORE: Record<Urgency, number> = {
  explore: 8,
  quarter: 18,
  now: 28,
};

const DATA_SCORE: Record<DataConstraint, number> = {
  open: 10,
  sensitive: 18,
  strict: 24,
};

const INTENT_SCORE: Record<IntentId, number> = {
  discover: 10,
  use_case: 22,
  has_agents: 30,
  strategy: 26,
  training: 16,
};

export type NeedProfile = "explore" | "frame" | "execute";

export function getNeedProfile(score: number): NeedProfile {
  if (score >= 75) return "execute";
  if (score >= 55) return "frame";
  return "explore";
}

export function computeMaturity(
  intent: IntentId,
  answers: Partial<IntakeAnswers>,
): MaturityResult {
  const entryOffer = INTENT_TO_OFFER[intent];
  let score = INTENT_SCORE[intent];
  const feedbackKeys: string[] = [`intent.${intent}`];

  if (answers.orgSize) {
    score += SIZE_SCORE[answers.orgSize];
    feedbackKeys.push(`size.${answers.orgSize}`);
  }
  if (answers.urgency) {
    score += URGENCY_SCORE[answers.urgency];
    feedbackKeys.push(`urgency.${answers.urgency}`);
  }
  if (answers.dataConstraint) {
    score += DATA_SCORE[answers.dataConstraint];
    feedbackKeys.push(`data.${answers.dataConstraint}`);
  }

  score = Math.max(0, Math.min(100, score));

  const entryIndex = OFFER_ORDER.indexOf(entryOffer);
  const litPath = OFFER_ORDER.slice(0, Math.max(1, entryIndex + 1));

  return { score, entryOffer, litPath, feedbackKeys };
}
