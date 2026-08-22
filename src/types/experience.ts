export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: {
    en: string;
    id: string;
  };
  type?: string;
}
