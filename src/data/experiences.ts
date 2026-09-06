import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-faculty-frontend",
    role: "Frontend Web Developer",
    company: "Jember University",
    startDate: { 
      en: "March 2024",
      id: "Maret 2025"
    },
    endDate: { 
      en: "July 2024",
      id: "Juli 2024"
    },
    description: {
      en: "Built responsive, user-friendly interfaces for a faculty information system and contributed to system analysis and testing. Delivered 'Smart Canteen', a web-based ordering system using Laravel designed to resolve unstructured physical queues at the faculty canteen. The system enabled remote ordering, order sequencing & tracking, and provided seller dashboard for menu management and sales revenue reporting.",
      id: "Membangun antarmuka yang responsif dan mudah digunakan untuk sistem informasi fakultas, serta terlibat dalam analisis sistem dan pengujian aplikasi. Merilis 'Smart Canteen', sebuah sistem pemesanan berbasis web menggunakan Laravel yang dirancang untuk mengatasi antrean fisik yang tidak terstruktur di kantin fakultas. Sistem ini memungkinkan pemesanan secara jarak jauh, pengurutan dan pelacakan pesanan, serta menyediakan dashboard penjual untuk pengelolaan menu dan pelaporan pendapatan penjualan.",
    },
  },
  {
    id: "exp-gits-fullstack",
    role: "Fullstack Web Developer",
    company: "PT. GITS Indonesia",
    startDate: { 
      en: "August 2023",
      id: "Agustus 2023"
    },
    endDate: { 
      en: "December 2023",
      id: "Desember 2023"
    },
    description: {
      en: "Led a 5-person developer team as Project Lead, managing planning and delivery with Trello. Designed business workflows and database structures (ERD), then built a Laravel-based F&B ordering system for local MSMEs, featuring seamless customer purchasing flow (ordering, payment, and tracking) alongside a seller dashboard for menu management and sales revenue reporting. ",
      id: "Memimpin tim beranggotakan 5 developer sebagai Project Lead, mengelola perencanaan dan delivery project menggunakan Trello. Merancang alur bisnis dan struktur database (ERD), lalu membangun sistem pemesanan F&B berbasis Laravel untuk UMKM, dengan fitur alur pembelian pelanggan secara menyeluruh yang mencakup pemesanan, pembayaran, dan pelacakan pesanan, serta dashboard penjual untuk pengelolaan menu dan pelaporan pendapatan penjualan.",
    },
  },
];
