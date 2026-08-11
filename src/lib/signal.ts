import type { IntentId } from "@/lib/intake";
import type { Lang } from "@/lib/content";

export type SignalPost = {
  slug: string;
  date: string;
  intent: IntentId;
  readingMinutes: number;
  title: Record<Lang, string>;
  insight: Record<Lang, string>;
  verdict: Record<Lang, string>;
  body: Record<Lang, string[]>;
};

export const signalPosts: SignalPost[] = [
  {
    slug: "outils-vs-jugement",
    date: "2026-08-11",
    intent: "training",
    readingMinutes: 3,
    title: {
      fr: "Le vrai risque n'est pas de mal utiliser l'IA.",
      en: "The real risk isn't misusing AI.",
    },
    insight: {
      fr: "C'est de l'utiliser sans savoir dire si le résultat est bon.",
      en: "It's using it without knowing whether the output is good.",
    },
    verdict: {
      fr: "Forme le jugement avant d'industrialiser les prompts.",
      en: "Train judgment before you industrialize prompts.",
    },
    body: {
      fr: [
        "Dans les cabinets et les directions, l'outil arrive souvent avant le cadre. ChatGPT est là. Personne n'a tranché ce qui peut sortir, ce qui doit être relu, ce qui ne doit jamais y passer.",
        "Résultat : adoption fantôme. Des gens collent du client dans un onglet. D'autres refusent tout. Le comité croit que « on a de l'IA ».",
        "Le levier n'est pas un nouveau modèle. C'est une session où chaque rôle apprend à juger : quoi déléguer à un agent, quoi garder humain, comment détecter une réponse plausible mais fausse.",
      ],
      en: [
        "In firms and leadership teams, the tool often arrives before the frame. ChatGPT is there. No one has decided what can leave, what must be reviewed, what must never go in.",
        "Result: ghost adoption. Some people paste clients into a tab. Others refuse everything. The board thinks “we have AI.”",
        "The lever isn't a new model. It's a session where each role learns to judge: what to hand to an agent, what to keep human, how to spot an answer that sounds right and isn't.",
      ],
    },
  },
  {
    slug: "ca-tourne-ou-ca-derive",
    date: "2026-08-10",
    intent: "has_agents",
    readingMinutes: 4,
    title: {
      fr: "« Ça tourne » n'est pas une preuve.",
      en: "“It's running” is not proof.",
    },
    insight: {
      fr: "Le prestataire dit que ça marche. La DSI dit que ça tourne. Ce n'est pas la même chose.",
      en: "The vendor says it works. IT says it's up. Not the same thing.",
    },
    verdict: {
      fr: "Audite système par système avant d'étendre.",
      en: "Audit system by system before you expand.",
    },
    body: {
      fr: [
        "Les modèles changent de version. Les usages dérivent. Une équipe arrête d'utiliser un outil sans prévenir personne. Six mois plus tard, tu paies encore l'abonnement et tu cites le projet en comité.",
        "Un audit de systèmes IA ne cherche pas la démo. Il cherche le verdict : ce qui tient, ce qui dérive, ce qu'il faut couper.",
        "Sans cette étape, chaque nouveau déploiement empile du risque sur du flou. Le fil rouge TWM est clair : mesurer avant d'étendre.",
      ],
      en: [
        "Models change versions. Usage drifts. A team stops using a tool and tells no one. Six months later you're still paying and still citing the project in the board pack.",
        "An AI systems audit isn't looking for the demo. It's looking for the verdict: what holds, what drifts, what to cut.",
        "Without that step, every new deployment stacks risk on fog. TWM's throughline is clear: measure before you expand.",
      ],
    },
  },
  {
    slug: "commencer-petit-prouver",
    date: "2026-08-08",
    intent: "discover",
    readingMinutes: 3,
    title: {
      fr: "Rien ne se vend sans preuve.",
      en: "Nothing ships without proof.",
    },
    insight: {
      fr: "Toujours le même parcours : audit → déploiement → mesure → extension.",
      en: "Always the same path: audit → deploy → measure → extend.",
    },
    verdict: {
      fr: "Commence par une feuille de route chiffrée, pas par un agent « pour voir ».",
      en: "Start with a costed roadmap, not an agent “just to see.”",
    },
    body: {
      fr: [
        "Le premier réflexe est souvent d'acheter un outil ou de demander « un agent ». Sans cartographie des fuites de temps, tu optimises au hasard.",
        "L'audit IA de l'organisation tranche : où l'IA te fait vraiment gagner du temps — et où elle ne sert à rien. Impact × effort. Puis un seul cas en production.",
        "C'est moins sexy qu'une démo. C'est ce qui évite six mois de PowerPoint et zéro gain mesurable.",
      ],
      en: [
        "The first reflex is often to buy a tool or ask for “an agent.” Without mapping time leaks, you optimize at random.",
        "An org AI audit calls it: where AI actually saves time — and where it doesn't. Impact × effort. Then one case in production.",
        "Less sexy than a demo. It's what avoids six months of slides and zero measured gain.",
      ],
    },
  },
];

export function getSignalPost(slug: string): SignalPost | undefined {
  return signalPosts.find((p) => p.slug === slug);
}

export function getAllSignalSlugs(): string[] {
  return signalPosts.map((p) => p.slug);
}
