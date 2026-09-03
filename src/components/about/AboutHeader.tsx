import { useLanguage } from "../../context/LanguageContext";
import { UserRound, MapPin, MessageCircle, Mail, Clock3 } from "lucide-react";

export default function AboutHeader() {
  const { t } = useLanguage();
  const paragraphs = t("profil.educationValue").split("\n\n");

  return (
    <section className="bg-dark-base">
      <div className="container flex items-center justify-center mx-auto max-w-6xl px-6">

        {/* Photo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute z-0 h-64 w-64 rounded-full bg-accent-orange opacity-20 blur-3xl md:h-80 md:w-80" aria-hidden="true"></div>
          <div className="relative z-10">
            <img src="/images/profile.webp" alt="Rafif Image" className="block h-auto w-full max-w-[320px] md:max-w-[360px]"/>
          </div>
        </div>
        
        {/* Biography */}
        <div className="flex items-center justify-center pl-6 md:pl-8">
          <div className="grid grid-cols-1 items-center">
            {/* Information */}
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-start gap-3">
                <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-text-on-dark" strokeWidth={1.7}/>
                <div>
                  <p className="text-xs font-medium text-text-on-dark-secondary">
                    {t("profil.name")}
                  </p>
                  <p className="text-sm font-medium text-text-on-dark-">
                    Rafif Fernanda
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-text-on-dark" strokeWidth={1.7}/>
                <div>
                  <p className="text-xs font-medium text-text-on-dark-secondary">
                    {t("profil.locationTitle")}
                  </p>
                  <p className="text-sm font-medium text-text-on-dark">
                    {t("profil.locationValue")}                
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle  className="mt-0.5 h-5 w-5 shrink-0 text-text-on-dark" strokeWidth={1.7}/>
                <div>
                  <p className="text-xs font-medium text-text-on-dark-secondary">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-text-on-dark">
                    +62821-4328-9622              
                  </p>
                </div>      
						  </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-text-on-dark" strokeWidth={1.7}/>
                <div>
                  <p className="text-xs font-medium text-text-on-dark-secondary">
                    Email
                  </p>
                  <p className="break-all text-sm font-medium text-text-on-dark">
                    rafif.fernanda.id@gmail.com
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-text-on-dark" strokeWidth={1.7}/>
                <div>
                  <p className="text-xs font-medium text-text-on-dark-secondary">
                    Education
                  </p>
                  {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

