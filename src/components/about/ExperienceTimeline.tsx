import { useLanguage } from "../../context/LanguageContext";
import { experiences } from "../../data/experiences";

export default function ExperienceTimeline() {
  const { t, language } = useLanguage();

  return (
    <div className="py-10">
      <h2 className="mb-8 font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
        {t("aboutPage.experience")}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => {
          // Role tanpa endDate dianggap masih berjalan.
          const isCurrent = !exp.endDate;

          return (
            <div key={exp.id} className="relative pl-6">
              <div
                className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent-orange ${
                  isCurrent
                    ? "bg-accent-orange"
                    : "bg-dark-base"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-medium text-text-on-dark-secondary">
                  {exp.startDate[language]} -{" "}
                  {exp.endDate[language] || "Present"}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-base font-bold text-text-on-dark">
                  {exp.role}
                </span>

                <span className="text-sm text-text-on-dark-secondary">
                  @ {exp.company}
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-justify text-text-on-dark-secondary">
                {exp.description[language]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}