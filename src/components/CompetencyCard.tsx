import { useLanguage } from "../context/LanguageContext";
import { competencies } from "../data/competencies";
import { Globe, BarChart3, Database, Palette } from "lucide-react";

// Mapping icon berdasarkan ID competency (agar konsisten)
const iconMap: Record<string, typeof Globe> = {
  "web-dev": Globe,
  "system-analysis": BarChart3,
  "data-ml": Database,
  design: Palette,
};

export default function CompetencyCard() {
  const { t, language } = useLanguage();

  return (
    <section className="bg-dark-base py-6">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
          {t("whatICanDo.title")}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map((item) => {
            const IconComponent = iconMap[item.id] || Globe;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#57626f] bg-[#0c1621] p-6 text-center transition hover:border-[#c85314]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[#c85314]/10 p-3 text-[#c85314]">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#f3f4f0]">
                  {item.title[language]}
                </h3>
                <p className="text-sm leading-relaxed text-[#57626f]">
                  {item.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}