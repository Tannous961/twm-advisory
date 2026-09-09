# Setup n8n : Cadre Draft → Google Drive

Guide pas à pas pour créer `N8N_WEBHOOK_URL` + `N8N_WEBHOOK_SECRET` et brancher Drive.

## 0. Préparer le secret

Dans un terminal :

```bash
openssl rand -hex 32
```

Copie le résultat. Exemple :

```text
7f3a9c1e2b4d8f0a6c5e9b1d3f7a2c4e8b0d6f1a5c9e3b7d2f6a0c4e8b1d5f9a
```

Tu vas le mettre **au même endroit** dans :
- GitHub Secret `N8N_WEBHOOK_SECRET`
- n8n (nœud IF / variable)

## 1. Créer le workflow dans n8n

1. n8n → **Workflows** → **Add workflow**
2. Nomme-le : `Cadre Draft to Drive`
3. Ou importe le fichier [`n8n/cadre-draft-to-drive.json`](./n8n/cadre-draft-to-drive.json) :
   - **⋯** → **Import from File**

## 2. Nœud par nœud

### Nœud 1 — Webhook

- Type : **Webhook**
- HTTP Method : `POST`
- Path : `cadre-draft`
- Authentication : `None` (on sécurise ensuite avec le header)
- Respond : `Immediately`
- Response Code : `200`

Active le workflow, puis copie l’URL **Production** :

```text
https://TON-N8N/webhook/cadre-draft
```

→ GitHub Secret `N8N_WEBHOOK_URL`

### Nœud 2 — IF (secret)

- Type : **IF**
- Condition :
  - Value 1 : `{{$json.headers["x-twm-webhook-secret"]}}`
    - selon n8n : parfois `{{$("Webhook").item.json.headers["x-twm-webhook-secret"]}}`
  - Operation : **Equal**
  - Value 2 : colle ton secret généré

Branche **false** :
- ajoute un nœud **Respond to Webhook** / **Stop and Error**
- message : `Unauthorized`

### Nœud 3 — Set / Edit Fields (optionnel mais utile)

Pour normaliser les champs :

| Name | Value |
|---|---|
| `folderName` | `{{$json.body.folderName || $json.folderName}}` |
| `slug` | `{{$json.body.post.slug || $json.post.slug}}` |
| `frDocument` | `{{$json.body.frDocument || $json.frDocument}}` |
| `enDocument` | `{{$json.body.enDocument || $json.enDocument}}` |
| `reviewMarkdown` | `{{$json.body.reviewMarkdown || $json.reviewMarkdown}}` |
| `sourcesJson` | `{{JSON.stringify($json.body.sources || $json.sources || [])}}` |

> Selon ta version n8n, le body arrive dans `$json` directement ou dans `$json.body`.  
> Le nœud Set gère les deux.

### Nœud 4 — Google Drive : Create folder

1. Connecte Google Drive OAuth dans n8n
2. Crée d’abord manuellement dans Drive :
   - `TWM`
   - `TWM / Cadre`
   - `TWM / Cadre / Brouillons`
3. Nœud **Google Drive** → Operation **Create** → Resource **Folder**
4. Name : `{{$json.folderName}}`  
   (ou juste `{{$json.slug}}` si tu préfères un nom court)
5. Parent folder : sélectionne `TWM / Cadre / Brouillons`

### Nœud 5 — Google Drive : Create FR file

- Resource : **File**
- Operation : **Create From Text**
- Name : `{{$json.slug}}-FR.md`
- Content : `{{$json.frDocument}}`
- Parents : ID du dossier créé au nœud 4  
  (`{{$("Create folder").item.json.id}}`)

### Nœud 6 — Google Drive : Create EN file

Même chose :

- Name : `{{$json.slug}}-EN.md`
- Content : `{{$json.enDocument}}`
- Parent : même folder ID

### Nœud 7 — Google Drive : Create review file

- Name : `{{$json.slug}}-review.md`
- Content : `{{$json.reviewMarkdown}}`

### Nœud 8 — Google Drive : Create sources file

- Name : `{{$json.slug}}-sources.json`
- Content : `{{$json.sourcesJson}}`

### Nœud 9 — Notification (optionnel)

Email / Slack / Gmail :

```text
Nouveau brouillon Cadre à relire : {{$json.slug}}
Dossier Drive prêt.
```

## 3. Brancher GitHub

GitHub → Settings → Secrets and variables → Actions :

| Secret | Valeur |
|---|---|
| `N8N_WEBHOOK_URL` | `https://TON-N8N/webhook/cadre-draft` |
| `N8N_WEBHOOK_SECRET` | le `openssl rand -hex 32` |

## 4. Tester

### Test manuel depuis ton Mac / terminal

```bash
SECRET='colle_ton_secret_ici'
URL='https://TON-N8N/webhook/cadre-draft'

curl -X POST "$URL" \
  -H "Content-Type: application/json" \
  -H "X-TWM-Webhook-Secret: $SECRET" \
  -d '{
    "event": "cadre.draft.ready",
    "generatedAt": "2026-09-09T18:00:00.000Z",
    "folderName": "test-cadre-manual",
    "post": {
      "slug": "test-cadre-manual",
      "date": "2026-09-09",
      "intent": "strategy",
      "readingMinutes": 4,
      "title": { "fr": "Test FR", "en": "Test EN" },
      "insight": { "fr": "Insight test", "en": "Insight test" },
      "verdict": { "fr": "Verdict test", "en": "Verdict test" },
      "body": { "fr": ["A", "B", "C"], "en": ["A", "B", "C"] },
      "sources": []
    },
    "frDocument": "# Test FR\n\nCorps FR",
    "enDocument": "# Test EN\n\nBody EN",
    "reviewMarkdown": "# Revue\n\nTest manuel",
    "topic": {
      "pillar": "economic_performance",
      "score": 10,
      "rationale": "manual test",
      "title": "Test"
    },
    "sources": [
      {
        "title": "Example",
        "url": "https://example.com",
        "snippet": "test"
      }
    ]
  }'
```

Si OK : un dossier apparaît dans Drive avec 4 fichiers.

### Test via GitHub Actions

Dans le repo → Actions → **Cadre editorial agent** → **Run workflow**  
(mets `dry_run = false` seulement quand les secrets search/LLM + n8n sont prêts)

## 5. Après relecture

1. Corrige le ton dans Drive
2. Mets à jour le JSON draft
3. Publie :

```bash
npm run cadre:publish -- content/cadre-drafts/YYYY-MM-DD-slug.json
```

4. Commit + merge → live sur `/cadre/<slug>`
