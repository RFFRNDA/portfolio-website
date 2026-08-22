export interface Project {
  id: string;
  title: {
    en: string;
    id: string;
  };
  category: string;
  role: string;
  stack: string[];
  duration: string;
  description: {
    en: string;
    id: string;
  };
  image: string;
  link: string;
}
