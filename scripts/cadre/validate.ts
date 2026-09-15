import fs from "node:fs";
import path from "node:path";
import {
  safeParseCadrePost,
  type CadrePost,
} from "../../src/lib/cadre-schema";

const GENERIC_FR = [
  "dans un monde en constante évolution",
  "il est crucial de",
  "il est essentiel de",
  "révolutionner",
  "solution innovante",
  "à l'ère du digital",
  "leverager",
  "synergie",
];

const GENERIC_EN = [
  "in today's fast-paced world",
  "it is crucial to",
  "game-changer",
  "leverage synergies",
  "cutting-edge solution",
  "unlock unprecedented",
];

export type ValidationResult = {
  ok: boolean;
  errors: string[];
  warnings: string[];
  post?: CadrePost;
};

function loadPublishedSlugs(
  dir = path.join(process.cwd(), "content", "cadre"),
) {
  if (!fs.existsSync(dir)) return new Set<string>();
  return new Set(
    fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, "")),
  );
}

function containsGeneric(text: string, needles: string[]) {
  const lower = text.toLowerCase();
  return needles.filter((n) => lower.includes(n));
}

export function validateCadreDraft(
  input: unknown,
  options: { allowExistingSlug?: boolean } = {},
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const parsed = safeParseCadrePost(input);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`,
      ),
      warnings,
    };
  }

  const post = parsed.data;

  if (!options.allowExistingSlug && loadPublishedSlugs().has(post.slug)) {
    errors.push(`slug already published: ${post.slug}`);
  }

  if (post.status === "review" && post.sources.length < 1) {
    errors.push("at least one source is required for a review draft");
  }

  if (post.body.fr.length !== post.body.en.length) {
    warnings.push("FR/EN body paragraph counts differ");
  }

  const frText = [
    post.title.fr,
    post.insight.fr,
    post.verdict.fr,
    ...post.body.fr,
  ].join(" ");
  const enText = [
    post.title.en,
    post.insight.en,
    post.verdict.en,
    ...post.body.en,
  ].join(" ");

  const frGeneric = containsGeneric(frText, GENERIC_FR);
  const enGeneric = containsGeneric(enText, GENERIC_EN);
  if (frGeneric.length) {
    errors.push(`generic FR phrasing detected: ${frGeneric.join(", ")}`);
  }
  if (enGeneric.length) {
    errors.push(`generic EN phrasing detected: ${enGeneric.join(", ")}`);
  }

  if (post.insight.fr.length < 40 || post.verdict.fr.length < 40) {
    errors.push("insight/verdict FR too short for Cadre format");
  }

  const numberMentions = (frText.match(/\d+([.,]\d+)?%?/g) ?? []).length;
  if (numberMentions > 0 && post.sources.length === 0) {
    errors.push("numeric claims require sources");
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    post,
  };
}

export function assertValidDraft(input: unknown): CadrePost {
  const result = validateCadreDraft(input);
  if (!result.ok || !result.post) {
    throw new Error(`Invalid Cadre draft:\n- ${result.errors.join("\n- ")}`);
  }
  return result.post;
}
