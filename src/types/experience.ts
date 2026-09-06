export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: {
    en: string;
    id: string;
  };
  endDate: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  type?: string;
}
