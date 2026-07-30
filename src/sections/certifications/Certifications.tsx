import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";
import certifications from "../../data/certifications";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-40">
      <Container>
        <SectionTitle subtitle="CREDENTIALS" title="Certifications" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert) => {
            const hasLink = cert.link.length > 0;

            return (
              <motion.div
                key={cert.title}
                variants={cardVariants}
                className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(6,182,212,0.06)]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold tracking-wider text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  {cert.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {cert.title}
                </h3>

                {/* Provider */}
                <p className="mb-4 text-sm text-slate-500">{cert.provider}</p>

                {/* Date */}
                <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                  {cert.date}
                </span>

                {/* Link */}
                <div className="mt-6">
                  {hasLink ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                    >
                      View Certificate
                      <FiExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 cursor-not-allowed">
                      Coming Soon
                    </span>
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

export default Certifications;