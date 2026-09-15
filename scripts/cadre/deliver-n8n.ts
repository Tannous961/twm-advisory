import fs from "node:fs";
import type { CadrePost } from "../../src/lib/cadre-schema";
import type { RankedTopic } from "./rank";

export type DeliverPayload = {
  event: "cadre.draft.ready";
  generatedAt: string;
  folderName: string;
  post: CadrePost;
  reviewMarkdown: string;
  frDocument: string;
  enDocument: string;
  topic: {
    pillar: string;
    score: number;
    rationale: string;
    title: string;
  };
  sources: RankedTopic["sources"];
};

function renderLanguageDoc(post: CadrePost, lang: "fr" | "en") {
  return [
    `# ${post.title[lang]}`,
    "",
    `Date: ${post.date}`,
    `Intent: ${post.intent}`,
    `Reading: ${post.readingMinutes} min`,
    "",
    "## Insight",
    post.insight[lang],
    "",
    "## Verdict",
    post.verdict[lang],
    "",
    "## Body",
    ...post.body[lang].flatMap((paragraph) => [paragraph, ""]),
    "## Sources",
    ...post.sources.map((source) => `- ${source.title}: ${source.url}`),
    "",
  ].join("\n");
}

export function buildDeliverPayload(args: {
  post: CadrePost;
  reviewMarkdown: string;
  topic: RankedTopic;
}): DeliverPayload {
  return {
    event: "cadre.draft.ready",
    generatedAt: new Date().toISOString(),
    folderName: `TWM / Cadre / Brouillons / ${args.post.date}-${args.post.slug}`,
    post: args.post,
    reviewMarkdown: args.reviewMarkdown,
    frDocument: renderLanguageDoc(args.post, "fr"),
    enDocument: renderLanguageDoc(args.post, "en"),
    topic: {
      pillar: args.topic.pillar,
      score: args.topic.score,
      rationale: args.topic.rationale,
      title: args.topic.title,
    },
    sources: args.topic.sources,
  };
}

export async function deliverToN8n(payload: DeliverPayload) {
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) {
    throw new Error("N8N_WEBHOOK_URL is required to deliver drafts");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (secret) {
    headers["X-TWM-Webhook-Secret"] = secret;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `n8n webhook failed (${res.status}): ${body.slice(0, 400)}`,
    );
  }

  return {
    status: res.status,
    body: await res.text().catch(() => ""),
  };
}

export function writeLocalDeliveryReceipt(
  payload: DeliverPayload,
  filePath: string,
) {
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
}
