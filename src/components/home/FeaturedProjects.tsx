// src/components/FeaturedProjects.tsx

import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="bg-warm-base py-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-dark-base md:text-4xl">
            {t("featuredProject.title")}
          </h2>
          <a href="/projects" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border-2 bg-dark-base px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:bg-dark-base/75 hover:text-text-on-dark hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
            {t("featuredProject.ctaViewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="preview" />
          ))}
        </div>
      </div>
    </section>
  );
}