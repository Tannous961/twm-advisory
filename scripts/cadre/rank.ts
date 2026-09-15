import fs from "node:fs";
import path from "node:path";
import { CADRE_PILLARS } from "./config";
import type { CollectedItem } from "./collect";

export type RankedTopic = {
  score: number;
  pillar: string;
  intent: string;
  title: string;
  rationale: string;
  sources: CollectedItem[];
};

function tokenize(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function overlapScore(text: string, keywords: readonly string[]) {
  const tokens = new Set(tokenize(text));
  let score = 0;
  for (const keyword of keywords) {
    const parts = tokenize(keyword);
    if (parts.every((part) => tokens.has(part))) score += 2;
    else if (parts.some((part) => tokens.has(part))) score += 1;
  }
  return score;
}

export function loadPublishedTitles(
  dir = path.join(process.cwd(), "content", "cadre"),
) {
  if (!fs.existsSync(dir)) return [] as string[];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as {
        title?: { fr?: string; en?: string };
      };
      return `${raw.title?.fr ?? ""} ${raw.title?.en ?? ""}`;
    });
}

export function rankTopics(
  items: CollectedItem[],
  publishedTitles: string[] = loadPublishedTitles(),
): RankedTopic[] {
  const byPillar = new Map<string, CollectedItem[]>();
  for (const item of items) {
    const list = byPillar.get(item.pillar) ?? [];
    list.push(item);
    byPillar.set(item.pillar, list);
  }

  const ranked: RankedTopic[] = [];

  for (const [pillarId, pillarItems] of byPillar) {
    const pillar = CADRE_PILLARS.find((p) => p.id === pillarId);
    const keywords = pillar?.keywords ?? [];
    const blob = pillarItems.map((i) => `${i.title} ${i.snippet}`).join(" ");
    const relevance = overlapScore(blob, keywords);
    const freshness = pillarItems.some((i) => i.publishedAt) ? 2 : 1;
    const sourceQuality = Math.min(pillarItems.length, 4);
    const noveltyPenalty = publishedTitles.some((title) => {
      const a = new Set(tokenize(title));
      const b = tokenize(pillarItems[0]?.title ?? "");
      const shared = b.filter((t) => a.has(t)).length;
      return shared >= 3;
    })
      ? -6
      : 0;

    const score = relevance + freshness + sourceQuality + noveltyPenalty;
    ranked.push({
      score,
      pillar: pillarId,
      intent: pillarItems[0]?.intent ?? "strategy",
      title: pillarItems[0]?.title ?? pillar?.fr ?? pillarId,
      rationale: `relevance=${relevance}, freshness=${freshness}, sources=${sourceQuality}, novelty=${noveltyPenalty}`,
      sources: pillarItems.slice(0, 5),
    });
  }

  return ranked.sort((a, b) => b.score - a.score);
}

export function pickBestTopic(
  items: CollectedItem[],
  minScore = 6,
): RankedTopic | null {
  const ranked = rankTopics(items);
  const best = ranked[0];
  if (!best || best.score < minScore) return null;
  return best;
}
