import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";
import technologies from "../../data/technologies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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

const Technologies = () => {
  return (
    <section id="technologies" className="py-40">
      <Container>
        <SectionTitle subtitle="TECH STACK" title="Core Technologies" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(6,182,212,0.06)]"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                {category.description}
              </p>

              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Technologies;