import { useLanguage } from "../context/LanguageContext";
import Signature from "./Signature";

export default function AboutMePreview() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#e0e3d9] py-4">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Kolom Kiri */}
          <div>
            <p className= "font-bold text-[#c85314]">
              {t("aboutPreview.title")}
            </p>
            <h2 className="font-heading text-3xl font-bold text-[#0c1621] md:text-4xl">
              Designing Solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#445569]">
              I'm an Informatics graduate who loves building systems that actually
              work — from backend logic to user-facing interfaces. I thrive at the
              intersection of data, design, and clean code.
            </p>
            <a
              href="/about"
              className="mt-6 inline-block rounded-lg border-2 border-[#c85314] px-6 py-3 font-medium text-[#c85314] transition hover:bg-[#c85314] hover:text-[#f3f4f0]"
            >
              {t("aboutPreview.ctaMore")}
            </a>
          </div>

          {/* Kolom Kanan - Bio & Signature */}
          <div className="flex flex-col justify-center border-l-2 border-[#c85314] pl-8">
            <p className="mt-2 text-sm text-[#445569]"> Name, Indonesia</p>
            <p className="mt-2 text-sm text-[#445569]"> Probolinggo, Indonesia</p>
            <Signature />
          </div>
        </div>
      </div>
    </section>
  );
}