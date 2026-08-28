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
      en: "Building responsive, end-to-end web applications — from Laravel backends to clean, user-friendly interfaces.",
      id: "Membangun aplikasi web end-to-end yang responsif — dari backend Laravel hingga antarmuka yang rapi dan mudah digunakan.",
    },
  },
  {
    id: "system-analysis",
    title: {
      en: "System Analysis",
      id: "Analisis Sistem",
    },
    description: {
      en: "Translating business needs into structured designs — requirements, BPMN workflows, and UML diagrams.",
      id: "Menerjemahkan kebutuhan bisnis jadi desain terstruktur — requirements, alur BPMN, dan diagram UML.",
    },
  },
  {
    id: "data-ml",
    title: {
      en: "Data & ML",
      id: "Data & ML",
    },
    description: {
      en: "Cleaning, analyzing, and modeling data — from Excel pivot dashboards to computer vision with YOLO.",
      id: "Membersihkan, menganalisis, dan memodelkan data — dari dashboard pivot Excel hingga computer vision dengan YOLO.",
    },
  },
  {
    id: "design",
    title: {
      en: "Design",
      id: "Desain",
    },
    description: {
      en: "Creating cohesive visual experiences — from wireframes and user flows to clean UI/UX and visual systems.",
      id: "Menciptakan pengalaman visual yang selaras — dari wireframe dan user flow hingga UI/UX yang rapi dan sistem visual.",
    },
  },
];