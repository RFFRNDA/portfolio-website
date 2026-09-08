import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../types/project";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({
  project,
  onClose,
}: ProjectDetailProps) {
  const { language, t } = useLanguage();

  const title = project.title[language];
  const description = project.description[language];

  const images = project.images?.length
    ? project.images
    : [project.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const handlePrevious = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? current : current - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((current) =>
      current === images.length - 1 ? current : current + 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center bg-dark-base/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-warm-base p-4 sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-1 text-dark-base transition-colors hover:text-accent-orange"
        >
          <X className="h-5 w-5" strokeWidth={3} />
        </button>

        {/* Image Gallery */}
        <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-text-on-dark-secondary">
          <img
            src={images[currentImageIndex]}
            alt={`${title} ${currentImageIndex + 1}`}
            className="h-full w-full object-cover"
          />

          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentImageIndex === 0}
                aria-label="Previous image"
                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-dark-base/60 p-2 text-text-on-dark transition-colors hover:bg-dark-base disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentImageIndex === images.length - 1}
                aria-label="Next image"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-dark-base/60 p-2 text-text-on-dark transition-colors hover:bg-dark-base disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Image Indicator */}
              <div className="absolute bottom-1  left-1/2 -translate-x-1/2 rounded-full bg-dark-base/60 px-3 py-1 text-xs text-text-on-dark">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Category */}
        <span className="inline-block rounded-full bg-accent-orange px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-on-dark">
          {project.category}
        </span>

        {/* Title */}
        <h2 className="mb-3 font-heading text-2xl font-bold text-dark-base md:text-3xl">
          {title}
        </h2>

        {/* Role & Duration */}
        <div className="mb-5 text-sm text-text-on-warm-secondary">
          <p>{project.role}</p>
          <p>{project.duration}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-text-on-dark-secondary px-3 py-1 text-xs text-text-on-warm-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-text-on-warm-secondary md:text-base">
          {description}
        </p>

        {/* Project Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-orange px-5 py-3 text-sm font-medium text-text-on-dark transition-opacity hover:opacity-90"
          >
            {t("projectPage.viewDetail")}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}