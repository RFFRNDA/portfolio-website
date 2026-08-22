import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "../types/language";
import { en, type UIDictionary } from "../data/i18n/en";
import { id } from "../data/i18n/id";

// Maps each supported language to its full UI label dictionary.
// Both dictionaries share the same shape (UIDictionary), enforced by id.ts
// typing itself as `UIDictionary` — so this object is always safe to index.
const dictionaries: Record<Language, UIDictionary> = { en, id };

// Key used to persist the chosen language across visits/pages.
const STORAGE_KEY = "language";

type Primitive = string | number | boolean;

// Turns a nested object type into a union of dot-path strings, e.g.
// { hero: { title: string } } -> "hero.title"
// This lets t() accept only keys that actually exist in UIDictionary,
// so a typo like t("hero.titel") is a compile-time TypeScript error.
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends Primitive
    ? K
    : `${K}.${NestedKeyOf<T[K]>}`;
}[keyof T & string];

type TranslationKey = NestedKeyOf<UIDictionary>;

// Runtime counterpart of NestedKeyOf: walks a dot-path like "hero.title"
// down the dictionary object and returns the string at that path.
function getNestedValue(dict: UIDictionary, path: string): string {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dict) as string;
}

// Shape of what components get back from useLanguage().
interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

// Reads the previously saved language from localStorage on first load.
// Falls back to "en" if nothing is saved yet, or if running where
// `window` doesn't exist (e.g. server-side rendering).
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "id" ? stored : "en";
}

// Wraps the app and provides: the active language, a way to change it,
// and the t() translation helper. Mount this once near the root (App.tsx).
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Whenever language changes, persist it so it's remembered next visit
  // and stays consistent when navigating between pages (Home/About/Project).
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  // Looks up a label in the dictionary for the currently active language.
  const t = (key: TranslationKey) => getNestedValue(dictionaries[language], key);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageState, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook components use to read/change language and get translated labels:
//   const { language, setLanguage, t } = useLanguage();
// Throws if called outside <LanguageProvider>, so misuse fails loudly
// instead of silently returning undefined.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}