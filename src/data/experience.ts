export type Experience = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

const experience: Experience[] = [
  {
    year: "2024",
    title: "Started BS Artificial Intelligence",
    subtitle: "University",
    description:
      "Began my formal education in Artificial Intelligence with a rigorous curriculum covering programming, linear algebra, calculus, probability, and software engineering fundamentals.",
  },
  {
    year: "2024 — 2025",
    title: "Machine Learning & Deep Learning",
    subtitle: "Core Foundations",
    description:
      "Mastered supervised and unsupervised learning, neural networks, CNNs, RNNs, and transformer architectures. Built hands-on projects using Scikit-learn, TensorFlow, and PyTorch.",
  },
  {
    year: "2025",
    title: "AI Engineering Internship",
    subtitle: "Internship",
    description:
      "Developed production AI pipelines using FastAPI, LangChain, and PostgreSQL. Worked on RAG systems, LLM integration, and API design in a professional team environment.",
  },
  {
    year: "2025 — 2026",
    title: "Agentic AI & Generative AI",
    subtitle: "Advanced Specialization",
    description:
      "Built multi-agent systems with LangGraph orchestration, developed RAG applications with Pinecone vector databases, and created AI voice assistants using Whisper and Groq LLMs.",
  },
  {
    year: "2026",
    title: "AI Product Development",
    subtitle: "Current Focus",
    description:
      "Shipping production-grade AI products. Focused on agentic workflows, LLM evaluation, MLOps, and building scalable AI infrastructure that solves real-world problems.",
  },
];

export default experience;