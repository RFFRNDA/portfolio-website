import { useLanguage } from "../../context/LanguageContext";
import { FileText } from "lucide-react";

export default function AboutHeader() {
  const { t } = useLanguage();
  const paragraphs = t("aboutPage.aboutMe").split("\n\n");

  return (
    <section className="bg-dark-base">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 lg:flex-row lg:items-stretch">
        {/* Left Column */}
        <div className="relative flex w-full min-w-0 flex-1 items-end justify-center">
          <div className="absolute z-0 h-64 w-64 rounded-full bg-accent-orange opacity-20 blur-3xl md:h-80 md:w-80" aria-hidden="true"></div>

          <div className="relative z-10">
            <img
              src="/images/profile.webp"
              alt="Rafif Image"
              className="block h-auto w-full max-w-[320px] md:max-w-[360px]"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-full min-w-0 flex-1 flex-col justify-center">
          <div className="text-base leading-relaxed text-text-on-warm text-justify">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="my-2 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="my-2 flex flex-nowrap gap-2 sm:gap-4">
            <a href="/CV_ATS_RafifFernanda.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-text-on-dark-secondary px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:border-text-on-dark hover:bg-text-on-dark/5 hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
              <FileText className="h-4 w-4" />
              {t("cv.title")}
            </a>
          </div>
        </div>
      </div>       
    </section>
  );
}

