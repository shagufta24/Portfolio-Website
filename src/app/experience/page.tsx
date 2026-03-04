import { Metadata } from "next";
import { ExperienceDetail } from "@/components/sections/experience-detail";

export const metadata: Metadata = {
  title: "Shagufta Anjum",
  description:
    "Portfolio Website",
};

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ExperienceDetail />
    </main>
  );
}
