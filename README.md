# DGDI Gabon – Plateforme Officielle

Plateforme moderne, multilingue (français, anglais, espagnol, arabe) pour la Direction Générale de la Documentation et de l’Immigration du Gabon.

## Fonctionnalités principales
- Loader animé personnalisé (logo, particules, barre de progression)
- Header avec logo, favicon, sélecteur de langue accessible
- HeroSection personnalisée (image, effet flottant, fond, responsive)
- Section Services interactive (cartes design, multilingues, responsive, accessibilité)
- Section « Comment ça marche » (timeline moderne, multilingue)
- Footer simplifié, multilingue, responsive
- Expérience utilisateur fluide, responsive, accessible
- Adaptation dynamique du contenu selon la langue et le device

## Déploiement

Ce projet est prêt pour un hébergement sur le  [Vercel](https://vercel.com/) et un stockage sur [GitHub](https://github.com/).

### Déploiement Vercel
1. Poussez le projet sur GitHub
2. Connectez votre repo à Vercel
3. Vercel détectera automatiquement le framework (React + Vite)
4. Configurez le domaine personnalisé si besoin

#### Fichiers de configuration Vercel
- `vercel.json` : définit la configuration de build et les routes pour le déploiement statique.
  ```json
  {
    "version": 2,
    "builds": [
      {
        "src": "package.json",
        "use": "@vercel/static-build",
        "config": { "distDir": "dist" }
      }
    ],
    "routes": [
      { "src": "/(.*)", "dest": "/" }
    ]
  }
  ```
- `.vercelignore` : exclut les fichiers/dossiers inutiles du déploiement (node_modules, logs, .env, etc).

#### Commandes de build/production
- Pour builder le projet localement :
  ```bash
  npm run build
  ```
- Le dossier de sortie est `dist/` (défini dans `vercel.json`)

### Démarrage local
```bash
npm install
npm run dev
```

## Structure du projet
- `src/` : composants React, hooks, pages
- `public/uploads/` : images et assets statiques
- `index.html` : configuration principale

## Licence
Projet open-source sous licence MIT.
