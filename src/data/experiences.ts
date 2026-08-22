import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-faculty-frontend",
    role: "Frontend Web Developer",
    company: "Computer Science Faculty, Jember University",
    startDate: "2024-03",
    endDate: "2024-07",
    description: {
      en: "Built responsive, user-friendly interfaces for a faculty information system and contributed to system analysis and testing. Delivered 'Smart Canteen', a Laravel-based ordering system replacing physical queues at the faculty canteen.",
      id: "Membangun antarmuka yang responsif dan mudah digunakan untuk sistem informasi fakultas, serta terlibat dalam analisis sistem dan pengujian aplikasi. Merilis 'Smart Canteen', sistem pemesanan berbasis Laravel yang menggantikan antrean fisik di kantin fakultas.",
    },
  },
  {
    id: "exp-gits-fullstack",
    role: "Fullstack Web Developer",
    company: "PT. GITS Indonesia",
    startDate: "2023-08",
    endDate: "2023-12",
    description: {
      en: "Led a 5-person developer team as Project Lead, managing planning and delivery with Trello. Designed business workflows and database structures (ERD), then built a Laravel-based F&B ordering system for local MSMEs.",
      id: "Memimpin tim beranggotakan 5 developer sebagai Project Lead, mengelola perencanaan dan delivery project menggunakan Trello. Merancang alur bisnis dan struktur database (ERD), lalu membangun sistem pemesanan F&B berbasis Laravel untuk UMKM.",
    },
  },
];
