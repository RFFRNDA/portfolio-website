import { useLanguage } from "../../context/LanguageContext";
import {
  UserRound,
  MapPin,
  MessageCircle,
  Mail,
} from "lucide-react";
import SocialLinks from "../common/SocialLinks";

export default function Biography() {
  const { t } = useLanguage();

  return (
    <section className="bg-warm-base py-6">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Information */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.3fr_1fr_1.6fr]">
            {/* Name */}
            <div className="flex items-start gap-3">
              <UserRound
                className="mt-0.5 h-5 w-5 shrink-0 text-dark-base"
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="text-xs font-medium text-dark-base">
                  {t("profile.name")}
                </p>

                <p className="text-sm font-bold text-dark-base">
                  Rafif Fernanda
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-dark-base"
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="text-xs font-medium text-dark-base">
                  {t("profile.locationTitle")}
                </p>

                <p className="text-sm font-bold text-dark-base">
                  {t("profile.locationValue")}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <MessageCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-dark-base"
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="text-xs font-medium text-dark-base">
                  Phone
                </p>

                <p className="text-sm font-bold text-dark-base">
                  +62821-4328-9622
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-dark-base"
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="text-xs font-medium text-dark-base">
                  Email
                </p>

                <p className="break-all text-sm font-bold text-dark-base">
                  rafif.fernanda.id@gmail.com
                </p>
              </div>
            </div>
          </div>
         
          {/* Social */}
          <div className="flex lg:justify-end shrink-0">
            <SocialLinks
              size={24}
              className="gap-5"
              variant="card"
            />
          </div>

        </div>
      </div>
    </section>
  );
}