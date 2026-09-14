import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TWM Advisory",
    short_name: "TWM",
    description:
      "Operating Performance Partner, Forward Deployed Engineer. Mandat de performance mesurable, exécuté avec vos équipes.",
    start_url: "/",
    display: "standalone",
    background_color: "#070A11",
    theme_color: "#B87333",
    lang: "fr-FR",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
