import type { ExperienceOrEducation } from "@/data/aboutData";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { FadeInSection, StaggerGrid, StaggerItem } from "../MotionContainers";
import { motion } from "framer-motion";

interface TimelineProps {
  TIMELINE: ExperienceOrEducation[];
}

const Timeline = ({ TIMELINE }: TimelineProps) => {
  return (
    <FadeInSection className="space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          Parcours
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Expérience & Formation
        </h2>
      </div>

      <StaggerGrid className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 space-y-10">
        {TIMELINE.map((item, idx) => (
          <StaggerItem key={idx} className="relative group">
            {/* Point de timeline */}
            <motion.div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                  {item.period}
                </span>
              </div>

              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {item.organization}
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-1.5 pt-2">
                {item.highlights.map((point, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </FadeInSection>
  );
};

export default Timeline;
