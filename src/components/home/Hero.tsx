import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, FileText } from "lucide-react";
import Lanyard from "../common/Lanyard";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-base">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*Left Column*/}  
          <div className="relative flex items-center justify-center">
            <div className="absolute z-0 h-64 w-64 rounded-full bg-accent-orange opacity-20 blur-3xl md:h-80 md:w-80" aria-hidden="true"></div>
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                frontImage="/images/profile.webp"
                backImage="/images/rf-logo.png"
                imageFit="contain"
                lanyardWidth={1.5}
              />
          </div>

          {/*Right Column*/}
          <div className="mb-4 flex flex-col justify-center">
            <p className="text-sm text-accent-orange">
              WEB DEVELOPER & DIGITAL DESIGNER
            </p> 
            <h1 className="my-1 font-heading text-6xl font-bold text-text-on-dark md:text-5xl lg:text-6xl">
              RAFIF FERNANDA
            </h1>
            <p className="text-sm text-justify text-text-on-dark-secondary lg:max-w-[370px]">
              {t("hero.tagline")}
            </p>

            <div className="mt-4 flex flex-nowrap gap-2 sm:gap-4 sm:mt-8">
              <Link to="/project" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent-orange px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:bg-[#a84310] hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">               
                {t("hero.ctaViewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="/CV_ATS_RafifFernanda.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-text-on-dark-secondary px-4 py-2.5 text-sm font-medium text-text-on-dark transition-all hover:border-text-on-dark hover:bg-text-on-dark/5 hover:scale-105 active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                <FileText  className="h-4 w-4" />
                {t("cv.title")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}