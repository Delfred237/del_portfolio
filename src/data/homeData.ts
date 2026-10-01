export interface TechSkill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Mobile" | "DevOps & Tools";
  description: string;
  iconName: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: string; // Ex: "Temps de réponse < 50ms" ou "100% Type-Safe"
  link: string;
}

export const SKILLS: TechSkill[] = [
  {
    name: "Spring Boot",
    category: "Backend",
    description:
      "Développement d'API REST sécurisées avec Spring Boot, Spring Security, JPA/Hibernate et PostgreSQL.",
    iconName: "Server",
  },
  {
    name: "React, Next.js & TypeScript",
    category: "Frontend",
    description:
      "Création d'interfaces modernes, composants réutilisables, routage, gestion d'état et typage avec TypeScript.",
    iconName: "Layout",
  },
  {
    name: "PostgreSQL & SQL",
    category: "Database",
    description:
      "Conception de bases de données relationnelles, modélisation, requêtes SQL et intégration avec Spring Data JPA.",
    iconName: "Database",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description:
      "Développement d'applications mobiles avec Riverpod, SQLite (Drift), formulaires, navigation et Clean Architecture.",
    iconName: "Smartphone",
  },
  {
    name: "Docker & Linux",
    category: "DevOps & Tools",
    description:
      "Conteneurisation avec Docker, Docker Compose et utilisation quotidienne de Linux pour le développement.",
    iconName: "Container",
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    description:
      "Gestion de versions, travail par branches, Pull Requests et collaboration sur des projets Git.",
    iconName: "GitBranch",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Création d'interfaces responsives, accessibles et modernes en suivant les bonnes pratiques UI.",
    iconName: "Palette",
  },
  {
    name: "Django",
    category: "Backend",
    description:
      "Développement d'applications web avec Django, authentification, ORM, administration et génération de PDF.",
    iconName: "Code2",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "docuflow",
    title: "DocuFlow",
    description:
      "Application Full Stack de gestion documentaire et de processus métier avec authentification, RBAC, gestion de fichiers, notifications et API REST documentée.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
    ],
    metrics: "Full Stack · RBAC · CI/CD",
    link: "/projects",
  },

  {
    id: "nexustask",
    title: "NexusTask",
    description:
      "Plateforme de gestion de tâches reposant sur une API Spring Boot consommée par une application React et une application Flutter partageant le même contrat d'API.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
    ],
    metrics: "1 API · 2 clients · Web + Mobile",
    link: "/projects",
  },

  {
    id: "taskforge",
    title: "TaskForge",
    description:
      "Application Java native dédiée au traitement asynchrone de tâches avec concurrence, worker pools, réseau, retry, timeout et observabilité.",
    tags: ["Java", "Concurrency", "Networking", "Worker Pools", "Docker"],
    metrics: "Java natif · Concurrency · Async",
    link: "/projects",
  },

  {
    id: "finledger",
    title: "Finledger",
    description:
      "Application Java native de gestion budgétaire développée avec Java 21, Maven et JUnit 5, avec conteneurisation et automatisation CI.",
    tags: ["Java 21", "Maven", "JUnit 5", "Docker", "GitHub Actions"],
    metrics: "Java 21 · Tests · CI/CD",
    link: "/projects",
  },

  {
    id: "delflow",
    title: "DelFlow",
    description:
      "Plateforme SaaS de location de véhicules permettant aux agences de gérer leurs véhicules, réservations et opérations métier.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "REST API"],
    metrics: "SaaS · REST API · Spring Boot",
    link: "/projects",
  },

  {
    id: "budgetflow",
    title: "BudgetFlow",
    description:
      "Application mobile de gestion des finances personnelles avec stockage local, gestion d'état et architecture orientée séparation des responsabilités.",
    tags: ["Flutter", "Riverpod", "Drift", "SQLite", "Material 3"],
    metrics: "Mobile · Offline-first · Clean Architecture",
    link: "/projects",
  },
];
