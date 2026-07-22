import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// --- VARIANTS REUTILISABLES ---
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Décalage entre chaque enfant
      delayChildren: 0.15,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// --- COMPOSANT : APPARITION AU SCROLL (Section Wrapper) ---
interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
}: SectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Déclenche l'animation une seule fois quand la section entre dans le viewport
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// --- COMPOSANT : GRILLE AVEC APPARITION EN CASCADE (Stagger) ---
export function StaggerGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- COMPOSANT ENFANT D'UNE GRILLE (Item Wrapper) ---
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
