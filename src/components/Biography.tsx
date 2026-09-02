import { useLanguage } from "../context/LanguageContext";

export default function Biography() {
  const { t } = useLanguage();
  const paragraphs = t("aboutPage.biographyText").split("\n\n");

  return (
    <section className="bg-warm-base py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-6 font-heading text-3xl font-bold text-dark-base md:text-4xl">
          {t("aboutPage.biography")}
        </h2>
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-text-on-warm-secondary">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
