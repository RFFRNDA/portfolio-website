import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "smart-canteen",
    title: {
      en: "Smart Canteen",
      id: "Smart Canteen",
    },
    category: "Web Development",
    role: "Frontend Web Developer",
    stack: ["Laravel", "JavaScript", "CSS3"],
    duration: "Mar 2024 – Jul 2024",
    description: {
      en: "A web-based ordering system built to resolve unstructured physical queues at the faculty canteen. Supports remote ordering, order sequencing & tracking, and a seller dashboard for menu management and sales reporting.",
      id: "Sistem pemesanan berbasis web yang dibuat untuk mengatasi antrean fisik yang tidak terstruktur di kantin fakultas. Mendukung pemesanan jarak jauh, urutan & pelacakan pesanan, serta dashboard penjual untuk manajemen menu dan laporan penjualan.",
    },
    image: "/images/projects/smart-canteen.jpg",
    link: "",
  },
  {
    id: "fnb-ordering-gits",
    title: {
      en: "F&B Ordering System",
      id: "Sistem Pemesanan F&B",
    },
    category: "Web Development",
    role: "Fullstack Web Developer / Project Lead",
    stack: ["Laravel", "JavaScript", "MySQL"],
    duration: "Aug 2023 – Dec 2023",
    description: {
      en: "A Food & Beverage ordering system built to empower local MSMEs, featuring a seamless customer flow (order, pay, track) alongside a seller dashboard for menu management and sales reporting.",
      id: "Sistem pemesanan Food & Beverage yang dibuat untuk memberdayakan UMKM lokal, dengan alur pemesanan pelanggan yang lancar (pesan, bayar, lacak) serta dashboard penjual untuk manajemen menu dan laporan penjualan.",
    },
    image: "/images/projects/fnb-ordering-gits.jpg",
    link: "",
  },
  {
    id: "trade-balance-analysis",
    title: {
      en: "Trade Balance Transition Analysis",
      id: "Analisis Transisi Neraca Perdagangan",
    },
    category: "Data Analysis",
    role: "Data Analyst",
    stack: ["Microsoft Excel", "Pivot Table", "Pivot Chart"],
    duration: "Jul 2026",
    description: {
      en: "Cleaned and analyzed 29 years (1996–2024) of Indonesia's trade data from BPS, then built a static analytical dashboard using pivot tables and charts, identifying a shift toward net-importer status and 71% import dependency on refined fuel.",
      id: "Membersihkan dan menganalisis 29 tahun (1996–2024) data perdagangan Indonesia dari BPS, lalu membangun dashboard analitik statis menggunakan pivot table dan chart, mengungkap pergeseran menjadi net-importer dan ketergantungan impor BBM olahan sebesar 71%.",
    },
    image: "/images/projects/trade-balance-analysis.jpg",
    link: "",
  },
  {
    id: "coffee-maturity-segmentation",
    title: {
      en: "Coffee Fruit Maturity Segmentation",
      id: "Segmentasi Tingkat Kematangan Buah Kopi",
    },
    category: "Machine Learning",
    role: "ML Researcher",
    stack: ["Python", "YOLOv8", "YOLOv11", "Flask", "OpenCV"],
    duration: "Aug 2025 – Jan 2026",
    description: {
      en: "Thesis project comparing YOLOv8l-seg and YOLOv11m-seg for multi-class coffee fruit maturity instance segmentation, using 2,492 annotated images and a Flask app for real-time model validation.",
      id: "Project skripsi yang membandingkan YOLOv8l-seg dan YOLOv11m-seg untuk instance segmentation kematangan buah kopi multi-kelas, menggunakan 2.492 gambar beranotasi dan aplikasi Flask untuk validasi model secara real-time.",
    },
    image: "/images/projects/coffee-maturity-segmentation.jpg",
    link: "",
  },
  {
    id: "business-collab-system",
    title: {
      en: "Business Collaboration Information System",
      id: "Sistem Informasi Kolaborasi Bisnis",
    },
    category: "System Analysis",
    role: "System Analyst & Designer",
    stack: ["BPMN", "UML", "Figma", "Enterprise Architect"],
    duration: "Apr 2023 – Jul 2023",
    description: {
      en: "Gathered stakeholder requirements and modeled business workflows (BPMN) and system behavior (Use Case, Activity, Sequence, Class diagrams) for a web-based system supporting user management, advertising services, and invoicing.",
      id: "Mengumpulkan kebutuhan stakeholder dan memodelkan alur bisnis (BPMN) serta perilaku sistem (Use Case, Activity, Sequence, Class diagram) untuk sistem berbasis web yang mendukung manajemen user, layanan iklan, dan invoicing.",
    },
    image: "/images/projects/business-collab-system.jpg",
    link: "",
  },
];
