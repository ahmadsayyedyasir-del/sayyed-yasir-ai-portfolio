import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";

const principles = [
  {
    number: "01",
    title: "Systems Thinking",
    description:
      "Every component connects. I design AI systems holistically — from data pipelines to deployment — ensuring each layer is intentional, observable, and maintainable.",
  },
  {
    number: "02",
    title: "First Principles",
    description:
      "I break problems down to their fundamentals. Rather than applying patterns blindly, I reason from the ground up to build solutions that are efficient, correct, and explainable.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "AI evolves daily. I invest in deep understanding over surface-level familiarity — reading papers, building prototypes, and shipping real products to validate ideas.",
  },
  {
    number: "04",
    title: "Engineering Discipline",
    description:
      "Clean code, reproducible experiments, version-controlled data, and automated pipelines. Good intentions don't scale — good engineering does.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-40">
      <Container>
        <SectionTitle subtitle="MINDSET" title="Engineering Philosophy" />

        <div className="grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 transition-all duration-500 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              <span className="mb-6 block text-5xl font-black text-white/10 transition-colors duration-500 group-hover:text-cyan-400/20">
                {principle.number}
              </span>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {principle.title}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;