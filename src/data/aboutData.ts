export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceOrEducation {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js (Learning)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "DOM Manipulation",
      "State Management",
      "Framer Motion",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Python",
      "Django",
      "FastAPI",
      "REST APIs",
      "JWT",
      "OAuth2",
      "Authentication",
      "Authorization",
      "PDF Generation",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQL", "Database Design"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Riverpod", "Drift", "Material 3"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Linux",
      "Nginx",
      "Traefik",
      "SonarQube",
      "GitLab CI (Learning)",
      "AWS EC2",
    ],
  },
  {
    category: "Architecture & Engineering",
    skills: [
      "Clean Architecture",
      "REST Architecture",
      "Component-Based Architecture",
      "Modular Design",
      "Responsive Design",
    ],
  },
];

export const TIMELINE: ExperienceOrEducation[] = [
  {
    title: "Formateur en Développement d'Applications",
    organization: "VTIL",
    period: "Oct. 2025 - Présent",
    description:
      "Formation et accompagnement d'étudiants en développement d'applications tout en poursuivant une montée en compétences sur les technologies web modernes.",
    highlights: [
      "Conception de supports de cours et d'épreuves d'évaluation.",
      "Animation des séances de formation en développement d'applications.",
      "Accompagnement technique et pédagogique des étudiants sur leurs projets.",
    ],
  },
  {
    title: "Développeur Full Stack (Stage)",
    organization: "Maisoft",
    period: "Juil. 2024 - Fév. 2025",
    description:
      "Participation au développement et à la maintenance d'applications web et mobiles dans un environnement professionnel.",
    highlights: [
      "Conception d'applications web et mobiles.",
      "Maintenance et évolution d'applications existantes.",
      "Participation aux réunions techniques et décisionnelles.",
    ],
  },
  {
    title: "Formateur en Développement Web Full Stack Java",
    organization: "Getsmarter",
    period: "Mars 2024 - Fév. 2025",
    description:
      "Formation d'étudiants aux fondamentaux du développement Full Stack Java et accompagnement dans leurs travaux pratiques.",
    highlights: [
      "Rédaction d'exercices pratiques.",
      "Animation des séances de cours.",
      "Suivi des étudiants et des stagiaires.",
    ],
  },
  {
    title: "Spécialisation Continue",
    organization: "Udemy & Autoformation",
    period: "2026 - Présent",
    description:
      "Apprentissage continu orienté développement Full Stack, développement mobile et DevOps à travers des formations avancées et des projets personnels.",
    highlights: [
      "Spring Boot, Spring Security, JWT, AWS.",
      "JavaScript moderne (ES6+) et développement Frontend.",
      "React, Next.js et TypeScript.",
      "Flutter & Dart.",
      "Docker, Linux et fondamentaux DevOps.",
    ],
  },
  {
    title: "Attestation de Qualification Professionnelle (AQP)",
    organization: "Getsmarter — Douala, Cameroun",
    period: "2023 - 2024",
    description:
      "Formation professionnelle en développement d'applications avec une forte orientation pratique.",
    highlights: [
      "Développement Full Stack.",
      "Bases de données relationnelles.",
      "Programmation orientée objet.",
      "Réalisation de projets pratiques.",
    ],
  },
  {
    title: "Baccalauréat Série D",
    organization: "Lycée Bilingue de Nyalla — Douala, Cameroun",
    period: "2019 - 2020",
    description:
      "Formation secondaire générale avec spécialisation scientifique.",
    highlights: [
      "Mathématiques.",
      "Sciences de la Vie et de la Terre.",
      "Physique-Chimie.",
    ],
  },
];
