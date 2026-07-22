import type { CaseStudy } from "@/data/projectsData";
import { GithubIcon } from "@/utils/SocialMediaIcons";
import { CheckCircle2, Cpu, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectProps {
  project: CaseStudy;
  setActiveModalProject: React.Dispatch<React.SetStateAction<string | null>>;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <motion.article
      layout // Active le ré-agencement automatique quand la liste change !
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      key={project.id}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-2xs space-y-6"
    >
      {/* Top Info */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
            {project.category}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            {project.status}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
          <Sparkles className="w-3.5 h-3.5" />
          {project.metrics}
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h2>
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {project.tagline}
        </p>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
          {project.description}
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="space-y-2 pt-2">
        <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Fonctionnalités clés
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
          {project.features.map((feat, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-800/30 p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60"
            >
              <span className="text-emerald-500 font-bold">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture note */}
      <div className="p-4 rounded-2xl bg-zinc-100/70 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
          <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Aperçu Architectural
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">
          "{project.architecture}"
        </p>
      </div>

      {/* Footer: Tags & Action Links */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
