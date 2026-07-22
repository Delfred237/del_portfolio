import { GithubIcon, LinkedinIcon } from "@/utils/SocialMediaIcons";
import { CheckCircle2, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/MotionContainers";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction pour simuler l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler le temps de traitement du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 3000);
  };

  return (
    <div className="space-y-12 py-4">
      {/* ----------------- 1. HEADER SECTION ----------------- */}
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
          <MessageSquare className="w-4 h-4" />
          Contact & Échanges
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Discutons de votre prochain projet.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Je suis actuellement ouvert aux nouvelles opportunités. Que vous ayez
          une question, un projet en tête, ou que vous souhaitiez simplement
          dire bonjour, je vous répondrai dans les plus brefs délais.
        </motion.p>
      </motion.section>

      {/* ----------------- 2. MAIN LAYOUT (INFO + FORMULAIRE) ----------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
        {/* COLONNE GAUCHE : Informations de contact */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Mes coordonnées
            </h2>

            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="mailto:delfredtene17@gmail.com"
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
              >
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Email
                  </p>
                  <p>delfredtene17@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Localisation
                  </p>
                  <p>Douala, Cameroun (Disponible en Remote)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Réseaux sociaux
            </h2>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Delfred237"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/delfred-fossi-a39b43240"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/10 border border-transparent hover:border-[#0A66C2]/20 dark:hover:border-[#0A66C2]/20 transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* COLONNE DROITE : Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 ml-1"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 ml-1"
                >
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 ml-1"
              >
                Votre message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre projet..."
                className="w-full resize-none px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 min-h-30"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-xs ${
                isSubmitted
                  ? "bg-emerald-500 text-white cursor-default"
                  : "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-70 disabled:cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  Envoi en cours...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Message envoyé avec succès !
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
