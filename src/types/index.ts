export type CoffeeCategory = 'All' | 'Espresso' | 'Pour Over' | 'Cold Brew' | 'Signature Drinks' | 'Non-Coffee';

export type FoodCategory = 'All' | 'Breakfast' | 'Sandwiches' | 'Pasta' | 'Rice Meals' | 'Pastries' | 'Desserts';

export type GalleryCategory = 'All' | 'Coffee' | 'Food' | 'Interior' | 'Exterior' | 'Lifestyle' | 'Community';

export interface CoffeeItem {
  id: string;
  name: string;
  category: CoffeeCategory;
  price: number; // in PHP ₱
  description: string;
  tastingNotes?: string[];
  tags?: string[];
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  temperatureOptions?: ('Hot' | 'Iced')[];
  milkOptions?: string[];
}

export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  price: number; // in PHP ₱
  description: string;
  dietaryNotes?: string[];
  tags?: string[];
  image: string;
  isPopular?: boolean;
  prepTime?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  caption: string;
  aspect?: 'square' | 'wide' | 'tall';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Hours & Location' | 'Amenities' | 'Policies' | 'Reservations';
  icon?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string; // e.g. "Local Surfer & Nomad", "Frequent Traveler", "Coffee Connoisseur"
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  favoriteDrink: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  handle: string;
}

export interface OrderItem {
  id: string;
  type: 'coffee' | 'food';
  name: string;
  price: number;
  quantity: number;
  image: string;
  temperature?: 'Hot' | 'Iced';
  milk?: string;
  specialInstructions?: string;
}

export interface TableReservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Indoor Aircon' | 'Al Fresco Terrace' | 'Espresso Bar Counter';
  notes?: string;
}
