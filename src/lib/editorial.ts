import type { Lang } from "@/lib/content";

export type L = Record<Lang, string>;

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
    fr: "TWM Advisory identifie et active les leviers économiques de votre organisation, en exécution conjointe avec vos équipes et votre direction financière.",
    en: "TWM Advisory identifies and activates your organization's economic levers, delivered jointly with your teams and your finance function.",
  } as L,
} as const;

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
  title: L;
  body: L;
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

// ---------------------------------------------------------------------------
// Home editorial
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
        fr: "Un diagnostic économique lucide.",
        en: "A clear-eyed economic diagnosis.",
      },
      {
        fr: "Une exécution opérationnelle assumée.",
        en: "Operational execution we own.",
      },
      {
        fr: "Une mesure partagée avec votre finance.",
        en: "Results measured together with your finance team.",
      },
    ] as L[],
    body: {
      fr: "Nous activons les leviers économiques qui existent déjà dans votre organisation — coûts, capacité, marge — et nous les exécutons avec vos équipes, en alignement constant avec votre direction financière. Pas un audit de plus : une trajectoire de résultat, mesurée.",
      en: "We activate the economic levers that already exist inside your organization — cost, capacity, margin — and we execute them with your teams, in constant alignment with your finance function. Not another audit: a measured path to results.",
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
      fr: "Notre point de départ",
      en: "Where we start",
    } as L,
    title: {
      fr: "Votre compte de résultat.",
      en: "Your P&L.",
    } as L,
    pillars: [
      {
        id: "couts",
        title: { fr: "Ce que vous dépensez", en: "What you spend" },
        body: {
          fr: "Outils, prestataires, sous-traitance : nous cartographions la dépense réelle et son utilité opérationnelle.",
          en: "Tools, vendors, subcontracting: we map real spend against its operational usefulness.",
        },
      },
      {
        id: "capacite",
        title: { fr: "Ce que vous produisez", en: "What you produce" },
        body: {
          fr: "Le temps de vos équipes, absorbé par des tâches à faible valeur, est une capacité à reconquérir.",
          en: "Your teams' time, absorbed by low-value tasks, is capacity waiting to be reclaimed.",
        },
      },
      {
        id: "marge",
        title: { fr: "Ce que vous gardez", en: "What you keep" },
        body: {
          fr: "Facturation, cycle client, fuites de marge : chaque euro non capté est un euro perdu deux fois.",
          en: "Billing, the customer cycle, margin leakage: every euro not captured is lost twice over.",
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
      label: { fr: "Priorité", en: "Priority" },
      title: {
        fr: "Nous commençons par ce qui pèse sur votre résultat.",
        en: "We start with what weighs on your bottom line.",
      },
      body: {
        fr: "Avant toute transformation, nous regardons ce qui coûte, ce qui ralentit et ce qui fuit. Trois zones concentrent l'essentiel de la performance récupérable.",
        en: "Before any transformation, we look at what costs, what slows down and what leaks. Three areas concentrate most of the recoverable performance.",
      },
      cards: [
        {
          id: "couts-maitrises",
          title: { fr: "Coûts maîtrisés", en: "Costs under control" },
          body: {
            fr: "Outils, licences et prestataires alignés sur un usage réel, sans gras contractuel.",
            en: "Tools, licenses and vendors aligned with real usage, with no contractual slack.",
          },
        },
        {
          id: "capacite-retrouvee",
          title: { fr: "Capacité retrouvée", en: "Capacity reclaimed" },
          body: {
            fr: "Des équipes dégagées des tâches répétitives, redéployées sur ce qui crée de la valeur.",
            en: "Teams freed from repetitive tasks, redeployed to what creates value.",
          },
        },
        {
          id: "marge-protegee",
          title: { fr: "Marge protégée", en: "Margin protected" },
          body: {
            fr: "Une facturation exhaustive et un cycle client resserré, sans marge laissée sur la table.",
            en: "Complete billing and a tighter customer cycle, with no margin left on the table.",
          },
        },
      ] as Card[],
      cta: { label: { fr: "Explorer la performance", en: "Explore performance" }, href: "/performance" },
    },
    {
      id: "engagement",
      index: "02",
      label: { fr: "Engagement", en: "Commitment" },
      title: {
        fr: "Nous nous engageons sur l'exécution, pas seulement sur le conseil.",
        en: "We commit to execution, not just advice.",
      },
      body: {
        fr: "Une méthode en cinq temps, du diagnostic à l'ancrage, pour transformer une intention en résultat mesurable.",
        en: "A five-step method, from diagnosis to embedding, turning an intention into a measurable result.",
      },
      steps: [
        {
          id: "identifier",
          label: { fr: "1", en: "1" },
          title: { fr: "Identifier", en: "Identify" },
          body: {
            fr: "Repérer les leviers économiques les plus significatifs dans votre organisation.",
            en: "Pinpoint the most significant economic levers in your organization.",
          },
        },
        {
          id: "chiffrer",
          label: { fr: "2", en: "2" },
          title: { fr: "Chiffrer", en: "Quantify" },
          body: {
            fr: "Estimer l'impact économique de chaque levier, avec votre finance.",
            en: "Estimate the economic impact of each lever, together with your finance team.",
          },
        },
        {
          id: "executer",
          label: { fr: "3", en: "3" },
          title: { fr: "Exécuter", en: "Execute" },
          body: {
            fr: "Déployer les actions sur le terrain, avec vos équipes, sans attendre un plan idéal.",
            en: "Deploy the actions on the ground, with your teams, without waiting for a perfect plan.",
          },
        },
        {
          id: "mesurer",
          label: { fr: "4", en: "4" },
          title: { fr: "Mesurer", en: "Measure" },
          body: {
            fr: "Suivre les résultats avec des indicateurs partagés et validés par la finance.",
            en: "Track results with shared indicators validated by finance.",
          },
        },
        {
          id: "ancrer",
          label: { fr: "5", en: "5" },
          title: { fr: "Ancrer", en: "Embed" },
          body: {
            fr: "Inscrire les nouveaux réflexes dans les routines de gestion, durablement.",
            en: "Embed the new habits into management routines, for the long run.",
          },
        },
      ] as Step[],
      cta: { label: { fr: "Découvrir la méthode", en: "Discover the method" }, href: "/methode" },
    },
    {
      id: "measure",
      index: "03",
      label: { fr: "Mesure", en: "Measurement" },
      title: {
        fr: "Chaque levier est mesuré, jamais supposé.",
        en: "Every lever is measured, never assumed.",
      },
      body: {
        fr: "Nous ne présentons pas d'estimations théoriques : nous construisons, avec votre direction financière, les indicateurs qui prouvent l'impact réel — et nous alignons parfois notre rémunération sur ces résultats.",
        en: "We don't present theoretical estimates: with your finance function, we build the indicators that prove real impact — and we sometimes align our fees with those results.",
      },
      cards: [
        {
          id: "remuneration",
          title: {
            fr: "Une rémunération alignée sur le résultat",
            en: "Fees aligned with results",
          },
          body: {
            fr: "Une partie de notre rémunération peut être indexée sur les gains mesurés, validés conjointement avec votre finance.",
            en: "Part of our fee can be indexed to measured gains, validated jointly with your finance team.",
          },
        },
      ] as Card[],
      cta: { label: { fr: "Questions fréquentes", en: "Frequently asked questions" }, href: "/faq" },
    },
    {
      id: "means",
      index: "04",
      label: { fr: "Moyens", en: "Means" },
      title: {
        fr: "Un système d'exploitation de la performance, pas un outil de plus.",
        en: "An operating system for performance, not another tool.",
      },
      body: {
        fr: "Nos interventions s'appuient sur un socle logiciel léger — le Performance OS — qui centralise diagnostics, plans d'action et indicateurs, sans surcharger vos équipes de nouveaux outils.",
        en: "Our engagements rely on a lightweight software backbone — the Performance OS — that centralizes diagnostics, action plans and indicators, without burdening your teams with new tools.",
      },
      cta: { label: { fr: "Voir la technologie", en: "See the technology" }, href: "/technology" },
    },
    {
      id: "terrain",
      index: "05",
      label: { fr: "Terrain", en: "On the ground" },
      title: {
        fr: "Une expérience opérationnelle, pas seulement un cabinet de conseil.",
        en: "Operating experience, not just an advisory practice.",
      },
      body: {
        fr: "Fondée par Tannous, TWM Advisory s'appuie sur une expérience de direction opérationnelle et financière, pas uniquement sur des méthodologies de conseil. Nous parlons le langage du terrain et celui du comité de direction.",
        en: "Founded by Tannous, TWM Advisory draws on operating and financial leadership experience, not just consulting frameworks. We speak the language of the front line and of the executive committee alike.",
      },
      cta: { label: { fr: "À propos", en: "About us" }, href: "/a-propos" },
    },
    {
      id: "levers",
      index: "06",
      label: { fr: "Leviers", en: "Levers" },
      title: {
        fr: "Des leviers concrets, illustrés par des situations réelles.",
        en: "Concrete levers, illustrated by real situations.",
      },
      body: {
        fr: "Six familles de leviers économiques, chacune associée à des situations typiques que nous rencontrons chez nos clients.",
        en: "Six families of economic levers, each mapped to typical situations we encounter with our clients.",
      },
      items: [
        { fr: "Dépenses & outils", en: "Spend & tools" },
        { fr: "Opérations expertes", en: "Expert operations" },
        { fr: "Facturation & marge", en: "Billing & margin" },
      ] as L[],
      cta: { label: { fr: "Voir tous les leviers d'impact", en: "See all impact levers" }, href: "/impact" },
    },
  ] as EditorialSection[],

  faq: {
    label: {
      fr: "FAQ",
      en: "FAQ",
    } as L,
    title: {
      fr: "Questions fréquentes",
      en: "Frequently asked questions",
    } as L,
    items: [
      {
        q: {
          fr: "En quoi différez-vous d'un cabinet de conseil classique ?",
          en: "How are you different from a traditional consulting firm ?",
        },
        a: {
          fr: "Nous ne livrons pas un rapport : nous exécutons les actions avec vos équipes, jusqu'au résultat mesuré.",
          en: "We don't deliver a report: we execute the actions with your teams, through to a measured result.",
        },
      },
      {
        q: {
          fr: "Travaillez-vous avec notre direction financière ?",
          en: "Do you work with our finance function ?",
        },
        a: {
          fr: "Systématiquement. La finance valide le diagnostic, les hypothèses de gain et les résultats mesurés.",
          en: "Systematically. Finance validates the diagnosis, the gain assumptions and the measured results.",
        },
      },
      {
        q: {
          fr: "Comment êtes-vous rémunérés ?",
          en: "How are you compensated ?",
        },
        a: {
          fr: "Un socle fixe pour le diagnostic et l'exécution, complété possiblement par une part variable indexée sur les gains mesurés.",
          en: "A fixed base for diagnosis and execution, optionally complemented by a variable share indexed to measured gains.",
        },
      },
    ] as FaqItem[],
    allLink: {
      href: "/faq",
      label: {
        fr: "Voir toutes les questions",
        en: "See all questions",
      },
    } as Cta,
  },

  cta: {
    title: {
      fr: "La performance de votre organisation",
      en: "Your organization's performance",
    } as L,
    titleEm: {
      fr: "a un potentiel mesurable.",
      en: "has a measurable potential.",
    } as L,
    body: {
      fr: "Un premier échange suffit pour identifier où se situe votre marge de progression économique.",
      en: "A first conversation is enough to identify where your economic upside lies.",
    } as L,
    primary: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
    secondary: { label: { fr: "Voir les leviers d'impact", en: "See the impact levers" }, href: "/impact" },
  },
} as const;

// ---------------------------------------------------------------------------
// /performance
// ---------------------------------------------------------------------------

export const performancePage = {
  eyebrow: { fr: "Performance", en: "Performance" } as L,
  title: { fr: "La performance économique, ligne par ligne.", en: "Economic performance, line by line." } as L,
  lead: {
    fr: "Avant de transformer, nous mesurons. Trois familles de leviers concentrent l'essentiel de la performance récupérable dans une organisation.",
    en: "Before transforming, we measure. Three families of levers concentrate most of the recoverable performance in an organization.",
  } as L,
  pillars: [
    {
      id: "couts",
      title: { fr: "Coûts maîtrisés", en: "Costs under control" },
      body: {
        fr: "Outils, licences, prestataires et sous-traitance : nous confrontons chaque dépense à son usage réel et négocions ce qui doit l'être.",
        en: "Tools, licenses, vendors and subcontracting: we hold every expense against its real usage and renegotiate what needs to be.",
      },
    },
    {
      id: "capacite",
      title: { fr: "Capacité retrouvée", en: "Capacity reclaimed" },
      body: {
        fr: "Le temps de vos équipes est votre actif le plus cher. Nous identifions les tâches à automatiser ou à supprimer pour le libérer.",
        en: "Your teams' time is your most expensive asset. We identify the tasks to automate or eliminate to free it up.",
      },
    },
    {
      id: "marge",
      title: { fr: "Marge protégée", en: "Margin protected" },
      body: {
        fr: "Facturation incomplète, délais de règlement, remises non pilotées : nous resserrons le cycle qui protège votre marge.",
        en: "Incomplete billing, slow collections, uncontrolled discounts: we tighten the cycle that protects your margin.",
      },
    },
  ] as Pillar[],
  approach: {
    title: { fr: "Comment nous procédons", en: "How we proceed" } as L,
    body: {
      fr: "Le diagnostic dure quelques semaines, pas plusieurs mois. Il s'appuie sur vos données existantes — comptables, opérationnelles, commerciales — et sur des entretiens ciblés avec les équipes concernées. Il se conclut par une liste priorisée de leviers, chiffrés et actionnables, validée avec votre direction financière.",
      en: "The diagnosis takes weeks, not months. It relies on your existing data — accounting, operational, commercial — and on targeted interviews with the relevant teams. It concludes with a prioritized list of levers, quantified and actionable, validated with your finance function.",
    } as L,
  },
  cta: {
    title: { fr: "Prêt à chiffrer votre potentiel ?", en: "Ready to quantify your potential?" } as L,
    primary: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
    secondary: { label: { fr: "Découvrir la méthode", en: "Discover the method" }, href: "/methode" },
  },
} as const;

// ---------------------------------------------------------------------------
// /methode
// ---------------------------------------------------------------------------

export const methodePage = {
  eyebrow: { fr: "Méthode", en: "Method" } as L,
  title: { fr: "Cinq étapes, du diagnostic au résultat ancré.", en: "Five steps, from diagnosis to embedded results." } as L,
  lead: {
    fr: "Notre méthode ne s'arrête pas à la recommandation. Elle va jusqu'à l'exécution, la mesure et l'ancrage dans vos routines de gestion.",
    en: "Our method doesn't stop at recommendation. It goes through execution, measurement and embedding into your management routines.",
  } as L,
  steps: [
    {
      id: "identifier",
      label: { fr: "Étape 1", en: "Step 1" },
      title: { fr: "Identifier", en: "Identify" },
      body: {
        fr: "Nous cartographions vos coûts, votre capacité opérationnelle et votre cycle de marge pour repérer les leviers les plus significatifs.",
        en: "We map your costs, operating capacity and margin cycle to spot the most significant levers.",
      },
    },
    {
      id: "chiffrer",
      label: { fr: "Étape 2", en: "Step 2" },
      title: { fr: "Chiffrer", en: "Quantify" },
      body: {
        fr: "Chaque levier est estimé en euros, avec des hypothèses validées par votre direction financière avant tout engagement.",
        en: "Each lever is estimated in monetary terms, with assumptions validated by your finance function before any commitment.",
      },
    },
    {
      id: "executer",
      label: { fr: "Étape 3", en: "Step 3" },
      title: { fr: "Exécuter", en: "Execute" },
      body: {
        fr: "Nous déployons les actions avec vos équipes opérationnelles — négociation, automatisation, réorganisation — sans attendre un plan parfait.",
        en: "We deploy the actions with your operating teams — renegotiation, automation, reorganization — without waiting for a perfect plan.",
      },
    },
    {
      id: "mesurer",
      label: { fr: "Étape 4", en: "Step 4" },
      title: { fr: "Mesurer", en: "Measure" },
      body: {
        fr: "Des indicateurs simples, suivis conjointement avec la finance, prouvent l'impact réel de chaque levier activé.",
        en: "Simple indicators, tracked jointly with finance, prove the real impact of each activated lever.",
      },
    },
    {
      id: "ancrer",
      label: { fr: "Étape 5", en: "Step 5" },
      title: { fr: "Ancrer", en: "Embed" },
      body: {
        fr: "Les nouveaux réflexes sont intégrés dans vos routines de gestion, pour que le gain ne s'évapore pas après notre départ.",
        en: "The new habits are embedded into your management routines, so the gain doesn't fade once we leave.",
      },
    },
  ] as Step[],
  roles: {
    title: { fr: "Qui fait quoi", en: "Who does what" } as L,
    items: [
      {
        id: "twm",
        title: { fr: "TWM Advisory", en: "TWM Advisory" },
        body: {
          fr: "Pilote le diagnostic, chiffre les leviers et exécute les actions sur le terrain avec vos équipes.",
          en: "Leads the diagnosis, quantifies the levers and executes the actions on the ground with your teams.",
        },
      },
      {
        id: "finance",
        title: { fr: "Votre direction financière", en: "Your finance function" },
        body: {
          fr: "Valide les hypothèses de gain, suit les indicateurs et certifie les résultats mesurés.",
          en: "Validates the gain assumptions, tracks the indicators and certifies the measured results.",
        },
      },
      {
        id: "equipes",
        title: { fr: "Vos équipes opérationnelles", en: "Your operating teams" },
        body: {
          fr: "Participent au diagnostic, s'approprient les nouveaux réflexes et font vivre les leviers au quotidien.",
          en: "Take part in the diagnosis, adopt the new habits and keep the levers alive day to day.",
        },
      },
    ] as Card[],
  },
  cta: {
    title: { fr: "Envie de voir la méthode s'appliquer à votre organisation ?", en: "Want to see the method applied to your organization?" } as L,
    primary: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
} as const;

// ---------------------------------------------------------------------------
// /technology — Performance OS
// ---------------------------------------------------------------------------

export const technologyPage = {
  eyebrow: { fr: "Technologie", en: "Technology" } as L,
  title: { fr: "Le Performance OS, notre système d'exploitation de la performance.", en: "The Performance OS, our operating system for performance." } as L,
  lead: {
    fr: "Un socle logiciel léger qui centralise diagnostics, plans d'action et indicateurs — pensé pour s'insérer dans vos outils existants, pas pour les remplacer.",
    en: "A lightweight software backbone that centralizes diagnostics, action plans and indicators — designed to fit into your existing tools, not replace them.",
  } as L,
  pillars: [
    {
      id: "diagnostic",
      title: { fr: "Diagnostic structuré", en: "Structured diagnosis" },
      body: {
        fr: "Vos données de coûts, de capacité et de marge sont consolidées dans un modèle unique, lisible par vos équipes et votre finance.",
        en: "Your cost, capacity and margin data are consolidated into a single model, readable by both your teams and your finance function.",
      },
    },
    {
      id: "plan",
      title: { fr: "Plan d'action vivant", en: "Living action plan" },
      body: {
        fr: "Chaque levier identifié devient une action suivie, avec un responsable, une échéance et un impact chiffré.",
        en: "Every identified lever becomes a tracked action, with an owner, a deadline and a quantified impact.",
      },
    },
    {
      id: "indicateurs",
      title: { fr: "Indicateurs partagés", en: "Shared indicators" },
      body: {
        fr: "Un tableau de bord unique, alimenté par vos systèmes, qui sert de référence commune entre les équipes et la finance.",
        en: "A single dashboard, fed by your systems, that serves as a common reference between the teams and finance.",
      },
    },
  ] as Pillar[],
  note: {
    fr: "Le Performance OS n'est pas un outil que vous devez apprendre : c'est le fil qui relie notre exécution à vos systèmes de gestion existants.",
    en: "The Performance OS isn't a tool you need to learn: it's the thread that connects our execution to your existing management systems.",
  } as L,
  cta: {
    title: { fr: "Voir le Performance OS en action", en: "See the Performance OS in action" } as L,
    primary: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
} as const;

// ---------------------------------------------------------------------------
// /a-propos
// ---------------------------------------------------------------------------

export const aboutPage = {
  eyebrow: { fr: "À propos", en: "About" } as L,
  title: { fr: "Une expérience de terrain, au service de votre performance.", en: "Operating experience, in service of your performance." } as L,
  lead: {
    fr: "TWM Advisory a été fondée par Tannous, avec une conviction simple : la performance économique ne se décrète pas dans une salle de réunion, elle se construit sur le terrain, avec la finance comme juge de paix.",
    en: "TWM Advisory was founded by Tannous, with a simple conviction: economic performance isn't decreed in a meeting room — it's built on the ground, with finance as the final arbiter.",
  } as L,
  founder: {
    title: { fr: "Tannous", en: "Tannous" } as L,
    body: {
      fr: "Une expérience de direction opérationnelle et financière, acquise en pilotant des organisations confrontées aux mêmes contraintes que nos clients : coûts sous tension, équipes sur-sollicitées, marge à défendre. Cette expérience nourrit une approche pragmatique, orientée résultat, plutôt qu'une méthodologie de cabinet.",
      en: "Operating and financial leadership experience, gained running organizations facing the same constraints as our clients: costs under pressure, overstretched teams, margin to defend. That experience fuels a pragmatic, results-oriented approach rather than a consulting-firm methodology.",
    } as L,
  },
  values: [
    {
      id: "resultat",
      title: { fr: "Le résultat avant la méthode", en: "Results before methodology" },
      body: {
        fr: "Nous adaptons notre approche à votre organisation, jamais l'inverse.",
        en: "We adapt our approach to your organization, never the other way around.",
      },
    },
    {
      id: "finance",
      title: { fr: "La finance comme partenaire", en: "Finance as a partner" },
      body: {
        fr: "Chaque gain annoncé est validé par votre direction financière, sans exception.",
        en: "Every claimed gain is validated by your finance function, without exception.",
      },
    },
    {
      id: "execution",
      title: { fr: "L'exécution comme engagement", en: "Execution as a commitment" },
      body: {
        fr: "Nous restons jusqu'à ce que le levier soit activé, pas jusqu'à la remise du rapport.",
        en: "We stay until the lever is activated, not until the report is delivered.",
      },
    },
  ] as Card[],
  cta: {
    title: { fr: "Discutons de votre organisation", en: "Let's talk about your organization" } as L,
    primary: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
} as const;

// ---------------------------------------------------------------------------
// /impact — six cases
// ---------------------------------------------------------------------------

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

export const impactCases: ImpactCase[] = [
  {
    slug: "depenses-outils",
    category: { fr: "Dépenses & outils", en: "Spend & tools" },
    title: {
      fr: "Des licences et des outils payés, peu utilisés.",
      en: "Licenses and tools paid for, barely used.",
    },
    situation: {
      fr: "Une organisation accumule des abonnements logiciels au fil des besoins ponctuels, sans revue régulière. Les usages réels divergent fortement des contrats signés.",
      en: "An organization accumulates software subscriptions to meet one-off needs, without regular review. Actual usage diverges sharply from the contracts signed.",
    },
    intervention: {
      fr: "Nous cartographions l'ensemble des outils et licences, confrontons chaque dépense à son usage réel, et renégocions ou résilions ce qui ne se justifie plus.",
      en: "We map every tool and license, hold each expense against real usage, and renegotiate or cancel what no longer holds up.",
    },
    measure: {
      fr: "Réduction mesurée de la dépense logicielle, validée poste par poste avec la direction financière.",
      en: "Measured reduction in software spend, validated line by line with the finance function.",
    },
    proofs: {
      fr: "Cartographie complète des abonnements actifs · taux d'usage réel par outil · économie annualisée validée par la finance.",
      en: "Complete map of active subscriptions · real usage rate per tool · annualized savings validated by finance.",
    },
    attention: {
      fr: "Nous veillons à ne jamais couper un outil réellement utile à la performance des équipes.",
      en: "We're careful never to cut a tool that's genuinely useful to team performance.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
  {
    slug: "operations-expertes",
    category: { fr: "Opérations expertes", en: "Expert operations" },
    title: {
      fr: "Des experts qui passent trop de temps sur des tâches à faible valeur.",
      en: "Experts spending too much time on low-value tasks.",
    },
    situation: {
      fr: "Des collaborateurs qualifiés consacrent une part importante de leur semaine à des tâches répétitives — saisie, contrôle, reformatage — qui pourraient être automatisées.",
      en: "Qualified staff spend a significant share of their week on repetitive tasks — data entry, checks, reformatting — that could be automated.",
    },
    intervention: {
      fr: "Nous identifions les tâches automatisables, mettons en place les automatisations adaptées et réorganisons le temps libéré vers des missions à plus forte valeur.",
      en: "We identify the tasks that can be automated, put the right automations in place, and redirect the freed-up time toward higher-value work.",
    },
    measure: {
      fr: "Heures de capacité experte reconquises par semaine, suivies avec les responsables d'équipe.",
      en: "Expert hours reclaimed per week, tracked with team leads.",
    },
    proofs: {
      fr: "Cartographie du temps par type de tâche · automatisations déployées et adoptées · capacité redéployée sur des missions à valeur.",
      en: "Time breakdown by task type · automations deployed and adopted · capacity redeployed to value-adding work.",
    },
    attention: {
      fr: "L'automatisation reste supervisée par les experts, qui gardent la main sur les décisions.",
      en: "Automation remains supervised by experts, who keep control over decisions.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
  {
    slug: "facturation-marge",
    category: { fr: "Facturation & marge", en: "Billing & margin" },
    title: {
      fr: "Des prestations réalisées, pas toujours facturées.",
      en: "Work delivered, not always billed.",
    },
    situation: {
      fr: "Des heures ou des prestations complémentaires sont réalisées sans être systématiquement retracées dans la facturation, par manque de process ou de temps.",
      en: "Extra hours or add-on work get delivered without being systematically traced through to billing, for lack of process or time.",
    },
    intervention: {
      fr: "Nous mettons en place un process de suivi et de facturation exhaustif, aligné avec les équipes opérationnelles et la comptabilité.",
      en: "We put in place a comprehensive tracking and billing process, aligned with operating teams and accounting.",
    },
    measure: {
      fr: "Taux de facturation exhaustive et marge additionnelle captée, suivis mensuellement avec la finance.",
      en: "Comprehensive billing rate and additional margin captured, tracked monthly with finance.",
    },
    proofs: {
      fr: "Taux de facturation avant / après · marge additionnelle mensuelle mesurée · process de facturation documenté et adopté.",
      en: "Billing rate before / after · additional monthly margin measured · documented and adopted billing process.",
    },
    attention: {
      fr: "Nous veillons à préserver la relation client : l'exhaustivité ne doit jamais devenir de l'agressivité commerciale.",
      en: "We take care to preserve the client relationship: thoroughness should never become commercial aggressiveness.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
  {
    slug: "back-office",
    category: { fr: "Back-office", en: "Back office" },
    title: {
      fr: "Des processus administratifs qui ralentissent tout le reste.",
      en: "Administrative processes slowing everything else down.",
    },
    situation: {
      fr: "Des processus de back-office — validation, saisie, classement — s'appuient sur des circuits manuels longs, générant des retards et des erreurs en cascade.",
      en: "Back-office processes — approvals, data entry, filing — rely on long manual chains, generating delays and cascading errors.",
    },
    intervention: {
      fr: "Nous simplifions les circuits, automatisons les étapes répétitives et clarifions les responsabilités à chaque étape.",
      en: "We simplify the workflows, automate the repetitive steps and clarify accountability at each step.",
    },
    measure: {
      fr: "Délai de traitement réduit et taux d'erreur suivi avant / après, validés avec les équipes concernées.",
      en: "Reduced processing time and error rate tracked before / after, validated with the relevant teams.",
    },
    proofs: {
      fr: "Délai moyen de traitement avant / après · taux d'erreur réduit · circuits simplifiés et documentés.",
      en: "Average processing time before / after · reduced error rate · simplified and documented workflows.",
    },
    attention: {
      fr: "La simplification ne sacrifie jamais les contrôles nécessaires à la conformité.",
      en: "Simplification never sacrifices the controls required for compliance.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
  {
    slug: "prestations-externes",
    category: { fr: "Prestations externes", en: "External services" },
    title: {
      fr: "Des prestataires externes payés au même tarif depuis des années.",
      en: "External vendors paid the same rate for years.",
    },
    situation: {
      fr: "Des contrats avec des prestataires externes n'ont jamais été renégociés, alors que les volumes, les usages ou le marché ont évolué.",
      en: "Contracts with external vendors have never been renegotiated, even though volumes, usage or the market have shifted.",
    },
    intervention: {
      fr: "Nous auditons les contrats en cours, comparons aux conditions de marché et menons les renégociations utiles avec les prestataires clés.",
      en: "We audit the current contracts, benchmark them against market conditions and lead the useful renegotiations with key vendors.",
    },
    measure: {
      fr: "Économie contractuelle annualisée, validée par la direction financière avant signature.",
      en: "Annualized contractual savings, validated by the finance function before signature.",
    },
    proofs: {
      fr: "Audit contractuel complet · comparatif aux conditions de marché · économie contractuelle signée.",
      en: "Complete contract audit · benchmark against market conditions · signed contractual savings.",
    },
    attention: {
      fr: "Nous préservons la qualité de service : une renégociation ne doit jamais dégrader la prestation.",
      en: "We preserve service quality: a renegotiation should never degrade the service delivered.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
  {
    slug: "cycle-client",
    category: { fr: "Cycle client", en: "Customer cycle" },
    title: {
      fr: "Une trésorerie tendue par des délais de paiement trop longs.",
      en: "Cash strained by payment terms that run too long.",
    },
    situation: {
      fr: "Le délai entre la livraison d'une prestation et son encaissement s'allonge, faute de relance systématique ou de process de recouvrement clair.",
      en: "The gap between delivering a service and collecting payment keeps widening, for lack of systematic follow-up or a clear collection process.",
    },
    intervention: {
      fr: "Nous mettons en place un process de relance structuré, des indicateurs de suivi et, si nécessaire, une renégociation des conditions de paiement.",
      en: "We put in place a structured follow-up process, tracking indicators and, where needed, a renegotiation of payment terms.",
    },
    measure: {
      fr: "Délai moyen de règlement (DSO) réduit, suivi mensuellement avec la direction financière.",
      en: "Reduced average collection period (DSO), tracked monthly with the finance function.",
    },
    proofs: {
      fr: "DSO avant / après · taux de relance systématisé · trésorerie additionnelle libérée.",
      en: "DSO before / after · systematized follow-up rate · additional cash released.",
    },
    attention: {
      fr: "La relance reste toujours respectueuse de la relation client, en particulier sur les comptes stratégiques.",
      en: "Follow-up always remains respectful of the client relationship, especially on strategic accounts.",
    },
    cta: { label: { fr: "Évaluer votre potentiel", en: "Assess your potential" }, href: "/contact" },
  },
];

export function getAllImpactSlugs(): string[] {
  return impactCases.map((item) => item.slug);
}

export function getImpactCase(slug: string): ImpactCase | undefined {
  return impactCases.find((item) => item.slug === slug);
}

// ---------------------------------------------------------------------------
// /contact
// ---------------------------------------------------------------------------

export const contactPage = {
  eyebrow: { fr: "Contact", en: "Contact" } as L,
  title: {
    fr: "Commençons par votre priorité économique.",
    en: "Let's start with your economic priority.",
  } as L,
  lead: {
    fr: "Un premier échange de 30 minutes pour comprendre votre situation, identifier un périmètre et décider si un Performance Scan est pertinent.",
    en: "A 30-minute first conversation to understand your situation, identify a scope and decide whether a Performance Scan is relevant.",
  } as L,
  note: {
    fr: "Sans engagement. Confidentialité assurée sur les informations partagées.",
    en: "No commitment. Confidentiality assured on shared information.",
  } as L,
  altTitle: {
    fr: "Vous préférez un échange direct ?",
    en: "Prefer a direct conversation?",
  } as L,
  altBody: {
    fr: "Réservez un créneau avec Tannous pour discuter de votre organisation.",
    en: "Book a slot with Tannous to talk through your organization.",
  } as L,
  altCta: { label: { fr: "Réserver un créneau", en: "Book a slot" }, href: "/contact#booking" },
} as const;

// ---------------------------------------------------------------------------
// FAQ — full list (14 items)
// ---------------------------------------------------------------------------

export const faqItems: FaqItem[] = [
  {
    q: {
      fr: "En quoi différez-vous d'un cabinet de conseil classique ?",
      en: "How are you different from a traditional consulting firm ?",
    },
    a: {
      fr: "Un cabinet de conseil classique livre un rapport. Nous exécutons les actions avec vos équipes, jusqu'au résultat mesuré et ancré dans vos routines de gestion.",
      en: "A traditional consulting firm delivers a report. We execute the actions with your teams, through to a measured result embedded in your management routines.",
    },
  },
  {
    q: {
      fr: "Travaillez-vous avec notre direction financière ?",
      en: "Do you work with our finance function ?",
    },
    a: {
      fr: "Systématiquement. La finance valide le diagnostic, les hypothèses de gain et certifie les résultats mesurés à chaque étape.",
      en: "Systematically. Finance validates the diagnosis, the gain assumptions and certifies the measured results at every step.",
    },
  },
  {
    q: {
      fr: "Comment êtes-vous rémunérés ?",
      en: "How are you compensated ?",
    },
    a: {
      fr: "Un socle fixe couvre le diagnostic et l'exécution. Une part variable, indexée sur les gains mesurés, peut être discutée selon la mission.",
      en: "A fixed base covers diagnosis and execution. A variable share, indexed to measured gains, can be discussed depending on the engagement.",
    },
  },
  {
    q: {
      fr: "Combien de temps dure un diagnostic ?",
      en: "How long does a diagnosis take ?",
    },
    a: {
      fr: "Quelques semaines, selon la taille de l'organisation et la disponibilité des données. Nous privilégions la rapidité sur l'exhaustivité théorique.",
      en: "A few weeks, depending on the size of the organization and data availability. We favor speed over theoretical thoroughness.",
    },
  },
  {
    q: {
      fr: "Faut-il des données déjà consolidées pour commencer ?",
      en: "Do we need already-consolidated data to start ?",
    },
    a: {
      fr: "Non. Nous travaillons avec les données existantes, même partielles, et construisons la consolidation nécessaire au fil du diagnostic.",
      en: "No. We work with existing data, even if partial, and build the necessary consolidation as the diagnosis progresses.",
    },
  },
  {
    q: {
      fr: "Intervenez-vous sur toutes les tailles d'organisation ?",
      en: "Do you work with organizations of all sizes ?",
    },
    a: {
      fr: "Nous privilégions les organisations où les leviers économiques sont significatifs : PME en croissance, ETI, filiales de groupes.",
      en: "We favor organizations where economic levers are significant: growing SMEs, mid-market companies, group subsidiaries.",
    },
  },
  {
    q: {
      fr: "Comment garantissez-vous la confidentialité des données partagées ?",
      en: "How do you guarantee confidentiality of shared data ?",
    },
    a: {
      fr: "Un accord de confidentialité encadre chaque mission dès le premier échange, avant tout accès aux données financières ou opérationnelles.",
      en: "A confidentiality agreement governs every engagement from the first conversation, before any access to financial or operational data.",
    },
  },
  {
    q: {
      fr: "Vos équipes travaillent-elles sur site ou à distance ?",
      en: "Do your teams work on-site or remotely ?",
    },
    a: {
      fr: "Les deux, selon la nature du levier. L'exécution opérationnelle implique souvent une présence régulière sur le terrain.",
      en: "Both, depending on the nature of the lever. Operational execution often calls for regular on-site presence.",
    },
  },
  {
    q: {
      fr: "Que se passe-t-il si un levier identifié ne fonctionne pas ?",
      en: "What happens if an identified lever doesn't work ?",
    },
    a: {
      fr: "Nous mesurons en continu. Un levier qui ne délivre pas les résultats attendus est ajusté ou abandonné rapidement, sans s'accrocher au plan initial.",
      en: "We measure continuously. A lever that doesn't deliver the expected results is adjusted or dropped quickly, without clinging to the initial plan.",
    },
  },
  {
    q: {
      fr: "Le Performance OS remplace-t-il nos outils existants ?",
      en: "Does the Performance OS replace our existing tools ?",
    },
    a: {
      fr: "Non. Il s'insère dans vos systèmes existants pour centraliser le suivi des leviers, sans imposer un changement d'outil à vos équipes.",
      en: "No. It fits into your existing systems to centralize lever tracking, without forcing your teams to change tools.",
    },
  },
  {
    q: {
      fr: "Quelle est la durée type d'un accompagnement ?",
      en: "What's the typical length of an engagement ?",
    },
    a: {
      fr: "De quelques mois pour un premier lot de leviers à un accompagnement continu pour les organisations qui souhaitent industrialiser la démarche.",
      en: "From a few months for a first batch of levers to an ongoing engagement for organizations that want to industrialize the approach.",
    },
  },
  {
    q: {
      fr: "Comment choisissez-vous les leviers à activer en premier ?",
      en: "How do you choose which levers to activate first ?",
    },
    a: {
      fr: "Selon deux critères : l'impact économique chiffré et la facilité d'exécution. Nous priorisons les gains rapides et significatifs.",
      en: "Based on two criteria: quantified economic impact and ease of execution. We prioritize gains that are both fast and significant.",
    },
  },
  {
    q: {
      fr: "Vos interventions concernent-elles uniquement les coûts ?",
      en: "Do your engagements only address costs ?",
    },
    a: {
      fr: "Non. Nous traitons aussi la capacité opérationnelle et la marge — trois dimensions souvent liées dans le compte de résultat.",
      en: "No. We also address operating capacity and margin — three dimensions that are often linked in the P&L.",
    },
  },
  {
    q: {
      fr: "Comment démarrer une première évaluation ?",
      en: "How do we start a first assessment ?",
    },
    a: {
      fr: "Un premier échange, sans engagement, suffit pour identifier si votre organisation présente un potentiel de performance à activer.",
      en: "A first, no-commitment conversation is enough to identify whether your organization has performance potential worth activating.",
    },
  },
];
