// src/data/competencies.ts

export interface Competency {
  id: string;
  title: { en: string; id: string };
  description: { en: string; id: string };
}

export const competencies: Competency[] = [
  {
    id: "web-dev",
    title: {
      en: "Web Development",
      id: "Pengembangan Web",
    },
    description: {
      en: "Building responsive, end-to-end web applications with clean and user-friendly interfaces.",
      id: "Membangun aplikasi web end-to-end yang responsif dengan antarmuka yang rapi dan mudah digunakan.",
    },
  },
  {
    id: "system-analysis",
    title: {
      en: "System Analysis",
      id: "Analisis Sistem",
    },
    description: {
      en: "Translating business needs into structured designs. From system Requirements, BPMN workflows, and UML diagrams.",
      id: "Menerjemahkan kebutuhan bisnis jadi desain terstruktur, mulai dari kebutuhan sistem, alur BPMN, dan diagram UML.",
    },
  },
  {
    id: "data-ml",
    title: {
      en: "Data & ML",
      id: "Data & ML",
    },
    description: {
      en: "Cleaning, analyzing, and modeling data, From Excel pivot dashboards to computer vision with YOLO.",
      id: "Membersihkan, menganalisis, dan memodelkan data. Dari dashboard pivot Excel hingga computer vision dengan YOLO.",
    },
  },
  {
    id: "design",
    title: {
      en: "Design",
      id: "Desain",
    },
    description: {
      en: "Creating cohesive visual experiences. From wireframes and user flows to clean UI/UX and visual systems.",
      id: "Menciptakan pengalaman visual yang selaras. Dari wireframe dan user flow hingga UI/UX yang rapi dan visual sistem.",
    },
  },
];