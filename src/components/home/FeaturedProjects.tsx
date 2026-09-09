// src/components/FeaturedProjects.tsx

import { useLanguage } from "../../context/LanguageContext";
import { projects } from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="bg-warm-base py-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between sm:mb-8">
          <h2 className="font-heading text-3xl font-bold text-dark-base md:text-4xl">
            {t("featuredProject.title")}
          </h2>
          <Link to="/project" className="mt-2 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border-2 bg-dark-base px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:bg-dark-base/75 hover:text-text-on-dark hover:scale-105 active:scale-95 sm:px-6 sm:mt-0 sm:py-3 sm:text-base">
            {t("featuredProject.ctaViewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="preview"
              onView={() => {
                window.location.href = `/project?project=${project.id}`;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}