import Container from "../../components/layout/Container";
import Button from "../../components/common/Button";
import FadeIn from "../../components/ui/FadeIn";

const Landing = () => {
  return (
    <section className="relative flex min-h-screen items-center">
      <Container>
        <FadeIn>
          <div className="max-w-5xl">

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.45em] text-cyan-400">
              AI ENGINEER
            </p>

            <h1 className="text-6xl font-black leading-tight text-white md:text-8xl">
              Building
              <br />
              Intelligent <span className="text-cyan-400">AI</span> Systems
              <br />
              For Tomorrow.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              I build scalable AI products powered by Machine Learning,
              Generative AI, Agentic AI, FastAPI, LangChain,
              LangGraph and modern cloud technologies.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Button>View Work</Button>

              <button className="rounded-full border border-white/20 px-8 py-4 text-white transition duration-300 hover:border-cyan-400">
                Contact Me
              </button>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Landing;