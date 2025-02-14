import { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Shagufta Anjum",
  description:
    "Explore my portfolio of projects in machine learning and AI, cloud architecture, and web development.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[58rem] space-y-6">
        <h1 className="font-heading text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects showcasing my work in AI/machine learning, cloud architecture, and web development from my research, coursework and personal collection.
        </p> 
      </div>
      <div className="mt-16">
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
}
