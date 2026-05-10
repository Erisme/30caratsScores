# 30 Carats Scores — Instructions Claude

## Déploiement

Les fichiers de déploiement de ce projet suivent les conventions de **https://github.com/Erisme/nas-deploy-templates** (variante `single` — nginx uniquement, sans API backend).

Avant toute modification de ces fichiers, consulte le repo des templates pour respecter les conventions :
- `.github/workflows/deploy.yml`
- `docker-compose.yml`
- `deploy.sh`
- `Dockerfile`
- `nginx.conf`
- `.env.deploy.example`

### Secrets GitHub Actions requis
| Secret | Description |
|--------|-------------|
| `NAS_HOST` | Adresse du NAS |
| `NAS_USER` | Utilisateur SSH |
| `NAS_PORT` | Port SSH |
| `NAS_DEPLOY_PATH` | Chemin cible sur le NAS |
| `SSH_PRIVATE_KEY` | Clé privée SSH |

### Variables locales (`.env.deploy`, non committé)
Voir `.env.deploy.example` pour le template.

## Stack
- React + TypeScript + Vite (frontend uniquement, pas d'API)
- Image Docker : `ghcr.io/erisme/30carats-scores:latest`
- Container : `30carats-scores` — port `8083`
