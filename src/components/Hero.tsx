// src/components/Hero.tsx

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#0c1621] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Kolom Kiri - Teks */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-4xl font-bold text-[#f3f4f0] md:text-5xl lg:text-6xl">
              Rafif
            </h1>
            <p className="mt-4 text-lg text-[#f3f4f0] md:text-xl">
              {t("hero.tagline")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/project"
                className="rounded-lg bg-[#c85314] px-6 py-3 font-medium text-[#f3f4f0] transition hover:bg-[#a84310]"
              >
                {t("hero.ctaViewProjects")}
              </a>
              <a
                href="/cv.pdf"
                download
                className="rounded-lg border border-[#57626f] px-6 py-3 font-medium text-[#f3f4f0] transition hover:border-[#f3f4f0]"
              >
                {t("hero.ctaDownloadCV")}
              </a>
            </div>
          </div>

          {/* Kolom Kanan - Foto & Badge */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute -right-4 -top-4 z-0 h-64 w-64 rotate-12 rounded-full bg-[#c85314] opacity-20 blur-2xl md:h-80 md:w-80"
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              <img
                src="/images/profile.webp"
                alt="Rafif"
                className="h-64 w-64 rounded-full object-cover shadow-2xl ring-4 ring-[#57626f] md:h-80 md:w-80"
              />
              <div className="absolute -right-4 -top-4 z-20 h-20 w-20 md:-right-6 md:-top-6 md:h-24 md:w-24">
                <OpenToWorkBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenToWorkBadge() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#c85314" stroke="#f3f4f0" strokeWidth="2" />
      <defs>
        <path id="circlePath" d="M 50,10 A 40,40 0 1,1 49.99,10" fill="none" />
      </defs>
      <text className="text-[10px] font-bold uppercase tracking-wider text-[#f3f4f0]">
        <textPath href="#circlePath" startOffset="5%">
          Open to Work • Open to Work •
        </textPath>
      </text>
      <circle cx="50" cy="50" r="12" fill="#f3f4f0" />
      <svg
        x="38"
        y="38"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M12 5L7 10M12 5L17 10"
          stroke="#c85314"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
}