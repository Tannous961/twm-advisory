import type { Metadata } from "next";
import type { CadrePost } from "./cadre";
import { content } from "./content";
import { faqItems } from "./editorial";
import { hasEnPillar, type Locale, withLocale } from "./locale";

export const siteConfig = {
  name: "TWM Advisory",
  legalName: "TWM ADVISORY",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.twm.expert",
  locale: "fr_FR",
  alternateLocale: "en_US",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "tannous@twm.expert",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  founderName: process.env.NEXT_PUBLIC_FOUNDER_NAME || "Tannous Mekari",
  siren: "106067549",
  vatId: "FR76106067549",
  areaServed: [
    "FR",
    "BE",
    "CH",
    "LU",
    "MA",
    "US",
    "LB",
    "AE",
    "SA",
    "NG",
    "BH",
  ],
} as const;

/** Stable freshness signal for JSON-LD (not build time). */
export const siteRevisedAt = "2026-09-14";

const title = content.meta.title.fr;
const description = content.meta.description.fr;
const titleEn = content.meta.title.en;
const descriptionEn = content.meta.description.en;

/** High-intent + GEO keywords (FR market). */
export const keywords = [
  "TWM Advisory",
  "Operating Performance Partner",
  "Forward Deployed Engineer",
  "performance opérationnelle",
  "réduction des coûts",
  "capacité opérationnelle",
  "protection de la marge",
  "diagnostic économique",
  "gain-share",
  "Performance Scan",
  "Performance OS",
  "amélioration de la performance",
  "cabinet conseil performance",
  "exécution opérationnelle",
  "mesure des gains",
  "opérateur embarqué",
  "mandat de performance",
  "Partner Performance",
  "Tannous Mekari",
];

export type PageSeoKey =
  | "home"
  | "performance"
  | "partner-performance"
  | "methode"
  | "technology"
  | "impact"
  | "cadre"
  | "partenaires"
  | "a-propos"
  | "faq"
  | "demarrer"
  | "contact"
  | "mentions-legales"
  | "confidentialite";

type PageSeo = {
  path: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  keywords?: string[];
  priority?: number;
  changeFrequency?: "weekly" | "monthly" | "yearly";
};

export const pageSeo: Record<PageSeoKey, PageSeo> = {
  home: {
    path: "/",
    title: content.meta.title.fr,
    titleEn: content.meta.title.en,
    description: content.meta.description.fr,
    descriptionEn: content.meta.description.en,
    priority: 1,
    changeFrequency: "weekly",
  },
  performance: {
    path: "/performance",
    title: "Operating Performance · mandat d'exécution mesurable",
    titleEn: "Operating Performance · measurable execution mandate",
    description:
      "Réduire les coûts, les reprises et les pertes de capacité. Exécution Forward Deployed avec vos équipes, mesure avec votre finance.",
    descriptionEn:
      "Cut costs, rework and capacity loss. Forward Deployed execution with your teams, measurement with your finance team.",
    keywords: [
      "Operating Performance",
      "Performance Scan",
      "Forward Deployed Engineer",
      "réduction coûts entreprise",
      "gain-share conseil",
    ],
  },
  "partner-performance": {
    path: "/partner-performance",
    title: "Partner Performance · réseau de partenaires en système de croissance",
    titleEn: "Partner Performance · turn a partner network into a growth system",
    description:
      "Transformer un réseau de partenaires en système de croissance: leads, co-selling, referrals et gouvernance. Exécution Forward Deployed.",
    descriptionEn:
      "Turn a partner network into a growth system: leads, co-selling, referrals and governance. Forward Deployed execution.",
    keywords: [
      "Partner Performance",
      "réseau partenaires",
      "co-selling",
      "architecture de leads",
      "Forward Deployed Engineer",
    ],
  },
  methode: {
    path: "/methode",
    title: "Méthode · du résultat recherché à la mesure",
    titleEn: "Method · from the outcome sought to measurement",
    description:
      "Cinq étapes en posture Forward Deployed, de la priorité économique au résultat vérifié avec la finance.",
    descriptionEn:
      "Five steps in a Forward Deployed posture, from economic priority to a finance-verified outcome.",
    keywords: [
      "méthode performance opérationnelle",
      "Forward Deployed",
      "référence économique",
      "mesure des gains",
    ],
  },
  technology: {
    path: "/technology",
    title: "Technology · contexte, pilotage et product builders",
    titleEn: "Technology · context, steering and product builders",
    description:
      "Couche de contexte et de pilotage TWM, et capacité à faire de vos équipes des product builders de leur métier. Ce n'est pas un SaaS que nous vendons.",
    descriptionEn:
      "TWM's context and steering layer, and the ability to turn your teams into product builders of their craft. We do not sell a SaaS product.",
    keywords: [
      "Performance OS",
      "product builders",
      "automatisation performance",
      "pilotage opérationnel",
    ],
  },
  impact: {
    path: "/impact",
    title: "Impact · leviers de performance illustratifs",
    titleEn: "Impact · illustrative performance levers",
    description:
      "Situations illustratives où une amélioration opérationnelle peut produire une valeur économique. Preuves à établir sur vos données.",
    descriptionEn:
      "Illustrative situations where an operational improvement can create economic value. Evidence to establish on your data.",
    keywords: [
      "leviers de performance",
      "réduction dépenses outils",
      "capacité experts",
      "marge facturation",
    ],
  },
  cadre: {
    path: "/cadre",
    title: "Cadre · la performance au-delà des promesses",
    titleEn: "Cadre · performance beyond promises",
    description:
      "Notes pour les dirigeants qui doivent arbitrer les coûts, la capacité et la transformation.",
    descriptionEn:
      "Notes for leaders who must decide on costs, capacity and transformation.",
    keywords: ["Cadre TWM", "gain-share", "temps libéré marge"],
  },
  partenaires: {
    path: "/partenaires",
    title: "Partenaires · cadre de collaboration",
    titleEn: "Partners · collaboration framework",
    description:
      "Cadre de collaboration de TWM Advisory pour les apporteurs d'affaires, intégrateurs, réseaux métier et partenaires de réalisation.",
    descriptionEn:
      "TWM Advisory's collaboration framework for introducers, integrators, industry networks and delivery partners.",
    keywords: [
      "partenariat conseil performance",
      "apporteur affaires",
    ],
  },
  "a-propos": {
    path: "/a-propos",
    title: "À propos · Tannous Mekari, Forward Deployed Engineer",
    titleEn: "About · Tannous Mekari, Forward Deployed Engineer",
    description:
      "Tannous Mekari, président de TWM ADVISORY. Forward Deployed Engineer et Operating Performance Partner. Embarqué avec vos équipes jusqu'au résultat mesuré.",
    descriptionEn:
      "Tannous Mekari, president of TWM ADVISORY. Forward Deployed Engineer and Operating Performance Partner. Embedded with your teams through to measured results.",
    keywords: [
      "Tannous Mekari",
      "TWM ADVISORY",
      "Operating Performance Partner",
      "Forward Deployed Engineer",
      "opérateur embarqué",
    ],
  },
  faq: {
    path: "/faq",
    title: "FAQ · questions avant une décision de performance",
    titleEn: "FAQ · questions before a performance decision",
    description:
      "FAQ sur le mandat Operating Performance Partner, la posture Forward Deployed Engineer, le gain-share et la mesure des gains.",
    descriptionEn:
      "FAQ on the Operating Performance Partner mandate, Forward Deployed Engineer posture, gain-share and gain measurement.",
    keywords: [
      "FAQ performance",
      "gain-share",
      "Operating Performance Partner",
      "Forward Deployed Engineer",
    ],
  },
  demarrer: {
    path: "/demarrer",
    title: "Évaluer votre potentiel · questionnaire initial",
    titleEn: "Assess your potential · initial questionnaire",
    description:
      "Soumettez une priorité de performance. TWM prépare un Performance Scan et une première orientation de déploiement.",
    descriptionEn:
      "Submit a performance priority. TWM prepares a Performance Scan and a first deployment direction.",
    keywords: [
      "Performance Scan",
      "évaluer potentiel performance",
      "diagnostic économique",
      "Forward Deployed Engineer",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact · priorité économique",
    titleEn: "Contact · economic priority",
    description:
      "Premier échange de 30 minutes pour comprendre votre priorité économique et décider si un Performance Scan est pertinent.",
    descriptionEn:
      "Initial 30-minute conversation to understand your economic priority and decide whether a Performance Scan is relevant.",
    keywords: ["contact TWM Advisory", "tannous@twm.expert"],
  },
  "mentions-legales": {
    path: "/mentions-legales",
    title: "Mentions légales",
    titleEn: "Legal notice",
    description:
      "Mentions légales TWM ADVISORY · SAS, SIREN 106 067 549, RCS Lille Métropole. Éditeur du site www.twm.expert.",
    descriptionEn:
      "Legal notice for TWM ADVISORY · SAS, SIREN 106 067 549, RCS Lille Métropole. Publisher of www.twm.expert.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  confidentialite: {
    path: "/confidentialite",
    title: "Politique de confidentialité",
    titleEn: "Privacy policy",
    description:
      "Politique de confidentialité TWM Advisory : données des questionnaires et partenariats, cookies GTM/GA4 sur consentement, droits RGPD et sous-traitants.",
    descriptionEn:
      "TWM Advisory privacy policy: questionnaire and partnership data, consent-based GTM/GA4 cookies, GDPR rights and processors.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
};

const ogImage = "/opengraph-image";

function languageAlternates(frPath: string, locale: Locale = "fr") {
  const languages: Record<string, string> = {
    "fr-FR": frPath,
    "x-default": frPath,
  };
  if (hasEnPillar(frPath)) {
    languages["en-US"] = withLocale(frPath, "en");
  }
  return {
    canonical: withLocale(frPath, locale),
    languages,
  };
}

export function buildPageMetadata(
  key: PageSeoKey,
  locale: Locale = "fr",
): Metadata {
  const page = pageSeo[key];
  const isEn = locale === "en";
  const title = isEn ? page.titleEn : page.title;
  const description = isEn ? page.descriptionEn : page.description;
  const localizedPath = withLocale(page.path, locale);
  const pageKeywords = Array.from(new Set([...keywords, ...(page.keywords ?? [])]));
  const absoluteUrl =
    localizedPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${localizedPath}`;

  return {
    title: key === "home" ? { absolute: title } : title,
    description,
    keywords: pageKeywords,
    alternates: languageAlternates(page.path, locale),
    openGraph: {
      type: "website",
      locale: isEn ? siteConfig.alternateLocale : siteConfig.locale,
      alternateLocale: [isEn ? siteConfig.locale : siteConfig.alternateLocale],
      url: absoluteUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "FR",
      "content-language": isEn ? "en" : "fr",
    },
  };
}

export function buildCadreMetadata(post: CadrePost): Metadata {
  const path = `/cadre/${post.slug}`;
  const url = `${siteConfig.url}${path}`;
  const title = post.title.fr;
  const description = `${post.insight.fr} ${post.verdict.fr}`.trim();

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "Cadre TWM",
      "performance opérationnelle",
      post.intent.replace("_", " "),
    ],
    authors: [{ name: siteConfig.founderName }],
    alternates: languageAlternates(path),
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [siteConfig.founderName],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/** Root layout defaults — no canonical (pages set their own). */
export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s · ${siteConfig.name}`,
    },
    description,
    keywords,
    applicationName: siteConfig.name,
    authors: [
      { name: siteConfig.founderName, url: `${siteConfig.url}/a-propos` },
      { name: siteConfig.name, url: siteConfig.url },
    ],
    creator: siteConfig.founderName,
    publisher: siteConfig.legalName,
    category: "Business",
    classification:
      "Operating Performance Partner · Forward Deployed Engineer · performance opérationnelle, coûts, capacité, marge",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      types: {
        "text/plain": [
          { url: "/llms.txt", title: "llms.txt" },
          { url: "/llms-full.txt", title: "llms-full.txt" },
        ],
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "TWM Advisory · Operating Performance Partner · Forward Deployed Engineer",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      ...(siteConfig.twitterHandle
        ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
        : {}),
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "FR",
      "content-language": "fr",
      "og:locale:alternate": siteConfig.alternateLocale,
      "en:title": titleEn,
      "en:description": descriptionEn,
    },
  };
}

function breadcrumbItems(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? siteConfig.url : `${siteConfig.url}${c.path}`,
    })),
  };
}

export function buildJsonLd() {
  const organization = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: content.meta.description.fr,
    slogan: content.meta.title.fr,
    foundingDate: "2026-06-04",
    taxID: siteConfig.siren,
    vatID: siteConfig.vatId,
    image: `${siteConfig.url}/opengraph-image`,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon`,
    },
    priceRange: "$$",
    areaServed: siteConfig.areaServed.map((code) => ({
      "@type": "Country",
      name: code,
    })),
    knowsAbout: [
      "Operating Performance Partner",
      "Forward Deployed Engineer",
      "Performance opérationnelle",
      "Réduction des coûts évitables",
      "Capacité opérationnelle",
      "Protection de la marge",
      "Diagnostic économique",
      "Gain-share",
      "Partner Performance",
      "Performance OS",
      "Automatisation et IA appliquée",
      "Mesure avec la finance",
      "Exécution embarquée avec les équipes",
    ],
    serviceType: [
      "Performance Scan",
      "Mandat de performance",
      "Forward Deployed execution",
      "Partner Performance",
      "Exécution opérationnelle",
      "Mesure des gains avec la finance",
      "Cadre Performance OS",
    ],
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["French", "English", "Arabic"],
      url: `${siteConfig.url}/demarrer`,
    },
    founder: { "@id": `${siteConfig.url}/#person` },
    ...(siteConfig.linkedin ? { sameAs: [siteConfig.linkedin] } : {}),
  };

  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.founderName,
    jobTitle: "Fondateur · Forward Deployed Engineer · Operating Performance Partner",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    description: content.about.p1.fr,
    knowsLanguage: ["fr", "en", "ar"],
    url: `${siteConfig.url}/a-propos`,
    email: siteConfig.email,
    image: `${siteConfig.url}/uploads/WhatsApp%20Image%202026-07-29%20at%2015.14.56%20(2).jpeg`,
    knowsAbout: organization.knowsAbout,
    ...(siteConfig.linkedin ? { sameAs: [siteConfig.linkedin] } : {}),
    hasOccupation: {
      "@type": "Occupation",
      name: "Forward Deployed Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "FR",
      },
      skills: [
        "Operating performance",
        "Embedded delivery",
        "Economic diagnosis",
        "Gain measurement",
      ],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: content.meta.description.fr,
    inLanguage: ["fr-FR", "en-US"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Évaluer votre potentiel",
      target: `${siteConfig.url}/demarrer`,
    },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: content.meta.title.fr,
    description: content.meta.description.fr,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/opengraph-image`,
    },
    inLanguage: "fr-FR",
    dateModified: siteRevisedAt,
  };

  const services = [
    {
      title: "Réduire les coûts évitables",
      body: "Établir les dépenses évitables, leur coût de sortie et les conditions de réduction.",
      url: "/performance",
    },
    {
      title: "Renforcer la capacité",
      body: "Accélérer la préparation, fiabiliser les flux et définir l'usage de la capacité libérée.",
      url: "/performance",
    },
    {
      title: "Protéger la marge",
      body: "Relier le travail réalisé à la facturation et contrôler les écarts prix / coûts de service.",
      url: "/performance",
    },
    {
      title: "Partner Performance",
      body: "Structurer partenaires, leads, co-selling et gouvernance pour transformer le réseau en système de croissance.",
      url: "/partner-performance",
    },
    {
      title: "Forward Deployed Engineer",
      body: "Intervention embarquée avec les équipes clientes : diagnostic, exécution et mesure jusqu'au résultat économique.",
      url: "/a-propos",
    },
  ].map((service, i) => ({
    "@type": "Service",
    "@id": `${siteConfig.url}/#service-${i + 1}`,
    name: service.title,
    description: service.body,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.areaServed,
    url: `${siteConfig.url}${service.url}`,
  }));


  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      person,
      website,
      webpage,
      breadcrumbItems([{ name: "Accueil", path: "/" }]),
      ...services,
    ],
  };
}

export function buildPageJsonLd(
  key: PageSeoKey,
  extraCrumbs: { name: string; path: string }[] = [],
  locale: Locale = "fr",
) {
  const page = pageSeo[key];
  const isEn = locale === "en";
  const title = isEn ? page.titleEn : page.title;
  const description = isEn ? page.descriptionEn : page.description;
  const localizedPath = withLocale(page.path, locale);
  const homeLabel = isEn ? "Home" : "Accueil";
  const pageLabel = title.split(" · ")[0];
  const crumbs = [
    { name: homeLabel, path: withLocale("/", locale) },
    ...(key === "home"
      ? []
      : [{ name: pageLabel, path: localizedPath }]),
    ...extraCrumbs,
  ];

  const pageUrl =
    localizedPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${localizedPath}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: isEn ? "en-US" : "fr-FR",
      dateModified: siteRevisedAt,
    },
    breadcrumbItems(crumbs),
  ];

  if (key === "faq") {
    const faqPath = withLocale("/faq", locale);
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteConfig.url}${faqPath}#faq`,
      url: `${siteConfig.url}${faqPath}`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      inLanguage: isEn ? "en-US" : "fr-FR",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: isEn ? item.q.en : item.q.fr,
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn ? item.a.en : item.a.fr,
        },
      })),
    });
  }

  if (key === "a-propos") {
    const aboutPath = withLocale("/a-propos", locale);
    graph.push({
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}${aboutPath}#profile`,
      url: `${siteConfig.url}${aboutPath}`,
      name: title,
      description,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      inLanguage: isEn ? "en-US" : "fr-FR",
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildCadreJsonLd(post: CadrePost) {
  const url = `${siteConfig.url}/cadre/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title.fr,
        description: post.insight.fr,
        datePublished: post.date,
        dateModified: post.updatedAt ?? post.date,
        author: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          name: siteConfig.founderName,
        },
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        mainEntityOfPage: url,
        inLanguage: "fr-FR",
        articleSection: "Cadre",
        keywords: [
          post.verdict.fr,
          "Operating Performance Partner",
          "Forward Deployed Engineer",
          "performance opérationnelle",
          "TWM Advisory",
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "article p"],
        },
      },
      breadcrumbItems([
        { name: "Accueil", path: "/" },
        { name: "Cadre", path: "/cadre" },
        { name: post.title.fr, path: `/cadre/${post.slug}` },
      ]),
    ],
  };
}


export function buildImpactMetadata(item: {
  slug: string;
  title: { fr: string; en: string };
  situation: { fr: string; en: string };
}): Metadata {
  const path = `/impact/${item.slug}`;
  const url = `${siteConfig.url}${path}`;
  const title = item.title.fr;
  const description = item.situation.fr;
  return {
    title,
    description,
    keywords: [...keywords, "impact performance", item.title.fr],
    alternates: languageAlternates(path),
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildImpactJsonLd(item: {
  slug: string;
  title: { fr: string; en: string };
  situation: { fr: string; en: string };
  intervention: { fr: string; en: string };
  measure: { fr: string; en: string };
}) {
  const path = `/impact/${item.slug}`;
  const url = `${siteConfig.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: item.title.fr,
        description: item.situation.fr,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "fr-FR",
        dateModified: siteRevisedAt,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: item.title.fr,
        description: `${item.situation.fr} ${item.intervention.fr} ${item.measure.fr}`.trim(),
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: siteConfig.areaServed,
        url,
      },
      breadcrumbItems([
        { name: "Accueil", path: "/" },
        { name: "Impact", path: "/impact" },
        { name: item.title.fr, path },
      ]),
    ],
  };
}

export function sitemapEntries(): {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  languages?: Record<string, string>;
}[] {
  const entries: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
    languages?: Record<string, string>;
  }[] = [];

  for (const key of Object.keys(pageSeo) as PageSeoKey[]) {
    const p = pageSeo[key];
    const priority = p.priority ?? (key === "home" ? 1 : 0.7);
    const changeFrequency = p.changeFrequency ?? "monthly";
    const languages = hasEnPillar(p.path)
      ? {
          "fr-FR": p.path === "/" ? siteConfig.url : `${siteConfig.url}${p.path}`,
          "en-US": `${siteConfig.url}${withLocale(p.path, "en")}`,
          "x-default":
            p.path === "/" ? siteConfig.url : `${siteConfig.url}${p.path}`,
        }
      : undefined;

    entries.push({
      path: p.path,
      priority,
      changeFrequency,
      languages,
    });

    if (hasEnPillar(p.path)) {
      entries.push({
        path: withLocale(p.path, "en"),
        priority: Math.max(0.5, priority - 0.05),
        changeFrequency,
        languages,
      });
    }
  }

  return entries;
}
