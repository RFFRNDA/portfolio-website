import { useLanguage } from "../../context/LanguageContext";

export default function ProjectHeader() {
  const { t } = useLanguage();

  return (
    <section className="bg-dark-base py-4 ">
      <div className="container mx-auto max-w-6xl px-6">
        <p className="mb-3 font-body text-sm uppercase tracking-widest text-accent-orange">
          Portfolio
        </p>

        <h1 className="font-heading text-4xl font-bold text-text-on-dark md:text-5xl">
          {t("projectPage.title")}
        </h1>
      </div>
    </section>
  );
}