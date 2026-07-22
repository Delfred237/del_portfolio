import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeInSection } from "../MotionContainers";

const CtaSection = () => {
  return (
    <FadeInSection className="p-8 sm:p-10 rounded-3xl bg-zinc-900 dark:bg-zinc-900/80 text-white border border-zinc-800 relative overflow-hidden">
      <div className="relative z-10 space-y-4 max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Un projet en tête ou un poste à pourvoir ?
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Je suis toujours ouvert aux discussions sur le développement frontend,
          l'architecture d'API REST ou de futures collaborations.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-100 transition-colors"
          >
            Engager la conversation
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </FadeInSection>
  );
};

export default CtaSection;
