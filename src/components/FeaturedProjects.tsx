// src/components/FeaturedProjects.tsx

import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const { t } = useLanguage();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-[#e0e3d9] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-[#0c1621] md:text-4xl">
            {t("featuredProject.title")}
          </h2>
          <a
            href="/project"
            className="inline-flex items-center text-sm font-medium text-[#c85314] transition hover:underline"
          >
            {t("featuredProject.ctaViewAll")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="preview" />
          ))}
        </div>
      </div>
    </section>
  );
}