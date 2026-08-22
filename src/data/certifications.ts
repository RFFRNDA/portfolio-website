import type { Certification } from "../types/certification";

export const certifications: Certification[] = [
  {
    id: "cert-data-science-fabric",
    name: "Data Science with Microsoft Fabric",
    issuer: "Dicoding x Microsoft",
    issuedDate: "2026-07",
    description: {
      en: "Covers data engineering and analytics workflows on the Microsoft Fabric platform.",
      id: "Mencakup alur kerja data engineering dan analitik menggunakan platform Microsoft Fabric.",
    },
    image: "/images/certifications/data-science-fabric.jpg",
  },
  {
    id: "cert-data-analyst",
    name: "Data Analyst",
    issuer: "Special Skill",
    issuedDate: "2026-07",
    description: {
      en: "Covers core data analysis techniques, from data cleaning to descriptive statistics.",
      id: "Mencakup teknik dasar analisis data, mulai dari pembersihan data hingga statistik deskriptif.",
    },
    image: "/images/certifications/data-analyst.jpg",
  },
  {
    id: "cert-fullstack-gits",
    name: "Fullstack Web Developer",
    issuer: "GITS Indonesia",
    issuedDate: "2023-12",
    description: {
      en: "Intensive fullstack web development training covering frontend, backend, and project delivery.",
      id: "Pelatihan intensif pengembangan web fullstack yang mencakup frontend, backend, dan project delivery.",
    },
    image: "/images/certifications/fullstack-gits.jpg",
  },
  {
    id: "cert-solid-principle",
    name: "SOLID Principle Programming",
    issuer: "Dicoding",
    issuedDate: "2023-10",
    description: {
      en: "Covers SOLID principles for writing maintainable, well-structured object-oriented code.",
      id: "Mencakup prinsip SOLID untuk menulis kode object-oriented yang rapi dan mudah dirawat.",
    },
    image: "/images/certifications/solid-principle.jpg",
  },
  {
    id: "cert-python-progate",
    name: "Python Programming",
    issuer: "Progate",
    issuedDate: "2021-08",
    description: {
      en: "Covers Python programming fundamentals.",
      id: "Mencakup dasar-dasar pemrograman Python.",
    },
    image: "/images/certifications/python-progate.jpg",
  },
];
