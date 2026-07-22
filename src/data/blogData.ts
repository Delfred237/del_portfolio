export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category:
    | "Spring Boot"
    | "React"
    | "TypeScript"
    | "Next.js"
    | "Flutter"
    | "DevOps"
    | "Architecture";
  tags: string[];
  link?: string;
}

export const ARTICLES: Article[] = [
  {
    id: "spring-boot-security-jwt",
    title: "Sécuriser une API REST Spring Boot 3 avec JWT & Spring Security 6",
    excerpt:
      "Un guide pratique pour implémenter une authentification stateless robuste, gérer le rafraîchissement des tokens et sécuriser vos endpoints.",
    date: "12 Juillet 2026",
    readTime: "6 min",
    category: "Spring Boot",
    tags: ["Java", "Spring Security", "JWT", "API REST"],
  },
  {
    id: "react-state-management-2026",
    title: "Zustand vs Redux Toolkit : Quel State Manager choisir en 2026 ?",
    excerpt:
      "Comparatif axé sur les performances, la complexité du code et la sobriété. Pourquoi Zustand est souvent une alternative idéale à Redux.",
    date: "28 Juin 2026",
    readTime: "4 min",
    category: "React",
    tags: ["React", "TypeScript", "Zustand", "Frontend"],
  },
  {
    id: "docker-devops-workflow",
    title:
      "Conteneuriser une application Fullstack (React + Spring Boot + Postgres)",
    excerpt:
      "Comment rédiger un Dockerfile multi-stage efficace et orchestrer votre environnement local avec Docker Compose sans prise de tête.",
    date: "15 Mai 2026",
    readTime: "8 min",
    category: "DevOps",
    tags: ["Docker", "DevOps", "PostgreSQL", "CI/CD"],
  },
];
