import { useLanguage } from "../context/LanguageContext";

export default function AboutMePreview() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#e0e3d9] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Kolom Kiri */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#0c1621] md:text-4xl">
              {t("aboutPreview.title")}
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
            <p className="text-base text-[#445569]">
              <span className="font-bold text-[#0c1621]">Rafif</span> — fresh
              graduate from Informatics, passionate about building functional,
              clean, and user-centered digital products.
            </p>
            <p className="mt-2 text-sm text-[#445569]">📍 Bandung, Indonesia</p>
            <div className="mt-4 font-serif text-2xl italic text-[#0c1621] opacity-70">
              Rafif
              <span className="ml-2 inline-block h-[2px] w-12 bg-[#c85314] align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}