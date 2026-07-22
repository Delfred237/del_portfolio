export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category:
    | "Fullstack"
    | "Frontend"
    | "Backend"
    | "DevOps"
    | "Database"
    | "Mobile";
  status:
    | "Production"
    | "En développement"
    | "Prototype"
    | "Apprentissage"
    | "Abandonné";
  metrics: string;
  description: string;
  tags: string[];
  features: string[];
  architecture: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export const PROJECTS: CaseStudy[] = [
  {
    id: "chartereds-uk",
    title: "Chartereds UK",
    tagline: "Site web professionnel développé pour une entreprise britannique",
    category: "Frontend",
    status: "Production",
    metrics: "Projet client livré",
    description:
      "Développement complet d'un site web moderne mettant en avant les services d'une entreprise britannique. Le projet met l'accent sur une identité visuelle professionnelle, un design responsive et une excellente expérience utilisateur.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    features: [
      "Interface responsive adaptée à tous les écrans",
      "Animations modernes et cohérentes",
      "Optimisation des performances et de l’expérience utilisateur",
    ],
    architecture:
      "Architecture simple avec une séparation claire entre les sections et la logique de présentation.",
    links: {
      demo: "https://chartereds.co.uk/",
    },
  },

  {
    id: "delflow",
    title: "DelFlow",
    tagline: "Plateforme SaaS de gestion de location de véhicules",
    category: "Fullstack",
    status: "En développement",
    metrics: "Architecture métier évolutive",
    description:
      "Plateforme permettant aux agences de location de gérer leurs véhicules, leurs réservations et leurs clients via une architecture backend robuste construite avec Spring Boot.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "REST API"],
    features: [
      "Gestion des agences et des véhicules",
      "Système complet de réservation",
      "Vérification des identités des clients, véhicules et agences",
      "Authentification sécurisée avec JWT et OUATH2",
      "Architecture métier évolutive",
    ],
    architecture:
      "Architecture REST en couches (Controller, Service, Repository) avec PostgreSQL, Docker et séparation claire de la logique métier.",
    links: {},
  },

  {
    id: "quoteflow",
    title: "QuoteFlow",
    tagline: "Génération intelligente de devis commerciaux",
    category: "Fullstack",
    status: "Prototype",
    metrics: "Automatisation des demandes clients",
    description:
      "Application Django permettant aux clients d'obtenir automatiquement une estimation de prix et un PDF tout en offrant aux commerciaux un tableau de bord de suivi.",
    tags: ["Python", "Django", "PostgreSQL", "Docker", "WeasyPrint"],
    features: [
      "Authentification des clients",
      "Génération automatique de PDF",
      "Suivi du statut des demandes",
      "Historique et notifications",
    ],
    architecture:
      "Architecture Django modulaire organisée en plusieurs applications (accounts, services, quotes, dashboard, notifications).",
    links: {
      github: "https://github.com/Delfred237/quote_flow",
    },
  },

  {
    id: "budgetflow",
    title: "BudgetFlow",
    tagline: "Application mobile de gestion des finances personnelles",
    category: "Mobile",
    status: "En développement",
    metrics: "Architecture Clean + Riverpod",
    description:
      "Application Flutter permettant de gérer les dépenses, les budgets et les statistiques financières tout en fonctionnant entièrement hors ligne.",
    tags: ["Flutter", "Riverpod", "Drift", "SQLite", "Material 3"],
    features: [
      "Gestion des revenus et dépenses",
      "Budgets mensuels",
      "Statistiques financières",
      "Notifications locales",
    ],
    architecture:
      "Clean Architecture simplifiée organisée par fonctionnalités avec séparation des couches data, domain et presentation.",
    links: {
      github: "https://github.com/Delfred237/budget_flow",
    },
  },

  {
    id: "protask",
    title: "ProTask",
    tagline: "Gestionnaire de tâches moderne développé en JavaScript Vanilla",
    category: "Frontend",
    status: "Prototype",
    metrics: "Architecture JavaScript modulaire",
    description:
      "Application de gestion de tâches inspirée des outils Kanban permettant d'organiser plusieurs projets sans framework JavaScript.",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage", "ES Modules"],
    features: [
      "Gestion de projets",
      "Drag & Drop",
      "Recherche et filtres",
      "Import / Export JSON",
    ],
    architecture:
      "Architecture JavaScript modulaire séparant le stockage, les composants UI, les modèles métier et les fonctionnalités.",
    links: {
      demo: "https://delfredprotask.netlify.app",
      github: "https://github.com/Delfred237/protask",
    },
  },

  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "Portfolio moderne orienté développeur et recrutement",
    category: "Frontend",
    status: "En développement",
    metrics: "Branding professionnel",
    description:
      "Portfolio personnel conçu pour présenter mes projets, mes compétences et mon parcours avec une identité visuelle moderne et une excellente expérience utilisateur.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Présentation des projets",
      "Études de cas",
      "Animations modernes",
      "Mode sombre et clair",
    ],
    architecture:
      "Architecture orientée composants avec contenu fortement typé et animations optimisées.",
    links: {},
  },

  {
    id: "django-blog",
    title: "Django Blog",
    tagline: "Plateforme de publication développée avec Django",
    category: "Fullstack",
    status: "Apprentissage",
    metrics: "CRUD complet",
    description:
      "Application de blog intégrant authentification, publication d'articles, commentaires, pagination et profils utilisateurs.",
    tags: ["Python", "Django", "SQLite", "Bootstrap"],
    features: [
      "Authentification",
      "CRUD des articles",
      "Commentaires",
      "Pagination",
    ],
    architecture:
      "Architecture Django classique basée sur les modèles, vues, templates et formulaires.",
    links: {
      github: "https://github.com/Delfred237/django-blog",
    },
  },

  {
    id: "equipment-management-api",

    title: "Equipment Management API",

    tagline:
      "API REST sécurisée pour la gestion complète d’équipements avec JWT et OAuth2.",

    category: "Backend",

    status: "Production",

    metrics: "Authentification sécurisée",

    description:
      "API développée avec FastAPI permettant de gérer des équipements, les utilisateurs et les droits d'accès grâce à JWT et OAuth2.",

    tags: [
      "Python",
      "FastAPI",
      "JWT",
      "OAuth2",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "Swagger",
    ],

    features: [
      "Authentification JWT",
      "OAuth2",
      "CRUD complet des équipements",
      "Gestion des utilisateurs",
      "Validation automatique des données",
      "Documentation Swagger",
    ],

    architecture:
      "Architecture REST basée sur FastAPI avec séparation entre routes, services, modèles et schémas Pydantic.",

    links: {
      github: "https://github.com/Delfred237/example-fastapi",
    },
  },

  {
    id: "pig-game",
    title: "Pig Game",
    tagline:
      "Jeu de navigateur moderne mettant en avant la gestion d’état en JavaScript",
    category: "Frontend",
    status: "Production",
    metrics: "UX enrichie",
    description:
      "Implémentation moderne du célèbre Pig Dice Game avec une forte attention portée à l'expérience utilisateur, au préchargement des ressources, aux effets sonores et aux animations.",
    tags: ["JavaScript", "HTML5", "CSS3", "Canvas Confetti"],
    features: [
      "Gestion d’état du jeu",
      "Préchargement des ressources",
      "Effets sonores",
      "Confettis et animations",
    ],
    architecture:
      "Architecture JavaScript centrée sur un état global du jeu avec séparation des responsabilités entre la logique métier et l’interface utilisateur.",
    links: {
      github: "https://github.com/Delfred237/pig-game",
      demo: "https://del-pig-game.netlify.app",
    },
  },

  {
    id: "guess-number",
    title: "Guess Number",
    tagline: "Jeu interactif démontrant les fondamentaux du JavaScript moderne",
    category: "Frontend",
    status: "Production",
    metrics: "LocalStorage + UX",
    description:
      "Jeu de devinette développé en JavaScript Vanilla mettant l'accent sur la manipulation du DOM, les animations, les effets sonores et la sauvegarde des performances.",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    features: [
      "Génération aléatoire",
      "Gestion du score",
      "Sauvegarde du meilleur score",
      "Animations et sons",
    ],
    architecture:
      "Architecture JavaScript simple orientée événements avec séparation de la logique de jeu, de l’interface utilisateur et de la persistance locale.",
    links: {
      github: "https://github.com/Delfred237/guess_number",
      demo: "https://delguessnumber.netlify.app/",
    },
  },
];
