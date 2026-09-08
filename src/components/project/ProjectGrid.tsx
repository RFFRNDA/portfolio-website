import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import ProjectCard from "../common/ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectDetail from "./ProjectDetail";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-dark-base py-6 ">
      <div className="container mx-auto max-w-6xl px-6">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="full"
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>
				
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}