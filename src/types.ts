export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'order' | 'ai-consultant';

export interface Medicine {
  id: string;
  name: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Ayurvedic' | 'General';
  description: string;
  inStock: boolean;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  role?: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'customers' | 'storefront';
  title: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'Ayurveda' | 'Daily Health' | 'Baby Care' | 'First Aid';
  date: string;
  readTime: string;
  content: string;
  image: string;
}
