import { SalonBusinessInfo, SalonService, GalleryImage } from '../types';

export const salonInfo: SalonBusinessInfo = {
  name: 'Jawed Habib',
  tagline: 'Hair & Beauty Salon',
  category: 'Hair Salon',
  rating: 4.0,
  reviewCount: 57,
  address: 'Ganpati Tower, Narayanthan, Siddharthanagar 32900',
  phone: '071-573336',
  displayPhone: '071-573336',
  plusCode: 'GF62+MV',
  region: 'Siddharthanagar, Lumbini Province',
  status: 'Open · Closes 7:30 PM',
  hoursNote: 'Open, closes at 7:30 PM. Please contact the salon for details regarding other days and holiday schedules.',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Jawed+Habib+Ganpati+Tower+Narayanthan+Siddharthanagar',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=GF62%2BMV%2C+Siddharthanagar%2C+Lumbini+Province',
};

// Website placeholder services as outlined in specifications
export const salonServices: SalonService[] = [
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    tagline: 'Precision Cuts for Men & Women',
    description: 'Personalized haircut, shaping, and modern texturizing crafted to complement your facial contours and personal lifestyle.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    iconName: 'Scissors',
  },
  {
    id: 'hair-wash',
    name: 'Hair Wash',
    tagline: 'Deep Cleansing & Scalp Refresh',
    description: 'Invigorating hair wash and conditioning ritual using premium salon formulations followed by light blast drying.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    tagline: 'Vibrant Tones & Balayage',
    description: 'Root touch-ups, global coloring, highlights, and modern tone corrections tailored to enrich dimension and shine.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palette',
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment',
    tagline: 'Strengthening & Repair Rituals',
    description: 'Targeted hair repair rituals formulated to restore moisture, tame frizz, and fortify compromised cuticles.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkle',
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    tagline: 'Intense Nourishment & Relaxation',
    description: 'Deep scalp massage, nourishing mask infusion, and gentle steaming designed for supreme relaxation and hair vitality.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
    iconName: 'Droplets',
  },
  {
    id: 'occasion-styling',
    name: 'Occasion Styling',
    tagline: 'Events, Celebrations & Glamour',
    description: 'Signature blowouts, elegant updos, and sophisticated evening styling prepared for weddings and festive gatherings.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    iconName: 'Crown',
  },
];

// Curated high resolution salon imagery for gallery
export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Modern Salon Ambience',
    category: 'Salon',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean, elegant styling stations and comfortable seating at Jawed Habib.',
  },
  {
    id: 'gal-2',
    title: 'Precision Scissor Work',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Artisan scissor sculpting tailored for sharp, contemporary silhouettes.',
  },
  {
    id: 'gal-3',
    title: 'Signature Blowout & Finish',
    category: 'Styling',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    caption: 'Voluminous finish with mirror-like shine and natural movement.',
  },
  {
    id: 'gal-4',
    title: 'Warm Dimensional Color',
    category: 'Color',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    caption: 'Rich tone application creating depth, contrast, and lustrous reflection.',
  },
  {
    id: 'gal-5',
    title: 'Relaxing Scalp & Hair Care',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Gentle cleansing and soothing scalp wash routine.',
  },
  {
    id: 'gal-6',
    title: 'Professional Styling Station',
    category: 'Salon',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Equipped with professional salon tools and hygiene standards.',
  },
  {
    id: 'gal-7',
    title: 'Modern Waves & Curls',
    category: 'Styling',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
    caption: 'Effortless textured waves tailored for special occasions.',
  },
  {
    id: 'gal-8',
    title: 'Subtle Balayage Highlights',
    category: 'Color',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sun-kissed hand-painted highlights seamlessly blended into natural base.',
  },
];
