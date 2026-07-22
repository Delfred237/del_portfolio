import type { FeaturedProject } from "@/data/homeData";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeInSection, StaggerGrid, StaggerItem } from "../MotionContainers";

interface ProjectSectionProps {
  FEATURED_PROJECTS: FeaturedProject[];
}

const ProjectSection = ({ FEATURED_PROJECTS }: ProjectSectionProps) => {
  return (
    <FadeInSection className="space-y-6">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Réalisations
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Projets phares
          </h2>
        </div>
        <Link
          to="/projects"
          className="text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 transition-colors"
        >
          Voir tous les projets
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <StaggerItem
            key={project.id}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  {project.metrics}
                </span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </FadeInSection>
  );
};

export default ProjectSection;
