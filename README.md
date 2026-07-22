# 🚀 Modern Fullstack Developer Portfolio

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?style=for-the-badge&logo=nginx&logoColor=white)

Un portfolio de développeur Single Page Application (SPA) moderne, réactif et hautement optimisé, conçu avec **React**, **TypeScript**, **Tailwind CSS** et **Framer Motion**, puis conteneurisé de manière industrielle avec **Docker (Multi-Stage Build)** et **Nginx**.

---

## 📸 Aperçu & Fonctionnalités Clés

- **UI/UX Dark-First Moderne :** Interface épurée et professionnelle inspirée des standards de design actuels (Vercel, Linear).
- **Micro-Animations Fluidifiées :** Transitions de pages et apparitions au scroll managées par `Framer Motion` (effets *stagger*, boucles de lévitation, feedback tactile sur les boutons).
- **Architecture Composants Propre :** Séparation stricte de la logique, des données statiques et des composants de vue.
- **Support Multi-Projets & Blog :** Systèmes de cartes interactives avec filtrage dynamique (`layout animations`).
- **Production-Ready & Conteneurisé :** Optimisé pour un déploiement continu grâce à un build Docker multi-étapes léger basant son runtime sur Alpine Linux.

---

## 🏗️ Architecture & Choix Techniques

### Stack Technique

| Layer | Technologie | Raison du choix |
| :--- | :--- | :--- |
| **Build Tool** | [Vite](https://vitejs.dev/) | HMR ultra-rapide et bundling de production performant. |
| **Frontend** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Robustesse du typage statique, lisibilité et maintenabilité du code. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilitaire d'abord, zéro runtime CSS, grande rapidité de développement. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Gestion d'animations déclaratives fluides (60 FPS) et découplées. |
| **Icons** | [Lucide React](https://lucide.dev/) | Ensemble d'icônes vectorielles légères et cohérentes. |
| **Web Server** | [Nginx Alpine](https://nginx.org/) | Serveur de production ultra-léger et sécurisé pour distribuer les assets statiques. |
| **Container** | [Docker](https://www.docker.com/) | Isolation de l'environnement de build et reproductibilité totale en déploiement. |

### Structure du Projet

```text
.
├── .github/                  # Pipelines CI/CD (Optionnel)
├── nginx/
│   └── nginx.conf            # Configuration Nginx personnalisée (gestion du routage SPA)
├── public/                   # Assets statiques publics (Favicon, robots.txt, etc.)
├── src/
│   ├── assets/               # Images et ressources médias importées
│   ├── components/           # Composants UI réutilisables
│   │   ├── animations/       # Wrappers et variants Framer Motion
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── data/                 # Modèles de données statiques (Projets, Articles, Skills)
│   ├── pages/                # Vues principales (Home, Projects, About, Blog, Contact)
│   ├── App.tsx               # Routage central & AnimatePresence
│   ├── index.css             # Directives Tailwind CSS & styles globaux
│   └── main.tsx              # Point d'entrée de l'application
├── .dockerignore
├── .gitignore
├── compose.yml               # Orchestration Docker Compose
├── Dockerfile                # Multi-stage Dockerfile
├── package.json
└── vite.config.ts
```

---

## 🚀 Démarrage Rapide

### Prérequis

Assurez-vous d'avoir installé sur votre machine :

- Node.js (>= 20.x ou >= 22.x)

- npm ou pnpm / yarn

- Docker & Docker Compose (optionnel pour exécution en conteneur)

#### Option 1 : Développement Local (Sans Docker)

1. Cloner le dépôt :

```bash
git clone https://github.com/Delfred237/del_portfolio.git
cd votre-portfolio
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur ```http://localhost:5173.```

#### Option 2 : Exécution via Docker (Recommandé pour Tester la Prod)

Le projet intègre un Dockerfile Multi-Stage Build :

- Stage 1 (Build) : Compilation du code TypeScript/React via Node.js 22 Alpine.

- Stage 2 (Production) : Extraction exclusive des assets compilés (/dist) vers une image Nginx Alpine légère (< 25 MB).

1. Lancer avec Docker Compose :

```bash
docker compose up --build -d
```

2. Accéder à l'application :

Ouvrez votre navigateur sur ```http://localhost:3000.```

3. Arrêter les conteneurs :

```bash
docker compose down
```

---

## 🧪 Optimisations de Performance & Qualité

- Multi-Stage Build : Réduction drastique de la taille de l'image Docker finale en excluant node_modules et le compilateur de production.

- Gestion des fallback SPA (Nginx) : Redirection de toutes les routes vers index.html pour éviter les erreurs 404 lors du rafraîchissement des sous-pages.

- Healthcheck Intégré : Contrôle périodique de l'état du serveur via wget au sein du conteneur Docker.

---

## 👤 Auteur
**Delfred Fossi**

Spécialité : Développeur Fullstack (React / Spring Boot / Flutter / DevOps)

GitHub : Delfred237

LinkedIn : Delfred Fossi

Email : delfredtene17@gmail.com

## 📄 Licence

Ce projet est sous Apache - Vous êtes libre de l'utiliser et de le adapter pour vos propres besoins.
