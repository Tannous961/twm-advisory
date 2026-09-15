import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";
import {
  parseCadrePost,
  type CadrePost,
} from "../../src/lib/cadre-schema";
import { VOICE_GUIDE } from "./config";
import type { RankedTopic } from "./rank";

function getClient() {
  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (openrouterKey) {
    return new OpenAI({
      apiKey: openrouterKey,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "https://www.twm.expert",
        "X-Title": "TWM Cadre Agent",
      },
    });
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (!openaiKey) {
    throw new Error("OPENROUTER_API_KEY or OPENAI_API_KEY is required to draft");
  }
  return new OpenAI({ apiKey: openaiKey });
}

function modelName() {
  return (
    process.env.CADRE_DRAFT_MODEL ||
    process.env.OPENROUTER_CHAT_MODEL ||
    process.env.OPENAI_CHAT_MODEL ||
    "openai/gpt-4o-mini"
  );
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function estimateReadingMinutes(paragraphs: string[]) {
  const words = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.min(12, Math.round(words / 180)));
}

const ALLOWED_INTENTS = new Set([
  "discover",
  "use_case",
  "has_agents",
  "strategy",
  "training",
]);

export async function draftCadreArticle(topic: RankedTopic): Promise<{
  post: CadrePost;
  reviewMarkdown: string;
}> {
  const client = getClient();
  const sourceBlock = topic.sources
    .map(
      (s, i) =>
        `${i + 1}. ${s.title}\nURL: ${s.url}\nPublisher: ${s.publisher ?? "n/a"}\nExcerpt: ${s.snippet}`,
    )
    .join("\n\n");

  const prompt = `${VOICE_GUIDE}

Sujet retenu:
- Pilier: ${topic.pillar}
- Titre signal: ${topic.title}
- Intent Cadre: ${topic.intent}
- Score: ${topic.score}
- Rationale: ${topic.rationale}

Sources:
${sourceBlock}

Produis UNIQUEMENT un JSON valide avec cette forme:
{
  "title": { "fr": "...", "en": "..." },
  "insight": { "fr": "...", "en": "..." },
  "verdict": { "fr": "...", "en": "..." },
  "body": {
    "fr": ["...", "...", "..."],
    "en": ["...", "...", "..."]
  },
  "reviewNotes": {
    "whyNow": { "fr": "...", "en": "..." },
    "triggers": ["..."],
    "sensitivePassages": ["..."]
  },
  "sources": [
    { "title": "...", "url": "https://...", "publisher": "...", "excerpt": "..." }
  ]
}

Contraintes:
- 3 à 5 paragraphes par langue
- insight = point principal
- verdict = conclusion actionnable
- ne pas inventer de chiffres absents des sources
- garder une voix humaine, dirigeant à dirigeant
`;

  const completion = await client.chat.completions.create({
    model: modelName(),
    temperature: 0.4,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Tu es le rédacteur éditorial de TWM Advisory. Tu écris des articles Cadre courts, sourcés et humains.",
      },
      { role: "user", content: prompt },
    ],
  });

  const raw = completion.choices[0]?.message?.content;
  if (!raw) throw new Error("Empty draft response from model");

  const parsed = JSON.parse(raw) as {
    title: CadrePost["title"];
    insight: CadrePost["insight"];
    verdict: CadrePost["verdict"];
    body: CadrePost["body"];
    reviewNotes?: CadrePost["reviewNotes"];
    sources?: CadrePost["sources"];
  };

  const date = today();
  const intent = ALLOWED_INTENTS.has(topic.intent)
    ? (topic.intent as CadrePost["intent"])
    : "strategy";

  const post = parseCadrePost({
    slug: slugify(parsed.title.fr),
    date,
    updatedAt: date,
    status: "review",
    author: "Tannous Mekari",
    intent,
    readingMinutes: estimateReadingMinutes(parsed.body.fr),
    title: parsed.title,
    insight: parsed.insight,
    verdict: parsed.verdict,
    body: parsed.body,
    sources:
      parsed.sources ??
      topic.sources.map((s) => ({
        title: s.title,
        url: s.url,
        publisher: s.publisher,
        excerpt: s.snippet,
      })),
    reviewNotes: parsed.reviewNotes,
  });

  const reviewMarkdown = `# Revue Cadre — ${post.title.fr}

- Date: ${post.date}
- Slug: ${post.slug}
- Pilier: ${topic.pillar}
- Intent: ${post.intent}
- Score: ${topic.score}

## Pourquoi maintenant
${post.reviewNotes?.whyNow?.fr ?? "n/a"}

## Déclencheurs
${(post.reviewNotes?.triggers ?? []).map((t) => `- ${t}`).join("\n") || "- n/a"}

## Passages sensibles
${(post.reviewNotes?.sensitivePassages ?? []).map((t) => `- ${t}`).join("\n") || "- n/a"}

## Insight
${post.insight.fr}

## Verdict
${post.verdict.fr}

## Corps FR
${post.body.fr.join("\n\n")}

## Sources
${post.sources.map((s) => `- [${s.title}](${s.url})`).join("\n")}
`;

  return { post, reviewMarkdown };
}

export function writeDraftArtifacts(
  post: CadrePost,
  reviewMarkdown: string,
  topic: RankedTopic,
) {
  const draftsDir = path.join(process.cwd(), "content", "cadre-drafts");
  const sourcesDir = path.join(process.cwd(), "content", "cadre-sources");
  fs.mkdirSync(draftsDir, { recursive: true });
  fs.mkdirSync(sourcesDir, { recursive: true });

  const base = `${post.date}-${post.slug}`;
  const draftPath = path.join(draftsDir, `${base}.json`);
  const reviewPath = path.join(draftsDir, `${base}.review.md`);
  const sourcesPath = path.join(sourcesDir, `${base}.sources.json`);

  fs.writeFileSync(draftPath, `${JSON.stringify(post, null, 2)}\n`);
  fs.writeFileSync(reviewPath, reviewMarkdown);
  fs.writeFileSync(
    sourcesPath,
    `${JSON.stringify(
      {
        slug: post.slug,
        date: post.date,
        pillar: topic.pillar,
        score: topic.score,
        rationale: topic.rationale,
        sources: topic.sources,
      },
      null,
      2,
    )}\n`,
  );

  return { draftPath, reviewPath, sourcesPath };
}
