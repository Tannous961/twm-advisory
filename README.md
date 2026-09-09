# TWM Advisory

Site Next.js / React (mobile-first) pour TWM Advisory.

**Documentation complète :** [`PROJECT.md`](PROJECT.md)

## Démarrer

```bash
npm install
cp .env.example .env
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Supabase (leads + vidéos)
- OpenRouter / OpenAI (briefs)
- Resend (emails)
- i18n FR / EN côté client

## Routes clés

| Route | Rôle |
|-------|------|
| `/cadre` | Contenu éditorial Cadre |
| `/demarrer` | Briefing client (jeu + score + signal) |
| `/offres` | Parcours 5 offres |
| `/partenaires` | Socle BD / partenariats |

## Agent éditorial Cadre

Voir [`docs/cadre-editorial-agent.md`](docs/cadre-editorial-agent.md) et [`docs/cadre-n8n-drive.md`](docs/cadre-n8n-drive.md).

```bash
npm run cadre:run -- --dry-run
```

## SEO

Configurer l’URL canonique dans `.env` :

```bash
NEXT_PUBLIC_SITE_URL=https://www.twm.expert
```

Inclus : metadata Open Graph / Twitter, JSON-LD, `robots.txt`, `sitemap.xml`, manifest, images OG dynamiques.
