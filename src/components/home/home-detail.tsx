"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Cloud, Code, Building2, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
// import { FeaturedProjects } from "../sections/featured-projects";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpg"
                alt="Shagufta Anjum"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shagufta Anjum</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Master of Computer Science, University of Illinois at Urbana-Champaign
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10">
                  <Cloud className="w-3 h-3 mr-2" /> Full-Stack Development
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> Applied AI/ML
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Large Language Models
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Cloud Technologies
                </Badge>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shagufta24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground"
                  aria-label="GitHub"
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaguftaanjum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <LinkedInLogoIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shagufta.24@gmail.com"
                  className="text-foreground/60 hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>🌟 Hi there! I&apos;m Shagufta, a Computer Science graduate student with a passion for building software and impactful solutions using machine learning. I&apos;m actively seeking Machine Learning, Data Science, and Software Engineering roles starting in May 2025, where I can contribute to solving innovative, challenging problems and continue growing as a professional.</p>
              <p>📚 I&apos;m currently pursuing my Master&apos;s in Computer Science at the University of Illinois Urbana-Champaign &#40;UIUC&#41;, specializing in Machine Learning and Data Science. My coursework includes Applied ML, Distributed Computing, Cloud Computing, Computer Vision, and Large Language Models.</p>
              <p>💻 Experience Highlights:</p>
              <ul className="list-disc ml-6">
                <li>At Dell Technologies, I developed a computer vision model for quality inspection and integrated it into real-time manufacturing systems.</li>
                <li>At GlobalLogic Inc., I built an LLM-powered chatbot and implemented a RAG pipeline to deliver contextually accurate responses.</li>
                <li>At Cognida.ai, I designed a computer vision system to analyze customer movement in stores, driving insights for product placement.</li>
              </ul>
              <p>📊 Research and Projects: I&apos;ve been focused on building machine learning applications that address real-world challenges. Whether it’s optimizing decision-making in healthcare, crafting intelligent systems for optimizing business operations, or advancing language/vision understanding, I love exploring ways to push the boundaries of AI.</p>
              <p>🌱 What I&apos;m Currently Learning:</p>
              <ul className="list-disc ml-6">
                <li>Advanced training techniques for large language models</li>
                <li>Exploring the intersection of AI and accessibility</li>
                <li>Designing scalable, data-driven pipelines for real-world systems</li>
                <li>Experimenting with creative AI applications in art and writing</li>
              </ul>
              <p>✨ Beyond Academics: Creativity and curiosity define my approach in life and work. I enjoy blending tech with purpose—designing accessibility-focused software, crafting data-driven stories, and brainstorming innovative ways to tackle everyday problems.</p>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={category.color}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        {/* <FeaturedProjects /> */}

        {/* Navigation Buttons */}
        <div className="mt-16 flex justify-center space-x-4">
          <Link href="/experience">
            <Button className="px-6 py-3 text-lg">View Experiences</Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" className="px-6 py-3 text-lg">
              Explore Projects
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
