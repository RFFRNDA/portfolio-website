import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
            className="rounded-lg border border-text-on-dark-secondary px-3 py-1 font-body text-xs uppercase tracking-wide text-text-on-dark transition-colors hover:border-accent-orange hover:text-accent-orange"
          >
            {language === "en" ? "EN" : "ID"}
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

      {/* Mobile nav panel — only rendered when hamburger is open */}
      {isOpen && (
        <ul className="text-end flex flex-col gap-4 border-t border-text-on-dark-secondary/30 px-6 py-4 font-body text-sm md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={linkClass}
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