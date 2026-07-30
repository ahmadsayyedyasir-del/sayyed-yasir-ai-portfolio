export type TechCategory = {
  title: string;
  description: string;
  items: string[];
};

const technologies: TechCategory[] = [
  {
    title: "AI / ML",
    description: "Building intelligent systems that learn, reason, and adapt.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Agentic AI",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  {
    title: "Backend",
    description: "Scalable APIs, microservices, and production infrastructure.",
    items: [
      "FastAPI",
      "Python",
      "LangChain",
      "LangGraph",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    description: "Clean, performant interfaces for AI-powered products.",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
      "Vite",
    ],
  },
  {
    title: "Databases & Vector Stores",
    description: "Structured, unstructured, and semantic data layers.",
    items: [
      "PostgreSQL",
      "Pinecone",
      "ChromaDB",
      "Vector Databases",
      "Redis",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Workflows",
    description: "Engineering discipline, automation, and reproducible pipelines.",
    items: [
      "Git & GitHub",
      "Docker",
      "LangSmith",
      "Jupyter",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deploying, scaling, and monitoring AI in production.",
    items: [
      "AWS",
      "Hugging Face",
      "Groq",
      "Cloud APIs",
      "Model Deployment",
      "MLOps",
    ],
  },
];

export default technologies;