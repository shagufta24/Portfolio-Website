import { Metadata } from "next";
import { ExperienceDetail } from "@/components/sections/experience-detail";

export const metadata: Metadata = {
  title: "Shagufta Anjum - MCS, University of Illinois at Urbana-Champaign",
  description:
    "Learn more about Shagufta Anjum, a graduate Computer Science student at the University of Illinois Urbana-Champaign. Aspiring Machine Learning Engineer, specializing in Large Language Models.",
};

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ExperienceDetail />
    </main>
  );
}
