import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseCadrePost,
  safeParseCadrePost,
} from "../src/lib/cadre-schema";
import {
  getAllCadreSlugs,
  getCadrePost,
  getPublishedCadrePosts,
} from "../src/lib/cadre";
import { pickBestTopic, rankTopics } from "../scripts/cadre/rank";
import { validateCadreDraft } from "../scripts/cadre/validate";
import type { CollectedItem } from "../scripts/cadre/collect";

describe("cadre content model", () => {
  it("loads published posts from content/cadre", () => {
    const posts = getPublishedCadrePosts();
    assert.ok(posts.length >= 3);
    assert.deepEqual(getAllCadreSlugs().sort(), [
      "gain-share-mesurable",
      "premier-chantier-performance",
      "temps-libere-et-marge",
    ]);
    const post = getCadrePost("temps-libere-et-marge");
    assert.equal(post?.status, "published");
    assert.equal(post?.title.fr.includes("marge"), true);
  });

  it("rejects invalid slugs", () => {
    const result = safeParseCadrePost({
      slug: "Invalid Slug",
      date: "2026-09-09",
      status: "review",
      intent: "strategy",
      readingMinutes: 4,
      title: { fr: "Titre", en: "Title" },
      insight: {
        fr: "Insight assez long pour passer le seuil.",
        en: "Insight long enough to pass.",
      },
      verdict: {
        fr: "Verdict assez long pour passer le seuil.",
        en: "Verdict long enough to pass.",
      },
      body: {
        fr: ["A.", "B.", "C."],
        en: ["A.", "B.", "C."],
      },
      sources: [],
    });
    assert.equal(result.success, false);
  });
});

describe("cadre ranking", () => {
  it("prefers relevant multi-source topics", () => {
    const items: CollectedItem[] = [
      {
        id: "1",
        title: "Mesurer le ROI de l'IA et la marge opérationnelle",
        url: "https://example.com/roi-ia",
        snippet:
          "Le gain de temps et la productivité ne deviennent ROI que si la marge et le coût complet sont suivis.",
        publisher: "example.com",
        query: "roi ia marge",
        pillar: "economic_performance",
        intent: "strategy",
        collectedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Baseline et gain-share dans les projets IA",
        url: "https://example.com/gain-share",
        snippet:
          "Sans baseline, le gain-share reste contestable et la mesure de marge trop faible.",
        publisher: "example.com",
        query: "gain-share baseline",
        pillar: "economic_performance",
        intent: "strategy",
        collectedAt: new Date().toISOString(),
      },
    ];

    const ranked = rankTopics(items, ["Sujet sans rapport"]);
    assert.ok(ranked[0].score >= 6);
    assert.equal(ranked[0].pillar, "economic_performance");
    assert.equal(pickBestTopic(items)?.pillar, "economic_performance");
  });
});

describe("cadre draft validation", () => {
  it("accepts a sober sourced review draft", () => {
    const draft = parseCadrePost({
      slug: "test-capacite-liberee-et-marge",
      date: "2026-09-09",
      status: "review",
      intent: "strategy",
      readingMinutes: 4,
      title: {
        fr: "La capacité libérée n'améliore la marge que si on la réaffecte.",
        en: "Freed capacity only improves margin if it is reallocated.",
      },
      insight: {
        fr: "Le gain de temps reste un confort tant que personne n'en possède l'usage économique.",
        en: "Time saved stays comfort until someone owns its economic use.",
      },
      verdict: {
        fr: "Nommer un propriétaire et un usage avant déploiement, sinon la marge ne bouge pas.",
        en: "Name an owner and a use before deployment, or margin will not move.",
      },
      body: {
        fr: [
          "Une tâche plus rapide est utile. Elle ne devient économique que si la capacité est retirée, réaffectée ou monétisée.",
          "La revue compare volume, qualité et coûts nouveaux. Une heure théorique n'est pas une économie comptable.",
          "Le dossier de go-live doit fixer le responsable de la capacité et l'usage attendu.",
        ],
        en: [
          "A faster task is useful. It becomes economic only if capacity is removed, reallocated, or monetized.",
          "The review compares volume, quality and new costs. A theoretical hour is not an accounting saving.",
          "The go-live case should set the capacity owner and expected use.",
        ],
      },
      sources: [
        {
          title: "Measuring AI productivity",
          url: "https://example.com/ai-productivity",
          publisher: "example.com",
          excerpt: "Ownership of freed capacity is the missing link to margin.",
        },
      ],
    });

    const result = validateCadreDraft(draft);
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
  });

  it("blocks generic marketing tone", () => {
    const result = validateCadreDraft({
      slug: "test-ton-generique",
      date: "2026-09-09",
      status: "review",
      intent: "strategy",
      readingMinutes: 4,
      title: {
        fr: "Dans un monde en constante évolution, révolutionner votre marge.",
        en: "In today's fast-paced world, unlock unprecedented margin.",
      },
      insight: {
        fr: "Il est crucial de leverager chaque synergie digitale disponible aujourd'hui.",
        en: "It is crucial to leverage synergies across the whole stack today.",
      },
      verdict: {
        fr: "Adoptez une solution innovante à l'ère du digital dès maintenant.",
        en: "Adopt a cutting-edge solution and unlock unprecedented value now.",
      },
      body: {
        fr: [
          "Il est essentiel de transformer votre organisation.",
          "La solution innovante change tout.",
          "Le digital crée de la synergie.",
        ],
        en: [
          "It is crucial to transform your organization.",
          "This game-changer changes everything.",
          "Digital creates leverage synergies.",
        ],
      },
      sources: [
        {
          title: "Source",
          url: "https://example.com/source",
        },
      ],
    });

    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => e.includes("generic")));
  });
});
