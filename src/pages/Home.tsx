import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";
import { FEATURED_PROJECTS, SKILLS } from "@/data/homeData";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layout,
  Palette,
  Server,
} from "lucide-react";

// Helper pour associer la bonne icône Lucide de façon sécurisée
function getSkillIcon(name: string) {
  switch (name) {
    case "Layout":
      return (
        <Layout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
    case "Server":
      return (
        <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
    case "Palette":
      return (
        <Palette className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
    case "Database":
      return (
        <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
    case "Cpu":
      return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    case "GitBranch":
      return (
        <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
    default:
      return (
        <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      );
  }
}

const Home = () => {
  return (
    <div className="space-y-20 py-4">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <HeroSection />

      {/* ----------------- 2. TECH STACK GRID ----------------- */}
      <SkillSection SKILLS={SKILLS} getSkillIcon={getSkillIcon} />

      {/* ----------------- 3. FEATURED PROJECTS PREVIEW ----------------- */}
      <ProjectSection FEATURED_PROJECTS={FEATURED_PROJECTS} />

      {/* ----------------- 4. CTA BANNER ----------------- */}
      <CtaSection />
    </div>
  );
};

export default Home;
