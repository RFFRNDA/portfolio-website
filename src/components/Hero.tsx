import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0c1621]">
      <div className="container mt-2 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*Left Column*/}  
          <div className="flex flex-col justify-center">
            <p className="text-sm text-[#c85314]">
              WEB DEVELOPER & DIGITAL DESIGNER
            </p> 
            <h1 className="my-1 font-heading text-6xl font-bold text-[#f3f4f0] md:text-5xl lg:text-6xl">
              RAFIF FERNANDA
            </h1>
            <p className="text-sm text-[#f3f4f0] md:text-xl">
              {t("hero.tagline")}
            </p>

            <div className="mt-8 flex flex-nowrap gap-2 sm:gap-4">
              <a href="/projects" className="group inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#c85314] px-4 py-2.5 text-sm font-medium text-[#f3f4f0] transition-all hover:bg-[#a84310] hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                {t("hero.ctaViewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/cv.pdf" download className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-[#57626f] px-4 py-2.5 text-sm font-medium text-[#f3f4f0] transition-all hover:border-[#f3f4f0] hover:bg-[#f3f4f0]/5 hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                <Download className="h-4 w-4" />
                {t("hero.ctaDownloadCV")}
              </a>
            </div>
          </div>

          {/*Right Column*/}
          <div className="relative flex items-center justify-center">
            <div className="absolute z-0 h-64 w-64 rounded-full bg-[#c85314] opacity-20 blur-3xl md:h-80 md:w-80" aria-hidden="true"></div>
            <div className="relative z-10 leading-none">
              <img src="/images/profile.webp" alt="Rafif Image" className="block h-auto w-full max-w-[320px] md:max-w-[360px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}