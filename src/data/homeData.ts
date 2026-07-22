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
    id: "1",
    title: "DelFlow - Vehicle Rental Marketplace",
    description:
      "Plateforme SaaS de mise en relation entre agences de location de véhicules et clients avec système de réservation, gestion des agences et architecture métier évolutive.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "REST API"],
    metrics: "Projet SaaS Full Stack",
    link: "/projects",
  },
  {
    id: "2",
    title: "BudgetFlow",
    description:
      "Application mobile de gestion des finances personnelles permettant de suivre les dépenses, tâches, notes et livres avec stockage local et architecture propre.",
    tags: ["Flutter", "Riverpod", "Drift", "SQLite", "Material 3"],
    metrics: "Architecture Clean",
    link: "/projects",
  },
  {
    id: "3",
    title: "Django Blog",
    description:
      "Application de blog développée avec Django intégrant authentification, gestion d'articles, commentaires, pagination et profils utilisateurs.",
    tags: ["Python", "Django", "SQLite", "Bootstrap"],
    metrics: "CRUD complet",
    link: "/projects",
  },
  {
    id: "4",
    title: "Portfolio Developer",
    description:
      "Portfolio personnel moderne conçu pour présenter mes compétences, projets et parcours avec un design orienté développeur et une expérience utilisateur soignée.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: "Personal Branding",
    link: "/projects",
  },
  {
    id: "5",
    title: "QuoteFlow",
    description:
      "Application Django permettant de générer automatiquement des estimations commerciales, des PDF et le suivi des demandes clients.",
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    metrics: "Workflow métier",
    link: "/projects",
  },
  {
    id: "6",
    title: "TaskFlow",
    description:
      "Application de gestion de tâches développée en JavaScript Vanilla avec architecture modulaire, Kanban, Drag & Drop et sauvegarde locale.",
    tags: ["JavaScript", "HTML5", "CSS3", "ES Modules", "Local Storage"],
    metrics: "JavaScript Vanilla",
    link: "/projects",
  },
  {
    id: "7",
    title: "Chartereds UK",
    description:
      "Site web professionnel développé pour une entreprise britannique avec une interface moderne, responsive et une expérience utilisateur optimisée.",
    tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Responsive Design"],
    metrics: "Projet client réel",
    link: "/projects",
  },
];
