import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, UserRound, MapPin, Mail, Clock3 } from "lucide-react";

export default function AboutMePreview() {
  const { t } = useLanguage();

  return (
    <section className="bg-warm-base py-4">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Kolom Kiri */}
          <div>
            <p className= "font-bold text-[#c85314]">
              {t("aboutPreview.title")}
            </p>
            <h2 className="font-heading text-3xl font-bold text-dark-base md:text-4xl">
              {t("aboutPreview.tagline1")}  
            </h2>
            <h2 className="font-heading text-3xl font-bold text-dark-base md:text-4xl">
              {t("aboutPreview.tagline2")}  
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-on-warm-secondary text-balance">
              {t("aboutPreview.description")}
            </p>
            <a href="/about" className="mt-6 inline-flex items-center gap-2 whitespace-nowrap bg-dark-base rounded-lg text-sm font-medium text-text-on-dark transition-all hover:bg-dark-base/75 hover:scale-105 active:scale-95 px-6 py-2.5 sm:px-6 sm:py-3 sm:text-base">
              {t("aboutPreview.ctaMore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Kolom Kanan - Bio & Signature */}
          <div className="flex items-center justify-center border-l-2 border-accent-orange pl-6 md:pl-8">
            <div className="grid grid-cols-1 items-center gap-8 min-[1105px]:grid-cols-2">
              {/* Information */}
              <div className="space-y-4">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-dark-base" strokeWidth={1.7}/>
                  <div>
                    <p className="text-xs font-medium text-dark-base">
                      {t("aboutPreview.name")}
                    </p>
                    <p className="text-sm font-bold text-dark-base">
                      Rafif Fernanda
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-dark-base" strokeWidth={1.7}/>
                  <div>
                    <p className="text-xs font-medium text-dark-base">
                      {t("aboutPreview.location")}
                    </p>
                    <p className="text-sm font-bold text-dark-base">
                      {t("aboutPreview.locationValue")}                
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-dark-base" strokeWidth={1.7}/>
                  <div>
                    <p className="text-xs font-medium text-dark-base">
                      Email
                    </p>
                    <p className="break-all text-sm font-bold text-dark-base">
                      rafif.fernanda.id@gmail.com
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-dark-base" strokeWidth={1.7}/>
                  <div>
                    <p className="text-xs font-medium text-dark-base">
                      {t("aboutPreview.availabilityTitle")}
                    </p>
                    <p className="text-sm font-bold text-dark-base">
                      {t("aboutPreview.availabilityDescription")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="flex items-center justify-center min-[1105px]:justify-end">
                <img src="/images/signature.png" alt="Rafif Signature" className="block h-auto w-full max-w-[220px] md:max-w-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}