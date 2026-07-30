import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";

import profile from "../../assets/images/profile.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 80 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[100px] sm:h-[520px] sm:w-[520px] sm:blur-[150px]" />

      {/* Outer Ring */}
      <div className="absolute h-[240px] w-[240px] animate-spin rounded-full border border-cyan-400/20 [animation-duration:20s] sm:h-[420px] sm:w-[420px]" />

      {/* Second Ring */}
      <div className="absolute h-[280px] w-[280px] animate-spin rounded-full border border-purple-500/10 [animation-duration:35s] [animation-direction:reverse] sm:h-[470px] sm:w-[470px]" />

      {/* Image */}
      <img
        src={profile}
        alt="Sayyed Yasir Ahmad"
        className="relative z-20 h-[200px] w-[200px] rounded-full border border-white/10 object-cover shadow-[0_0_60px_rgba(6,182,212,0.25)] sm:h-[370px] sm:w-[370px] sm:shadow-[0_0_80px_rgba(6,182,212,0.25)]"
      />

      {/* Floating Badges — hidden on mobile, visible on sm+ */}
      <div className="hidden sm:block absolute left-0 top-16">
        <HeroBadge text="Machine Learning" />
      </div>

      <div className="hidden sm:block absolute right-0 top-24">
        <HeroBadge text="Generative AI" />
      </div>

      <div className="hidden sm:block absolute -left-4 bottom-20">
        <HeroBadge text="FastAPI" />
      </div>

      <div className="hidden sm:block absolute right-2 bottom-8">
        <HeroBadge text="LangChain" />
      </div>

      <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2">
        <HeroBadge text="Agentic AI" />
      </div>
    </motion.div>
  );
};

export default HeroImage;