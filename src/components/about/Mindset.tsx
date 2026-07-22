import { Code2, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection, scaleIn } from "../MotionContainers";

const Mindset = () => {
  return (
    <FadeInSection className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div
        variants={scaleIn}
        className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-2xs"
      >
        <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
          Code Propre & Modulaire
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Priorité à la lisibilité, à la réutilisabilité des composants et aux
          architectures maintenables sur le long terme.
        </p>
      </motion.div>

      <motion.div
        variants={scaleIn}
        className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-2xs"
      >
        <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Layers className="w-5 h-5" />
        </div>
        <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
          Fullstack Mindset
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Compréhension globale du flux de données, du schéma de base de données
          jusqu'au pixel près dans l'interface utilisateur.
        </p>
      </motion.div>

      <motion.div
        variants={scaleIn}
        className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-2xs"
      >
        <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Rocket className="w-5 h-5" />
        </div>
        <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">
          Apprentissage Continu
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Veille technologique active et montée en compétences constante sur
          DevOps, la sécurité et la performance web.
        </p>
      </motion.div>
    </FadeInSection>
  );
};

export default Mindset;
