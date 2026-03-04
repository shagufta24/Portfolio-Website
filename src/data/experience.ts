export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
  logo: string;
}

export const experiences: Experience[] = [

  // Software Engineer at Cognida.ai
  {
    title: "Software Engineer, Applied AI",
    company: "Cognida.ai",
    location: "Sunnyvale, CA, United States",
    startDate: "December 2026",
    endDate: "Present",
    logo: "/icons/cognida.jpg",
    achievements: [
      {
        text: "Built an AI-assisted accounting data migration tool to automate mapping of entities across ERP systems, reducing manual effort for finance teams",
      },
      {
        text: "Implemented NLP & LLM-based entity mapping with confidence scoring and interactive validation visualization workflows for accountants",
      },
      {
        text: "Developed backend services to ingest data from ERP APIs, preprocess and normalize it for AI-based mapping and generate export-ready formats"
      },
      {
        text: "Designed an API integration support pipeline for importing data from heterogenous legacy ERP finance systems to reduce manual overhead"
      }
    ],
    skills: [
      { name: "Python" },
      { name: "Django" },
      { name: "Docker" },
      { name: "NLP" },
      { name: "LLM" },
    ],
  },

  // Software Engineer at Amazon
  {
    title: "Software Engineer",
    company: "Amazon",
    location: "New York City, NY, United States",
    startDate: "June 2026",
    endDate: "December 2026",
    logo: "/icons/amazon.jpg",
    achievements: [
      {
        text: "Designed and implemented a critical Bulk User Management feature for Amazon Ads to replace manual workflows with streamlined operations",
      },
      {
        text: "Built distributed scalable Spring Boot APIs supporting large-scale user operations with hierarchical permission checks across 10K+ accounts",
      },
      {
        text: "Architected an algorithm for account-hierarchy nesting limits using Redis-cached relationship graphs, reducing authorization latency ~35% at scale"
      },
      {
        text: "Set up AWS AppConfig integration for feature gating and runtime configurations, enabling safer rollouts and controlled experimentation"
      },
      {
        text: "Parallelized backend workflows for large batch operations, reducing processing time ~40–50% and improving system throughput under peak load"
      },
      {
        text: "Partnered with Product/QA during UAT and launch; identified and resolved critical defects and coordinated cross-team access-control changes"
      }
    ],
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "Redis" },
      { name: "AWS" },
      { name: "API Design" },
    ],
  },

  // Graduate Research Assistant at UIUC
  {
    title: "Graduate Research Assistant",
    company: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL, United States",
    startDate: "September 2024",
    endDate: "December 2024",
    logo: "/icons/uiuc.png",
    achievements: [
      {
        text: "Designed an AI-driven tool for analyzing human behavior in videos, utilizing GPT-4's multimodal capabilities to derive clinically relevant insights",
      },
      {
        text: "Developed an interactive ReactJS-based UI with AI-generated visualizations and textual summaries to enable effective interpretation of results ",
      },
      {
        text: "Engineered a backend with Flask for real-time video data processing and GPT-4 inference, optimized for low latency responses"
      }
    ],
    skills: [
      { name: "Python" },
      { name: "Flask" },
      { name: "React.js" },
      { name: "APIs" },
      { name: "GPT-4" },
    ],
  },

  // Software Engineer Intern at GlobalLogic
  {
    title: "Software Engineer Intern",
    company: "GlobalLogic Inc.",
    location: "Santa Clara, CA, United States",
    startDate: "June 2024",
    endDate: "July 2024",
    isRemote: false,
    logo: "/icons/globallogic.jpg",
    achievements: [
      {
        text:
          "Developed a real-time gamified quiz module, serving over 1000 users simultaneously and boosting user engagement by 25% ",
      },
      {
        text:
          "Architected a scalable microservices architecture, leveraging React.js, for frontend, Node.js for APIs and Firebase Functions for serverless compute",
      },
      {
        text: 
        "Optimized performance with a distributed Redis caching layer, reducing database load by 40% and improving response times by 35%",
      },
      {
        text:
          "Integrated secure authentication with OAuth 2.0 (Google SSO), and implemented role-based access control using JSON Web Tokens (JWT)",
      },
      {
        text:
          "Automated CI/CD pipelines with GitHub Actions and Docker, accelerating feature deployment and minimizing downtime",
      },
      {
        text:
          "Built an LLM-based question-answering chatbot for the learning platform using GPT-4 API, delivering accurate, context aware, low-latency responses",
      },
      {
        text:
          "Engineered a Retrieval Augmented Generation (RAG) pipeline using LangChain, leveraging Pinecone vector database for semantic embedding search",
      },
    ],
    skills: [
      { name: "React.js" },
      { name: "FastAPI" },
      { name: "Docker" },
      { name: "Python" },
      { name: "Firebase" },
      { name: "Node.js" },
      { name: "GitHub Actions" },
      { name: "Python" },
      { name: "LangChain" },
      { name: "Retrieval Augmented Generation" },
      { name: "LLM" },
      { name: "CI/CD" },
      { name: "Redis" },
    ],
  },

  // Software Engineer at Dell
  {
    title: "Software Engineer",
    company: "Dell Technologies",
    location: "Bengaluru, India",
    startDate: "July 2024",
    endDate: "December 2024",
    isRemote: false,
    logo: "/icons/dell.png",
    achievements: [
      {
        text: "Developed a computer vision model using Python and PyTorch to identify product label defects in real-time ",
      },
      {
        text: "Utilized state-of-the-art CNN models for text localization and blur detection, and performed hyperparameter tuning to ensure robust performance ",
      },
      {
        text: "Built an event-driven data pipeline using Kafka, processing over 10,000 images daily for automated data ingestion and processing ",
      },
      {
        text: "Deployed the solution with Docker and Kubernetes and built a RESTful API using Python FastAPI for integration with the manufacturing workflow",
      },
      {
        text:"Collaborated cross-functionally with engineers, designers and production managers to align model performance with production standards"
      },
      {
        text:"Participated in code reviews, planning, and estimation meetings, ensuring timely delivery of features and adherence to best practices"
      }
    ],
    skills: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Computer Vision" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Kafka" },
      { name: "Data Pipeline" },
      { name: "Restful API" },
      { name: "Model Deployment" },
    ],
  },

  // Software Engineer Intern at Dell
  {
    title: "Software Engineer Intern",
    company: "Dell Technologies",
    location: "Bengaluru, India (Remote)",
    startDate: "January 2024",
    endDate: "June 2024",
    logo: "/icons/dell.png",
    achievements: [
      {
        text:
          "Designed an inventory management dashboard to monitor and visualize key performance indicators (KPIs) for the manufacturing supply chain",
      },
      {
        text: "Built a responsive Angular frontend with advanced search and filtering, integrated with Java Spring Boot APIs and PostgreSQL database",
      },
      {
        text: "Performed comprehensive data analysis of inventory, production and sales data using Pandas to identify features that impact product shortages ",
      },
      {
        text: "Developed a time series forecasting model using an LSTM network in TensorFlow, achieving improved demand and shortage predication ",
      },
      {
        text: "Built an automated, scalable ETL pipeline using Apache Airflow, reducing data processing time and ensuring fast model inference ",
      },
      {
        text: "Enabled interactive data visualization using charting libraries and optimized database queries for fast retrieval to ensure a smooth user experience ",
      },
      {
        text: "Implemented a real-time notification system using Web Sockets and RabbitMQ, reducing user response time to critical events by 50% ",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "Angular" },
      { name: "Spring Boot" },
      { name: "TensorFlow" },
      { name: "LSTM" },
      { name: "Pandas" },
      { name: "PostgreSQL" },
      { name: "Apache Airflow" },
      { name: "RabbitMQ" },
      { name: "Web Sockets" },
      { name: "Data Visualization" },
      { name: "Time Series Forecasting" },
      { name: "ETL Pipeline" },
    ],
  },

  // Machine Learning Engineer Intern at Cognida
  {
    title: "Machine Learning Engineer Intern",
    company: "Cognida.ai",
    location: "Hyderabad, India",
    startDate: "September 2022",
    endDate: "December 2022",
    logo: "/icons/cognida.jpg",
    achievements: [
      {
        text: "Developed a computer vision system using OpenCV and PyTorch to track individual customer movements in supermarkets in surveillance video feed"
      },
      {
        text: "Implemented the DeepSORT algorithm for multi-object tracking across camera views, and applied image inpainting to deal with occlusions"
      },
      {
        text: "Created visualizations of the collected data to provide insights into customer behavior and enable optimization of product placement"
      }
    ],
    skills: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "Computer Vision" },
      { name: "Data Analysis" },
    ],
  },
];

export const previousExperiences = [
  {
    title: "Winner - Smart India Hackathon (National Level)",
    company: "Mahindra University",
    location: "",
    startDate: "October 2022",
    endDate: "October 2022",
    achievements: [],
    skills: [],
  }
];
