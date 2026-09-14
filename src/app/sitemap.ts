import type { MetadataRoute } from "next";
import { getAllCadreSlugs, getCadrePost } from "@/lib/cadre";
import { getAllImpactSlugs } from "@/lib/editorial";
import { siteConfig, sitemapEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const base = sitemapEntries().map((entry) => ({
    url:
      entry.path === "/"
        ? siteConfig.url
        : `${siteConfig.url}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    ...(entry.languages
      ? { alternates: { languages: entry.languages } }
      : {}),
  }));

  const impact = getAllImpactSlugs().map((slug) => ({
    url: `${siteConfig.url}/impact/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = getAllCadreSlugs().map((slug) => {
    const post = getCadrePost(slug)!;
    return {
      url: `${siteConfig.url}/cadre/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    };
  });

  return [...base, ...impact, ...posts];
}
