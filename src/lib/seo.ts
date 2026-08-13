import type { Metadata } from "next";
import { content } from "./content";

export const siteConfig = {
  name: "TWM Advisory",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.twm.expert",
  locale: "fr_FR",
  alternateLocale: "en_US",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  founderName: process.env.NEXT_PUBLIC_FOUNDER_NAME || "Tannous Mekari",
  areaServed: [
    "FR", // France
    "BE", // Belgique
    "CH", // Suisse
    "LU", // Luxembourg
    "MA", // Maroc
    "US", // USA
    "LB", // Liban
    "AE", // Émirats (Dubaï)
    "SA", // Arabie saoudite
    "NG", // Nigeria
    "BH", // Bahreïn
  ],
} as const;

const title = content.meta.title.fr;
const description = content.meta.description.fr;
const titleEn = content.meta.title.en;
const descriptionEn = content.meta.description.en;

export const keywords = [
  "TWM Advisory",
  "conseil IA",
  "produits agentiques",
  "déploiement d'agents",
  "direction IA à temps partagé",
  "stratégie IA",
  "opérateur embarqué",
  "cabinet avocat",
  "expert-comptable",
  "directions générales",
  "confidentialité données",
  "impact mesuré",
];

export function buildMetadata(): Metadata {
  const ogImage = "/opengraph-image";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s · ${siteConfig.name}`,
    },
    description,
    keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Business",
    classification: "Conseil IA, produits agentiques & déploiement d'agents",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
      languages: {
        "fr-FR": "/",
        "en-US": "/?lang=en",
        "x-default": "/",
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
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: content.meta.description.fr,
    slogan: "Conseil, produits & agents IA en production.",
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
      "Stratégie IA",
      "Produits agentiques",
      "Déploiement d'agents",
      "Direction IA à temps partagé",
      "Confidentialité des données",
      "Opérateur embarqué",
    ],
    serviceType: [
      "Audit IA de ton organisation",
      "Déploiement d'agents",
      "Audit & certification de tes systèmes IA",
      "Accompagnement stratégique",
      "Formation & sensibilisation",
    ],
    ...(siteConfig.email
      ? { email: siteConfig.email, contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          availableLanguage: ["French", "English", "Arabic"],
        } }
      : {}),
    ...(siteConfig.linkedin
      ? { sameAs: [siteConfig.linkedin] }
      : {}),
  };

  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.founderName,
    jobTitle: "Opérateur embarqué & direction IA à temps partagé",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    description: content.about.p1.fr,
    knowsLanguage: ["fr", "en", "ar"],
    image: `${siteConfig.url}/uploads/WhatsApp%20Image%202026-07-29%20at%2015.14.56%20(2).jpeg`,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: content.meta.description.fr,
    inLanguage: ["fr-FR", "en-US"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqEntities,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteConfig.url,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      person,
      website,
      webpage,
      breadcrumb,
      faqPage,
      ...services,
    ],
  };
}
