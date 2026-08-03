import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TWM Advisory",
    short_name: "TWM",
    description:
      "Déploiement d'agents en production et direction IA à temps partagé.",
    start_url: "/",
    display: "standalone",
    background_color: "#070A11",
    theme_color: "#B87333",
    lang: "fr-FR",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
