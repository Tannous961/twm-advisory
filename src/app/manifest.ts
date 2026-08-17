import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TWM Advisory",
    short_name: "TWM",
    description: "Conseil et déploiement de solutions IA.",
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
