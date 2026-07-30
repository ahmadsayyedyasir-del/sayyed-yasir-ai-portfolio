import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";
import experience from "../../data/experience";

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const Journey = () => {
  return (
    <section id="journey" className="py-40">
      <Container>
        <SectionTitle subtitle="EXPERIENCE" title="Professional Journey" />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-cyan-400/40 via-purple-500/20 to-transparent md:left-[23px]" />

          <div className="space-y-16">
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full border border-cyan-400/20 bg-[#050816] flex items-center justify-center md:h-12 md:w-12">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]" />
                  </div>
                </div>

                {/* Year Badge */}
                <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-300 uppercase">
                  {item.year}
                </span>

                {/* Title & Subtitle */}
                <h3 className="mb-1 text-2xl font-semibold text-white md:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="max-w-2xl leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Journey;