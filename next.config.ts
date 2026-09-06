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
      {
        source: "/signal/outils-vs-jugement",
        destination: "/signal/temps-libere-et-marge",
        permanent: true,
      },
      {
        source: "/signal/ca-tourne-ou-ca-derive",
        destination: "/signal/gain-share-mesurable",
        permanent: true,
      },
      {
        source: "/signal/commencer-petit-prouver",
        destination: "/signal/premier-chantier-performance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
