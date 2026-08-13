import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/** Allow Google + major AI crawlers (GEO). Block only API internals. */
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
