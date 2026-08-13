import type { MetadataRoute } from "next";
import { getAllSignalSlugs, getSignalPost } from "@/lib/signal";
import { siteConfig, sitemapEntries } from "@/lib/seo";

function languageAlternates(path: string) {
  const fr = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const en =
    path === "/"
      ? `${siteConfig.url}/?lang=en`
      : `${siteConfig.url}${path}?lang=en`;
  return { languages: { fr, en } };
}

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
    alternates: languageAlternates(entry.path),
  }));

  const posts = getAllSignalSlugs().map((slug) => {
    const post = getSignalPost(slug)!;
    return {
      url: `${siteConfig.url}/signal/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: languageAlternates(`/signal/${slug}`),
    };
  });

  return [...base, ...posts];
}
