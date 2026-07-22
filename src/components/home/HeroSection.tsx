import {
  ArrowRight,
  Code2,
  Cpu,
  FileText,
  Layers,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../MotionContainers";
import profileImg from "../../assets/images/del.webp";

// const PROFILE_IMAGE_URL = "src/assets/images/del.webp";
// "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-4"
    >
      {/* ================= COLONNE GAUCHE : TEXTE & CTA ================= */}
      <div className="lg:col-span-7 space-y-6">
        {/* Badge Disponibilité */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponible pour de nouveaux projets & opportunités
        </motion.div>

        {/* Titre & Sous-titre */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-200"
        >
          Développeur Fullstack <br />
          <span className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
            Spécialisé React & Spring Boot & Flutter.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl"
        >
          Je conçois des applications web et mobiles modernes, scalables et
          orientées produit. Focus sur l'expérience utilisateur, le typage
          statique et les architectures propres.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
            >
              Découvrir mes projets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Me contacter
            </Link>
          </motion.div>

          <motion.a
            download="Delfred_CV.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/src/assets/files/Delfred_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors ml-auto sm:ml-0 font-medium cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Télécharger CV
          </motion.a>
        </motion.div>
      </div>

      {/* ================= COLONNE DROITE : PORTRAIT & FLOTTANTS ================= */}
      <motion.div
        variants={fadeInUp}
        className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
      >
        <div className="relative w-72 h-80 sm:w-80 sm:h-96">
          {/* 1. Halo Lumineux d'Arrière-plan (Glow effect) */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-emerald-500/20 via-zinc-500/10 to-emerald-400/20 blur-2xl transform scale-105 pointer-events-none" />

          {/* 2. Photo Portrait Arrondie */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            <img
              src={profileImg}
              alt="Portrait Développeur"
              className="w-full h-full object-contain object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Dégradé subtil au bas de l'image */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* ================= BADGES FLOTTANTS (ANIMATION CONTINUE) ================= */}

          {/* Badge 1 : React / Frontend (En haut à gauche) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -left-6 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono leading-none">
                Frontend
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                React & Vite
              </p>
            </div>
          </motion.div>

          {/* Badge 2 : Spring Boot / Backend (Au milieu à droite) */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono leading-none">
                Backend
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Spring Boot
              </p>
            </div>
          </motion.div>

          {/* Badge 3 : Architecture / Mobile (En bas à gauche) */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono leading-none">
                Mobile & App
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Flutter & Clean Code
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
