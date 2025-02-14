import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

//TODO: edit
export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Large Language Models",
      "Computer Vision",
      "Generative AI",
      "Neural Networks",
      "Fine-tuning",
      "Deep Learning",
      "Reinforcement Learning",
      "MLOps",
      "Hugging Face",
    ],
  },
  {
    name: "Cloud Architecture & MLOps",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Jenkins",
      "Airflow",
      "Kafka",
      "Spark",
      "Redis",
      "Vector Databases",
    ],
  },
  {
    name: "Programming",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "Java",
      "Javascript",
      "TypeScript",
      "SQL",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "LangChain",
      "LlamaIndex",
      "Gradio"
    ],
  },
  {
    name: "Data Science",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Feature Engineering",
      "Dimensionality Reduction",
      "Clustering",
      "Statistical Modeling",
      "Time Series Analysis",
      "Tableau"
    ],
  },
  {
    name: "Web Development",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Spring Boot",
      "Angular",
      "Flask",
      "FastAPI"

    ],
  },
];
