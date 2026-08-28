import { useLanguage } from "../context/LanguageContext";
import type { Project } from "../types/project";

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
      <div className="group rounded-xl border border-[#57626f] bg-[#e0e3d9] p-4 transition-all hover:border-[#c85314]">
        {/* Thumbnail / Gambar Project */}
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-[#57626f]">
          {project.image ? (
            <img
              src={project.image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            // Placeholder jika tidak ada gambar
            <div className="flex h-full items-center justify-center text-[#f3f4f0]">
              {project.category}
            </div>
          )}
        </div>

        {/* Badge Kategori */}
        <span className="mb-2 inline-block rounded-full bg-[#c85314] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#f3f4f0]">
          {project.category}
        </span>

        {/* Judul */}
        <h3 className="mb-1 text-xl font-bold text-[#0c1621]">{title}</h3>

        {/* Deskripsi singkat (opsional untuk preview) */}
        <p className="mb-3 line-clamp-2 text-sm text-[#445569]">{description}</p>

        {/* CTA Arrow */}
        <div className="flex items-center text-sm font-medium text-[#c85314] transition-all group-hover:translate-x-1">
          Lihat Detail
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
        </div>
      </div>
    );
  }

  // TODO: Nanti kita akan implement variant "full" untuk halaman Project
  return null;
}