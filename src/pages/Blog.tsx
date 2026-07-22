import { ARTICLES } from "@/data/blogData";
import { ArrowUpRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/MotionContainers";

type Category =
  | "Tous"
  | "Spring Boot"
  | "React"
  | "TypeScript"
  | "Next.js"
  | "Flutter"
  | "DevOps"
  | "Architecture";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");

  const categories: Category[] = [
    "Tous",
    "Spring Boot",
    "React",
    "TypeScript",
    "Next.js",
    "Flutter",
    "DevOps",
    "Architecture",
  ];

  const filteredArticles =
    selectedCategory === "Tous"
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <div className="space-y-12 py-4">
      {/* HEADER SECTION */}
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
          <BookOpen className="w-4 h-4" />
          Veille & Partage Technique
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Blog & Articles
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Retours d'expérience, tutoriels et réflexions sur le développement
          fullstack, l'architecture logicielle et l'écosystème DevOps.
        </motion.p>
      </motion.section>

      {/* FILTRES PAR CATEGORIE */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs"
                : "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LISTE DES ARTICLES */}
      <motion.div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.article
              layout // Active le ré-agencement automatique quand la liste change !
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              key={article.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 group shadow-2xs space-y-4 cursor-pointer"
            >
              {/* Meta Top */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>

                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {article.readTime} de lecture
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-emerald-600 dark:text-emerald-400" />
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Tags Bottom */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-zinc-400 mr-1" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Blog;
