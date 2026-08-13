import type { Metadata } from "next";
import { content } from "./content";
import type { SignalPost } from "./signal";

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
  "conseil IA",
  "consultant IA",
  "audit IA entreprise",
  "audit maturité IA",
  "déploiement agents IA",
  "agents IA en production",
  "IA agentique",
  "direction IA à temps partagé",
  "fractional CAIO",
  "Chief AI Officer externalisé",
  "stratégie IA",
  "gouvernance IA",
  "AI Act entreprise",
  "formation IA dirigeants",
  "IA cabinet avocat",
  "IA expert-comptable",
  "confidentialité données IA",
  "opérateur embarqué IA",
];

export type PageSeoKey =
  | "home"
  | "approche"
  | "offres"
  | "signal"
  | "partenaires"
  | "architecture"
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
  approche: {
    path: "/approche",
    title: "Approche — opérateur embarqué, de l'audit à la production",
    titleEn: "Approach — embedded operator, from audit to production",
    description:
      "Méthode TWM : je m'embarque dans vos équipes, je trouve où ça coûte (marge, temps, positions), je déploie des agents IA jusqu'en production — avec cadre data.",
    descriptionEn:
      "TWM method: I embed with your teams, find where it costs (margin, time, ground), deploy AI agents into production — with a data frame.",
    keywords: [
      "approche conseil IA",
      "opérateur embarqué IA",
      "méthode déploiement agents IA",
    ],
  },
  offres: {
    path: "/offres",
    title: "Offres IA — audit, agents, certification, stratégie, formation",
    titleEn: "AI services — audit, agents, certification, strategy, training",
    description:
      "5 offres TWM Advisory : audit IA, déploiement d'agents, certification de systèmes IA, accompagnement stratégique (direction IA à temps partagé), formation dirigeants.",
    descriptionEn:
      "5 TWM Advisory offers: AI audit, agent deployment, AI systems certification, strategic advisory (fractional AI leadership), executive training.",
    keywords: [
      "audit IA entreprise",
      "déploiement agents IA",
      "certification systèmes IA",
      "direction IA temps partagé",
      "formation IA dirigeants",
    ],
  },
  signal: {
    path: "/signal",
    title: "Signal — insights IA pour dirigeants",
    titleEn: "Signal — AI insights for executives",
    description:
      "Insights et verdicts TWM sur l'IA en entreprise : agents en production, jugement, audit, confidentialité. Pas de newsletter creuse.",
    descriptionEn:
      "TWM insights and verdicts on enterprise AI: agents in production, judgment, audit, confidentiality. No empty newsletter.",
    keywords: ["blog IA entreprise", "insights agents IA", "Signal TWM"],
  },
  partenaires: {
    path: "/partenaires",
    title: "Partenaires — BD, tech & co-delivery IA",
    titleEn: "Partners — BD, tech & AI co-delivery",
    description:
      "Devenez partenaire TWM Advisory : apporteur d'affaires, intégrateur tech, réseau métier ou co-delivery. Règles claires, un interlocuteur côté client.",
    descriptionEn:
      "Partner with TWM Advisory: deal introducer, tech integrator, domain network or co-delivery. Clear rules, one client counterpart.",
    keywords: [
      "partenariat conseil IA",
      "apporteur affaires IA",
      "co-delivery agents IA",
    ],
  },
  architecture: {
    path: "/architecture",
    title: "Agents IA en production — l'organisation TWM qui tourne",
    titleEn: "AI agents in production — the TWM org that runs",
    description:
      "15 agents IA nommés (Aria, Nexi…) organisés comme une firme. Preuve terrain : ce que TWM déploie chez soi avant de le déployer chez vous. Moi : la relation et les décisions.",
    descriptionEn:
      "15 named AI agents (Aria, Nexi…) organized like a firm. Field proof: what TWM runs in-house before deploying with you. Me: relationships and decisions.",
    keywords: [
      "agents IA en production",
      "organisation agentique",
      "IA agentique entreprise",
      "multi-agents IA",
    ],
  },
  "a-propos": {
    path: "/a-propos",
    title: "À propos — Tannous Mekari, opérateur IA terrain",
    titleEn: "About — Tannous Mekari, field AI operator",
    description:
      "Tannous Mekari, président de TWM ADVISORY (SIREN 106 067 549). 17 ans e-commerce et direction. Conseil IA, produits et agents en production — pas un vendeur de slides.",
    descriptionEn:
      "Tannous Mekari, president of TWM ADVISORY. 17 years in e-commerce and leadership. AI advisory, products and agents in production — not a slide vendor.",
    keywords: [
      "Tannous Mekari",
      "TWM ADVISORY",
      "consultant IA France",
      "fractional CAIO France",
    ],
  },
  faq: {
    path: "/faq",
    title: "FAQ — questions dirigeants avant un projet IA",
    titleEn: "FAQ — executive questions before an AI project",
    description:
      "FAQ TWM Advisory : confidentialité des données, délais, offres, direction IA à temps partagé, agents en production. Réponses directes pour DG et associés.",
    descriptionEn:
      "TWM Advisory FAQ: data confidentiality, timelines, offers, fractional AI leadership, agents in production. Straight answers for executives and partners.",
    keywords: [
      "FAQ conseil IA",
      "confidentialité IA entreprise",
      "questions déploiement agents IA",
    ],
  },
  demarrer: {
    path: "/demarrer",
    title: "Lancer le briefing — qualification IA gratuite",
    titleEn: "Start the briefing — free AI qualification",
    description:
      "Briefing opérateur TWM gratuit : intention, score de maturité, chemin d'offres, signal vidéo ou texte. Créneau proposé sous 48 h. Sans engagement.",
    descriptionEn:
      "Free TWM operator briefing: intent, maturity score, offer path, video or text signal. Slot proposed within 48h. No commitment.",
    keywords: [
      "briefing IA gratuit",
      "audit maturité IA",
      "prendre rendez-vous consultant IA",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact — tannous@twm.expert",
    titleEn: "Contact — tannous@twm.expert",
    description:
      "Contactez TWM Advisory : lancer le briefing ou écrire à tannous@twm.expert. Réponse sous 48 h ouvrées. France · présentiel et remote.",
    descriptionEn:
      "Contact TWM Advisory: start the briefing or email tannous@twm.expert. Reply within 2 business days. France · on-site and remote.",
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
      "Politique de confidentialité TWM Advisory : données briefing et partenariats, cookies GTM/GA4 (sur consentement), droits RGPD, sous-traitants (Vercel, Supabase, Resend, Google).",
    descriptionEn:
      "TWM Advisory privacy policy: briefing and partnership data, GTM/GA4 cookies (with consent), GDPR rights, processors (Vercel, Supabase, Resend, Google).",
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

export function buildSignalMetadata(post: SignalPost): Metadata {
  const path = `/signal/${post.slug}`;
  const url = `${siteConfig.url}${path}`;
  const title = post.title.fr;
  const description = `${post.insight.fr} ${post.verdict.fr}`.trim();

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "Signal TWM",
      "insight IA",
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
      "Conseil IA, audit IA, déploiement d'agents IA en production",
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
          alt: "TWM Advisory — Conseil, produits & agents IA en production",
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
  const faqEntities = content.faq.items.map((item) => ({
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
    slogan: "Conseil, produits & agents IA en production.",
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
      "Audit IA entreprise",
      "Déploiement d'agents IA",
      "Agents IA en production",
      "IA agentique",
      "Direction IA à temps partagé",
      "Fractional CAIO",
      "Gouvernance IA",
      "AI Act",
      "Confidentialité des données",
      "Formation IA dirigeants",
      "IA pour cabinets d'avocats",
      "IA pour experts-comptables",
    ],
    serviceType: [
      "Audit IA de ton organisation",
      "Déploiement d'agents",
      "Audit & certification de tes systèmes IA",
      "Accompagnement stratégique",
      "Formation & sensibilisation",
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
    jobTitle: "Président — opérateur IA & direction IA à temps partagé",
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
      name: "Lancer le briefing",
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

  const services = content.offers.items.map((offer, i) => ({
    "@type": "Service",
    "@id": `${siteConfig.url}/#service-${i + 1}`,
    name: offer.title.fr,
    description: `${offer.body.fr} ${offer.deliverable.fr}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.areaServed,
    url: `${siteConfig.url}/offres`,
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

export function buildSignalJsonLd(post: SignalPost) {
  const url = `${siteConfig.url}/signal/${post.slug}`;
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
        articleSection: "Signal",
        keywords: [
          post.verdict.fr,
          "IA entreprise",
          "agents IA",
          "TWM Advisory",
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "article p"],
        },
      },
      breadcrumbItems([
        { name: "Accueil", path: "/" },
        { name: "Signal", path: "/signal" },
        { name: post.title.fr, path: `/signal/${post.slug}` },
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
