import { useLanguage } from "../context/LanguageContext";
import type { Certification } from "../types/certification";
import { ArrowRight } from "lucide-react";

interface CertificationCardProps {
  certification: Certification;
  onView: () => void;
}

export default function CertificationCard({ certification, onView }: CertificationCardProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-text-on-dark-secondary bg-dark-base p-4 transition-all hover:border-accent-orange">
      <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-text-on-dark-secondary">
        <img
          src={certification.image}
          alt={certification.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mb-1 text-lg font-bold text-text-on-dark">
        {certification.name}
      </h3>
      <p className="mb-1 text-sm text-text-on-dark-secondary">
        {certification.issuer}
      </p>
      <p className="mb-3 text-xs text-text-on-dark-secondary">
        {certification.issuedDate}
      </p>

      <button
        type="button"
        onClick={onView}
        className="group flex items-center text-sm font-medium text-accent-orange"
      >
        {t("certification.viewCertificate")}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
