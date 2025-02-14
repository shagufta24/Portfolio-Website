"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, previousExperiences } from "@/data/experience";
import { education } from "@/data/education";

export function ExperienceDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-10">

        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h2>
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <div className="space-y-6">
              {education.map((edu, idx) => (<div key={idx} className="mb-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div className="flex items-center gap-3">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                    </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  {edu.honors.map((honor, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}
                    >
                      {honor.name}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                    {edu.activities.map((activity, index) => (
                      <li key={index}>{activity.name}</li>
                    ))}
                  </ul>
                </div>
              </div>))}
            </div>
          </Card>


        </motion.div>
        {/* Work Experience - Most important for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={`${exp.title}-${exp.startDate}`} className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex items-center gap-3">
                  <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                    <div className="flex"><h3 className="text-xl font-semibold">{exp.title}</h3></div>
                    <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.startDate} - {exp.endDate}</p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="space-y-4">
                {previousExperiences.map((exp) => (
                  <div key={`${exp.title}-${exp.startDate}`}>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
