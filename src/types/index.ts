export interface RateItem {
  id: string;
  name: string;
  duration: string;
  price: number | 'consultar';
  unit: string;
  description: string;
  category: 'orientacion' | 'docencia' | 'institucional';
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  country: string;
  location: string;
  period?: string;
  description: string;
  highlights: string[];
}

export interface ContactRequest {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  modality: 'online' | 'presencial_illescas';
  preferredTime: string;
  message: string;
  status: 'nueva' | 'atendida' | 'archivada';
}

export interface SiteSettings {
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  locationText: string;
  profilePhotoUrl: string | null;
  rates: RateItem[];
}
