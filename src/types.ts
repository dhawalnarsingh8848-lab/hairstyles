export interface SalonBusinessInfo {
  name: string;
  tagline: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  displayPhone: string;
  plusCode: string;
  region: string;
  status: string;
  hoursNote: string;
  mapsSearchUrl: string;
  mapsDirectionsUrl: string;
}

export interface SalonService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Hair' | 'Styling' | 'Color' | 'Salon';
  imageUrl: string;
  caption: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
