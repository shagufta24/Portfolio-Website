import type { Metadata } from "next";
import { HomeDetail } from "@/components/home/home-detail";

export const metadata: Metadata = {
  title: "Shagufta Anjum",
  //TODO: Update description
  description:
    "Portfolio Website",
  openGraph: {
    type: 'website',
    title: 'Shagufta Anjum',
    description: 'Portfolio Website',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Shagufta Anjum'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shagufta Anjum',
    description: 'Portfolio Website',
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
