import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../types/project";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  variant?: "preview" | "full";
}

export default function ProjectCard({
  project,
  variant = "preview",
}: ProjectCardProps) {
  const { language } = useLanguage();

  // Ambil title dan description berdasarkan bahasa aktif
  const title = project.title[language];
  const description = project.description[language];

  // Untuk variant preview di Home, kita tampilkan lebih ringkas
  if (variant === "preview") {
    return (
      <div className="group rounded-xl border border-text-on-dark-secondary bg-warm-base p-4 transition-all hover:border-accent-orange">
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
        <h3 className="mb-1 text-xl font-bold text-dark-base">{title}</h3>

        {/* Deskripsi singkat (opsional untuk preview) */}
        <p className="mb-3 line-clamp-2 text-sm text-text-on-warm-secondary">{description}</p>

        {/* CTA Arrow */}
        <div className="flex items-center text-sm font-medium text-accent-orange transition-all group-hover:translate-x-1">
          Lihat Detail
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    );
  }

  // TODO: Nanti kita akan implement variant "full" untuk halaman Project
  return null;
}