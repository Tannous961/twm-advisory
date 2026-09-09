# Agent éditorial Cadre

Pipeline 3×/semaine (lun / mer / ven) pour préparer un article Cadre bilingue, sourcé, dans la voix de Tannous, puis le déposer sur **Google Drive** (Service Account) pour validation humaine.

## Commandes

```bash
# Fixture locale (sans clés recherche / LLM)
npm run cadre:run -- --dry-run

# Collecte + draft + dépôt Drive
npm run cadre:run

# Collecte + draft sans upload
npm run cadre:run -- --skip-deliver

# Publier un draft validé vers content/cadre/
npm run cadre:publish -- content/cadre-drafts/YYYY-MM-DD-slug.json
```

## Structure

- `content/cadre/` — articles publiés (lus par le site)
- `content/cadre-drafts/` — brouillons + notes de revue (non publics)
- `content/cadre-sources/` — traces de collecte
- `scripts/cadre/` — collect → rank → draft → validate → deliver
- `.github/workflows/cadre-editorial.yml` — cron 07:00 UTC lun/mer/ven

## Garde-fous qualité

Le validateur bloque :

- schema invalide / slug déjà publié
- draft `review` sans source
- formulations génériques FR/EN
- insight/verdict trop courts
- chiffres sans source

Si aucun sujet ne dépasse le seuil de score, **aucun article n’est forcé**.

## Calibration progressive

1. Relire chaque draft Drive pendant 2–4 semaines
2. Noter les corrections de ton / angle
3. Quand le taux d’acceptation est stable, envisager une publication semi-auto
4. Garder un kill switch : retirer le fichier de `content/cadre/` + redeploy

### Checklist de validation humaine (par article)

- [ ] Le titre sonne comme Tannous, pas comme une agence
- [ ] Insight + verdict sont actionnables
- [ ] Aucune promesse non sourcée
- [ ] Sources primaires ou reconnues
- [ ] FR et EN au même niveau de sobriété
- [ ] CTA vers `/demarrer?intent=...` reste pertinent

### Secrets GitHub à configurer

- `OPENROUTER_API_KEY` (ou `OPENAI_API_KEY`)
- `TAVILY_API_KEY` (ou `WEB_SEARCH_API_KEY` / `BRAVE_SEARCH_API_KEY`)
- `GOOGLE_DRIVE_FOLDER_ID`
- `GOOGLE_SERVICE_ACCOUNT_JSON_BASE64` (recommandé) ou `GOOGLE_SERVICE_ACCOUNT_JSON`

Setup Drive : [cadre-drive-setup.md](./cadre-drive-setup.md)

Fallback optionnel n8n : [cadre-n8n-drive.md](./cadre-n8n-drive.md)
