import type { TechSkill } from "@/data/homeData";
import { Sparkles } from "lucide-react";
import { FadeInSection, StaggerGrid, StaggerItem } from "../MotionContainers";

interface SkillSectionProps {
  SKILLS: TechSkill[];
  getSkillIcon: (name: string) => React.ReactNode;
}

const SkillSection: React.FC<SkillSectionProps> = ({
  SKILLS,
  getSkillIcon,
}) => {
  return (
    <FadeInSection className="space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Compétences & Stack
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-400">
          Les outils au cœur de mes développements
        </h2>
      </div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <StaggerItem
            key={skill.name}
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900/40  border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 group shadow-2xs"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 group-hover:scale-105 transition-transform">
                {getSkillIcon(skill.iconName)}
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                {skill.category}
              </span>
            </div>
            <h3 className="font-semibold text-sm mb-1 text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {skill.name}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {skill.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </FadeInSection>
  );
};

export default SkillSection;
