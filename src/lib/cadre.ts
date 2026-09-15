import type { IntentId } from "@/lib/intake";
import type { Lang } from "@/lib/content";

export type CadrePost = {
  slug: string;
  date: string;
  intent: IntentId;
  readingMinutes: number;
  title: Record<Lang, string>;
  insight: Record<Lang, string>;
  verdict: Record<Lang, string>;
  body: Record<Lang, string[]>;
};

export const cadrePosts: CadrePost[] = [
  {
    slug: "agent-en-prod-pas-encore-preuve",
    date: "2026-09-15",
    intent: "has_agents",
    readingMinutes: 5,
    title: {
      fr: "Un agent en production n'est pas encore une preuve.",
      en: "An agent in production is not yet proof.",
    },
    insight: {
      fr: "Le fait qu'un agent tourne dit peu sur la qualité du travail livré, le coût de supervision et l'effet économique.",
      en: "That an agent is running says little about output quality, supervision cost, or economic effect.",
    },
    verdict: {
      fr: "Avant d'étendre, fixer trois mesures : taux de reprise humaine, qualité sur un échantillon comparable, et coût total par unité traitée.",
      en: "Before scaling, set three measures: human takeover rate, quality on a comparable sample, and total cost per unit processed.",
    },
    body: {
      fr: [
        "Séparer disponibilité et résultat. Un agent accessible, un volume traité, une démo réussie : ce sont des signes d'installation. Ils ne disent pas si le travail tient la qualité exigée, ni si la reprise humaine consomme le gain attendu.",
        "Observer la reprise. Noter la part de dossiers repris, le motif (erreur, doute, exception) et le temps passé. Un taux de reprise élevé peut être acceptable au démarrage ; il doit baisser ou être justifié. Sinon le dispositif déplace le travail au lieu de le réduire.",
        "Comparer à un échantillon de référence. Prendre des cas déjà traités à la main, avec le même niveau d'exigence. Mesurer écarts, omissions et corrections. Sans cette base, la « réussite » reste une impression d'équipe.",
        "Compter le coût complet. Inclure licences, intégration, temps des experts qui corrigent, et incidents. Le coût par unité traitée, une fois la reprise incluse, est plus utile qu'un volume brut. Si ce coût ne s'améliore pas, l'extension n'a pas de dossier.",
        "Décider avec une porte de sortie. Définir à l'avance les seuils qui autorisent l'élargissement, et ceux qui imposent l'arrêt ou le recentrage. Un agent en production mérite ce cadre autant qu'un chantier métier classique.",
      ],
      en: [
        "Separate uptime from outcome. An available agent, volume processed, a successful demo: these are signs of installation. They do not say whether the work meets the required quality, or whether human takeover consumes the expected gain.",
        "Watch takeovers. Record the share of cases taken back, the reason (error, doubt, exception), and time spent. A high takeover rate can be fine at the start; it should fall or be justified. Otherwise the setup moves work around instead of reducing it.",
        "Compare to a reference sample. Take cases already handled by hand, at the same quality bar. Measure gaps, omissions and corrections. Without that baseline, success stays a team impression.",
        "Count full cost. Include licences, integration, expert time spent correcting, and incidents. Cost per unit processed, once takeover is included, is more useful than raw volume. If that cost does not improve, expansion has no case.",
        "Decide with an exit door. Set in advance the thresholds that allow scaling, and those that force a stop or a narrower scope. An agent in production deserves that frame as much as a classic business workstream.",
      ],
    },
  },
  {
    slug: "temps-libere-et-marge",
    date: "2026-09-06",
    intent: "strategy",
    readingMinutes: 5,
    title: {
      fr: "Le temps libéré n'est pas encore de la marge.",
      en: "Freed time is not yet margin.",
    },
    insight: {
      fr: "La bonne question vient après le gain de temps : que devient cette capacité ?",
      en: "The real question comes after the time gain: what becomes of that capacity?",
    },
    verdict: {
      fr: "Nommer l'usage de la capacité libérée avant de déployer, sinon la technologie améliore le confort sans changer la marge.",
      en: "Name how freed capacity will be used before deploying — otherwise technology improves comfort without changing margin.",
    },
    body: {
      fr: [
        "Mesurer un changement réel. Une tâche plus rapide est un résultat opérationnel utile. Pour l'établir, il faut comparer des volumes et des niveaux de qualité équivalents. Les reprises, les contrôles supplémentaires et le traitement des exceptions font partie du temps réel.",
        "Distinguer trois situations. La capacité peut rester disponible, absorber davantage d'activité ou permettre d'éviter une dépense. Ces situations ne produisent pas le même effet économique. Une réduction de temps multipliée par un coût horaire représente une valorisation théorique, pas une économie comptable acquise.",
        "Décider de l'usage avant de déployer. Le dossier économique doit nommer le responsable de la capacité libérée et préciser son utilisation : réduire un recours externe, absorber une hausse de volume ou développer une activité rentable. Sans cette décision, la technologie peut améliorer le confort sans changer la marge.",
        "Ce qu'un dirigeant peut demander. Quel volume a été observé ? La qualité est-elle comparable ? Quels coûts nouveaux ont été introduits ? Quelle utilisation du temps a été constatée ? La finance reconnaît-elle l'effet économique ? Ces questions donnent plus de valeur à la revue qu'un total d'heures théoriques.",
      ],
      en: [
        "Measure a real change. A faster task is a useful operational result. To establish it, compare equivalent volumes and quality levels. Rework, extra checks and exception handling are part of real time.",
        "Distinguish three situations. Capacity may stay idle, absorb more activity, or avoid a spend. These do not produce the same economic effect. Time saved multiplied by an hourly cost is a theoretical valuation, not an earned accounting saving.",
        "Decide usage before deploying. The business case should name the owner of freed capacity and how it will be used: reduce external spend, absorb volume growth, or develop profitable activity. Without that decision, technology can improve comfort without changing margin.",
        "What a leader can ask. What volume was observed? Is quality comparable? What new costs were introduced? How was freed time actually used? Does finance recognize the economic effect? These questions are more valuable than a total of theoretical hours.",
      ],
    },
  },
  {
    slug: "gain-share-mesurable",
    date: "2026-09-04",
    intent: "use_case",
    readingMinutes: 5,
    title: {
      fr: "Un gain-share crédible commence par la mesure.",
      en: "Credible gain-share starts with measurement.",
    },
    insight: {
      fr: "Partager les gains suppose d'abord de s'entendre sur ce qui constitue un gain.",
      en: "Sharing gains first requires agreeing on what counts as a gain.",
    },
    verdict: {
      fr: "Le modèle de rémunération doit suivre la qualité de la mesure — pas l'inverse.",
      en: "The fee model should follow measurement quality — not the other way around.",
    },
    body: {
      fr: [
        "Commencer par la référence. Le protocole décrit la situation de départ, la période retenue, les sources et les ajustements. Une baisse de dépense peut venir d'un recul d'activité ; une hausse de revenu, d'une variation de prix déjà décidée. La comparaison doit tenir compte des facteurs convenus.",
        "Définir une assiette lisible. Il faut préciser les coûts déduits, l'attribution, les exclusions et le traitement des coûts récurrents. Le fixe et le variable doivent être identifiables. Éviter toute circularité : l'assiette du variable est définie avant ce variable, puis la valeur nette conservée par le client le déduit.",
        "Prévoir la validation et le désaccord. Une revue commune examine pièces et calculs à une fréquence définie. Le contrat fixe les responsables, les délais de contestation et la procédure de résolution. Le gain-share aligne mieux les intérêts lorsqu'il réduit les ambiguïtés.",
        "Accepter les limites de l'attribution. Certains changements sont trop imbriqués pour attribuer un gain de façon robuste. Un forfait par jalons peut alors être plus lisible. Le choix du modèle doit suivre la qualité de la mesure.",
      ],
      en: [
        "Start with the baseline. The protocol describes the starting point, period, sources and adjustments. A spend drop may come from lower activity; a revenue rise from a price change already decided. Comparison must account for agreed factors.",
        "Define a readable base. Specify deducted costs, attribution, exclusions and treatment of recurring costs. Fixed and variable fees must be identifiable. Avoid circularity: the variable base is set before that variable, then the net value kept by the client deducts it.",
        "Plan validation and disagreement. A joint review examines evidence and calculations on a defined cadence. The contract sets owners, challenge windows and resolution steps. Gain-share aligns interests better when it reduces ambiguity.",
        "Accept attribution limits. Some changes are too entangled for robust attribution. A milestone fee can then be clearer. Model choice should follow measurement quality.",
      ],
    },
  },
  {
    slug: "premier-chantier-performance",
    date: "2026-09-01",
    intent: "discover",
    readingMinutes: 4,
    title: {
      fr: "Choisir le premier chantier de performance.",
      en: "Choose the first performance workstream.",
    },
    insight: {
      fr: "Le meilleur point de départ réunit valeur, faisabilité et capacité à prouver.",
      en: "The best starting point combines value, feasibility and the ability to prove results.",
    },
    verdict: {
      fr: "Étendre seulement après observation — un résultat local ne se transpose pas automatiquement.",
      en: "Expand only after observation — a local result does not automatically transfer.",
    },
    body: {
      fr: [
        "Chercher un problème délimité. Un premier chantier doit être compris par un responsable métier et relié à une ligne économique ou à un indicateur opérationnel utile. Un problème concret facilite l'accès aux données et les décisions.",
        "Évaluer le coût complet. Le business case inclut l'intégration, le temps des équipes, les outils, la maintenance et les coûts de transition. Le potentiel brut est une première hypothèse. La décision repose sur le résultat net et la robustesse du scénario.",
        "Prévoir une porte de sortie. Les critères de qualité, les seuils de décision et les conditions d'arrêt sont fixés avant le déploiement. Ils évitent de prolonger une expérimentation qui ne justifie plus son coût.",
        "Étendre après observation. Un résultat sur un périmètre ne se transpose pas automatiquement. Les volumes, les compétences et les exceptions peuvent changer. L'extension doit conserver la discipline de mesure du premier chantier.",
      ],
      en: [
        "Look for a bounded problem. A first workstream should be understood by a business owner and tied to an economic line or useful operational indicator. A concrete problem makes data access and decisions easier.",
        "Assess full cost. The business case includes integration, team time, tools, maintenance and transition costs. Gross potential is a first hypothesis. The decision rests on net outcome and scenario robustness.",
        "Plan an exit door. Quality criteria, decision thresholds and stop conditions are set before deployment. They prevent extending an experiment that no longer justifies its cost.",
        "Expand after observation. A result on one scope does not automatically transfer. Volumes, skills and exceptions can change. Expansion must keep the measurement discipline of the first workstream.",
      ],
    },
  },
];

export function getCadrePost(slug: string): CadrePost | undefined {
  return cadrePosts.find((p) => p.slug === slug);
}

export function getAllCadreSlugs(): string[] {
  return cadrePosts.map((p) => p.slug);
}
