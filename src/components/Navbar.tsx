import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Each nav item's key must be a valid t() key from UIDictionary.
const NAV_ITEMS = [
  { to: "/", key: "nav.home" as const },
  { to: "/about", key: "nav.about" as const },
  { to: "/project", key: "nav.project" as const },
];

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 pb-1 transition-colors ${
      isActive
      ? "border-accent-orange text-accent-orange"
      : "border-transparent text-text-on-dark hover:border-accent-orange hover:text-accent-orange"
    }`;
    
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-md border px-3 py-2 transition-colors ${
      isActive
      ? "border-accent-orange/40 bg-accent-orange/10 text-accent-orange"
      : "border-transparent text-text-on-dark hover:border-text-on-dark-secondary/30 hover:bg-text-on-dark/5 hover:text-accent-orange"
  }`;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => { window.removeEventListener("scroll", handleScroll);};
  }, []);

  return (
    <header className="sticky top-0 z-sticky-nav border-b border-text-on-dark-secondary/30 bg-dark-base">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/">
          <span className="pointer-events-none absolute"></span>
          <img src="/images/rf-logo.png" alt="Rafif Logo" className="block h-auto w-16 hover:scale-105 active:scale-95"/>
        </NavLink>

        {/* Desktop nav links — hidden below 768px, replaced by the mobile panel */}
        <ul className="hidden items-center gap-8 font-body text-md md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass} end={item.to === "/"}>
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="flex flex-row items-center gap-1 rounded-lg border border-text-on-dark-secondary px-2 py-1 font-body text-xs uppercase tracking-wide text-text-on-dark transition-colors hover:border-accent-orange hover:text-accent-orange"
          >
            <Globe size={22} />
            {language === "en" ? "EN" : "ID" }
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-text-on-dark md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div
        className="h-[3px] bg-accent-orange transition-[width] duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Mobile nav panel — only rendered when hamburger is open */}
      {isOpen && (
        <ul className="absolute right-0 top-full z-50 flex w-max min-w-[100px] flex-col rounded-lg border border-accent-orange/40 bg-dark-base  text-center font-body text-sm shadow-[0_4px_20px_rgba(200,83,20,0.25)] md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={mobileLinkClass}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;