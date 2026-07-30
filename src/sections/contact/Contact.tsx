import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";
import portfolio from "../../data/portfolio";

const Contact = () => {
  const hasEmail = portfolio.email.length > 0;
  const hasGithub = portfolio.github.length > 0;
  const hasLinkedin = portfolio.linkedin.length > 0;
  const hasResume = portfolio.resume.length > 0;

  return (
    <section id="contact" className="py-40">
      <Container>
        <SectionTitle subtitle="CONTACT" title="Get In Touch" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-16 lg:grid-cols-2"
        >
          {/* Left — Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Let's work together
            </h3>

            <p className="mb-10 max-w-md leading-relaxed text-slate-400">
              I'm currently looking for internship opportunities in AI
              Engineering. If you have a project, research idea, or role that
              aligns with my skills, I'd love to hear from you.
            </p>

            <div className="mb-10 space-y-5">
              {hasEmail ? (
                <a
                  href={`mailto:${portfolio.email}`}
                  className="group flex items-center gap-4 text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <FiMail size={16} />
                  </span>
                  <span className="text-sm">{portfolio.email}</span>
                </a>
              ) : (
                <div className="group flex items-center gap-4 text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
                    <FiMail size={16} />
                  </span>
                  <span className="text-sm text-slate-600">Email — Coming Soon</span>
                </div>
              )}

              {hasGithub ? (
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <FiGithub size={16} />
                  </span>
                  <span className="text-sm">GitHub</span>
                </a>
              ) : (
                <div className="group flex items-center gap-4 text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
                    <FiGithub size={16} />
                  </span>
                  <span className="text-sm text-slate-600">GitHub — Coming Soon</span>
                </div>
              )}

              {hasLinkedin ? (
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <FiLinkedin size={16} />
                  </span>
                  <span className="text-sm">LinkedIn</span>
                </a>
              ) : (
                <div className="group flex items-center gap-4 text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
                    <FiLinkedin size={16} />
                  </span>
                  <span className="text-sm text-slate-600">LinkedIn — Coming Soon</span>
                </div>
              )}

              <div className="group flex items-center gap-4 text-slate-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FiMapPin size={16} />
                </span>
                <span className="text-sm">India</span>
              </div>
            </div>

            {hasResume ? (
              <a
                href={portfolio.resume}
                download
                className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            ) : (
              <div className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-600 cursor-not-allowed">
                <FiDownload size={16} />
                Resume — Coming Soon
              </div>
            )}
          </div>

          {/* Right — Form */}
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Message"
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;