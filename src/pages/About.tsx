import HeroSection from "@/components/about/HeroSection";
import Mindset from "@/components/about/Mindset";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";
import { SKILL_GROUPS, TIMELINE } from "@/data/aboutData";

const About = () => {
  return (
    <div className="space-y-16 py-4">
      {/* ----------------- 1. HEADER SECTION ----------------- */}
      <HeroSection />

      {/* ----------------- 2. MON APPROCHE / PHILOSOPHIE ----------------- */}
      <Mindset />

      {/* ----------------- 3. COMPÉTENCES DÉTAILLÉES ----------------- */}
      <Skills SKILL_GROUPS={SKILL_GROUPS} />

      {/* ----------------- 4. PARCOURS & TIMELINE ----------------- */}
      <Timeline TIMELINE={TIMELINE} />
    </div>
  );
};

export default About;
