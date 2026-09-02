import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { certifications } from "../data/certifications";
import type { Certification } from "../types/certification";
import CertificationCard from "./CertificationCard";
import { X } from "lucide-react";

export default function Certifications() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section className="bg-dark-base py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
          {t("aboutPage.certifications")}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onView={() => setSelected(cert)}
            />
          ))}
        </div>
      </div>

      {/* Modal detail — tutup lewat tombol X atau klik di luar area modal */}
      {selected && (
        <div
          className="fixed inset-0 z-modal flex items-center justify-center bg-dark-base/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-warm-base p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 text-dark-base transition-colors hover:text-accent-orange"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-text-on-dark-secondary">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mb-1 text-xl font-bold text-dark-base">
              {selected.name}
            </h3>
            <p className="mb-1 text-sm text-text-on-warm-secondary">
              {selected.issuer}
            </p>
            <p className="mb-4 text-xs text-text-on-warm-secondary">
              {selected.issuedDate}
              {selected.expirationDate && ` · ${t("certification.expires")} ${selected.expirationDate}`}
            </p>

            <p className="mb-4 text-sm leading-relaxed text-text-on-warm-secondary">
              {selected.description[language]}
            </p>

            {selected.verificationUrl && (
              <a
                href={selected.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-accent-orange px-4 py-2 text-sm font-medium text-dark-base transition hover:bg-accent-orange hover:text-text-on-dark"
              >
                {t("certification.verify")}
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
