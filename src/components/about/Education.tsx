import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const paragraphs = t("profile.educationValue").split("\n\n");

  return (
    <div className="pt-10 lg:pr-8">
      <h2 className="mb-6 font-heading text-3xl font-bold text-text-on-dark md:text-4xl">
        {t("aboutPage.education")}
      </h2>

      <div className="text-base leading-relaxed text-text-on-dark">
        <p className="text-accent-orange">
          {t("profile.educationHead")}
        </p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}