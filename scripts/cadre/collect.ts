import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

export const collectedItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  snippet: z.string(),
  publisher: z.string().optional(),
  publishedAt: z.string().optional(),
  query: z.string(),
  pillar: z.string(),
  intent: z.string(),
  collectedAt: z.string(),
});

export type CollectedItem = z.infer<typeof collectedItemSchema>;

export type SearchHit = {
  title: string;
  url: string;
  content: string;
  publishedDate?: string;
};

function todayStamp() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

async function searchTavily(query: string): Promise<SearchHit[]> {
  const key = process.env.TAVILY_API_KEY || process.env.WEB_SEARCH_API_KEY;
  if (!key) return [];

  const res = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: key,
      query,
      search_depth: "advanced",
      include_answer: false,
      max_results: 5,
    }),
  });

  if (!res.ok) {
    throw new Error(`Tavily search failed: ${res.status}`);
  }

  const json = (await res.json()) as {
    results?: Array<{
      title?: string;
      url?: string;
      content?: string;
      published_date?: string;
    }>;
  };

  return (json.results ?? [])
    .filter((r) => r.title && r.url && r.content)
    .map((r) => ({
      title: r.title!,
      url: r.url!,
      content: r.content!,
      publishedDate: r.published_date,
    }));
}

async function searchBrave(query: string): Promise<SearchHit[]> {
  const key = process.env.BRAVE_SEARCH_API_KEY;
  if (!key) return [];

  const url = new URL("https://api.search.brave.com/res/v1/web/search");
  url.searchParams.set("q", query);
  url.searchParams.set("count", "5");

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "X-Subscription-Token": key,
    },
  });

  if (!res.ok) {
    throw new Error(`Brave search failed: ${res.status}`);
  }

  const json = (await res.json()) as {
    web?: {
      results?: Array<{
        title?: string;
        url?: string;
        description?: string;
        age?: string;
      }>;
    };
  };

  return (json.web?.results ?? [])
    .filter((r) => r.title && r.url)
    .map((r) => ({
      title: r.title!,
      url: r.url!,
      content: r.description || "",
      publishedDate: r.age,
    }));
}

export async function collectForAngle(angle: {
  pillar: string;
  query: string;
  intent: string;
}): Promise<CollectedItem[]> {
  let hits = await searchTavily(angle.query);
  if (hits.length === 0) hits = await searchBrave(angle.query);

  const collectedAt = new Date().toISOString();
  return hits.map((hit, index) =>
    collectedItemSchema.parse({
      id: `${todayStamp()}-${slugify(hit.title)}-${index}`,
      title: hit.title,
      url: hit.url,
      snippet: hit.content.slice(0, 600),
      publisher: new URL(hit.url).hostname.replace(/^www\./, ""),
      publishedAt: hit.publishedDate,
      query: angle.query,
      pillar: angle.pillar,
      intent: angle.intent,
      collectedAt,
    }),
  );
}

export function writeCollection(
  items: CollectedItem[],
  outDir = path.join(process.cwd(), "content", "cadre-sources"),
) {
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${todayStamp()}-collection.json`);
  fs.writeFileSync(file, JSON.stringify({ collectedAt: new Date().toISOString(), items }, null, 2));
  return file;
}
