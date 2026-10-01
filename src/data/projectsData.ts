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

  featured: boolean;
  highlight: string;

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
  // ============================================================
  // FEATURED PROJECTS
  // ============================================================

  {
    id: "docuflow",
    title: "DocuFlow",
    tagline:
      "Plateforme Full Stack de gestion documentaire pour les organisations",
    category: "Fullstack",
    status: "Production",
    featured: true,
    highlight: "Spring Boot + React + JWT + RBAC + CI/CD",

    description:
      "Application Full Stack conçue pour centraliser la gestion des documents, des utilisateurs et des processus associés. Le projet met l'accent sur la sécurité, la structuration du backend, la gestion des fichiers et les pratiques d'ingénierie logicielle.",

    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions",
    ],

    features: [
      "Authentification avec access tokens et refresh tokens",
      "Contrôle d'accès basé sur les rôles",
      "Gestion des utilisateurs et des documents",
      "Upload et gestion des fichiers et images",
      "Recherche, filtrage, tri et pagination",
      "Validation des données et gestion centralisée des exceptions",
      "Notifications et envoi d'e-mails",
      "Documentation API avec OpenAPI/Swagger",
      "Tests backend",
      "Conteneurisation Docker et CI/CD",
    ],

    architecture:
      "Architecture backend en couches avec séparation Controller, Service et Repository, DTO pour les échanges API, validation, gestion centralisée des exceptions et persistance avec JPA/Hibernate. Frontend React structuré autour de composants réutilisables et d'un système de design cohérent.",

    links: {
      github: "",
      demo: "",
    },
  },

  {
    id: "nexustask",
    title: "NexusTask",
    tagline:
      "Plateforme de gestion de tâches avec clients Web et Mobile partageant la même API",
    category: "Fullstack",
    status: "Production",
    featured: true,
    highlight: "1 API · React · Flutter · Spring Boot",

    description:
      "Plateforme de gestion de tâches construite autour d'une API Spring Boot consommée simultanément par une application Web React et une application mobile Flutter. Le projet démontre la conception d'un backend partagé entre plusieurs clients.",

    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "REST API",
      "CI/CD",
    ],

    features: [
      "Gestion des tâches",
      "Authentification et autorisation",
      "API REST commune aux clients Web et Mobile",
      "Application Web React",
      "Application mobile Flutter",
      "Gestion des données utilisateur",
      "Validation des données",
      "Gestion structurée des erreurs",
      "Conteneurisation",
      "Automatisation CI/CD",
    ],

    architecture:
      "Architecture client-serveur avec une API REST Spring Boot comme couche centrale. React et Flutter consomment le même contrat d'API et partagent les mêmes règles métier et de sécurité.",

    links: {
      github: "",
      demo: "",
    },
  },

  {
    id: "taskforge",
    title: "TaskForge",
    tagline: "Système Java de traitement asynchrone de tâches",
    category: "Backend",
    status: "Production",
    featured: true,
    highlight: "Java natif · Concurrency · Worker Pools",

    description:
      "Système de traitement de tâches développé en Java sans framework applicatif. Le projet explore les mécanismes fondamentaux nécessaires à la construction d'un système de traitement concurrent et résilient.",

    tags: [
      "Java",
      "Concurrency",
      "Multithreading",
      "Networking",
      "Worker Pools",
      "Retry",
      "Timeout",
      "Docker",
    ],

    features: [
      "Traitement asynchrone des tâches",
      "Worker pools",
      "Programmation concurrente",
      "Communication réseau",
      "Gestion des timeouts",
      "Mécanismes de retry",
      "Gestion des erreurs",
      "Observabilité",
      "Conteneurisation",
    ],

    architecture:
      "Architecture Java native organisée autour d'un système de producteurs et de workers chargés de traiter les tâches de manière concurrente, avec mécanismes de timeout, retry et suivi des traitements.",

    links: {
      github: "",
    },
  },

  {
    id: "finledger",
    title: "Finledger",
    tagline: "Application Java de gestion budgétaire personnelle",
    category: "Backend",
    status: "Production",
    featured: true,
    highlight: "Java 21 · JUnit 5 · Docker · GitHub Actions",

    description:
      "Application de gestion budgétaire développée en Java natif afin de renforcer les fondamentaux du langage, la structuration d'une application et les pratiques de qualité logicielle.",

    tags: ["Java 21", "Maven", "JUnit 5", "Docker", "GitHub Actions"],

    features: [
      "Gestion des revenus",
      "Gestion des dépenses",
      "Suivi du budget",
      "Tests automatisés",
      "Build Maven",
      "Conteneurisation Docker",
      "Pipeline CI avec GitHub Actions",
    ],

    architecture:
      "Application Java structurée en modules métier avec séparation des responsabilités, tests unitaires et automatisation du build et des vérifications via GitHub Actions.",

    links: {
      github: "",
    },
  },

  {
    id: "eventflow",
    title: "EventFlow",
    tagline: "Système Java de réservation et de billetterie événementielle",
    category: "Backend",
    status: "Production",
    featured: true,
    highlight: "Java natif · Business Logic · OOP",

    description:
      "Application Java dédiée à la gestion d'événements, de réservations et de billets. Le projet met l'accent sur la modélisation métier et les fondamentaux de la programmation orientée objet.",

    tags: ["Java", "Maven", "OOP", "Business Logic"],

    features: [
      "Gestion des événements",
      "Gestion des réservations",
      "Gestion des billets",
      "Modélisation des règles métier",
      "Validation des opérations",
      "Gestion des différents scénarios de réservation",
    ],

    architecture:
      "Architecture Java orientée objet avec séparation des responsabilités entre les modèles métier, les services et les mécanismes de gestion des réservations.",

    links: {
      github: "",
    },
  },

  // ============================================================
  // CURRENT / IN DEVELOPMENT
  // ============================================================

  {
    id: "delflow",
    title: "DelFlow",
    tagline: "Plateforme SaaS de gestion de location de véhicules",
    category: "Fullstack",
    status: "En développement",
    featured: true,
    highlight: "Spring Boot · PostgreSQL · JWT · OAuth2",

    description:
      "Plateforme SaaS destinée aux agences de location de véhicules. Le système vise à centraliser la gestion des agences, des véhicules, des clients, des réservations et des opérations associées.",

    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JWT",
      "OAuth2",
      "REST API",
    ],

    features: [
      "Gestion des agences",
      "Gestion des véhicules",
      "Gestion des clients",
      "Gestion des réservations",
      "Gestion des opérations de location",
      "Authentification JWT",
      "Authentification OAuth2",
      "Validation et gestion des règles métier",
    ],

    architecture:
      "Architecture REST en couches avec Spring Boot, séparation Controller, Service et Repository, PostgreSQL pour la persistance et Docker pour l'environnement d'exécution.",

    links: {},
  },

  {
    id: "budgetflow",
    title: "BudgetFlow",
    tagline: "Application mobile de gestion des finances personnelles",
    category: "Mobile",
    status: "En développement",
    featured: true,
    highlight: "Flutter · Riverpod · Drift · Offline-first",

    description:
      "Application mobile Flutter conçue pour permettre aux utilisateurs de suivre leurs revenus, leurs dépenses et leurs budgets avec un fonctionnement principalement hors ligne.",

    tags: ["Flutter", "Dart", "Riverpod", "Drift", "SQLite", "Material 3"],

    features: [
      "Gestion des revenus et dépenses",
      "Budgets mensuels",
      "Catégorisation des transactions",
      "Statistiques financières",
      "Persistance locale SQLite",
      "Notifications locales",
      "Fonctionnement hors ligne",
    ],

    architecture:
      "Clean Architecture simplifiée organisée par fonctionnalités avec séparation des couches data, domain et presentation. Drift est utilisé pour la persistance locale et Riverpod pour la gestion d'état.",

    links: {
      github: "https://github.com/Delfred237/budget_flow",
    },
  },

  // ============================================================
  // COMPLEMENTARY FULL STACK PROJECTS
  // ============================================================

  {
    id: "quoteflow",
    title: "QuoteFlow",
    tagline: "Application de génération et de suivi de devis commerciaux",
    category: "Fullstack",
    status: "Prototype",
    featured: false,
    highlight: "Django · PostgreSQL · PDF · Docker",

    description:
      "Application Django permettant de gérer les demandes de devis, de générer automatiquement des documents PDF et de suivre leur progression depuis un tableau de bord.",

    tags: ["Python", "Django", "PostgreSQL", "Docker", "WeasyPrint"],

    features: [
      "Authentification des utilisateurs",
      "Création et gestion des demandes de devis",
      "Génération automatique de PDF",
      "Suivi du statut des demandes",
      "Historique",
      "Notifications",
      "Tableau de bord",
    ],

    architecture:
      "Architecture Django modulaire organisée autour des applications accounts, services, quotes, dashboard et notifications.",

    links: {
      github: "https://github.com/Delfred237/quote_flow",
    },
  },

  {
    id: "equipment-management-api",
    title: "Equipment Management API",
    tagline: "API REST sécurisée pour la gestion d'équipements",
    category: "Backend",
    status: "Production",
    featured: false,
    highlight: "FastAPI · JWT · OAuth2 · PostgreSQL",

    description:
      "API REST développée avec FastAPI pour gérer des équipements, des utilisateurs et leurs droits d'accès, avec authentification JWT, OAuth2 et documentation interactive.",

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
      "CRUD des équipements",
      "Gestion des utilisateurs",
      "Validation automatique des données",
      "Migrations de base de données",
      "Documentation Swagger/OpenAPI",
    ],

    architecture:
      "Architecture REST organisée autour de routes, services, modèles SQLAlchemy et schémas Pydantic, avec Alembic pour les migrations de base de données.",

    links: {
      github: "https://github.com/Delfred237/example-fastapi",
    },
  },

  // ============================================================
  // FRONTEND
  // ============================================================

  {
    id: "chartereds-uk",
    title: "Chartereds UK",
    tagline: "Site web professionnel développé pour une entreprise britannique",
    category: "Frontend",
    status: "Production",
    featured: false,
    highlight: "Projet client livré",

    description:
      "Site web professionnel développé pour une entreprise basée au Royaume-Uni, avec une attention particulière portée à l'identité visuelle, au responsive design, aux performances et à l'expérience utilisateur.",

    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],

    features: [
      "Interface responsive",
      "Design professionnel",
      "Animations",
      "Optimisation de l'expérience utilisateur",
      "Optimisation des performances",
    ],

    architecture:
      "Architecture frontend orientée présentation avec organisation claire des sections et des composants de l'interface.",

    links: {
      demo: "https://chartereds.co.uk/",
    },
  },

  {
    id: "protask",
    title: "ProTask",
    tagline: "Gestionnaire de tâches Kanban développé en JavaScript Vanilla",
    category: "Frontend",
    status: "Prototype",
    featured: false,
    highlight: "JavaScript Vanilla · ES Modules · Local Storage",

    description:
      "Application de gestion de tâches inspirée des outils Kanban, développée sans framework JavaScript afin de travailler les fondamentaux du langage, la modularité et la manipulation du DOM.",

    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage", "ES Modules"],

    features: [
      "Gestion de projets",
      "Création et organisation des tâches",
      "Drag & Drop",
      "Recherche",
      "Filtres",
      "Import / Export JSON",
      "Persistance locale",
    ],

    architecture:
      "Architecture JavaScript modulaire séparant le stockage, les composants UI, les modèles métier et les fonctionnalités applicatives.",

    links: {
      demo: "https://delfredprotask.netlify.app",
      github: "https://github.com/Delfred237/protask",
    },
  },

  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "Portfolio personnel orienté projets et ingénierie logicielle",
    category: "Frontend",
    status: "En développement",
    featured: false,
    highlight: "React · TypeScript · Tailwind CSS · Framer Motion",

    description:
      "Portfolio personnel conçu pour présenter mon parcours, mes projets et mes compétences à travers des études de cas détaillées et une interface moderne.",

    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],

    features: [
      "Présentation des projets",
      "Études de cas",
      "Navigation par catégories",
      "Animations",
      "Mode sombre et clair",
      "Interface responsive",
    ],

    architecture:
      "Architecture React orientée composants avec contenu fortement typé, séparation entre données et présentation et animations gérées avec Framer Motion.",

    links: {},
  },

  // ============================================================
  // LEARNING PROJECTS
  // ============================================================

  {
    id: "django-blog",
    title: "Django Blog",
    tagline: "Plateforme de publication développée avec Django",
    category: "Fullstack",
    status: "Apprentissage",
    featured: false,
    highlight: "Django · CRUD · Authentication",

    description:
      "Application de blog développée dans le cadre de l'apprentissage de Django et de ses principaux mécanismes de développement web.",

    tags: ["Python", "Django", "SQLite", "Bootstrap"],

    features: [
      "Authentification",
      "CRUD des articles",
      "Commentaires",
      "Profils utilisateurs",
      "Pagination",
    ],

    architecture:
      "Architecture Django classique basée sur les modèles, vues, templates et formulaires.",

    links: {
      github: "https://github.com/Delfred237/django-blog",
    },
  },

  {
    id: "pig-game",
    title: "Pig Game",
    tagline: "Jeu de navigateur développé en JavaScript Vanilla",
    category: "Frontend",
    status: "Production",
    featured: false,
    highlight: "JavaScript · DOM · Game State",

    description:
      "Implémentation du Pig Dice Game en JavaScript Vanilla, réalisée pour travailler la gestion d'état, les événements, le DOM et l'expérience utilisateur.",

    tags: ["JavaScript", "HTML5", "CSS3", "Canvas Confetti"],

    features: [
      "Gestion de l'état du jeu",
      "Système de score",
      "Préchargement des ressources",
      "Effets sonores",
      "Animations",
      "Effets de victoire",
    ],

    architecture:
      "Architecture JavaScript centrée sur un état global du jeu avec séparation entre la logique métier et la manipulation de l'interface.",

    links: {
      github: "https://github.com/Delfred237/pig-game",
      demo: "https://del-pig-game.netlify.app",
    },
  },

  {
    id: "guess-number",
    title: "Guess Number",
    tagline: "Jeu interactif pour travailler les fondamentaux du JavaScript",
    category: "Frontend",
    status: "Production",
    featured: false,
    highlight: "JavaScript · Local Storage · DOM",

    description:
      "Jeu de devinette développé en JavaScript Vanilla pour pratiquer la manipulation du DOM, la gestion des événements, la persistance locale et les interactions utilisateur.",

    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],

    features: [
      "Génération aléatoire",
      "Gestion du score",
      "Sauvegarde du meilleur score",
      "Animations",
      "Effets sonores",
    ],

    architecture:
      "Architecture JavaScript orientée événements avec séparation entre la logique du jeu, l'interface utilisateur et la persistance locale.",

    links: {
      github: "https://github.com/Delfred237/guess_number",
      demo: "https://delguessnumber.netlify.app/",
    },
  },
];
