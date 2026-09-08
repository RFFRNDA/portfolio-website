import { useLanguage } from "../../context/LanguageContext";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-accent-orange bg-accent-orange text-text-on-dark"
                : "border-text-on-dark-secondary text-text-on-warm-secondary hover:border-accent-orange hover:text-accent-orange"
            }`}
          >
            {category === "All"
              ? t("projectPage.filterAll")
              : category}
          </button>
        );
      })}
    </div>
  );
}