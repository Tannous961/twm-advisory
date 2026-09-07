import type { Metadata } from "next";
import { content } from "./content";
import { faqItems } from "./editorial";
import type { CadrePost } from "./cadre";

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

const title = content.meta.title.fr;
const description = content.meta.description.fr;
const titleEn = content.meta.title.en;
const descriptionEn = content.meta.description.en;

/** High-intent + GEO keywords (FR market). */
export const keywords = [
  "TWM Advisory",
  "Operating Performance Partner",
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
    keywords,
    priority: 1,
    changeFrequency: "weekly",
  },
  performance: {
    path: "/performance",
    title: "Operating Performance — mandat d'exécution mesurable",
    titleEn: "Operating Performance — measurable execution mandate",
    description:
      "Réduire les coûts, les reprises et les pertes de capacité — et activer le commerce lorsque le levier est commercial.",
    descriptionEn:
      "Cut costs, rework and capacity loss — and activate commerce when the lever is commercial.",
    keywords: [
      "Operating Performance",
      "Performance Scan",
      "réduction coûts entreprise",
      "gain-share conseil",
    ],
  },
  "partner-performance": {
    path: "/partner-performance",
    title: "Partner Performance — réseau de partenaires en système de croissance",
    titleEn: "Partner Performance — turn a partner network into a growth system",
    description:
      "Structurer partenaires, leads, co-selling, referrals et gouvernance du réseau pour générer des opportunités qualifiées et réduire le coût d'acquisition.",
    descriptionEn:
      "Structure partners, leads, co-selling, referrals and network governance to generate qualified opportunities and reduce acquisition cost.",
    keywords: [
      "Partner Performance",
      "réseau partenaires",
      "co-selling",
      "architecture de leads",
    ],
  },
  methode: {
    path: "/methode",
    title: "Méthode — du résultat recherché à la mesure",
    titleEn: "Method — from the outcome sought to measurement",
    description:
      "Cinq étapes pour relier une priorité de performance à un résultat économique vérifiable.",
    descriptionEn:
      "Five steps to connect a performance priority to a verifiable economic outcome.",
    keywords: [
      "méthode performance opérationnelle",
      "référence économique",
      "mesure des gains",
    ],
  },
  technology: {
    path: "/technology",
    title: "Technology — contexte, pilotage et product builders",
    titleEn: "Technology — context, steering and product builders",
    description:
      "Couche de contexte et de pilotage TWM, et capacité à faire de vos équipes des product builders de leur métier — pas un SaaS vendu.",
    descriptionEn:
      "TWM's context and steering layer, and the ability to turn your teams into product builders of their craft — not a SaaS product we sell.",
    keywords: [
      "Performance OS",
      "product builders",
      "automatisation performance",
      "pilotage opérationnel",
    ],
  },
  impact: {
    path: "/impact",
    title: "Impact — leviers de performance illustratifs",
    titleEn: "Impact — illustrative performance levers",
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
    title: "Cadre — la performance au-delà des promesses",
    titleEn: "Cadre — performance beyond promises",
    description:
      "Notes pour les dirigeants qui doivent arbitrer les coûts, la capacité et la transformation.",
    descriptionEn:
      "Notes for leaders who must decide on costs, capacity and transformation.",
    keywords: ["Cadre TWM", "gain-share", "temps libéré marge"],
  },
  partenaires: {
    path: "/partenaires",
    title: "Partenaires — cadre de collaboration",
    titleEn: "Partners — collaboration framework",
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
    title: "À propos — Tannous Mekari, fondateur de TWM Advisory",
    titleEn: "About — Tannous Mekari, founder of TWM Advisory",
    description:
      "Tannous Mekari, président de TWM ADVISORY. Operating Performance Partner : stratégie, opérations et exécution.",
    descriptionEn:
      "Tannous Mekari, president of TWM ADVISORY. Operating Performance Partner: strategy, operations and execution.",
    keywords: [
      "Tannous Mekari",
      "TWM ADVISORY",
      "Operating Performance Partner",
    ],
  },
  faq: {
    path: "/faq",
    title: "FAQ — questions avant une décision de performance",
    titleEn: "FAQ — questions before a performance decision",
    description:
      "Questions fréquentes sur le mandat de performance, le gain-share, la mesure des gains et Performance OS.",
    descriptionEn:
      "Common questions on the performance mandate, gain-share, gain measurement and Performance OS.",
    keywords: [
      "FAQ performance",
      "gain-share",
      "Operating Performance Partner",
    ],
  },
  demarrer: {
    path: "/demarrer",
    title: "Évaluer votre potentiel — questionnaire initial",
    titleEn: "Assess your potential — initial questionnaire",
    description:
      "Questionnaire initial TWM Advisory pour préparer un Performance Scan : priorité économique, contraintes et orientation.",
    descriptionEn:
      "TWM Advisory initial questionnaire to prepare a Performance Scan: economic priority, constraints and direction.",
    keywords: [
      "Performance Scan",
      "évaluer potentiel performance",
      "diagnostic économique",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact — priorité économique",
    titleEn: "Contact — economic priority",
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
      "Mentions légales TWM ADVISORY — SAS, SIREN 106 067 549, RCS Lille Métropole. Éditeur du site www.twm.expert.",
    descriptionEn:
      "Legal notice for TWM ADVISORY — SAS, SIREN 106 067 549, RCS Lille Métropole. Publisher of www.twm.expert.",
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

function languageAlternates(path: string) {
  return {
    canonical: path,
    languages: {
      "fr-FR": path,
      "en-US": `${path === "/" ? "/" : path}?lang=en`,
      "x-default": path,
    },
  } as const;
}

export function buildPageMetadata(key: PageSeoKey): Metadata {
  const page = pageSeo[key];
  const pageKeywords = [...keywords, ...(page.keywords ?? [])];
  const absoluteUrl =
    page.path === "/" ? siteConfig.url : `${siteConfig.url}${page.path}`;

  return {
    title: key === "home" ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: pageKeywords,
    alternates: languageAlternates(page.path),
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
      url: absoluteUrl,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
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
      "content-language": "fr",
      "en:title": page.titleEn,
      "en:description": page.descriptionEn,
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
      "Operating Performance Partner — performance opérationnelle, coûts, capacité, marge",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      types: {
        "text/plain": [{ url: "/llms.txt", title: "llms.txt" }],
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
          alt: "TWM Advisory — Operating Performance Partner",
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
  const faqEntities = faqItems.map((item) => ({
    "@type": "Question",
    name: item.q.fr,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a.fr,
    },
  }));

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
      "Performance opérationnelle",
      "Réduction des coûts évitables",
      "Capacité opérationnelle",
      "Protection de la marge",
      "Diagnostic économique",
      "Gain-share",
      "Performance OS",
      "Automatisation et IA appliquée",
      "Mesure avec la finance",
    ],
    serviceType: [
      "Performance Scan",
      "Mandat de performance",
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
    jobTitle: "Fondateur — Operating Performance Partner",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    description: content.about.p1.fr,
    knowsLanguage: ["fr", "en", "ar"],
    url: `${siteConfig.url}/a-propos`,
    email: siteConfig.email,
    image: `${siteConfig.url}/uploads/WhatsApp%20Image%202026-07-29%20at%2015.14.56%20(2).jpeg`,
    knowsAbout: organization.knowsAbout,
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
    dateModified: new Date().toISOString().slice(0, 10),
  };

  const services = [
    {
      title: "Réduire les coûts évitables",
      body: "Établir les dépenses évitables, leur coût de sortie et les conditions de réduction.",
    },
    {
      title: "Renforcer la capacité",
      body: "Accélérer la préparation, fiabiliser les flux et définir l'usage de la capacité libérée.",
    },
    {
      title: "Protéger la marge",
      body: "Relier le travail réalisé à la facturation et contrôler les écarts prix / coûts de service.",
    },
  ].map((service, i) => ({
    "@type": "Service",
    "@id": `${siteConfig.url}/#service-${i + 1}`,
    name: service.title,
    description: service.body,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.areaServed,
    url: `${siteConfig.url}/performance`,
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/faq#faq`,
    url: `${siteConfig.url}/faq`,
    mainEntity: faqEntities,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      person,
      website,
      webpage,
      breadcrumbItems([{ name: "Accueil", path: "/" }]),
      faqPage,
      ...services,
    ],
  };
}

export function buildPageJsonLd(
  key: PageSeoKey,
  extraCrumbs: { name: string; path: string }[] = [],
) {
  const page = pageSeo[key];
  const crumbs = [
    { name: "Accueil", path: "/" },
    ...(key === "home" ? [] : [{ name: page.title.split(" — ")[0], path: page.path }]),
    ...extraCrumbs,
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}${page.path === "/" ? "" : page.path}#webpage`,
        url: page.path === "/" ? siteConfig.url : `${siteConfig.url}${page.path}`,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: ["fr-FR", "en-US"],
        dateModified: new Date().toISOString().slice(0, 10),
      },
      breadcrumbItems(crumbs),
    ],
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
        dateModified: post.date,
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

export function sitemapEntries(): {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] {
  return (Object.keys(pageSeo) as PageSeoKey[]).map((key) => {
    const p = pageSeo[key];
    return {
      path: p.path,
      priority: p.priority ?? (key === "home" ? 1 : 0.7),
      changeFrequency: p.changeFrequency ?? "monthly",
    };
  });
}
