import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/approche", destination: "/methode", permanent: true },
      { source: "/offres", destination: "/performance", permanent: true },
      { source: "/architecture", destination: "/technology", permanent: true },
      // Old Signal article slugs → Cadre (specific first)
      {
        source: "/signal/outils-vs-jugement",
        destination: "/cadre/temps-libere-et-marge",
        permanent: true,
      },
      {
        source: "/signal/ca-tourne-ou-ca-derive",
        destination: "/cadre/gain-share-mesurable",
        permanent: true,
      },
      {
        source: "/signal/commencer-petit-prouver",
        destination: "/cadre/premier-chantier-performance",
        permanent: true,
      },
      { source: "/signal", destination: "/cadre", permanent: true },
      { source: "/signal/:slug", destination: "/cadre/:slug", permanent: true },
      {
        source: "/cadre/outils-vs-jugement",
        destination: "/cadre/temps-libere-et-marge",
        permanent: true,
      },
      {
        source: "/cadre/ca-tourne-ou-ca-derive",
        destination: "/cadre/gain-share-mesurable",
        permanent: true,
      },
      {
        source: "/cadre/commencer-petit-prouver",
        destination: "/cadre/premier-chantier-performance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
