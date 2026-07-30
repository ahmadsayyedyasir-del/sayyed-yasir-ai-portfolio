export type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  role: string;
  github: string;
  live?: string;
  status: "Completed" | "In Progress" | "Live";
};

const projects: Project[] = [
  {
    title: "AI Requirement Engineering Platform",
    description:
      "Multi-agent AI platform that automates requirement analysis, validation, and documentation using LLM workflows.",
    problem:
      "Traditional requirement engineering is manual, error-prone, and time-consuming. Stakeholders struggle to capture, validate, and trace requirements across complex projects.",
    solution:
      "Built a multi-agent system using LangGraph orchestration where specialized AI agents handle elicitation, analysis, validation, and traceability — reducing manual effort by 70%.",
    tech: ["FastAPI", "LangGraph", "PostgreSQL", "React", "Docker", "Groq"],
    role: "Full-Stack AI Engineer",
    github: "",
    status: "Completed",
  },
  {
    title: "AI Document Assistant (RAG)",
    description:
      "Intelligent document Q&A system using Retrieval-Augmented Generation with vector search and LLM reasoning.",
    problem:
      "Organizations store thousands of documents. Finding specific information is slow, and traditional search lacks contextual understanding.",
    solution:
      "Implemented a RAG pipeline with Pinecone vector database for semantic search, LangChain for retrieval chains, and Groq LLM for accurate, context-aware answers with source citations.",
    tech: ["Python", "Pinecone", "LangChain", "Groq", "FastAPI", "ChromaDB"],
    role: "AI Engineer",
    github: "",
    status: "Completed",
  },
  {
    title: "AI Voice Assistant",
    description:
      "End-to-end voice assistant with Speech-to-Text, LLM reasoning, and Text-to-Speech capabilities.",
    problem:
      "Existing voice assistants are closed ecosystems. Developers need a customizable, open voice pipeline they can integrate into their own applications.",
    solution:
      "Built a modular voice pipeline using Whisper for transcription, Groq for LLM reasoning, and TTS for natural speech output — all connected through a clean FastAPI backend.",
    tech: ["Python", "Whisper", "Groq", "TTS", "FastAPI", "Docker"],
    role: "AI Engineer",
    github: "",
    status: "Completed",
  },
];

export default projects;