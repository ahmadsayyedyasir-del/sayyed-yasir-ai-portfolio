import { FiArrowUp } from "react-icons/fi";
import Container from "./Container";
import portfolio from "../../data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-white">
              {portfolio.name}
            </p>
            <p className="text-xs tracking-[0.25em] text-cyan-400 uppercase">
              {portfolio.role}
            </p>
          </div>

          {/* Center */}
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Right — Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;