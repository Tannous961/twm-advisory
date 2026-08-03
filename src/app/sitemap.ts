import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/approche",
  "/offres",
  "/architecture",
  "/a-propos",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route, i) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: i === 0 ? "weekly" : "monthly",
    priority: i === 0 ? 1 : 0.7,
    alternates: {
      languages: {
        fr: `${siteConfig.url}${route}`,
        en: `${siteConfig.url}${route}?lang=en`,
      },
    },
  }));
}
