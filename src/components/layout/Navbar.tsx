import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import portfolio from "../../data/portfolio";
import Container from "./Container";

const navItems = [
  "Philosophy",
  "Technologies",
  "Work",
  "Journey",
  "Contact",
];

const Navbar = () => {
  const hasResume = portfolio.resume.length > 0;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 transition duration-300 group-hover:border-cyan-400">
              <span className="text-lg font-bold text-white">YA</span>
            </div>

            <div className="hidden md:block">
              <h2 className="text-sm font-semibold tracking-wide text-white">
                Sayyed Yasir Ahmad
              </h2>

              <p className="text-xs tracking-[0.25em] text-cyan-400">
                AI ENGINEER
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm text-slate-300 transition duration-300 hover:text-white focus-visible:text-cyan-400 focus-visible:outline-none after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          {hasResume ? (
            <a
              href={portfolio.resume}
              download
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <HiArrowDownTray size={18} aria-hidden="true" />
              Resume
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2 text-sm font-medium text-slate-600 cursor-not-allowed">
              <HiArrowDownTray size={18} aria-hidden="true" />
              Resume — Coming Soon
            </span>
          )}

        </div>
      </Container>
    </motion.header>
  );
};

export default Navbar;