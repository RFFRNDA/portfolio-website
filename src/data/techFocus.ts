// src/data/techFocus.ts

export interface TechFocus {
  label: { en: string; id: string };
  level: number; // 1-5
}

export const techFocuses: TechFocus[] = [
  { label: { en: "Frontend Development", id: "Frontend Development" }, level: 4 },
  { label: { en: "Backend Development", id: "Backend Development" }, level: 3 },
  { label: { en: "Data Analysis", id: "Analisis Data" }, level: 4 },
  { label: { en: "System Design", id: "Perancangan Sistem" }, level: 3 },
];