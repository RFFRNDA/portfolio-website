import { useLanguage } from "../context/LanguageContext";

export default function AboutHeader() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-base">
      <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute z-0 h-48 w-48 rounded-full bg-accent-orange opacity-20 blur-3xl" aria-hidden="true"></div>
            <img
              src="/images/profile.webp"
              alt="Rafif Fernanda"
              className="relative z-10 block h-auto w-full max-w-[200px] md:max-w-[220px]"
            />
          </div>

          <div>
            <p className="text-sm text-accent-orange">
              WEB DEVELOPER & DIGITAL DESIGNER
            </p>
            <h1 className="my-1 font-heading text-4xl font-bold text-text-on-dark md:text-5xl">
              RAFIF FERNANDA
            </h1>
            <p className="mx-auto max-w-xl text-sm text-text-on-dark-secondary">
              {t("hero.tagline")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
