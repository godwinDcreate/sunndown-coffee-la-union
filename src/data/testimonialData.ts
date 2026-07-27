import { TestimonialItem, InstagramPost } from '../types';

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Camille Santos',
    role: 'Digital Nomad & Designer',
    location: 'Manila / La Union',
    rating: 5,
    comment: 'Sunndown is my absolute favorite spot in Elyu for slow morning work sessions. The Sea Salt Latte is unparalleled, the WiFi is super fast, and the warm terracotta interiors feel so peaceful after an early surf.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    favoriteDrink: 'Sea Salt Latte'
  },
  {
    id: 't-2',
    author: 'Mark Vance',
    role: 'Coffee Explorer & Surfer',
    location: 'Australia',
    rating: 5,
    comment: 'Being an Australian coffee lover, I am very picky about my Flat Whites. Sunndown blew my expectations away. Their Benguet pour over and Truffle Grilled Cheese are top tier!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    favoriteDrink: 'Single Origin V60 Pour Over'
  },
  {
    id: 't-3',
    author: 'Bea & Enzo',
    role: 'Weekend Travelers',
    location: 'Quezon City',
    rating: 5,
    comment: 'The perfect aesthetic café in San Juan! The staff are incredibly friendly and welcoming. We came for breakfast and ended up staying 3 hours just relaxing on their outdoor patio.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    favoriteDrink: 'Black Oat Milk Shaken Espresso'
  },
  {
    id: 't-4',
    author: 'Rafa Gutierrez',
    role: 'Local Surfer & Resident',
    location: 'San Juan, La Union',
    rating: 5,
    comment: 'Every morning after my 6 AM surf session, Sunndown is where I refuel. The Sunndown Breakfast Plate with homemade sourdough is the best brunch in town hands down.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    favoriteDrink: 'Dirty Matcha Espresso'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: '/src/assets/images/coffee_specialty_latte_1784816071798.jpg',
    caption: 'Slow mornings call for velvety sea salt foam and golden sunlight. ☕️🌅 #SunndownCoffee #LaUnion',
    likes: 1240,
    comments: 48,
    timestamp: '2 hours ago',
    handle: '@sunndowncoffee.launion'
  },
  {
    id: 'ig-2',
    imageUrl: '/src/assets/images/brunch_food_platter_1784816085334.jpg',
    caption: 'Crispy bacon, poached eggs & sourdough. Fueling your Elyu adventures all weekend. 🍞🥓',
    likes: 982,
    comments: 31,
    timestamp: '1 day ago',
    handle: '@sunndowncoffee.launion'
  },
  {
    id: 'ig-3',
    imageUrl: '/src/assets/images/hero_cafe_sunndown_1784816058242.jpg',
    caption: 'Where warm terracotta meets lush palm fronds. Your cozy haven in San Juan. 🌴✨',
    likes: 1850,
    comments: 72,
    timestamp: '2 days ago',
    handle: '@sunndowncoffee.launion'
  },
  {
    id: 'ig-4',
    imageUrl: '/src/assets/images/cafe_interior_vibes_1784816102746.jpg',
    caption: 'Espresso precision in every single pull. Crafted by our passionate baristas. ☕️🤎',
    likes: 1410,
    comments: 55,
    timestamp: '3 days ago',
    handle: '@sunndowncoffee.launion'
  }
];
