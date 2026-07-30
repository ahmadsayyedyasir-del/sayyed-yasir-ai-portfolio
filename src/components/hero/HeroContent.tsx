import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCodeBracket,
} from "react-icons/hi2";
import portfolio from "../../data/portfolio";

const HeroContent = () => {
  const hasGithub = portfolio.github.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative z-20"
    >
      {/* Status */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">

        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm tracking-[0.25em] text-cyan-300 uppercase">
          Available for Internship
        </span>

      </div>

      {/* Heading */}

      <h1 className="text-5xl font-black leading-[0.92] text-white md:text-7xl xl:text-8xl">

        Building

        <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">

          Intelligent

        </span>

        AI Systems

      </h1>

      {/* Paragraph */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

        AI Engineer focused on Machine Learning,
        Agentic AI, Generative AI, FastAPI,
        LangChain and scalable backend systems.

      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-5">

        <a
          href="#work"
          className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          View Projects

          <HiArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>

        {hasGithub ? (
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub Profile"
          >
            <HiCodeBracket size={20} aria-hidden="true" />

            GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-7 py-4 font-semibold text-slate-600 cursor-not-allowed">
            <HiCodeBracket size={20} aria-hidden="true" />
            GitHub — Coming Soon
          </span>
        )}

      </div>

      {/* Stats */}

      <div className="mt-14 flex flex-wrap gap-12">

        <div>
          <h2 className="text-4xl font-bold text-white">
            10+
          </h2>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
            AI Projects
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            2+
          </h2>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
            Internships
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            2026
          </h2>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
            AI Journey
          </p>
        </div>

      </div>

    </motion.div>
  );
};

export default HeroContent;