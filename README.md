# TWM Advisory

Site Next.js / React (mobile-first) pour TWM Advisory.

## Démarrer

```bash
cd web
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- i18n FR / EN côté client

## SEO

Configurer l'URL canonique dans `.env.local` :

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://votredomaine.com
```

Inclus : metadata Open Graph / Twitter, JSON-LD (Organization, FAQ, Services), `robots.txt`, `sitemap.xml`, manifest, images OG dynamiques.
