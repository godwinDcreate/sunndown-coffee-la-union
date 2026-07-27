import { GalleryItem } from '../types';
import { images } from '../assets/images';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunndown Main Architectural Exterior',
    category: 'Exterior',
    image: images.heroCafe,
    caption: 'Warm terracotta facades and tropical monstera framing the entrance in San Juan, La Union.',
    aspect: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Signature Sea Salt Latte Pour',
    category: 'Coffee',
    image: images.specialtyLatte,
    caption: 'Handcrafted iced Sea Salt Latte with rich espresso and velvet cold foam.',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    title: 'All-Day Sourdough Brunch Feast',
    category: 'Food',
    image: images.brunchPlatter,
    caption: 'Sunndown Breakfast Plate & Avocado Toast enjoyed under warm morning sunlight.',
    aspect: 'wide'
  },
  {
    id: 'gal-4',
    title: 'Sunlit Coffee Bar & Espresso Counter',
    category: 'Interior',
    image: images.cafeInterior,
    caption: 'Our baristas crafting precision espresso drinks on oak wood counters.',
    aspect: 'wide'
  },
  {
    id: 'gal-5',
    title: 'Precision V60 Pour Over Extraction',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    caption: 'Single-origin Benguet beans brewed with precision pour over technique.',
    aspect: 'tall'
  },
  {
    id: 'gal-6',
    title: 'Remote Work & Slow Mornings',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    caption: 'Digital nomads catching up on work with high-speed WiFi and power outlets.',
    aspect: 'square'
  },
  {
    id: 'gal-7',
    title: 'Flaky Fresh Bakery Croissants',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    caption: '81-layer Normandy butter croissants baked in-house every morning at 7:00 AM.',
    aspect: 'square'
  },
  {
    id: 'gal-8',
    title: 'Weekend Community Brunch Vibe',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    caption: 'Surfers and weekend travelers gathering over cold brews and shared stories.',
    aspect: 'wide'
  },
  {
    id: 'gal-9',
    title: 'San Sebastian Basque Cheesecake',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    caption: 'Caramelized top with creamy vanilla center, paired perfectly with black cold brew.',
    aspect: 'tall'
  },
  {
    id: 'gal-10',
    title: 'Golden Hour Tropical Courtyard',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    caption: 'Relaxing outdoor al fresco terrace shaded by palm trees and coastal breeze.',
    aspect: 'square'
  }
];
