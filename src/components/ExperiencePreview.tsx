// src/components/ExperiencePreview.tsx

import { useLanguage } from "../context/LanguageContext";
import { experiences } from "../data/experiences";
import { techFocuses } from "../data/techFocus";

function DotScale({ level }: { level: number }) {
  const dots = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex gap-1">
      {dots.map((dot) => (
        <span
          key={dot}
          className={`text-sm ${dot <= level ? "text-[#c85314]" : "text-[#57626f]"}`}
        >
          ●
        </span>
      ))}
    </div>
  );
}

export default function ExperiencePreview() {
  const { t, language } = useLanguage();
  const recentExperiences = experiences.slice(0, 2);

  return (
    <section className="bg-dark-base py-4 mb-2">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
          {t("experience.title")}
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Kolom Kiri - Experience Timeline Compact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-on-dark">
              Experience
            </h3>
            <div className="space-y-6">
              {recentExperiences.map((exp) => {
                const description = exp.description[language];
                return (
                  <div key={exp.id} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[#c85314] bg-[#0c1621]"></div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-medium text-text-on-dark-secondary">
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="text-base font-bold text-text-on-dark">
                        {exp.role}
                      </span>
                      <span className="text-sm text-text-on-dark-secondary">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-on-dark-secondary line-clamp-2">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-block rounded-lg border border-accent-orange px-6 py-2 text-sm font-medium text-text-on-dark transition hover:bg-accent-orange"
              >
                {t("experience.ctaViewFullCV")}
              </a>
            </div>
          </div>

          {/* Kolom Kanan - Technical Focus */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-xl font-semibold text-text-on-dark">
              Technical Focus
            </h3>
            <div className="space-y-3">
              {techFocuses.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center justify-between border-b border-[#57626f]/30 pb-3"
                >
                  <span className="text-sm text-[#f3f4f0]">
                    {item.label[language]}
                  </span>
                  <DotScale level={item.level} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}