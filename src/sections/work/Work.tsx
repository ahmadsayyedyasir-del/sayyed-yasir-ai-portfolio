import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";
import projects from "../../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const statusColors: Record<string, string> = {
  Completed: "bg-green-400/10 text-green-400 border-green-400/20",
  "In Progress": "bg-amber-400/10 text-amber-400 border-amber-400/20",
  Live: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
};

const Work = () => {
  return (
    <section id="work" className="py-40">
      <Container>
        <SectionTitle subtitle="PROJECTS" title="Selected Work" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10"
        >
          {projects.map((project) => {
            const hasGithub = project.github.length > 0;

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:scale-[1.01] hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_60px_rgba(6,182,212,0.06)] md:p-12"
              >
                {/* Status Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>

                  <span className="text-sm text-slate-500">{project.role}</span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Problem & Solution */}
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-rose-400/80">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-cyan-400/80">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  {hasGithub ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <FiGithub size={16} />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-600 cursor-not-allowed">
                      <FiGithub size={16} />
                      GitHub — Coming Soon
                    </span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;