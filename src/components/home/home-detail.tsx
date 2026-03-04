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
                Software Engineer, Applied AI at Cognida.ai
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/10">
                  <Cloud className="w-3 h-3 mr-2" /> Artificial Intelligence & Machine Learning
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> Full-Stack Development
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Cloud & Distributed Systems
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Data Engineering
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
              <p>Hi! I&apos;m Shagufta, a software engineer focused on building intelligent systems using machine learning, data, and scalable backend infrastructure.</p>
              <p>I currently work at Cognida.ai, where I build applied AI systems to help businesses make data-driven decisions. In a startup environment with high end-to-end ownership, my work spans backend engineering, data processing, and machine-learning driven automation at production scale.</p>
              <p>I recently completed my Masters in Computer Science at the University of Illinois Urbana-Champaign &#40;UIUC&#41; where I specialized in machine learning and data systems. My coursework includes Applied ML, Distributed Computing, Cloud Computing, Computer Vision, Large Language Models and Human Computer Interaction.</p>
              <p>Experience Highlights:</p>
              <ul className="list-disc ml-6">
                <li>At Amazon, I worked on large-scale backend systems for Amazon Ads, focusing on a Bulk User Management feature that improved account access operations across 10K+ advertiser accounts.</li>
                <li>At Dell Technologies, I developed a computer vision pipeline to automate defect detection in packaging lines using edge-captured images and real-time inference.</li>
                <li>At GlobalLogic, I built a scalable real-time multiplayer learning platform, with interactive frontend features and AWS-based event-driven backend services.</li>
              </ul>
              <p>My academic research and projects have been focused on applying machine learning to real-world problems. My interests lie at the intersection of AI systems, backend infrastructure, and data pipelines—building tools that turn AI models into practical, reliable products.</p>
              <p>What I&apos;m Currently Exploring:</p>
              <ul className="list-disc ml-6">
                <li>LLLMOps and Production AI Systems</li>
                <li>AI Agents and Autonomous Workflows</li>
                <li>Efficient AI-Assisted Software Development</li>
              </ul>
              <p>Outside of work, you&apos;ll usually find me reading, staying active, or exploring new restaurants around the city.</p>
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
            <Button className="px-6 py-3 text-lg">Explore Projects</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
