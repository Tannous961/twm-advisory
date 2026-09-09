/** Editorial pillars and competitor watchlist for the Cadre agent. */

export const CADRE_PILLARS = [
  {
    id: "economic_performance",
    fr: "Performance économique",
    en: "Economic performance",
    keywords: [
      "ROI",
      "marge",
      "coût complet",
      "baseline",
      "gain-share",
      "productivité",
      "temps libéré",
    ],
  },
  {
    id: "ai_in_production",
    fr: "IA en production",
    en: "AI in production",
    keywords: [
      "agent IA",
      "POC",
      "production",
      "observabilité",
      "inférence",
      "supervision humaine",
    ],
  },
  {
    id: "operational_transformation",
    fr: "Transformation opérationnelle",
    en: "Operational transformation",
    keywords: [
      "processus",
      "adoption",
      "changement",
      "responsabilité",
      "simplification",
    ],
  },
  {
    id: "governance_risk",
    fr: "Gouvernance et risque",
    en: "Governance and risk",
    keywords: [
      "AI Act",
      "RGPD",
      "Shadow AI",
      "conformité",
      "traçabilité",
      "sécurité",
    ],
  },
  {
    id: "commercial_performance",
    fr: "Performance commerciale",
    en: "Commercial performance",
    keywords: [
      "e-commerce",
      "omnicanal",
      "conversion",
      "pricing",
      "expérience client",
    ],
  },
  {
    id: "partner_performance",
    fr: "Partner Performance",
    en: "Partner Performance",
    keywords: [
      "partenaires",
      "co-selling",
      "referral",
      "attribution",
      "réseau",
    ],
  },
  {
    id: "tech_decisions",
    fr: "Décisions technologiques",
    en: "Technology decisions",
    keywords: [
      "build vs buy",
      "RAG",
      "fine-tuning",
      "cloud européen",
      "qualité des données",
    ],
  },
] as const;

export const COMPETITOR_SOURCES = [
  { name: "McKinsey", url: "https://www.mckinsey.com" },
  { name: "BCG", url: "https://www.bcg.com" },
  { name: "Bain", url: "https://www.bain.com" },
  { name: "Accenture", url: "https://www.accenture.com" },
  { name: "Capgemini", url: "https://www.capgemini.com" },
  { name: "Artefact", url: "https://www.artefact.com" },
  { name: "Onepoint", url: "https://www.groupeonepoint.com" },
  { name: "Sia Partners", url: "https://www.sia-partners.com" },
  { name: "Ekimetrics", url: "https://www.ekimetrics.com" },
  { name: "Talan", url: "https://www.talan.com" },
  { name: "CNIL", url: "https://www.cnil.fr" },
  { name: "Commission européenne", url: "https://digital-strategy.ec.europa.eu" },
  { name: "Cigref", url: "https://www.cigref.fr" },
  { name: "KPMG", url: "https://kpmg.com" },
] as const;

export const SEED_ANGLES = [
  {
    pillar: "economic_performance",
    query:
      "ROI IA entreprise 2026 gain de temps vs marge opérationnelle mesure",
    intent: "strategy" as const,
  },
  {
    pillar: "ai_in_production",
    query: "IA agentique production entreprise coûts cachés POC 2026",
    intent: "use_case" as const,
  },
  {
    pillar: "governance_risk",
    query: "AI Act Europe PME obligations 2026 transparence agents IA",
    intent: "strategy" as const,
  },
  {
    pillar: "operational_transformation",
    query: "adoption IA processus métier responsabilité humaine on the loop",
    intent: "discover" as const,
  },
  {
    pillar: "commercial_performance",
    query: "e-commerce performance opérationnelle IA service client marge",
    intent: "use_case" as const,
  },
  {
    pillar: "partner_performance",
    query: "partner ecosystem performance co-selling attribution measurement",
    intent: "strategy" as const,
  },
  {
    pillar: "tech_decisions",
    query: "build vs buy AI tools RAG vs fine-tuning enterprise Europe",
    intent: "has_agents" as const,
  },
] as const;

export const VOICE_GUIDE = `
Tu rédiges pour Tannous Mekari, fondateur de TWM Advisory.
Ton: dirigeant à dirigeant, sobre, concret, sans jargon d'agence.
Règles:
- phrases plutôt courtes
- priorité à la décision, au risque, à la mesure et aux arbitrages
- jamais de promesses gonflées
- jamais de formulation robotique ou de listicles marketing
- format Cadre: 1 insight, 1 verdict, 3 à 5 paragraphes de corps
- FR d'abord, puis EN avec le même niveau de sobriété
- chaque chiffre important doit rester ancré dans une source fournie
`.trim();
