import { AnimatePresence, motion } from "framer-motion";

export type Category =
  | "Tous"
  | "Fullstack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "DevOps"
  | "Database";

interface CategorySectionProps {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const CategorySection = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategorySectionProps) => {
  return (
    <motion.div
      layout
      className="flex flex-wrap items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4"
    >
      <AnimatePresence mode="popLayout">
        {categories.map((cat) => (
          <motion.button
            layout // Active le ré-agencement automatique quand la liste change !
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xs"
                : "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CategorySection;
