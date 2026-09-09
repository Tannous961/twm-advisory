# n8n — dépôt Cadre → Google Drive

Ce flux reçoit le brouillon produit par l’agent Cadre et le dépose dans Google Drive pour relecture humaine.

## Secrets requis

Dans GitHub Actions / environnement d’exécution :

- `OPENROUTER_API_KEY` ou `OPENAI_API_KEY`
- `TAVILY_API_KEY` (ou `WEB_SEARCH_API_KEY` / `BRAVE_SEARCH_API_KEY`)
- `N8N_WEBHOOK_URL`
- `N8N_WEBHOOK_SECRET` (optionnel mais recommandé)

Dans n8n :

- Identifiants Google Drive OAuth
- Le même secret webhook côté n8n

## Payload envoyé au webhook

`POST N8N_WEBHOOK_URL`

Headers :

- `Content-Type: application/json`
- `X-TWM-Webhook-Secret: <secret>` (si défini)

Body (extrait) :

```json
{
  "event": "cadre.draft.ready",
  "generatedAt": "2026-09-09T07:00:00.000Z",
  "folderName": "TWM / Cadre / Brouillons / 2026-09-09-slug",
  "post": { "slug": "...", "title": { "fr": "...", "en": "..." } },
  "reviewMarkdown": "# Revue Cadre ...",
  "topic": { "pillar": "economic_performance", "score": 11 },
  "sources": [{ "title": "...", "url": "https://..." }]
}
```

## Workflow n8n recommandé

1. **Webhook** (POST) — path dédié, auth par header secret.
2. **IF** — rejeter si `X-TWM-Webhook-Secret` ne match pas.
3. **Google Drive → Create folder** — nom = `{{$json.folderName}}` sous `TWM / Cadre / Brouillons`.
4. **Google Drive → Create file from text**
   - `{{$json.post.slug}}-FR.md` avec `{{$json.frDocument}}`
   - `{{$json.post.slug}}-EN.md` avec `{{$json.enDocument}}`
   - `{{$json.post.slug}}-review.md` avec `{{$json.reviewMarkdown}}`
   - `{{$json.post.slug}}-sources.json` avec `{{$json.sources}}`
5. **Optional** — email/Slack : “Nouveau brouillon Cadre à relire”.

## Après validation humaine

1. Corriger le ton dans Drive si besoin.
2. Reporter le texte validé dans `content/cadre-drafts/<date>-<slug>.json` (ou mettre à jour le draft généré).
3. Publier :

```bash
npm run cadre:publish -- content/cadre-drafts/<date>-<slug>.json
```

4. Commit + PR + merge → Vercel publie `/cadre/<slug>`.

## Règle human-first

Tant que le fichier n’est pas dans `content/cadre/` avec `"status": "published"`, **rien n’est public**.
Drive est uniquement le sas de relecture.
