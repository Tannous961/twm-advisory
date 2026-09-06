import type { Lang } from "@/lib/content";

export type L = Record<Lang, string>;

// ---------------------------------------------------------------------------
// Shared shapes
// ---------------------------------------------------------------------------

export interface Pillar {
  id: string;
  title: L;
  body: L;
}

export interface Card {
  id: string;
  title: L;
  body: L;
}

export interface Step {
  id: string;
  label: L;
  title?: L;
  body?: L;
}

export interface Cta {
  label: L;
  href: string;
}

export interface EditorialSection {
  id: string;
  index: string;
  label: L;
  title: L;
  body: L;
  items?: L[];
  cards?: Card[];
  steps?: Step[];
  cta?: Cta;
}

export interface FaqItem {
  q: L;
  a: L;
}

export interface ImpactCase {
  slug: string;
  category: L;
  title: L;
  situation: L;
  intervention: L;
  measure: L;
  proofs: L;
  attention: L;
  cta: Cta;
}

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------

export const brand = {
  name: "TWM Advisory",
  positioning: {
    fr: "Operating Performance Partner",
    en: "Operating Performance Partner",
  } as L,
  tagline: {
    fr: "La performance se décide. Et se réalise.",
    en: "Performance is decided. And delivered.",
  } as L,
  description: {
    fr: "TWM Advisory identifie les leviers économiques, conduit leur mise en œuvre et mesure les résultats avec votre direction financière.",
    en: "TWM Advisory identifies economic levers, drives implementation and measures results with your finance leadership.",
  } as L,
} as const;

// ---------------------------------------------------------------------------
// Home editorial — shapes consumed by HomeEditorial.tsx
// ---------------------------------------------------------------------------

export const homeEditorial = {
  hero: {
    eyebrow: {
      fr: "Operating Performance Partner",
      en: "Operating Performance Partner",
    } as L,
    title: {
      fr: "La performance se décide.",
      en: "Performance is decided.",
    } as L,
    titleEm: {
      fr: "Et se réalise.",
      en: "And delivered.",
    } as L,
    lead: [
      {
        fr: "Améliorer votre marge.",
        en: "Improve your margin.",
      },
      {
        fr: "Maîtriser vos coûts.",
        en: "Control your costs.",
      },
      {
        fr: "Donner de la capacité à vos équipes.",
        en: "Free capacity for your teams.",
      },
    ] as L[],
    body: {
      fr: "TWM Advisory identifie les leviers économiques, conduit leur mise en œuvre et mesure les résultats avec votre direction financière.",
      en: "TWM Advisory identifies economic levers, drives implementation and measures results with your finance leadership.",
    } as L,
    ctaPrimary: {
      fr: "Évaluer votre potentiel",
      en: "Assess your potential",
    } as L,
    ctaSecondary: {
      fr: "Voir les leviers d'impact",
      en: "See the impact levers",
    } as L,
    note: {
      fr: "Premier échange de 30 minutes, sans engagement.",
      en: "Initial 30-minute conversation, with no commitment.",
    } as L,
  },

  startingPoint: {
    label: {
      fr: "Le point de départ",
      en: "The starting point",
    } as L,
    title: {
      fr: "Votre compte de résultat.",
      en: "Your P&L.",
    } as L,
    pillars: [
      {
        id: "couts",
        title: { fr: "Coûts", en: "Costs" },
        body: {
          fr: "Réduire les dépenses évitables",
          en: "Cut avoidable spend",
        },
      },
      {
        id: "operations",
        title: { fr: "Opérations", en: "Operations" },
        body: {
          fr: "Améliorer la capacité utile",
          en: "Improve useful capacity",
        },
      },
      {
        id: "revenus",
        title: { fr: "Revenus", en: "Revenue" },
        body: {
          fr: "Préserver la marge acquise",
          en: "Protect earned margin",
        },
      },
    ] as Pillar[],
    footer: {
      fr: "Un périmètre clair. Une mesure partagée. Des résultats vérifiables.",
      en: "A clear scope. Shared measurement. Verifiable results.",
    } as L,
    methodChips: [
      { fr: "Diagnostic économique", en: "Economic diagnosis" },
      { fr: "Exécution opérationnelle", en: "Operational execution" },
      { fr: "Mesure avec la finance", en: "Measured with finance" },
    ] as L[],
  },

  sections: [
    {
      id: "priorite",
      index: "01",
      label: { fr: "La priorité", en: "The priority" },
      title: {
        fr: "Partir de la valeur à créer.",
        en: "Start from the value to create.",
      },
      body: {
        fr: "Une dépense qui se répète. Un processus qui ralentit la facturation. Des experts absorbés par l'administratif. Nous partons de ces situations pour établir un potentiel économique, puis décider ce qui mérite d'être exécuté.",
        en: "A recurring expense. A process that slows billing. Experts absorbed by admin work. We start from these situations to establish economic potential, then decide what deserves to be executed.",
      },
      cards: [
        {
          id: "couts-maitrises",
          title: { fr: "Coûts maîtrisés", en: "Controlled costs" },
          body: {
            fr: "Rationaliser les outils, les prestations et les opérations redondantes. Mesurer les dépenses réellement évitées.",
            en: "Rationalize tools, services and redundant operations. Measure spend actually avoided.",
          },
        },
        {
          id: "capacite-retrouvee",
          title: { fr: "Capacité retrouvée", en: "Capacity recovered" },
          body: {
            fr: "Réduire les reprises et les tâches de préparation. Relier le temps libéré à une utilisation concrète.",
            en: "Reduce rework and preparation tasks. Tie freed time to concrete use.",
          },
        },
        {
          id: "marge-protegee",
          title: { fr: "Marge protégée", en: "Protected margin" },
          body: {
            fr: "Identifier les prestations non facturées, les remises mal contrôlées et les coûts de traitement qui érodent la rentabilité.",
            en: "Identify unbilled work, poorly controlled discounts and processing costs that erode profitability.",
          },
        },
      ] as Card[],
      cta: {
        label: { fr: "Découvrir TWM Performance", en: "Discover TWM Performance" },
        href: "/performance",
      },
    },
    {
      id: "engagement",
      index: "02",
      label: { fr: "L'engagement", en: "The commitment" },
      title: {
        fr: "Du diagnostic à l'impact mesuré.",
        en: "From diagnosis to measured impact.",
      },
      body: {
        fr: "Nous cadrons un premier périmètre, établissons une référence et mettons les actions en œuvre avec vos équipes. Chaque extension se décide sur les résultats observés.",
        en: "We frame an initial scope, establish a baseline and implement actions with your teams. Each expansion is decided on observed results.",
      },
      steps: [
        {
          id: "identifier",
          label: { fr: "Identifier", en: "Identify" },
        },
        {
          id: "chiffrer",
          label: { fr: "Chiffrer", en: "Quantify" },
        },
        {
          id: "executer",
          label: { fr: "Exécuter", en: "Execute" },
        },
        {
          id: "mesurer",
          label: { fr: "Mesurer", en: "Measure" },
        },
        {
          id: "ancrer",
          label: { fr: "Ancrer", en: "Embed" },
        },
      ] as Step[],
      cta: {
        label: { fr: "Comprendre la méthode", en: "Understand the method" },
        href: "/methode",
      },
    },
    {
      id: "mesure",
      index: "03",
      label: { fr: "La mesure", en: "Measurement" },
      title: {
        fr: "Des gains qualifiés, avant d'être annoncés.",
        en: "Qualified gains, before they are announced.",
      },
      body: {
        fr: "Une heure libérée, une facture réduite et un encaissement accéléré n'ont pas le même effet économique. Nous suivons séparément la capacité, les économies, la marge et la trésorerie.",
        en: "A freed hour, a reduced invoice and faster cash collection do not have the same economic effect. We track capacity, savings, margin and cash separately.",
      },
      cards: [
        {
          id: "alignement",
          title: {
            fr: "Un alignement explicite",
            en: "An explicit alignment",
          },
          body: {
            fr: "Selon le périmètre, notre rémunération associe un socle fixe et une part liée aux gains validés. Les règles de calcul sont convenues avant l'exécution.",
            en: "Depending on scope, our fees combine a fixed base and a share linked to validated gains. Calculation rules are agreed before execution.",
          },
        },
      ] as Card[],
      cta: {
        label: {
          fr: "Lire le cadre de rémunération",
          en: "Read the fee framework",
        },
        href: "/faq",
      },
    },
    {
      id: "moyens",
      index: "04",
      label: { fr: "Les moyens", en: "The means" },
      title: {
        fr: "La technologie au service de l'économie.",
        en: "Technology in service of economics.",
      },
      body: {
        fr: "Processus, software, automatisation, IA et accompagnement des équipes : nous retenons les moyens adaptés au problème, aux données et aux contraintes de votre organisation.",
        en: "Process, software, automation, AI and team support: we select means suited to the problem, the data and your organization's constraints.",
      },
      cta: {
        label: { fr: "Explorer Performance OS", en: "Explore Performance OS" },
        href: "/technology",
      },
    },
    {
      id: "terrain",
      index: "05",
      label: { fr: "Le terrain", en: "The field" },
      title: {
        fr: "Une expérience de direction et d'opérations.",
        en: "Leadership and operations experience.",
      },
      body: {
        fr: "Fondé par Tannous Mekari, TWM Advisory relie stratégie, opérations et mise en œuvre. Votre interlocuteur pilote la mission et mobilise des spécialistes lorsque le périmètre l'exige.",
        en: "Founded by Tannous Mekari, TWM Advisory connects strategy, operations and delivery. Your counterpart leads the engagement and brings in specialists when scope requires it.",
      },
      cta: {
        label: { fr: "Rencontrer TWM", en: "Meet TWM" },
        href: "/a-propos",
      },
    },
    {
      id: "leviers",
      index: "06",
      label: { fr: "Les leviers", en: "The levers" },
      title: {
        fr: "Des situations que vos équipes connaissent.",
        en: "Situations your teams already know.",
      },
      body: {
        fr: "Exemples illustratifs de mécanismes d'amélioration. Leur potentiel doit être établi sur vos données.",
        en: "Illustrative improvement mechanisms. Their potential must be established on your data.",
      },
      cards: [
        {
          id: "depenses-outils",
          title: {
            fr: "Rationaliser les dépenses d'outils",
            en: "Rationalize tool spend",
          },
          body: {
            fr: "Des abonnements se cumulent, avec des usages partiels et des fonctions qui se recouvrent.",
            en: "Subscriptions stack up, with partial usage and overlapping features.",
          },
        },
        {
          id: "operations-expertes",
          title: {
            fr: "Redonner de la capacité aux experts",
            en: "Give capacity back to experts",
          },
          body: {
            fr: "La préparation de dossiers, les synthèses et les reprises absorbent une part importante du temps expert.",
            en: "File preparation, summaries and rework absorb a large share of expert time.",
          },
        },
        {
          id: "facturation-marge",
          title: {
            fr: "Réduire les prestations non facturées",
            en: "Reduce unbilled work",
          },
          body: {
            fr: "Le travail réalisé n'est pas toujours rapproché des engagements et des éléments facturables.",
            en: "Work delivered is not always reconciled with commitments and billable items.",
          },
        },
      ] as Card[],
      cta: {
        label: {
          fr: "Voir tous les leviers d'impact",
          en: "See all impact levers",
        },
        href: "/impact",
      },
    },
  ] as EditorialSection[],

  faq: {
    label: { fr: "Questions fréquentes", en: "Frequently asked questions" } as L,
    title: {
      fr: "Avant de commencer.",
      en: "Before you start.",
    } as L,
    items: [
      {
        q: {
          fr: "Faut-il avoir un projet IA pour démarrer ?",
          en: "Do you need an AI project to get started?",
        },
        a: {
          fr: "Non. Une dépense à réduire, un processus trop lent ou une capacité insuffisante constituent des points de départ. Les moyens sont choisis après analyse.",
          en: "No. Spend to cut, a process that is too slow, or insufficient capacity are valid starting points. Means are chosen after analysis.",
        },
      },
      {
        q: {
          fr: "Comment fonctionne le gain-share ?",
          en: "How does gain-share work?",
        },
        a: {
          fr: "Une part de la rémunération peut être liée aux gains éligibles, réalisés et validés selon un protocole convenu avant exécution. Le taux, les coûts déduits, la période, les exclusions et le règlement des écarts sont contractuels.",
          en: "Part of the fee can be tied to eligible gains that are realized and validated under a protocol agreed before execution. Rate, deducted costs, period, exclusions and variance handling are contractual.",
        },
      },
      {
        q: {
          fr: "Le temps gagné est-il compté comme une économie ?",
          en: "Is time saved counted as a saving?",
        },
        a: {
          fr: "Pas automatiquement. Le temps libéré est d'abord une capacité. Il devient un gain économique lorsqu'une dépense est réellement évitée ou qu'une activité supplémentaire génère une contribution démontrable.",
          en: "Not automatically. Freed time is first capacity. It becomes an economic gain when spend is actually avoided or additional activity generates a demonstrable contribution.",
        },
      },
    ] as FaqItem[],
    allLink: {
      label: { fr: "Toutes les réponses", en: "All answers" },
      href: "/faq",
    },
  },
} as const;

// ---------------------------------------------------------------------------
// /performance — shapes aligned with PerformancePage.tsx
// ---------------------------------------------------------------------------

export const performancePage = {
  leadTitle: {
    fr: "Un mandat de performance. De la décision à l'exécution.",
    en: "A performance mandate. From decision to execution.",
  } as L,
  leadBody: {
    fr: "Nous partons d'un enjeu économique précis pour construire et mettre en œuvre un programme d'amélioration mesurable.",
    en: "We start from a precise economic issue to design and implement a measurable improvement program.",
  } as L,
  leversTitle: {
    fr: "Trois leviers, un même niveau d'exigence.",
    en: "Three levers, one standard of rigor.",
  } as L,
  levers: [
    {
      title: { fr: "Réduire les coûts évitables", en: "Cut avoidable costs" },
      body: {
        fr: "Outils sous-utilisés, prestations redondantes, ressaisies, reprises : établir les dépenses évitables, leur coût de sortie et les conditions de réduction.",
        en: "Underused tools, redundant services, re-keying, rework: establish avoidable spend, exit cost and reduction conditions.",
      },
    },
    {
      title: { fr: "Renforcer la capacité", en: "Strengthen capacity" },
      body: {
        fr: "Accélérer la préparation, fiabiliser les flux et réduire les tâches sans valeur. Définir comment la capacité libérée sera utilisée.",
        en: "Speed preparation, stabilize flows and cut non-value work. Define how freed capacity will be used.",
      },
    },
    {
      title: { fr: "Protéger la marge", en: "Protect margin" },
      body: {
        fr: "Mieux relier le travail réalisé à la facturation, limiter les erreurs et contrôler les écarts entre engagements, prix et coûts de service.",
        en: "Better connect work delivered to billing, limit errors and control gaps between commitments, price and cost to serve.",
      },
    },
  ] as { title: L; body: L }[],
  scanTitle: {
    fr: "Performance Scan : décider sur une base chiffrée.",
    en: "Performance Scan: decide on a quantified basis.",
  } as L,
  scanBody: {
    fr: "Le diagnostic porte sur un périmètre convenu : une fonction, un processus ou une catégorie de dépenses. Nous croisons données disponibles, entretiens et observation du travail réel. Vous disposez d'une situation de référence, d'un portefeuille de leviers, d'estimations documentées et d'un premier plan d'exécution. Les coûts de mise en œuvre, les dépendances et les risques sont intégrés à la décision.",
    en: "The diagnosis covers an agreed scope: a function, a process or a spend category. We combine available data, interviews and observation of real work. You get a baseline, a portfolio of levers, documented estimates and an initial execution plan. Implementation costs, dependencies and risks are built into the decision.",
  } as L,
  scanBullets: [
    {
      fr: "Livrables : note de décision, référence économique, priorités, scénarios et plan de mesure.",
      en: "Deliverables: decision note, economic baseline, priorities, scenarios and measurement plan.",
    },
    {
      fr: "Décision : lancer un premier chantier, approfondir une hypothèse ou ne pas poursuivre.",
      en: "Decision: launch a first workstream, deepen a hypothesis, or stop.",
    },
    {
      fr: "Durée et forfait définis après qualification du périmètre et de la disponibilité des données.",
      en: "Duration and fixed fee defined after qualifying scope and data availability.",
    },
  ] as L[],
  deliveryTitle: {
    fr: "Un premier chantier, une responsabilité claire.",
    en: "A first workstream, clear ownership.",
  } as L,
  deliveryBody: {
    fr: "TWM pilote le chantier avec votre sponsor, les responsables opérationnels et la finance. Nous adaptons les processus, intégrons les solutions utiles, accompagnons les équipes et suivons les écarts. La mission ne s'arrête pas à la livraison d'un outil. Elle comprend la vérification de son usage, de la qualité obtenue et de sa contribution économique, dans les limites du périmètre convenu.",
    en: "TWM leads the workstream with your sponsor, operations owners and finance. We adapt processes, integrate useful solutions, support teams and track variances. The engagement does not stop at delivering a tool. It includes verifying usage, quality and economic contribution within the agreed scope.",
  } as L,
  feesTitle: {
    fr: "Un socle fixe. Une part de résultat, lorsque la mesure le permet.",
    en: "A fixed base. A results share when measurement allows.",
  } as L,
  feesBody: {
    fr: "Le diagnostic est facturé au forfait. Pour l'exécution, le modèle peut associer des honoraires fixes et une rémunération variable calculée sur les gains éligibles, réalisés et validés conjointement. Le taux, l'assiette, la période de mesure, les exclusions et les modalités de validation sont définis dans la proposition. Les coûts techniques et les frais de tiers sont explicités. Il n'existe pas de taux universel applicable à toutes les missions. Lorsque l'attribution des gains n'est pas suffisamment robuste, un forfait ou une rémunération par jalons est préférable. Un potentiel identifié ne déclenche pas, à lui seul, une rémunération au résultat.",
    en: "Diagnosis is billed as a fixed fee. For execution, the model can combine fixed fees and variable compensation on eligible gains that are realized and jointly validated. Rate, base, measurement period, exclusions and validation terms are defined in the proposal. Technical costs and third-party fees are spelled out. There is no universal rate for every engagement. When attribution is not robust enough, a fixed fee or milestone-based compensation is preferable. An identified potential alone does not trigger results-based fees.",
  } as L,
  feesBullets: [
    {
      fr: "Référence ajustée aux volumes, au mix et aux effets externes convenus.",
      en: "Baseline adjusted for agreed volumes, mix and external effects.",
    },
    {
      fr: "Gains nets des coûts de mise en œuvre inclus dans l'assiette contractuelle ; pas de double comptage.",
      en: "Gains net of implementation costs included in the contractual base; no double counting.",
    },
    {
      fr: "Capacité libérée suivie séparément des économies et de la marge réalisées.",
      en: "Freed capacity tracked separately from realized savings and margin.",
    },
    {
      fr: "Plafond éventuel, traitement des écarts et procédure de désaccord fixés à l'avance.",
      en: "Optional cap, variance handling and disagreement process set in advance.",
    },
  ] as L[],
  fitTitle: {
    fr: "Une priorité partagée et les moyens d'agir.",
    en: "A shared priority and the means to act.",
  } as L,
  fitBody: {
    fr: "L'accompagnement est pertinent lorsqu'un dirigeant porte l'objectif, qu'un responsable opérationnel peut faire évoluer le processus et qu'une base de mesure peut être établie. Aucun niveau de gain n'est garanti avant diagnostic. Les décisions de gestion restent celles de votre organisation. Nous construisons un programme dont les hypothèses et les résultats peuvent être discutés ouvertement.",
    en: "The engagement fits when a leader owns the objective, an operations owner can change the process, and a measurement base can be established. No gain level is guaranteed before diagnosis. Management decisions remain yours. We build a program whose assumptions and results can be discussed openly.",
  } as L,
  ctaImpact: { fr: "Explorer les cas d'usage", en: "Explore use cases" } as L,
  ctaFaq: {
    fr: "Consulter les réponses sur le gain-share",
    en: "Read gain-share answers",
  } as L,
  ctaContact: {
    fr: "Cadrer un premier périmètre",
    en: "Frame an initial scope",
  } as L,
} as const;

// ---------------------------------------------------------------------------
// /methode — shapes aligned with MethodePage.tsx
// ---------------------------------------------------------------------------

export const methodePage = {
  leadTitle: {
    fr: "Rendre la performance vérifiable.",
    en: "Make performance verifiable.",
  } as L,
  leadBody: {
    fr: "Cinq étapes pour relier un problème opérationnel à un résultat économique, avec une décision explicite à chaque passage.",
    en: "Five steps to connect an operational problem to an economic outcome, with an explicit decision at each gate.",
  } as L,
  steps: [
    {
      title: {
        fr: "Partir de ce qui se passe réellement.",
        en: "Start from what actually happens.",
      },
      body: {
        fr: "Nous rencontrons le sponsor, la finance et les équipes concernées. Nous cartographions le flux de travail, les coûts et les points de friction. Les données demandées sont limitées au périmètre utile.",
        en: "We meet the sponsor, finance and relevant teams. We map the workflow, costs and friction points. Data requested is limited to the useful scope.",
      },
      bullets: [
        {
          fr: "Entrées : objectifs, volumes, dépenses, outils et contraintes métier.",
          en: "Inputs: objectives, volumes, spend, tools and business constraints.",
        },
        {
          fr: "Sortie : périmètre prioritaire, responsables et premières hypothèses.",
          en: "Output: priority scope, owners and initial hypotheses.",
        },
        {
          fr: "Décision : le problème est-il assez important et accessible pour être chiffré ?",
          en: "Decision: is the problem important and accessible enough to quantify?",
        },
      ],
    },
    {
      title: {
        fr: "Construire une référence commune.",
        en: "Build a shared baseline.",
      },
      body: {
        fr: "Nous établissons la situation de départ, les hypothèses de conversion économique et le coût total du changement. Nous distinguons potentiel théorique, gain réalisable et effet attendu sur la période.",
        en: "We establish the starting point, economic conversion assumptions and total cost of change. We distinguish theoretical potential, achievable gain and expected effect over the period.",
      },
      bullets: [
        {
          fr: "Entrées : données sourcées, qualité des mesures et saisonnalité.",
          en: "Inputs: sourced data, measurement quality and seasonality.",
        },
        {
          fr: "Sortie : dossier économique et protocole de mesure validables par la finance.",
          en: "Output: economic case and measurement protocol finance can validate.",
        },
        {
          fr: "Décision : le gain attendu justifie-t-il l'investissement et les risques ?",
          en: "Decision: does expected gain justify investment and risk?",
        },
      ],
    },
    {
      title: {
        fr: "Changer le fonctionnement, avec les équipes.",
        en: "Change how work runs, with the teams.",
      },
      body: {
        fr: "Nous simplifions le processus avant de choisir les outils. Le déploiement progresse sur un périmètre contrôlé, avec des critères de qualité, une supervision et des conditions de retour arrière.",
        en: "We simplify the process before choosing tools. Deployment progresses on a controlled scope, with quality criteria, supervision and rollback conditions.",
      },
      bullets: [
        {
          fr: "Sortie : processus opérationnel, responsables formés et documentation.",
          en: "Output: operating process, trained owners and documentation.",
        },
        {
          fr: "Pilotage : points d'avancement courts, arbitrages tracés et gestion des dépendances.",
          en: "Governance: short progress reviews, traced decisions and dependency management.",
        },
        {
          fr: "Décision : les conditions opérationnelles permettent-elles l'extension ?",
          en: "Decision: do operating conditions allow expansion?",
        },
      ],
    },
    {
      title: {
        fr: "Rapprocher l'activité des effets économiques.",
        en: "Connect activity to economic effects.",
      },
      body: {
        fr: "Les résultats sont comparés à la référence ajustée. La finance valide les gains éligibles et les coûts à déduire. Nous documentons les écarts, y compris lorsqu'un objectif n'est pas atteint.",
        en: "Results are compared to the adjusted baseline. Finance validates eligible gains and costs to deduct. We document variances, including when a target is missed.",
      },
      bullets: [
        {
          fr: "Économie : dépense effectivement réduite ou évitée selon les règles convenues.",
          en: "Savings: spend actually reduced or avoided under agreed rules.",
        },
        {
          fr: "Capacité : temps disponible et usage réel de ce temps.",
          en: "Capacity: available time and how that time is actually used.",
        },
        {
          fr: "Marge : contribution supplémentaire après coûts variables et coûts du changement.",
          en: "Margin: incremental contribution after variable and change costs.",
        },
        {
          fr: "Trésorerie : effet sur les délais et les encaissements, suivi séparément.",
          en: "Cash: effect on delays and collections, tracked separately.",
        },
      ],
    },
    {
      title: {
        fr: "Faire durer ce qui fonctionne.",
        en: "Make what works last.",
      },
      body: {
        fr: "Nous transférons les pratiques, définissons les responsables de maintien et fixons la fréquence de revue. Une nouvelle extension est décidée à partir des résultats, des capacités de l'équipe et du coût marginal.",
        en: "We transfer practices, define sustainment owners and set review cadence. Further expansion is decided from results, team capacity and marginal cost.",
      },
      bullets: [
        {
          fr: "Sortie : documentation, indicateurs, ownership et plan de continuité.",
          en: "Output: documentation, indicators, ownership and continuity plan.",
        },
        {
          fr: "Décision : maintenir, corriger, étendre ou arrêter.",
          en: "Decision: maintain, correct, expand or stop.",
        },
      ],
    },
  ] as { title: L; body: L; bullets: L[] }[],
  rolesTitle: {
    fr: "Des rôles explicites, dès le départ.",
    en: "Explicit roles from the start.",
  } as L,
  roles: [
    {
      title: { fr: "Direction générale", en: "Executive leadership" },
      body: {
        fr: "Porte la priorité, arbitre les investissements et décide des transformations.",
        en: "Owns the priority, arbitrates investment and decides transformations.",
      },
    },
    {
      title: { fr: "Finance", en: "Finance" },
      body: {
        fr: "Valide la référence, les règles d'attribution et la matérialisation des gains.",
        en: "Validates the baseline, attribution rules and materialization of gains.",
      },
    },
    {
      title: { fr: "TWM et opérations", en: "TWM and operations" },
      body: {
        fr: "TWM pilote l'exécution ; les responsables métier valident les changements et organisent leur adoption.",
        en: "TWM leads execution; business owners validate changes and organize adoption.",
      },
    },
  ] as { title: L; body: L }[],
  ctaLabel: {
    fr: "Discuter de votre premier chantier",
    en: "Discuss your first workstream",
  } as L,
} as const;

// ---------------------------------------------------------------------------
// /technology — shapes aligned with TechnologyPage.tsx
// ---------------------------------------------------------------------------

export const technologyPage = {
  leadTitle: {
    fr: "Les moyens de réaliser. Le cadre pour garder le contrôle.",
    en: "The means to deliver. The frame to keep control.",
  } as L,
  leadBody: {
    fr: "Performance OS désigne le cadre de pilotage et d'exécution proposé par TWM : données, processus, outils et contrôles réunis autour d'un objectif économique.",
    en: "Performance OS is TWM's steering and execution frame: data, process, tools and controls gathered around an economic objective.",
  } as L,
  architectureTitle: {
    fr: "Une architecture adaptée à votre situation.",
    en: "An architecture adapted to your situation.",
  } as L,
  architectureBody: {
    fr: "Performance OS n'est pas un abonnement logiciel standard. C'est une façon d'organiser une mission et ses moyens de réalisation, en s'appuyant autant que possible sur vos outils existants. Les composants retenus dépendent du périmètre : connexions de données, automatisations, assistants IA, interfaces métier ou tableaux de suivi. Leur disponibilité, leur coût et leur niveau de contrôle sont précisés dans la proposition.",
    en: "Performance OS is not a standard software subscription. It is a way to organize an engagement and its delivery means, relying as much as possible on your existing tools. Components depend on scope: data connections, automations, AI assistants, business interfaces or tracking boards. Availability, cost and control level are specified in the proposal.",
  } as L,
  dataTitle: {
    fr: "De la donnée à la décision.",
    en: "From data to decision.",
  } as L,
  pillars: [
    {
      title: { fr: "Observer", en: "Observe" },
      body: {
        fr: "Rassembler les données utiles et documenter leur origine, leur qualité et les droits d'accès.",
        en: "Gather useful data and document origin, quality and access rights.",
      },
    },
    {
      title: { fr: "Exécuter", en: "Execute" },
      body: {
        fr: "Orchestrer les tâches avec des outils existants ou des composants adaptés. Prévoir les exceptions et la validation humaine.",
        en: "Orchestrate tasks with existing tools or adapted components. Plan exceptions and human validation.",
      },
    },
    {
      title: { fr: "Piloter", en: "Steer" },
      body: {
        fr: "Relier activité, qualité et gains dans un registre partagé. Rendre visibles les écarts et les décisions.",
        en: "Connect activity, quality and gains in a shared register. Make variances and decisions visible.",
      },
    },
  ] as { title: L; body: L }[],
  meansTitle: {
    fr: "Un moyen sélectionné sur sa pertinence.",
    en: "A means selected for relevance.",
  } as L,
  meansBody: {
    fr: "L'IA peut assister l'analyse, la recherche, la préparation et le traitement de documents. Son usage se décide en fonction du besoin, de la fiabilité attendue et des données concernées. Une règle simple, une intégration classique ou une évolution de processus peuvent être plus pertinentes. Le choix se fait sur le coût total, la qualité, l'exploitabilité et la possibilité de maintenir la solution.",
    en: "AI can assist analysis, research, preparation and document processing. Its use is decided by need, expected reliability and the data involved. A simple rule, a classic integration or a process change can be more relevant. The choice rests on total cost, quality, operability and maintainability.",
  } as L,
  controlsTitle: {
    fr: "Des exigences traduites en décisions concrètes.",
    en: "Requirements translated into concrete decisions.",
  } as L,
  controlsBody: {
    fr: "Ces exigences sont à cadrer pour chaque mission avec les responsables concernés. Le choix d'un outil européen ou d'un hébergement en Europe ne suffit pas, à lui seul, à établir la conformité d'un dispositif.",
    en: "These requirements must be framed for each engagement with the relevant owners. Choosing a European tool or European hosting alone does not establish compliance.",
  } as L,
  controls: [
    {
      fr: "Accès : limiter les droits aux personnes et aux systèmes qui en ont besoin.",
      en: "Access: limit rights to people and systems that need them.",
    },
    {
      fr: "Données : préciser catégories, finalités, durées de conservation et conditions de suppression.",
      en: "Data: specify categories, purposes, retention and deletion conditions.",
    },
    {
      fr: "Prestataires : examiner hébergement, sous-traitants, transferts et conditions d'utilisation des données.",
      en: "Vendors: review hosting, subprocessors, transfers and data-use terms.",
    },
    {
      fr: "Décisions : définir les validations humaines et les exceptions qui nécessitent un arbitrage.",
      en: "Decisions: define human approvals and exceptions that need escalation.",
    },
    {
      fr: "Traçabilité : documenter les changements, les contrôles et les incidents selon le périmètre.",
      en: "Traceability: document changes, controls and incidents for the scope.",
    },
    {
      fr: "Réversibilité : convenir des exports, de la documentation et des conditions de reprise.",
      en: "Reversibility: agree exports, documentation and take-back conditions.",
    },
  ] as L[],
  practiceTitle: {
    fr: "Des pratiques testées au sein de TWM.",
    en: "Practices tested inside TWM.",
  } as L,
  practiceBody: {
    fr: "TWM utilise des assistants et automatisations internes pour la recherche, la préparation de documents et le suivi de certaines tâches. Les décisions, validations et relations clients restent sous responsabilité humaine. Cette pratique nourrit les choix d'exécution. Elle ne constitue pas, à elle seule, une preuve de gains économiques chez un client.",
    en: "TWM uses internal assistants and automations for research, document preparation and tracking some tasks. Decisions, approvals and client relationships remain under human responsibility. This practice informs delivery choices. It is not, by itself, proof of economic gains at a client.",
  } as L,
  ctaLabel: {
    fr: "Voir comment nous mesurons les résultats",
    en: "See how we measure results",
  } as L,
} as const;

// ---------------------------------------------------------------------------
// /a-propos — shapes consumed by About.tsx
// ---------------------------------------------------------------------------

export const aboutPage = {
  eyebrow: { fr: "À propos", en: "About" } as L,
  leadTitle: {
    fr: "Une approche de dirigeant. Une discipline d'exécution.",
    en: "A leadership approach. An execution discipline.",
  } as L,
  leadBody: {
    fr: "TWM Advisory accompagne les organisations qui veulent transformer une priorité économique en changement opérationnel concret.",
    en: "TWM Advisory supports organizations that want to turn an economic priority into concrete operational change.",
  } as L,
  founder: {
    title: { fr: "Tannous Mekari", en: "Tannous Mekari" } as L,
    body: {
      fr: "Le parcours de Tannous Mekari associe 17 années d'expérience en e-commerce, développement d'activités et direction opérationnelle. Il travaille en français, en anglais et en arabe. Cette expérience nourrit une conviction : une transformation se juge dans le fonctionnement de l'entreprise, la qualité du service et ses effets économiques. Le fondateur reste votre interlocuteur pour la relation client, les validations et les arbitrages de la mission. Des spécialistes peuvent être mobilisés lorsque le périmètre requiert une expertise complémentaire.",
      en: "Tannous Mekari's path combines 17 years in e-commerce, business development and operational leadership. He works in French, English and Arabic. That experience feeds a conviction: a transformation is judged in how the business runs, service quality and economic effects. The founder remains your counterpart for the client relationship, validations and mission arbitrations. Specialists can be brought in when the scope requires complementary expertise.",
    } as L,
  },
  partner: {
    title: {
      fr: "Un partenaire engagé dans la réalisation.",
      en: "A partner committed to delivery.",
    } as L,
    body: {
      fr: "Nous rapprochons le diagnostic, les choix de moyens et la mise en œuvre. Notre rôle est de rendre une amélioration possible, de la conduire avec vos équipes et de documenter ce qu'elle produit. Un Operating Performance Partner travaille avec la direction sur un objectif économique et reste impliqué dans son exécution. Le terme décrit notre mode d'intervention ; il ne désigne ni une prise de participation ni un mandat de gestion.",
      en: "We connect diagnosis, choice of means and implementation. Our role is to make an improvement possible, lead it with your teams and document what it produces. An Operating Performance Partner works with leadership on an economic objective and stays involved in execution. The term describes our mode of engagement; it does not mean an equity stake or a management mandate.",
    } as L,
  },
  valuesTitle: {
    fr: "Clarté dans les objectifs. Rigueur dans les preuves.",
    en: "Clarity in objectives. Rigor in evidence.",
  } as L,
  values: [
    {
      id: "responsabilite",
      title: { fr: "Responsabilité", en: "Accountability" },
      body: {
        fr: "Un périmètre défini, des responsables identifiés et des décisions documentées.",
        en: "A defined scope, identified owners and documented decisions.",
      },
    },
    {
      id: "mesure",
      title: { fr: "Mesure", en: "Measurement" },
      body: {
        fr: "Des hypothèses explicites, des gains qualifiés et une lecture partagée avec la finance.",
        en: "Explicit assumptions, qualified gains and a shared reading with finance.",
      },
    },
    {
      id: "maitrise",
      title: { fr: "Maîtrise", en: "Control" },
      body: {
        fr: "Des choix adaptés aux équipes, à la confidentialité et à la continuité de l'activité.",
        en: "Choices adapted to teams, confidentiality and continuity of operations.",
      },
    },
  ] as Card[],
  audience: {
    title: {
      fr: "Les organisations où le temps expert et la qualité comptent.",
      en: "Organizations where expert time and quality matter.",
    } as L,
    body: {
      fr: "Directions de PME, entreprises de services, cabinets de conseil, professions du chiffre et du droit : le point commun est une activité où la capacité, la fiabilité et la marge dépendent directement des opérations. Le périmètre et les contrôles tiennent compte des obligations propres à chaque métier. Les décisions professionnelles qui exigent un jugement expert restent validées par les personnes habilitées.",
      en: "SME leadership teams, service businesses, consulting firms, accounting and legal professions: the common thread is activity where capacity, reliability and margin depend directly on operations. Scope and controls account for each profession's obligations. Professional decisions that require expert judgment remain validated by authorized people.",
    } as L,
  },
  cta: {
    label: { fr: "Échanger avec TWM", en: "Talk with TWM" },
    href: "/contact",
  } as Cta,
} as const;

// ---------------------------------------------------------------------------
// /impact — six illustrative cases
// ---------------------------------------------------------------------------

export const impactCases: ImpactCase[] = [
  {
    slug: "depenses-outils",
    category: { fr: "Coûts", en: "Costs" },
    title: {
      fr: "Rationaliser les dépenses d'outils",
      en: "Rationalize tool spend",
    },
    situation: {
      fr: "Des abonnements se cumulent, avec des usages partiels et des fonctions qui se recouvrent.",
      en: "Subscriptions stack up, with partial usage and overlapping features.",
    },
    intervention: {
      fr: "Cartographier contrats, usages et dépendances. Décider des suppressions, consolidations et renégociations, puis accompagner la transition.",
      en: "Map contracts, usage and dependencies. Decide on removals, consolidations and renegotiations, then support the transition.",
    },
    measure: {
      fr: "Dépenses réellement supprimées sur la période, nettes des coûts de sortie, de migration et des nouveaux outils.",
      en: "Spend actually removed over the period, net of exit, migration and replacement tool costs.",
    },
    proofs: {
      fr: "Contrats, factures, données d'usage et validation finance.",
      en: "Contracts, invoices, usage data and finance validation.",
    },
    attention: {
      fr: "Maintenir les fonctions critiques et intégrer les engagements contractuels. Une économie annualisée n'est pas une économie déjà réalisée.",
      en: "Keep critical functions and respect contractual commitments. An annualized saving is not a realized saving.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
  {
    slug: "operations-expertes",
    category: { fr: "Capacité", en: "Capacity" },
    title: {
      fr: "Redonner de la capacité aux experts",
      en: "Give capacity back to experts",
    },
    situation: {
      fr: "La préparation de dossiers, les synthèses et les reprises absorbent une part importante du temps expert.",
      en: "File preparation, summaries and rework absorb a large share of expert time.",
    },
    intervention: {
      fr: "Simplifier le flux, structurer les données et assister la préparation. Conserver la revue par les experts et organiser l'utilisation du temps libéré.",
      en: "Simplify the flow, structure data and assist preparation. Keep expert review and organize how freed time is used.",
    },
    measure: {
      fr: "Temps par dossier à qualité comparable, taux de reprise, volume traité et utilisation de la capacité libérée.",
      en: "Time per file at comparable quality, rework rate, volume processed and use of freed capacity.",
    },
    proofs: {
      fr: "Échantillons comparables, mesures de temps, contrôle qualité et données d'activité.",
      en: "Comparable samples, time measures, quality control and activity data.",
    },
    attention: {
      fr: "Ne pas transformer automatiquement des heures en économies salariales. Suivre la contribution économique seulement lorsqu'elle est matérialisée.",
      en: "Do not automatically convert hours into payroll savings. Track economic contribution only when it is materialized.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
  {
    slug: "facturation-marge",
    category: { fr: "Marge", en: "Margin" },
    title: {
      fr: "Réduire les prestations non facturées",
      en: "Reduce unbilled work",
    },
    situation: {
      fr: "Le travail réalisé n'est pas toujours rapproché des engagements et des éléments facturables.",
      en: "Work delivered is not always reconciled with commitments and billable items.",
    },
    intervention: {
      fr: "Relier contrats, activité et facturation. Faire examiner les écarts par les responsables habilités avant toute régularisation.",
      en: "Connect contracts, activity and billing. Have authorized owners review gaps before any regularization.",
    },
    measure: {
      fr: "Contribution incrémentale des prestations éligibles facturées, après coûts associés ; encaissement suivi séparément.",
      en: "Incremental contribution from eligible billed items after related costs; cash collection tracked separately.",
    },
    proofs: {
      fr: "Contrats, relevés d'activité, factures, avoirs et rapprochement financier.",
      en: "Contracts, activity logs, invoices, credit notes and financial reconciliation.",
    },
    attention: {
      fr: "Vérifier l'éligibilité contractuelle. Éviter de compter deux fois un même gain dans les revenus et la trésorerie.",
      en: "Check contractual eligibility. Avoid double-counting the same gain in revenue and cash.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
  {
    slug: "back-office",
    category: { fr: "Opérations", en: "Operations" },
    title: {
      fr: "Fiabiliser un back-office sous tension",
      en: "Stabilize a strained back office",
    },
    situation: {
      fr: "Ressaisies et exceptions ralentissent le traitement et génèrent des erreurs évitables.",
      en: "Re-keying and exceptions slow processing and create avoidable errors.",
    },
    intervention: {
      fr: "Supprimer les étapes inutiles, connecter les outils et automatiser les tâches stables. Prévoir un circuit humain pour les exceptions.",
      en: "Remove unnecessary steps, connect tools and automate stable tasks. Keep a human path for exceptions.",
    },
    measure: {
      fr: "Coût par opération, délai de traitement, taux d'erreur et qualité du service.",
      en: "Cost per operation, processing time, error rate and service quality.",
    },
    proofs: {
      fr: "Journaux de traitement, volumes comparables, coûts et contrôles qualité.",
      en: "Processing logs, comparable volumes, costs and quality controls.",
    },
    attention: {
      fr: "Déduire les coûts récurrents de la solution. Surveiller les incidents et l'effet sur les clients internes.",
      en: "Deduct recurring solution costs. Monitor incidents and the effect on internal clients.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
  {
    slug: "prestations-externes",
    category: { fr: "Coûts", en: "Costs" },
    title: {
      fr: "Réduire les prestations récurrentes évitables",
      en: "Reduce avoidable recurring external services",
    },
    situation: {
      fr: "Des travaux récurrents sont externalisés alors qu'une partie pourrait être simplifiée ou réalisée avec les moyens internes.",
      en: "Recurring work is outsourced while part of it could be simplified or handled internally.",
    },
    intervention: {
      fr: "Analyser les missions, distinguer expertise indispensable et tâches répétitives, puis organiser une reprise limitée avec transfert de compétences.",
      en: "Analyze engagements, separate essential expertise from repetitive tasks, then organize a limited take-back with skills transfer.",
    },
    measure: {
      fr: "Dépense externe supprimée, nette du coût interne supplémentaire, des outils et du transfert.",
      en: "External spend removed, net of added internal cost, tools and transfer.",
    },
    proofs: {
      fr: "Factures, périmètres de prestation, charge interne et validation des responsables.",
      en: "Invoices, service scopes, internal load and owner validation.",
    },
    attention: {
      fr: "Conserver les compétences, responsabilités et indépendances requises. Une charge déplacée n'est pas nécessairement une économie.",
      en: "Preserve required skills, responsibilities and independence. Shifted load is not necessarily a saving.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
  {
    slug: "cycle-client",
    category: { fr: "Service & trésorerie", en: "Service & cash" },
    title: {
      fr: "Accélérer le cycle de traitement client",
      en: "Accelerate the client processing cycle",
    },
    situation: {
      fr: "Des informations manquantes et des validations lentes retardent la livraison puis la facturation.",
      en: "Missing information and slow validations delay delivery and then billing.",
    },
    intervention: {
      fr: "Clarifier les étapes, les responsabilités et les pièces attendues. Automatiser les rappels utiles et suivre les exceptions.",
      en: "Clarify steps, responsibilities and required inputs. Automate useful reminders and track exceptions.",
    },
    measure: {
      fr: "Délai de cycle, dossiers en attente, taux de reprise et délai d'encaissement.",
      en: "Cycle time, files waiting, rework rate and cash collection delay.",
    },
    proofs: {
      fr: "Horodatages métier, données de facturation et encaissements rapprochés.",
      en: "Operational timestamps, billing data and reconciled collections.",
    },
    attention: {
      fr: "Un encaissement plus rapide améliore la trésorerie ; il n'augmente pas mécaniquement l'EBITDA.",
      en: "Faster collection improves cash; it does not automatically increase EBITDA.",
    },
    cta: {
      label: {
        fr: "Ce levier existe-t-il chez vous ?",
        en: "Does this lever exist in your organization?",
      },
      href: "/demarrer",
    },
  },
];

export function getImpactCase(slug: string): ImpactCase | undefined {
  return impactCases.find((c) => c.slug === slug);
}

export function getAllImpactSlugs(): string[] {
  return impactCases.map((c) => c.slug);
}

// ---------------------------------------------------------------------------
// /contact — shapes consumed by Contact.tsx
// ---------------------------------------------------------------------------

export const contactPage = {
  leadTitle: {
    fr: "Commençons par votre priorité économique.",
    en: "Let's start with your economic priority.",
  } as L,
  leadBody: {
    fr: "Un premier échange de 30 minutes pour comprendre votre situation, identifier un périmètre et décider si un Performance Scan est pertinent.",
    en: "A 30-minute first conversation to understand your situation, identify a scope and decide whether a Performance Scan is relevant.",
  } as L,
  formTitle: {
    fr: "Une priorité suffit.",
    en: "One priority is enough.",
  } as L,
  fieldsNote: {
    fr: "Nom · Email professionnel · Organisation · Votre priorité économique · Disponibilités facultatives.",
    en: "Name · Professional email · Organization · Your economic priority · Optional availability.",
  } as L,
  formBody: {
    fr: "À l'issue de l'échange : un premier périmètre à examiner, les informations nécessaires et une décision sur la suite à donner. Pour préparer la discussion : la friction principale, l'équipe concernée et l'échéance de votre décision. Aucun document confidentiel n'est nécessaire à ce stade.",
    en: "After the conversation: an initial scope to examine, the information needed and a decision on next steps. To prepare the discussion: the main friction, the team involved and your decision deadline. No confidential documents are needed at this stage.",
  } as L,
  note: {
    fr: "Premier échange de 30 minutes, sans engagement.",
    en: "Initial 30-minute conversation, with no commitment.",
  } as L,
  email: "tannous@twm.expert",
  noAutoSend: {
    fr: "Version préparée : Préparer mon message → relire → Ouvrir ma messagerie. Aucun envoi automatique.",
    en: "Prepared version: Draft my message → review → Open my mailbox. No automatic send.",
  } as L,
  followUpTitle: {
    fr: "Un diagnostic ciblé, si le potentiel le justifie.",
    en: "A focused diagnosis, if the potential warrants it.",
  } as L,
  followUpBody: {
    fr: "Nous précisons ensemble le périmètre, les données et les interlocuteurs. Une proposition décrit ensuite le diagnostic, ses honoraires et la décision attendue. L'exécution fait l'objet d'un accord distinct.",
    en: "Together we clarify scope, data and counterparts. A proposal then describes the diagnosis, its fees and the expected decision. Execution is covered by a separate agreement.",
  } as L,
} as const;

// ---------------------------------------------------------------------------
// FAQ — full list (14 items from editorial brief)
// ---------------------------------------------------------------------------

export const faqItems: FaqItem[] = [
  {
    q: {
      fr: "Qu'est-ce qu'un Operating Performance Partner ?",
      en: "What is an Operating Performance Partner?",
    },
    a: {
      fr: "Un partenaire qui part d'un objectif économique, participe à sa mise en œuvre et mesure les effets avec votre organisation. TWM relie diagnostic, exécution et suivi au sein d'un périmètre de mission défini.",
      en: "A partner that starts from an economic objective, takes part in implementation and measures effects with your organization. TWM connects diagnosis, execution and follow-up within a defined engagement scope.",
    },
  },
  {
    q: {
      fr: "Faut-il avoir un projet IA pour démarrer ?",
      en: "Do you need an AI project to get started?",
    },
    a: {
      fr: "Non. Une dépense à réduire, un processus trop lent ou une capacité insuffisante constituent des points de départ. Les moyens sont choisis après analyse.",
      en: "No. Spend to cut, a process that is too slow, or insufficient capacity are valid starting points. Means are chosen after analysis.",
    },
  },
  {
    q: {
      fr: "Quels résultats pouvez-vous garantir ?",
      en: "What results can you guarantee?",
    },
    a: {
      fr: "Aucun niveau de gain ne peut être promis avant diagnostic. La proposition fixe un périmètre, des objectifs et des règles de mesure. Les résultats dépendent notamment de la qualité des données, des décisions prises et de l'adoption.",
      en: "No gain level can be promised before diagnosis. The proposal sets a scope, objectives and measurement rules. Results depend in particular on data quality, decisions taken and adoption.",
    },
  },
  {
    q: {
      fr: "Comment fonctionne le gain-share ?",
      en: "How does gain-share work?",
    },
    a: {
      fr: "Une part de la rémunération peut être liée aux gains éligibles, réalisés et validés selon un protocole convenu avant exécution. Le taux, les coûts déduits, la période, les exclusions et le règlement des écarts sont contractuels.",
      en: "Part of the fee can be tied to eligible gains that are realized and validated under a protocol agreed before execution. Rate, deducted costs, period, exclusions and variance handling are contractual.",
    },
  },
  {
    q: {
      fr: "Êtes-vous rémunéré uniquement au succès ?",
      en: "Are you paid only on success?",
    },
    a: {
      fr: "Le modèle proposé comprend un diagnostic au forfait et un socle fixe pour l'exécution. Une part variable peut s'y ajouter lorsque la mesure et l'attribution sont suffisamment robustes. Les honoraires fixes restent dus selon les conditions convenues.",
      en: "The proposed model includes a fixed-fee diagnosis and a fixed base for execution. A variable share can be added when measurement and attribution are robust enough. Fixed fees remain due under the agreed terms.",
    },
  },
  {
    q: {
      fr: "Le temps gagné est-il compté comme une économie ?",
      en: "Is time saved counted as a saving?",
    },
    a: {
      fr: "Pas automatiquement. Le temps libéré est d'abord une capacité. Il devient un gain économique lorsqu'une dépense est réellement évitée ou qu'une activité supplémentaire génère une contribution démontrable.",
      en: "Not automatically. Freed time is first capacity. It becomes an economic gain when spend is actually avoided or additional activity generates a demonstrable contribution.",
    },
  },
  {
    q: {
      fr: "EBITDA, marge et trésorerie : mesurez-vous la même chose ?",
      en: "EBITDA, margin and cash: do you measure the same thing?",
    },
    a: {
      fr: "Non. Les effets sur le résultat opérationnel, la capacité et les encaissements sont suivis séparément. Le périmètre de l'indicateur EBITDA et les retraitements retenus sont convenus avec la finance ; il n'est pas assimilé automatiquement au résultat d'exploitation.",
      en: "No. Effects on operating result, capacity and collections are tracked separately. The EBITDA indicator scope and agreed adjustments are set with finance; it is not automatically treated as operating profit.",
    },
  },
  {
    q: {
      fr: "Qui valide les gains ?",
      en: "Who validates the gains?",
    },
    a: {
      fr: "Les responsables désignés chez le client, avec la finance, sur la base des données et des règles convenues. TWM documente les calculs. Une procédure de revue et de désaccord est prévue dans la proposition.",
      en: "Designated client owners, with finance, based on the data and agreed rules. TWM documents the calculations. A review and disagreement process is set out in the proposal.",
    },
  },
  {
    q: {
      fr: "Que se passe-t-il si les gains ne se réalisent pas ?",
      en: "What happens if the gains are not realized?",
    },
    a: {
      fr: "Les écarts sont analysés et le chantier est corrigé, redimensionné ou arrêté selon les règles convenues. Une part variable fondée sur des gains réalisés ne se déclenche pas sur une simple projection. Les honoraires fixes suivent le contrat.",
      en: "Variances are analyzed and the workstream is corrected, resized or stopped under the agreed rules. A variable share based on realized gains does not trigger on a projection alone. Fixed fees follow the contract.",
    },
  },
  {
    q: {
      fr: "De quelles données avez-vous besoin ?",
      en: "What data do you need?",
    },
    a: {
      fr: "D'abord d'un contexte métier. Les données détaillées ne sont demandées qu'après cadrage : volumes, dépenses, temps, qualité ou facturation selon le périmètre. Les accès et la confidentialité sont définis avant partage.",
      en: "First, a business context. Detailed data is requested only after framing: volumes, spend, time, quality or billing depending on scope. Access and confidentiality are defined before sharing.",
    },
  },
  {
    q: {
      fr: "Faut-il remplacer nos outils ?",
      en: "Do we need to replace our tools?",
    },
    a: {
      fr: "Pas nécessairement. Nous privilégions l'évolution des processus et l'utilisation des outils existants lorsque cela est pertinent. Toute nouvelle solution est évaluée avec son coût total et ses conditions de reprise.",
      en: "Not necessarily. We favor process evolution and use of existing tools when relevant. Any new solution is assessed with its total cost and take-back conditions.",
    },
  },
  {
    q: {
      fr: "Combien de temps dure une mission ?",
      en: "How long does an engagement last?",
    },
    a: {
      fr: "La durée dépend du périmètre, des données et des validations nécessaires. Nous proposons un premier diagnostic délimité, puis des jalons d'exécution et de mesure. Aucun délai standard n'est annoncé sans qualification.",
      en: "Duration depends on scope, data and required validations. We propose a bounded initial diagnosis, then execution and measurement milestones. No standard timeline is announced without qualification.",
    },
  },
  {
    q: {
      fr: "Qui conserve la responsabilité des décisions ?",
      en: "Who retains responsibility for decisions?",
    },
    a: {
      fr: "Votre direction et vos responsables habilités. Les responsabilités de pilotage, de validation, d'exploitation et de maintenance sont précisées dans la mission.",
      en: "Your leadership and authorized owners. Steering, validation, operations and maintenance responsibilities are specified in the engagement.",
    },
  },
  {
    q: {
      fr: "Performance OS est-il une plateforme logicielle ?",
      en: "Is Performance OS a software platform?",
    },
    a: {
      fr: "Le nom désigne le cadre de pilotage et d'exécution proposé par TWM. Les composants sont définis pour chaque mission. Il ne suppose pas l'achat d'une plateforme propriétaire standard.",
      en: "The name designates TWM's proposed steering and execution frame. Components are defined per engagement. It does not imply purchasing a standard proprietary platform.",
    },
  },
];
