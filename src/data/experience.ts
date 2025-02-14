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

//TODO: update
export const experiences: Experience[] = [
  {
    title: "Graduate Research Assistant",
    company: "University of Illinois Urbana-Champaign",
    location: "Champaign, Illinois, United States",
    startDate: "September 2024",
    endDate: "Present",
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
  {
    title: "Software Engineer Intern",
    company: "GlobalLogic Inc.",
    location: "Santa Clara, California, United States",
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
      { name: "Javascript" },
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
      { name: "Authentication" },
      { name: "JWT" },
      { name: "Vector Database" },
    ],
  },
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
        text:
          "Performed comprehensive data analysis of inventory, production and sales data using Pandas to identify features that impact product shortages ",
      },
      {
        text: "Developed a time series forecasting model using an LSTM network in TensorFlow, achieving improved demand and shortage predication ",
      },
      {
        text: "Built an automated, scalable ETL pipeline using Apache Airflow, reducing data processing time and ensuring fast model inference ",
      },
      {
        text:
          "Enabled interactive data visualization using charting libraries and optimized database queries for fast retrieval to ensure a smooth user experience ",
      },
      {
        text:
          "Implemented a real-time notification system using Web Sockets and RabbitMQ, reducing user response time to critical events by 50% ",
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
  {
    title: "Machine Learning Engineer Intern",
    company: "Cognida.ai",
    location: "Hyderabad, India",
    startDate: "September 2022",
    endDate: "December 2022",
    logo: "/icons/cognida.jpg",
    achievements: [
      {
        text:
          "Developed a computer vision system using OpenCV and PyTorch to track individual customer movements in supermarkets in surveillance video feed"
      },
      {
        text:
        "Implemented the DeepSORT algorithm for multi-object tracking across camera views, and applied image inpainting to deal with occlusions"
      },
      {
        text:
        "Created visualizations of the collected data to provide insights into customer behavior and enable optimization of product placement"
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
