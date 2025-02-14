"use client";

import { useState } from "react";
import { Project, ProjectFilterState } from "@/types/project";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}
export function ProjectGrid({ projects, className }: ProjectGridProps) {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const [filters, setFilters] = useState<ProjectFilterState>({
    category: "All",
    sortBy: "featured",
  });


  const filteredProjects = projects
    .filter((project) =>
      filters.category === "All" ? true : project.category === filters.category
    )
    .sort((a, b) => {
      if (filters.sortBy === "featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className={`space-y-8 ${className || ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filters.category === category ? "default" : "outline"}
              className="rounded-full text-xl border-2"
              onClick={() => setFilters((prev) => ({ ...prev, category }))}
            >
              {category}
            </Button>
          ))}
        </div>
        <div>
          {/* Sorting Options */}
          <Select
            value={filters.sortBy}
            onValueChange={(value: "featured" | "alphabetical") =>
              setFilters((prev) => ({ ...prev, sortBy: value }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured First</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
