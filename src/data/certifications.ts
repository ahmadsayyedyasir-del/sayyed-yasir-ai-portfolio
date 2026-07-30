export type Certification = {
  title: string;
  provider: string;
  date: string;
  icon: string;
  link: string;
};

const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI — Stanford",
    date: "2025",
    icon: "ML",
    link: "",
  },
  {
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI",
    date: "2025",
    icon: "DL",
    link: "",
  },
  {
    title: "LangChain & LLM Development",
    provider: "LangChain Academy",
    date: "2025",
    icon: "LC",
    link: "",
  },
  {
    title: "FastAPI — Production APIs",
    provider: "FastAPI Official",
    date: "2025",
    icon: "FA",
    link: "",
  },
];

export default certifications;