import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-base">
      <div className="container mt-2 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*Left Column*/}  
          <div className="flex flex-col justify-center">
            <p className="text-sm text-accent-orange">
              WEB DEVELOPER & DIGITAL DESIGNER
            </p> 
            <h1 className="my-1 font-heading text-6xl font-bold text-text-on-dark md:text-5xl lg:text-6xl">
              RAFIF FERNANDA
            </h1>
            <p className="text-sm text-text-on-dark-secondary lg:max-w-[370px]">
              {t("hero.tagline")}
            </p>

            <div className="mt-4 flex flex-nowrap gap-2 sm:gap-4 sm:mt-8">
              <a href="/projects" className="group inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent-orange px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:bg-[#a84310] hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                {t("hero.ctaViewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/cv.pdf" download className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-text-on-dark-secondary px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:border-text-on-dark hover:bg-text-on-dark/5 hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/*Right Column*/}
          <div className="relative flex items-center justify-center">
            <div className="absolute z-0 h-64 w-64 rounded-full bg-[#c85314] opacity-20 blur-3xl md:h-80 md:w-80" aria-hidden="true"></div>
            <div className="relative z-10">
              <img src="/images/profile.webp" alt="Rafif Image" className="block h-auto w-full max-w-[320px] md:max-w-[360px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}