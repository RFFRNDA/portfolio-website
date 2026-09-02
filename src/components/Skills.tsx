import { useLanguage } from "../context/LanguageContext";

// Hardcoded sesuai ARCHITECTURE.md — scope portfolio kecil, tidak butuh data layer terpisah.
// Sumber: CV Rafif Fernanda.
const SKILL_CATEGORIES = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV"],
  },
  {
    title: "Framework",
    skills: ["Laravel", "Flask", "React", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "System Analysis",
    skills: ["Enterprise Architect", "Bizagi", "Figma", "Software Ideas Modeler"],
  },
  {
    title: "Development Tools",
    skills: ["Visual Studio Code", "Google Colab", "Laragon", "GitHub", "Trello"],
  },
  {
    title: "Office Applications",
    skills: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Fabric"],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="bg-warm-base py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-heading text-3xl font-bold text-dark-base md:text-4xl">
          {t("aboutPage.skills")}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="mb-3 text-sm font-semibold text-text-on-warm-secondary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-text-on-warm-secondary/30 px-3 py-1 text-sm text-dark-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
