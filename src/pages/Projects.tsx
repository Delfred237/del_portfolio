import CategorySection, {
  type Category,
} from "@/components/projects/CategorySection";
import HeroSection from "@/components/projects/HeroSection";
import Project from "@/components/projects/Project";
import { PROJECTS } from "@/data/projectsData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");
  const [setActiveModalProject] = useState<
    React.Dispatch<React.SetStateAction<string | null>>
  >(() => {});

  const categories: Category[] = [
    "Tous",
    "Fullstack",
    "Frontend",
    "Backend",
    "Mobile",
    "DevOps",
    "Database",
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12 py-4">
      {/* HEADER SECTION */}
      <HeroSection />

      {/* FILTRES PAR CATÉGORIE */}
      <CategorySection
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* GRILLE DES PROJETS */}
      <motion.div className="grid grid-cols-1 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <Project
              key={project.id}
              project={project}
              setActiveModalProject={setActiveModalProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
