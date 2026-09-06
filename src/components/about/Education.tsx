import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const paragraphs = t("profile.educationValue").split("\n\n");

  return (
    <div className="py-10 lg:pr-8">
      <h2 className="mb-6 font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
        {t("aboutPage.education")}
      </h2>

      <div className="text-base leading-relaxed text-text-on-dark-secondary">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}