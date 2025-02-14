import type { Metadata } from "next";
import { HomeDetail } from "@/components/home/home-detail";

export const metadata: Metadata = {
  title: "Shagufta Anjum - MCS, University of Illinois at Urbana-Champaign",
  //TODO: Update description
  description:
    "Portfolio of Shagufta Anjum, a graduate Computer Science student at the University of Illinois Urbana-Champaign. Aspiring Machine Learning Engineer, specializing in Large Language Models.",
  openGraph: {
    type: 'website',
    title: 'Shagufta Anjum - MCS, University of Illinois at Urbana-Champaign',
    description: 'Portfolio of Shagufta Anjum, a graduate Computer Science student at the University of Illinois Urbana-Champaign. Aspiring Machine Learning Engineer, specializing in Large Language Models.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Shagufta Anjum - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shagufta Anjum - MCS, University of Illinois at Urbana-Champaign',
    description: 'Portfolio of Shagufta Anjum, a graduate Computer Science student at the University of Illinois Urbana-Champaign. Aspiring Machine Learning Engineer, specializing in Large Language Models.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-0">
      <HomeDetail />
    </main>
  );
}
