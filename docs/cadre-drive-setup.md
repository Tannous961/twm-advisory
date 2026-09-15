# Cadre → Google Drive (Service Account)

Livraison directe des brouillons Cadre dans un dossier Drive partagé, **sans n8n ni OAuth interactif**.

## 1. Créer le Service Account

1. Ouvre [Google Cloud Console](https://console.cloud.google.com/)
2. Crée un projet (ex. `twm-cadre`) ou réutilise le tien
3. **APIs & Services → Library** → active **Google Drive API**
4. **IAM & Admin → Service Accounts → Create**
   - Name: `twm-cadre-drafts`
   - Role: aucun rôle projet requis
5. Ouvre le compte → **Keys → Add key → JSON** → télécharge le fichier

Note l’email du service account, ex. :

`twm-cadre-drafts@PROJECT_ID.iam.gserviceaccount.com`

## 2. Dossier Drive de revue

1. Dans Google Drive (ton compte perso / Workspace), crée un dossier  
   ex. `TWM / Cadre / Brouillons`
2. Clic droit → **Partager** → ajoute l’email du service account en **Éditeur**
3. Ouvre le dossier → copie l’ID dans l’URL :

`https://drive.google.com/drive/folders/FOLDER_ID_ICI`

→ `GOOGLE_DRIVE_FOLDER_ID=FOLDER_ID_ICI`

## 3. Secrets locaux / GitHub Actions

### Option A — JSON brut (local)

Dans `.env.local` :

```bash
GOOGLE_DRIVE_FOLDER_ID=xxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...@....iam.gserviceaccount.com",...}'
```

### Option B — Base64 (recommandé pour GitHub Secrets)

```bash
base64 -w0 chemin/vers/service-account.json
```

GitHub → Settings → Secrets and variables → Actions :

| Secret | Valeur |
| --- | --- |
| `GOOGLE_DRIVE_FOLDER_ID` | ID du dossier partagé |
| `GOOGLE_SERVICE_ACCOUNT_JSON_BASE64` | sortie `base64` |

(Alternative : secret `GOOGLE_SERVICE_ACCOUNT_JSON` avec le JSON multiligne.)

Autres secrets déjà nécessaires :

- `OPENROUTER_API_KEY` (ou `OPENAI_API_KEY`)
- `TAVILY_API_KEY` (ou `WEB_SEARCH_API_KEY` / `BRAVE_SEARCH_API_KEY`)

## 4. Contenu déposé à chaque run

Sous le dossier parent, un sous-dossier `YYYY-MM-DD-slug/` contient :

- `FR.md` — article français
- `EN.md` — article anglais
- `review.md` — notes de revue
- `sources.json` — sources collectées
- `draft.json` — payload prêt pour `npm run cadre:publish -- …`

## 5. Tester

```bash
# Sans upload (écrit les artefacts locaux)
npm run cadre:run -- --dry-run

# Run complet → Drive
npm run cadre:run
```

Ou Actions → **Cadre editorial agent** → Run workflow.

## 6. Publier après validation humaine

```bash
npm run cadre:publish -- content/cadre-drafts/YYYY-MM-DD-slug.json
```

(ou copier `draft.json` depuis Drive vers `content/cadre-drafts/` puis publier)

## Dépannage

| Symptôme | Cause probable |
| --- | --- |
| `File not found` / 404 sur le parent | Dossier non partagé avec l’email du SA, ou mauvais `FOLDER_ID` |
| `invalid_grant` / auth | JSON tronqué ; préférer `GOOGLE_SERVICE_ACCOUNT_JSON_BASE64` |
| `API has not been used` | Drive API non activée sur le projet GCP |
| Rien n’apparaît | Vérifie le compte Drive où le dossier a été créé (perso vs Workspace) |

n8n reste un fallback optionnel si Drive n’est pas configuré (`N8N_WEBHOOK_URL`).
