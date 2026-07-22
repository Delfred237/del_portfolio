import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../MotionContainers";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-4 max-w-2xl"
    >
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider"
      >
        <FolderGit2 className="w-4 h-4" />
        Portfolio & Études de cas
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Projets & Réalisations
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
      >
        Une sélection de mes travaux récents. Chaque projet illustre une
        problématique technique concrète et sa résolution via des architectures
        propres.
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;
