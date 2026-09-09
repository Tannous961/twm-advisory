import { SEED_ANGLES } from "./config";
import { collectForAngle, writeCollection } from "./collect";
import { pickBestTopic } from "./rank";
import { draftCadreArticle, writeDraftArtifacts } from "./draft";
import { validateCadreDraft } from "./validate";
import {
  buildDeliverPayload,
  deliverToN8n,
  writeLocalDeliveryReceipt,
} from "./deliver-n8n";
import type { CadrePost } from "../../src/lib/cadre-schema";
import type { RankedTopic } from "./rank";

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const skipDeliver = process.argv.includes("--skip-deliver") || dryRun;

  console.log("[cadre] collecting sources…");
  const collected = [];
  for (const angle of SEED_ANGLES) {
    try {
      const items = await collectForAngle(angle);
      collected.push(...items);
      console.log(
        `[cadre] ${angle.pillar}: ${items.length} hit(s) for “${angle.query}”`,
      );
    } catch (error) {
      console.warn(
        `[cadre] collect failed for ${angle.pillar}:`,
        error instanceof Error ? error.message : error,
      );
    }
  }

  if (collected.length === 0) {
    if (dryRun) {
      console.log(
        "[cadre] dry-run without search keys — writing fixture topic instead",
      );
      runFixtureDryRun();
      return;
    }
    throw new Error(
      "No sources collected. Set TAVILY_API_KEY / WEB_SEARCH_API_KEY or BRAVE_SEARCH_API_KEY.",
    );
  }

  const collectionPath = writeCollection(collected);
  console.log(`[cadre] collection saved: ${collectionPath}`);

  const topic = pickBestTopic(collected);
  if (!topic) {
    console.log(
      "[cadre] no topic passed the quality threshold — skipping draft",
    );
    process.exitCode = 0;
    return;
  }

  console.log(
    `[cadre] selected topic (${topic.score}): ${topic.title} [${topic.pillar}]`,
  );

  const { post, reviewMarkdown } = await draftCadreArticle(topic);
  const validation = validateCadreDraft(post);
  if (!validation.ok) {
    throw new Error(
      `Draft failed validation:\n- ${validation.errors.join("\n- ")}`,
    );
  }
  for (const warning of validation.warnings) {
    console.warn(`[cadre] warning: ${warning}`);
  }

  const artifacts = writeDraftArtifacts(post, reviewMarkdown, topic);
  console.log(`[cadre] draft: ${artifacts.draftPath}`);
  console.log(`[cadre] review: ${artifacts.reviewPath}`);
  console.log(`[cadre] sources: ${artifacts.sourcesPath}`);

  const payload = buildDeliverPayload({ post, reviewMarkdown, topic });
  const receiptPath = artifacts.draftPath.replace(/\.json$/, ".delivery.json");
  writeLocalDeliveryReceipt(payload, receiptPath);

  if (skipDeliver) {
    console.log("[cadre] delivery skipped (--dry-run / --skip-deliver)");
    console.log(`[cadre] receipt: ${receiptPath}`);
    return;
  }

  const delivery = await deliverToN8n(payload);
  console.log(`[cadre] delivered to n8n (${delivery.status})`);
}

function runFixtureDryRun() {
  const topic: RankedTopic = {
    score: 8,
    pillar: "economic_performance",
    intent: "strategy",
    title: "Fixture: temps libéré et marge",
    rationale: "dry-run fixture",
    sources: [
      {
        id: "fixture-1",
        title: "Fixture source — measuring AI productivity",
        url: "https://example.com/ai-productivity",
        snippet:
          "Freed time only becomes margin when ownership and reuse of capacity are explicit.",
        publisher: "example.com",
        publishedAt: "2026-09-01",
        query: "fixture",
        pillar: "economic_performance",
        intent: "strategy",
        collectedAt: new Date().toISOString(),
      },
    ],
  };

  const date = new Date().toISOString().slice(0, 10);
  const post: CadrePost = {
    slug: `fixture-temps-libere-${date}`,
    date,
    updatedAt: date,
    status: "review",
    author: "Tannous Mekari",
    intent: "strategy",
    readingMinutes: 4,
    title: {
      fr: "Fixture — le temps libéré n'est pas encore de la marge.",
      en: "Fixture — freed time is not yet margin.",
    },
    insight: {
      fr: "Sans usage nommé de la capacité libérée, le gain de temps reste un confort opérationnel.",
      en: "Without a named use for freed capacity, time saved stays operational comfort.",
    },
    verdict: {
      fr: "Exiger un propriétaire et un usage avant de déployer, sinon la marge ne bouge pas.",
      en: "Require an owner and a use before deploying, or margin will not move.",
    },
    body: {
      fr: [
        "Un processus plus rapide est utile. Il ne devient économique que si la capacité libérée est réaffectée, retirée ou monétisée.",
        "La revue doit comparer volume, qualité et coûts nouveaux. Une heure théorique n'est pas une économie comptable.",
        "Le dossier de déploiement doit nommer le responsable de la capacité et l'usage attendu avant le go-live.",
      ],
      en: [
        "A faster process is useful. It becomes economic only if freed capacity is reallocated, removed, or monetized.",
        "The review should compare volume, quality and new costs. A theoretical hour is not an accounting saving.",
        "The deployment case should name the capacity owner and expected use before go-live.",
      ],
    },
    sources: [
      {
        title: "Fixture source — measuring AI productivity",
        url: "https://example.com/ai-productivity",
        publisher: "example.com",
        excerpt:
          "Freed time only becomes margin when ownership and reuse of capacity are explicit.",
      },
    ],
    reviewNotes: {
      whyNow: {
        fr: "Fixture de validation du pipeline éditorial.",
        en: "Fixture to validate the editorial pipeline.",
      },
      triggers: ["dry-run"],
      sensitivePassages: [],
    },
  };

  const validation = validateCadreDraft(post);
  if (!validation.ok) {
    throw new Error(validation.errors.join("; "));
  }

  const reviewMarkdown = `# Revue Cadre — ${post.title.fr}\n\nFixture dry-run.\n`;
  const artifacts = writeDraftArtifacts(post, reviewMarkdown, topic);
  const payload = buildDeliverPayload({ post, reviewMarkdown, topic });
  writeLocalDeliveryReceipt(
    payload,
    artifacts.draftPath.replace(/\.json$/, ".delivery.json"),
  );
  console.log(`[cadre] fixture draft written: ${artifacts.draftPath}`);
}

main().catch((error) => {
  console.error("[cadre] failed:", error);
  process.exitCode = 1;
});
