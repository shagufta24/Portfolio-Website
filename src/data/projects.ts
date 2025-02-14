import { Project } from "@/types/project";


//TODO: Update
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Personalized Writing Assistant",
    description:
      "Fine-tuned Open-source Large Language Model (LLM) to adapt to personalized writing styles and preferences. Utilizes Llama and Mistral models, fine-tuned on custom datasets of writing samples from various domains such as emails, blog posts and reviews.",
    image: "",
    technologies: [
      "Python",
      "Huggingface Transformers",
      "LangChain",
      "Llama",
      "Mistral",
      "LLM Fine-Tuning",
      "Retrival Augmented Generation",
      "Quantized Models",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/shagufta24/Personalized_Writing_Assistant",
      live: "",
    },
    featured: false,
  },
  {
    id: "2",
    title: "Documenting Human Behavior in Videos",
    description:
      "Developed a tool to analyse human behavior in videos for clinical diagnostic applications using GPT-4o for multimodal video and language understanding.",
    image: "",
    technologies: [
      "AI Research",
      "Large Language Models",
      "Generative AI",
      "Gradio"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "",
    },
    featured: false,
  },
  {
    id: "3",
    title: "Time Series Forecasting of Store Sales",
    description:
      "Building a forecasting model that addresses seasonality and trend while predicting store sales using time series features such as sales data, holidays, and transactions. The analysis involves hypothesis testing, data preprocessing, feature engineering, and applying both machine learning & statistical models such as ARIMA, Exponential Smoothing, XGBoost, LightGBM, and Prophet for prediction.",
    image: "",
    technologies: [
      "Python",
      "Time Series",
      "Machine Learning",
      "Statistical Modeling",
      "XGBoost",
      "LightGBM",
      "Prophet",
      "Hypothesis Testing",
      'Matplotlib',
      "Explonatory Data Analysis",
      "Feature Engineering",
      "Data Science",
      'Pandas',
      'Numpy',
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/shagufta24/Sales-TimeSeries-Forecasting",
      //   demo: 'https://demo.example.com',
    },
    featured: false,
  },
  {
    id: "4",
    title: "Stats-aware GANs for Image Synthesis",
    description:
      "Generating statistically accurate synthetic images for domain-specific applications like medicine and material science. We extended StyleGAN2 by integrating new regularization loss functions—based on graph-based statistical tests and distributional similarity metricsto improve the statistical alignment between real and generated images, ensuring more reliable synthetic data for specialized fields.",
    image: "",
    technologies: [
      "Generative Adversarial Networks",
      "Python",
      "PyTorch",
      "Synethic Data",
      "Regularization", 
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/shagufta24/stats-aware-stylegan2",
      live: "",
    },
    featured: false,
  },
  {
    id: "5",
    title: "VisionAid: Assisted Living Tool for the Blind",
    description:
      "A computer vision based smart home solution for finding household items that uses a YOLO-v4 object detection model trained on a custom dataset of common household items, intergrated with a voice-enabled web application for accessibility.",
    image: "",
    technologies: [
     "Python",
     "Computer Vision",
     "Object Detection",
     "Yolo-v4",
     'Tensorflow',
     "Albumentations",
     "OpenCV",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "",
    },
    featured: false,
  }
];



