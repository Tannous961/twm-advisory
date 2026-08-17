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
      fr: "L'évaluation des résultats est une compétence essentielle.",
      en: "Assessing AI output is an essential skill.",
    },
    insight: {
      fr: "L'adoption d'un outil ne suffit pas : les utilisateurs doivent savoir vérifier la qualité de ses réponses.",
      en: "Tool adoption is not enough: users must know how to verify the quality of its output.",
    },
    verdict: {
      fr: "Renforcer le jugement des équipes avant d'étendre l'usage des outils.",
      en: "Strengthen team judgment before expanding tool use.",
    },
    body: {
      fr: [
        "Dans les cabinets et les directions, les outils sont parfois disponibles avant que les règles d'usage soient définies. Il faut préciser quelles données peuvent être traitées, quels résultats doivent être relus et quels usages sont exclus.",
        "En l'absence de cadre, les pratiques deviennent hétérogènes : certains utilisateurs transmettent des informations sensibles, tandis que d'autres renoncent entièrement aux outils.",
        "La formation doit donc couvrir l'évaluation des résultats : quelles tâches confier à un agent, quelles décisions maintenir sous contrôle humain et comment repérer une réponse plausible mais incorrecte.",
      ],
      en: [
        "In firms and leadership teams, tools are sometimes made available before usage policies are defined. Organizations need to specify which data may be processed, which outputs require review and which uses are excluded.",
        "Without a framework, practices become inconsistent: some users submit sensitive information while others avoid the tools entirely.",
        "Training should therefore cover output assessment: which tasks to assign to an agent, which decisions to keep under human control and how to identify plausible but incorrect answers.",
      ],
    },
  },
  {
    slug: "ca-tourne-ou-ca-derive",
    date: "2026-08-10",
    intent: "has_agents",
    readingMinutes: 4,
    title: {
      fr: "Un système disponible n'est pas nécessairement efficace.",
      en: "An available system is not necessarily effective.",
    },
    insight: {
      fr: "La disponibilité technique, l'adoption et les résultats doivent être évalués séparément.",
      en: "Technical availability, adoption and outcomes should be assessed separately.",
    },
    verdict: {
      fr: "Évaluer chaque système avant d'étendre le déploiement.",
      en: "Assess each system before expanding deployment.",
    },
    body: {
      fr: [
        "Les modèles changent de version, les usages évoluent et l'adoption peut diminuer sans être immédiatement visible. Les coûts peuvent alors se poursuivre sans bénéfice mesuré.",
        "Une évaluation de système IA examine notamment la disponibilité, la qualité des résultats, l'utilisation réelle, les coûts et les risques.",
        "Cette analyse permet de corriger, maintenir ou arrêter chaque système sur la base d'éléments mesurables avant d'envisager une extension.",
      ],
      en: [
        "Models change versions, usage evolves and adoption can decline without being immediately visible. Costs may then continue without measured benefit.",
        "An AI system assessment examines availability, output quality, actual usage, cost and risk.",
        "This analysis supports evidence-based decisions to correct, maintain or retire each system before considering expansion.",
      ],
    },
  },
  {
    slug: "commencer-petit-prouver",
    date: "2026-08-08",
    intent: "discover",
    readingMinutes: 3,
    title: {
      fr: "Commencer par un périmètre mesurable.",
      en: "Begin with a measurable scope.",
    },
    insight: {
      fr: "Le parcours recommandé suit quatre étapes : diagnostic, déploiement, mesure et extension.",
      en: "The recommended path follows four stages: assessment, deployment, measurement and expansion.",
    },
    verdict: {
      fr: "Définir une feuille de route chiffrée avant de lancer un premier agent.",
      en: "Define a costed roadmap before launching an initial agent.",
    },
    body: {
      fr: [
        "Le premier réflexe est souvent d'acheter un outil ou de demander un agent. Sans cartographie des processus et des besoins, le choix du premier cas d'usage reste peu fondé.",
        "Un diagnostic permet d'évaluer les possibilités selon leur impact, leur faisabilité et leurs contraintes, puis de sélectionner un seul périmètre initial.",
        "Cette démarche est plus exigeante qu'une démonstration, mais elle permet de mesurer les résultats avant d'engager une extension.",
      ],
      en: [
        "The first response is often to buy a tool or request an agent. Without mapping processes and needs, there is little basis for selecting the first use case.",
        "An assessment evaluates opportunities by impact, feasibility and constraints, then selects one initial scope.",
        "This approach is more demanding than a demonstration, but it allows results to be measured before further investment.",
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
