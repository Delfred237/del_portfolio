import { User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../MotionContainers";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-4 max-w-3xl"
    >
      <motion.div
        variants={fadeInUp}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider"
      >
        <User className="w-4 h-4" />À Propos & Vision
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Passionné par la création de logiciels solides et intuitifs.
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2"
      >
        Développeur orienté produit, je combine la rigueur du backend avec
        Spring Boot et l'élégance du frontend moderne avec React pour bâtir des
        solutions web complètes et évolutives.
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;
