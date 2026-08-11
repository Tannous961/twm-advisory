import type { MetadataRoute } from "next";
import { getAllSignalSlugs, getSignalPost } from "@/lib/signal";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/approche",
  "/offres",
  "/signal",
  "/architecture",
  "/a-propos",
  "/faq",
  "/demarrer",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const base = routes.map((route, i) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: (i === 0 ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: i === 0 ? 1 : 0.7,
    alternates: {
      languages: {
        fr: `${siteConfig.url}${route}`,
        en: `${siteConfig.url}${route}?lang=en`,
      },
    },
  }));

  const posts = getAllSignalSlugs().map((slug) => {
    const post = getSignalPost(slug)!;
    return {
      url: `${siteConfig.url}/signal/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${siteConfig.url}/signal/${slug}`,
          en: `${siteConfig.url}/signal/${slug}?lang=en`,
        },
      },
    };
  });

  return [...base, ...posts];
}
