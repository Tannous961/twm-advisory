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
    title: "Operating Performance — mandat d'exécution mesurable",
    titleEn: "Operating Performance — measurable execution mandate",
    description:
      "Réduire les coûts, les reprises et les pertes de capacité — exécuté en posture Forward Deployed avec vos équipes, mesuré avec votre finance.",
    descriptionEn:
      "Cut costs, rework and capacity loss — executed in a Forward Deployed posture with your teams, measured with your finance team.",
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
    title: "Partner Performance — réseau de partenaires en système de croissance",
    titleEn: "Partner Performance — turn a partner network into a growth system",
    description:
      "Transformer un réseau de partenaires en système de croissance : leads, co-selling, referrals et gouvernance — avec exécution Forward Deployed.",
    descriptionEn:
      "Turn a partner network into a growth system: leads, co-selling, referrals and governance — with Forward Deployed execution.",
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
    title: "Méthode — du résultat recherché à la mesure",
    titleEn: "Method — from the outcome sought to measurement",
    description:
      "Cinq étapes Forward Deployed : de la priorité économique au résultat vérifié avec la finance.",
    descriptionEn:
      "Five Forward Deployed steps: from economic priority to a finance-verified outcome.",
    keywords: [
      "méthode performance opérationnelle",
      "Forward Deployed",
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
    title: "À propos — Tannous Mekari, Forward Deployed Engineer",
    titleEn: "About — Tannous Mekari, Forward Deployed Engineer",
    description:
      "Tannous Mekari, président de TWM ADVISORY. Forward Deployed Engineer et Operating Performance Partner : embarqué avec vos équipes jusqu'au résultat mesuré.",
    descriptionEn:
      "Tannous Mekari, president of TWM ADVISORY. Forward Deployed Engineer and Operating Performance Partner: embedded with your teams through to measured results.",
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
    title: "FAQ — questions avant une décision de performance",
    titleEn: "FAQ — questions before a performance decision",
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
    title: "Évaluer votre potentiel — questionnaire initial",
    titleEn: "Assess your potential — initial questionnaire",
    description:
      "Soumettez une priorité de performance. TWM prépare un Performance Scan et une orientation Forward Deployed.",
    descriptionEn:
      "Submit a performance priority. TWM prepares a Performance Scan and a Forward Deployed direction.",
    keywords: [
      "Performance Scan",
      "évaluer potentiel performance",
      "diagnostic économique",
      "Forward Deployed Engineer",
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
  const pageKeywords = Array.from(new Set([...keywords, ...(page.keywords ?? [])]));
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
      "Operating Performance Partner · Forward Deployed Engineer — performance opérationnelle, coûts, capacité, marge",
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
          alt: "TWM Advisory — Operating Performance Partner · Forward Deployed Engineer",
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
    jobTitle: "Fondateur — Forward Deployed Engineer · Operating Performance Partner",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    description: content.about.p1.fr,
    knowsLanguage: ["fr", "en", "ar"],
    url: `${siteConfig.url}/a-propos`,
    email: siteConfig.email,
    image: `${siteConfig.url}/uploads/WhatsApp%20Image%202026-07-29%20at%2015.14.56%20(2).jpeg`,
    knowsAbout: organization.knowsAbout,
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
    dateModified: new Date().toISOString().slice(0, 10),
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
) {
  const page = pageSeo[key];
  const crumbs = [
    { name: "Accueil", path: "/" },
    ...(key === "home" ? [] : [{ name: page.title.split(" — ")[0], path: page.path }]),
    ...extraCrumbs,
  ];

  const graph: Record<string, unknown>[] = [
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
  ];

  if (key === "faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/faq#faq`,
      url: `${siteConfig.url}/faq`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q.fr,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.fr,
        },
      })),
    });
  }

  if (key === "a-propos") {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/a-propos#profile`,
      url: `${siteConfig.url}/a-propos`,
      name: page.title,
      description: page.description,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
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
