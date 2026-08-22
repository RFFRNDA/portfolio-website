export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expirationDate?: string;
  description: {
    en: string;
    id: string;
  };
  image: string;
  verificationUrl?: string;
}
