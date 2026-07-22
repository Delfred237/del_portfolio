import type { SkillGroup } from "@/data/aboutData";
import { Sparkles, Terminal } from "lucide-react";
import { FadeInSection, StaggerGrid, StaggerItem } from "../MotionContainers";

interface SkillsProps {
  SKILL_GROUPS: SkillGroup[];
}

const Skills = ({ SKILL_GROUPS }: SkillsProps) => {
  return (
    <FadeInSection className="space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Stack Technique
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Technologies & Écosystème
        </h2>
      </div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group) => (
          <SkillOption key={group.category} group={group} />
        ))}
      </StaggerGrid>
    </FadeInSection>
  );
};

function SkillOption({ group }: Readonly<{ group: SkillGroup }>) {
  return (
    <StaggerItem
      key={group.category}
      className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-2xs"
    >
      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
        <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        {group.category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </StaggerItem>
  );
}

export default Skills;
