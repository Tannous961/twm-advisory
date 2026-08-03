export type Lang = "fr" | "en";

export const content = {
  meta: {
    title: {
      fr: "TWM Advisory — Déploiement d'agents · Direction IA à temps partagé",
      en: "TWM Advisory — Agent deployment · Fractional AI leadership",
    },
    description: {
      fr: "TWM Advisory s'embarque dans vos équipes et déploie des agents en production pour rendre du temps facturable à vos experts. Confidentialité client respectée. Direction IA à temps partagé.",
      en: "TWM Advisory embeds with your teams and deploys agents in production to return billable time to your experts. Client confidentiality protected. Fractional AI leadership.",
    },
  },
  nav: {
    approach: { fr: "Approche", en: "Approach" },
    offers: { fr: "Offres", en: "Services" },
    partners: { fr: "Partenaires", en: "Partners" },
    who: { fr: "Pour qui", en: "Who it's for" },
    about: { fr: "À propos", en: "About" },
    cta: { fr: "Prendre rendez-vous", en: "Book a call" },
    menu: { fr: "Menu", en: "Menu" },
    close: { fr: "Fermer", en: "Close" },
  },
  hero: {
    eyebrow: {
      fr: "Pour dirigeants et associés · Cabinets & organisations",
      en: "For executives and partners · Firms & organizations",
    },
    titleBefore: {
      fr: "Vos experts facturent le jugement.",
      en: "Your experts bill for judgment.",
    },
    titleEm: {
      fr: "Pas la rédaction, la recherche et l'admin.",
      en: "Not drafting, research and admin.",
    },
    lead: {
      fr: "Votre firme tourne sur l'expertise et la relation — ni l'une ni l'autre ne se délègue à un modèle. Je m'installe dans vos équipes et je mets des agents sur les offres, la recherche, les drafts et le suivi qui mangent le temps facturable. Vos gens passent plus de journée sur ce que le client paie vraiment.",
      en: "Your firm runs on expertise and relationships — neither is for sale to a model. I embed with your teams and put agents on the proposals, research, drafts and follow-up that drain billable time. Your people spend more of the day on what clients actually pay for.",
    },
    ctaPrimary: { fr: "Planifier un échange", en: "Book a conversation" },
    ctaSecondary: { fr: "Voir les offres", en: "See services" },
    note: {
      fr: "Premier échange gratuit. Sans engagement.",
      en: "First conversation free. No commitment.",
    },
    floatTitle: { fr: "Sur le terrain", en: "On the ground" },
    floatBody: {
      fr: "Je construis avec vous et je reste jusqu'à ce que ça tourne en production.",
      en: "I build with you and stay until it runs in production.",
    },
    terrain: { fr: "Expérience", en: "Experience" },
    years: { fr: "ans", en: "years" },
    terrainSub: {
      fr: "direction d'organisation",
      en: "running organizations",
    },
  },
  stats: [
    {
      value: "17",
      suffix: { fr: "ans", en: "years" },
      label: { fr: "d'expérience terrain", en: "of hands-on experience" },
    },
    {
      value: "15",
      suffix: { fr: "", en: "" },
      label: { fr: "agents · architecture TWM", en: "agents · TWM architecture" },
    },
    {
      value: "120",
      suffix: { fr: "", en: "" },
      label: { fr: "personnes dirigées", en: "people led" },
    },
    {
      value: "3",
      suffix: { fr: "", en: "" },
      label: { fr: "langues de travail", en: "working languages" },
    },
  ],
  problem: {
    section: { fr: "Le constat", en: "The situation" },
    title: {
      fr: "Une part importante du travail professionnel",
      en: "A large share of professional work",
    },
    titleMuted: {
      fr: "ne se facture jamais.",
      en: "never reaches the bill.",
    },
    items: [
      {
        fr: "Rédaction, recherche, notes de statut, capture de temps, admin : autant d'heures qui tirent vos profils seniors hors du travail client — et qui ne se retrouvent pas toujours en facture.",
        en: "Drafting, research, status notes, time capture, admin: hours that pull seniors off client work — and often never make it onto the invoice.",
      },
      {
        fr: "Les outils grand public exposent la confidentialité client. Peu de firmes mesurent réellement le retour. L'avantage, ce n'est pas d'avoir testé ChatGPT : c'est de déployer dans un cadre que le risque peut signer.",
        en: "Consumer tools expose client confidentiality. Few firms actually track return. The edge isn't having tried ChatGPT — it's deploying in a frame risk can sign off on.",
      },
      {
        fr: "Personne en interne pour trancher, encadrer et mettre en production. Le sujet reste une présentation au comité, pendant que le temps facturable continue de fuir.",
        en: "No one internal to decide, govern and ship to production. The topic stays a board deck, while billable time keeps leaking.",
      },
    ],
  },
  approach: {
    title: {
      fr: "Je ne livre pas un rapport.",
      en: "I don't deliver a report.",
    },
    titleEm: {
      fr: "Je livre quelque chose qui tourne.",
      en: "I deliver something that runs.",
    },
    body: {
      fr: "Je m'embarque dans vos équipes, je trouve où le temps facturable fuit, et je déploie des agents jusqu'en production. Les bons modèles, dans une posture où le matériel client reste dans un environnement contrôlé — que votre équipe risque peut valider. Ni PowerPoint à classer, ni outil lâché sans règles.",
      en: "I embed with your teams, find where billable time leaks, and deploy agents into production. The right models, on a posture where client material stays in a controlled environment — one your risk team can sign off on. Not a deck to file, not a tool dropped with no rules.",
    },
    quote: {
      fr: "L'IA rédige, recherche, capture et surveille. Le conseil, l'arbitrage et la relation restent humains — c'est la prime que votre firme vend.",
      en: "AI drafts, researches, captures and monitors. Advice, judgment and the relationship stay human — that's the premium your firm sells.",
    },
    steps: [
      {
        label: { fr: "Étape 01", en: "Step 01" },
        title: { fr: "Repérer la fuite de temps", en: "Find the billable-time drain" },
        body: {
          fr: "La rédaction, la recherche et l'admin qui sortent vos gens les plus chers du travail client — et où un premier gain sûr peut vivre.",
          en: "The drafting, research and admin that pull your most expensive people off client work — and where a safe first win lives.",
        },
      },
      {
        label: { fr: "Étape 02", en: "Step 02" },
        title: { fr: "Installer, encadré", en: "Install it, governed" },
        body: {
          fr: "Un premier agent en production, avec vos équipes, dans un cadre où les données confidentielles restent contrôlées et traçables.",
          en: "A first agent in production, with your teams, in a frame where confidential data stays controlled and traceable.",
        },
      },
      {
        label: { fr: "Étape 03", en: "Step 03" },
        title: { fr: "Former et ancrer", en: "Train and embed" },
        body: {
          fr: "Chaque rôle apprend où l'IA entre dans son vrai travail. On mesure les heures rendues au facturable, puis on étend.",
          en: "Each role learns where AI fits their real work. We measure hours returned to billable use, then expand.",
        },
      },
    ],
  },
  offers: {
    section: { fr: "Offres", en: "Services" },
    title: {
      fr: "Trois façons de travailler ensemble.",
      en: "Three ways to work together.",
    },
    items: [
      {
        title: {
          fr: "Diagnostic",
          en: "Diagnostic",
        },
        body: {
          fr: "Cartographie du temps non-facturable, priorisation des fuites, et identification d'un premier cas sûr — là où un gain rapide peut vivre sans mettre le risque en jeu.",
          en: "Map non-billable time, prioritize leaks, and identify a safe first case — where a quick win can live without putting risk on the line.",
        },
        meta: {
          fr: "Livrable : feuille de route chiffrée",
          en: "Deliverable: a costed roadmap",
        },
      },
      {
        title: {
          fr: "Déploiement d'agents",
          en: "Agent deployment",
        },
        body: {
          fr: "Un ou plusieurs agents en production — offres, recherche, reporting, ops — avec cadre data, adoption métier, et mesure des heures rendues au facturable.",
          en: "One or more agents in production — proposals, research, reporting, ops — with data frame, role adoption, and measured hours returned to billable use.",
        },
        meta: {
          fr: "Livrable : agents en production",
          en: "Deliverable: agents in production",
        },
      },
      {
        title: {
          fr: "Direction IA à temps partagé",
          en: "Fractional AI leadership",
        },
        body: {
          fr: "Quelqu'un à la barre sans recruter un poste à plein temps : cadre, feuille de route, arbitrages, exécution jusqu'à la production.",
          en: "Someone at the helm without a full-time hire: frame, roadmap, decisions, execution through production.",
        },
        meta: {
          fr: "Format : à temps partagé ou interim",
          en: "Format: fractional or interim",
        },
      },
    ],
  },
  fractional: {
    eyebrow: {
      fr: "Direction IA à temps partagé & management de transition",
      en: "Fractional AI leadership & interim management",
    },
    title: {
      fr: "Besoin de quelqu'un à la barre, sans le poste full-time ?",
      en: "Need someone at the helm, without the full-time seat?",
    },
    body: {
      fr: "Quand le comité veut du concret en production — pas une autre étude — je prends la direction en interim ou à temps partagé. Direction digitale, DSI, COO, ou direction IA. J'ai dirigé 120 personnes et un centre de profit : je sais opérer, pas seulement conseiller.",
      en: "When the board wants something live in production — not another study — I take the lead interim or part-time. Digital leadership, CIO, COO, or AI leadership. I've led 120 people and a profit center: I know how to operate, not just advise.",
    },
    items: [
      {
        fr: "Une transformation à piloter sans DSI en interne.",
        en: "A transformation to lead with no CIO in-house.",
      },
      {
        fr: "Un cadre data et usage à poser avant que le risque n'arrive.",
        en: "A data and usage frame to set before risk shows up.",
      },
      {
        fr: "Un projet critique qui a besoin d'un opérateur, pas d'un cabinet de slides.",
        en: "A critical project that needs an operator, not a slide factory.",
      },
    ],
  },
  fit: {
    section: { fr: "Pour qui", en: "Who it's for" },
    title: {
      fr: "On avance bien ensemble si…",
      en: "We work well together if…",
    },
    yesTitle: { fr: "Oui, si", en: "Yes, if" },
    noTitle: { fr: "Non, si", en: "No, if" },
    yes: [
      {
        fr: "Vous dirigez un cabinet, une firme de conseil, une expertise comptable, une ingénierie ou une organisation où le jugement se facture.",
        en: "You lead a consulting, accounting, engineering, law firm — or any organization where judgment is what you bill.",
      },
      {
        fr: "Vos profils facturables passent encore trop d'heures en rédaction, recherche et admin.",
        en: "Your billable people still spend hours on drafting, research and admin.",
      },
      {
        fr: "Vous voulez protéger la confiance client tout en allant plus vite.",
        en: "You want to protect client trust while moving faster.",
      },
    ],
    no: [
      {
        fr: "Vous voulez que l'IA prenne l'arbitrage professionnel ou donne un conseil non relu.",
        en: "You want AI making the professional judgment call or giving unreviewed advice.",
      },
      {
        fr: "Vous seriez prêt à faire passer du matériel client privilégié dans des outils non encadrés.",
        en: "You'd put privileged client material through ungoverned tools.",
      },
      {
        fr: "Vous n'êtes pas prêt à changer la façon dont le travail est produit.",
        en: "You're not willing to change how the work gets produced.",
      },
    ],
  },
  partners: {
    section: { fr: "Partenaires", en: "Partners" },
    title: {
      fr: "Je n'arrive pas seul.",
      en: "I don't come alone.",
    },
    titleEm: {
      fr: "J'active un réseau quand il le faut.",
      en: "I bring a network when needed.",
    },
    body: {
      fr: "Quand le besoin dépasse ce que je peux porter seul, j'active des partenaires tech, intégration et métier, et je pilote le tout. Vous gagnez de la capacité d'exécution — pas une liste de sous-traitants à coordonner.",
      en: "When the need goes beyond what I can carry alone, I bring in tech, integration and domain partners, and I run the whole thing. You get execution capacity — not a vendor list to coordinate.",
    },
  },
  watch: {
    section: { fr: "Veille", en: "Watch" },
    title: {
      fr: "Le marché bouge vite. Je trie pour vous.",
      en: "The market moves fast. I filter it for you.",
    },
    body: {
      fr: "Je suis les modèles, les agents et les outils. Je teste avant de recommander. Vous gardez le signal utile — sans y passer vos nuits, ni coller du client dans le dernier gadget à la mode.",
      en: "I track models, agents and tools. I test before I recommend. You get useful signal — without the late nights, or pasting clients into the latest gadget.",
    },
  },
  infrastructure: {
    section: { fr: "Architecture TWM", en: "TWM architecture" },
    title: {
      fr: "15 agents. Une entreprise qui tourne.",
      en: "15 agents. A firm that runs.",
    },
    titleEm: {
      fr: "Moi : la relation et les décisions.",
      en: "Me: relationships and decisions.",
    },
    body: {
      fr: "TWM Advisory fonctionne comme une organisation complète. Chaque agent a un rôle précis. Résultat : mon temps reste sur les échanges dirigeants, la confiance et les arbitrages — exactement ce que je vous aide à protéger chez vous.",
      en: "TWM Advisory runs like a full organization. Each agent has a clear role. So my time stays on executive conversations, trust and decisions — exactly what I help you protect in your firm.",
    },
    humanLabel: { fr: "Humain", en: "Human" },
    humanRole: {
      fr: "Relation C-level, deals, arbitrages",
      en: "C-level relationships, deals, decisions",
    },
    ceo: {
      role: { fr: "Agent DG", en: "CEO agent" },
      mission: {
        fr: "Orchestre les priorités, aligne les équipes agents, synthétise pour la direction.",
        en: "Orchestrates priorities, aligns agent teams, synthesizes for leadership.",
      },
    },
    departments: [
      {
        name: { fr: "Finance & juridique", en: "Finance & legal" },
        agents: [
          {
            role: { fr: "Agent financier", en: "Finance agent" },
            mission: {
              fr: "Trésorerie, forecast, pilotage des marges.",
              en: "Cash, forecast, margin oversight.",
            },
          },
          {
            role: { fr: "Agent comptable", en: "Accounting agent" },
            mission: {
              fr: "Facturation, écritures, suivi des encaissements.",
              en: "Invoicing, books, payment follow-up.",
            },
          },
          {
            role: { fr: "Agent juridique", en: "Legal agent" },
            mission: {
              fr: "Contrats types, NDA, relecture des clauses à risque.",
              en: "Contract templates, NDAs, risk clause review.",
            },
          },
        ],
      },
      {
        name: { fr: "Delivery", en: "Delivery" },
        agents: [
          {
            role: { fr: "Agent ops client", en: "Client ops agent" },
            mission: {
              fr: "Jalons missions, reporting client, suivi d'exécution.",
              en: "Mission milestones, client reporting, execution tracking.",
            },
          },
          {
            role: { fr: "Agent développeur", en: "Developer agent" },
            mission: {
              fr: "Build des agents et automatisations pour TWM et les clients.",
              en: "Builds agents and automations for TWM and clients.",
            },
          },
          {
            role: { fr: "Agent customer success", en: "Customer success agent" },
            mission: {
              fr: "Satisfaction, renouvellement, signaux d'upsell.",
              en: "Satisfaction, renewal, upsell signals.",
            },
          },
        ],
      },
      {
        name: { fr: "Growth", en: "Growth" },
        agents: [
          {
            role: { fr: "Agent commercial", en: "Sales agent" },
            mission: {
              fr: "Pipeline advisory, relances, préparation d'échanges.",
              en: "Advisory pipeline, follow-ups, call prep.",
            },
          },
          {
            role: { fr: "Agent BD SaaS", en: "SaaS BD agent" },
            mission: {
              fr: "Partenariats produits et deals tech.",
              en: "Product partnerships and tech deals.",
            },
          },
          {
            role: { fr: "Agent contenu", en: "Content agent" },
            mission: {
              fr: "Articles, scripts, messages de fond.",
              en: "Articles, scripts, core messaging.",
            },
          },
          {
            role: { fr: "Agent SEO", en: "SEO agent" },
            mission: {
              fr: "Visibilité organique, structure, pages clés.",
              en: "Organic visibility, structure, key pages.",
            },
          },
          {
            role: { fr: "Agent réseaux sociaux", en: "Social agent" },
            mission: {
              fr: "Présence LinkedIn et diffusion régulière.",
              en: "LinkedIn presence and steady distribution.",
            },
          },
          {
            role: { fr: "Agent veille tech", en: "Tech watch agent" },
            mission: {
              fr: "Modèles, outils, signal utile vs bruit.",
              en: "Models, tools, useful signal vs noise.",
            },
          },
        ],
      },
      {
        name: { fr: "Ops", en: "Ops" },
        agents: [
          {
            role: { fr: "Agent assistant", en: "Assistant agent" },
            mission: {
              fr: "Agenda, mail, préparation des dossiers du quotidien.",
              en: "Calendar, mail, daily briefing packs.",
            },
          },
          {
            role: { fr: "Agent CRM / data", en: "CRM / data agent" },
            mission: {
              fr: "Hygiène pipeline, scoring, sync des outils.",
              en: "Pipeline hygiene, scoring, tool sync.",
            },
          },
        ],
      },
    ],
    closing: {
      fr: "Je déploie chez vous ce qui fait déjà tourner TWM.",
      en: "I deploy with you what already runs TWM.",
    },
  },
  about: {
    section: { fr: "Pourquoi moi", en: "Why me" },
    title: {
      fr: "Un opérateur, pas un vendeur de techno.",
      en: "An operator, not a tech vendor.",
    },
    p1: {
      fr: "17 ans à construire des mécaniques business et à diriger des organisations. Je parle chiffres, risque et exécution parce que je les ai portés — pas parce qu'ils figurent sur une slide.",
      en: "17 years building business engines and leading organizations. I speak numbers, risk and execution because I've carried them — not because they sit on a slide.",
    },
    p2: {
      fr: "Trilingue — français, anglais, arabe. Je relie vision, ops et terrain.",
      en: "Trilingual — French, English, Arabic. I connect vision, ops and the floor.",
    },
    p3: {
      fr: "TWM tourne avec 15 agents organisés comme une entreprise. Ça me laisse le temps pour ce qui compte vraiment : la relation et les décisions.",
      en: "TWM runs with 15 agents organized like a firm. That leaves me time for what actually matters: relationships and decisions.",
    },
    metrics: [
      {
        value: "120",
        label: { fr: "personnes dirigées", en: "people led" },
      },
      {
        value: "3",
        label: { fr: "langues de travail", en: "working languages" },
      },
      {
        value: "15",
        label: { fr: "agents internes", en: "internal agents" },
      },
    ],
  },
  faq: {
    title: {
      fr: "Questions fréquentes",
      en: "Common questions",
    },
    items: [
      {
        q: {
          fr: "Par où commencer dans une firme ?",
          en: "What's the best first use in a firm?",
        },
        a: {
          fr: "Offres ou recherche. Les deux consomment des heures seniors sur de la rédaction à faible jugement : le retour est immédiat, et l'expert garde la propriété du livrable.",
          en: "Proposals or research. Both consume senior hours on low-judgment drafting: return is immediate, and the expert keeps ownership of the output.",
        },
      },
      {
        q: {
          fr: "Est-ce que ça remplace nos experts ?",
          en: "Does this replace our experts?",
        },
        a: {
          fr: "Non. Ça retire le travail de bureau autour du jugement — rédaction, synthèses, recherche, relances. Le conseil, l'arbitrage et la relation restent humains. Une firme qui s'en sert bien facture son expertise, pas sa frappe.",
          en: "No. It removes the desk work around expert judgment — drafting, summarizing, research, follow-ups. Advice, the call and the relationship stay human. Firms that use it well bill their expertise, not their typing.",
        },
      },
      {
        q: {
          fr: "Vous livrez un rapport ou vous déployez ?",
          en: "Do you deliver a report or actually deploy?",
        },
        a: {
          fr: "Je déploie. Je m'embarque dans vos équipes jusqu'à la mise en production, avec un cadre data et une mesure des heures récupérées.",
          en: "I deploy. I embed with your teams through go-live, with a data frame and a measure of hours recovered.",
        },
      },
      {
        q: {
          fr: "Nos données clients sont-elles protégées ?",
          en: "Is it safe with client-confidential information?",
        },
        a: {
          fr: "Uniquement dans un environnement encadré : accès contrôlés, pas d'entraînement de modèles publics sur vos entrées. Le vrai risque, c'est le collage dans des outils grand public — un déploiement géré et une politique claire le retirent.",
          en: "Only inside a governed environment: controlled access, no training public models on your inputs. The real risk is staff pasting into consumer tools — a managed rollout and clear policy remove that.",
        },
      },
      {
        q: {
          fr: "Comment se structure le budget ?",
          en: "How is budget structured?",
        },
        a: {
          fr: "Sur devis, selon le périmètre. Le premier échange est gratuit. On commence souvent par un diagnostic, puis un premier déploiement, avant d'élargir.",
          en: "On a quote, by scope. The first conversation is free. We often start with a diagnostic, then a first deployment, before expanding.",
        },
      },
      {
        q: {
          fr: "Faut-il être technique ?",
          en: "Do we need to be technical?",
        },
        a: {
          fr: "Non. On part de votre métier et de vos chiffres. La tech suit le cas d'usage et le cadre de risque.",
          en: "No. We start from your business and your numbers. Tech follows the use case and the risk frame.",
        },
      },
    ],
  },
  contact: {
    title: {
      fr: "Le moyen le plus rapide de savoir si on est faits pour travailler ensemble,",
      en: "The fastest way to know whether we're the right fit,",
    },
    titleEm: {
      fr: "c'est un échange.",
      en: "is a conversation.",
    },
    lead: {
      fr: "30 minutes. Gratuit. On regarde les fuites de temps, le cadre data, et un premier cas concret — souvent offres ou recherche.",
      en: "30 minutes. Free. We look at time leaks, the data frame, and a concrete first case — often proposals or research.",
    },
    cta: { fr: "Planifier un échange", en: "Book a conversation" },
    note: {
      fr: "Réponse sous 48 h ouvrées.",
      en: "Reply within 2 business days.",
    },
  },
  footer: {
    legal: { fr: "Mentions légales", en: "Legal" },
    city: {
      fr: "France · présentiel et remote",
      en: "France · on-site and remote",
    },
  },
} as const;

export function t<T extends Record<Lang, string>>(obj: T, lang: Lang): string {
  return obj[lang];
}
