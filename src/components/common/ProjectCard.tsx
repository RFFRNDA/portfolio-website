import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "preview" | "full";
  onView?: () => void;
}

export default function ProjectCard({
  project,
  variant = "preview",
  onView,
}: ProjectCardProps) {
  const { language } = useLanguage();
  const title = project.title[language];
  const description = project.description[language];

  // Untuk variant preview di Home, kita tampilkan lebih ringkas
  if (variant === "preview") {
    return (
      <div onClick={onView}
        className="group cursor-pointer rounded-xl border border-text-on-dark-secondary bg-dark-base p-4 transition-all hover:border-accent-orange hover:scale-105"
        >
        {/* Thumbnail / Gambar Project */}
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-text-on-dark-secondary">
          {project.image ? (
            <img
              src={project.image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            // Placeholder jika tidak ada gambar
            <div className="flex h-full items-center justify-center text-text-on-dark">
              {project.category}
            </div>
          )}
        </div>

        {/* Badge Kategori */}
        <span className="mb-2 inline-block rounded-full bg-accent-orange px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-on-dark">
          {project.category}
        </span>

        {/* Judul */}
        <h3 className="mb-1 text-xl font-bold text-text-on-dark">{title}</h3>

        {/* Deskripsi singkat (opsional untuk preview) */}
        <p className="mb-3 line-clamp-2 text-sm text-text-on-warm-secondary">{description}</p>

      </div>
    );
  }

return (
  <article onClick={onView} className="group rounded-xl border border-text-on-dark-secondary bg-dark-base p-4 transition-all hover:border-accent-orange hover:scale-105">
    {/* Thumbnail */}
    <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-text-on-dark-secondary">
      {project.image ? (
        <img
          src={project.image}
          alt={title}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-text-on-dark">
          {project.category}
        </div>
      )}
    </div>

    {/* Category */}
    <span className="mb-2 inline-block rounded-full bg-accent-orange px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-on-dark">
      {project.category}
    </span>

    {/* Title */}
    <h3 className="mb-2 font-heading text-xl font-bold text-text-on-dark">
      {title}
    </h3>

    {/* Role & Duration */}
    <div className="mb-3 text-sm text-text-on-warm-secondary">
      <p>{project.role}</p>
      <p>{project.duration}</p>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-text-on-dark-secondary px-2 py-1 text-xs text-text-on-warm-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  </article>
);
}