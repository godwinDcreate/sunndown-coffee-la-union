import { CoffeeItem, FoodItem } from '../types';
import { images } from '../assets/images';

export const COFFEE_MENU: CoffeeItem[] = [
  // SIGNATURE DRINKS
  {
    id: 'sig-1',
    name: 'Black Oat Milk Shaken Espresso',
    category: 'Signature Drinks',
    price: 195,
    description: 'Double shot specialty espresso shaken over ice with brown sugar syrup, topped with velvety cold oat milk.',
    tastingNotes: ['Toasted Oats', 'Muscovado', 'Dark Chocolate'],
    tags: ['Best Seller', 'Signature', 'Dairy-Free Choice'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    isPopular: true,
    temperatureOptions: ['Iced'],
    milkOptions: ['Oat Milk (Standard)', 'Almond Milk', 'Whole Milk']
  },
  {
    id: 'sig-2',
    name: 'Sea Salt Latte',
    category: 'Signature Drinks',
    price: 210,
    description: 'Rich espresso and steamed fresh milk topped with a thick layer of handcrafted sea salt cream foam.',
    tastingNotes: ['Salted Caramel', 'Creamy Fudge', 'Roasted Hazelnut'],
    tags: ['Must Try', 'Signature', 'House Special'],
    image: images.specialtyLatte,
    isSignature: true,
    isPopular: true,
    temperatureOptions: ['Iced', 'Hot'],
    milkOptions: ['Whole Milk (Standard)', 'Oat Milk', 'Almond Milk']
  },
  {
    id: 'sig-3',
    name: 'Caramel Cloud Latte',
    category: 'Signature Drinks',
    price: 205,
    description: 'Espresso infused with house-made vanilla bean syrup, layered with caramel drizzle and fluffy cold foam.',
    tastingNotes: ['Vanilla Bean', 'Butterscotch', 'Smooth Velvet'],
    tags: ['Signature', 'Sweet & Creamy'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    isPopular: true,
    temperatureOptions: ['Iced', 'Hot'],
    milkOptions: ['Whole Milk', 'Oat Milk', 'Almond Milk']
  },
  {
    id: 'sig-4',
    name: 'Dirty Matcha Espresso',
    category: 'Signature Drinks',
    price: 220,
    description: 'Ceremonial grade Uji matcha layered over ice milk and capped with a bold shot of Sunndown single-origin espresso.',
    tastingNotes: ['Umami Matcha', 'Earthy Espresso', 'Creamy Finish'],
    tags: ['Signature', 'Fusion', 'High Energy'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    isPopular: true,
    temperatureOptions: ['Iced'],
    milkOptions: ['Oat Milk', 'Whole Milk', 'Almond Milk']
  },
  {
    id: 'sig-5',
    name: 'Vanilla Cold Brew Foam',
    category: 'Signature Drinks',
    price: 185,
    description: '18-hour steep cold brew crowned with sweet vanilla bean whipped cream float and nutmeg dust.',
    tastingNotes: ['Dark Cocoa', 'Warm Spice', 'Vanilla Cream'],
    tags: ['Refreshment', 'Slow Brew'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    isSignature: true,
    temperatureOptions: ['Iced']
  },

  // ESPRESSO CLASSICS
  {
    id: 'esp-1',
    name: 'Classic Espresso',
    category: 'Espresso',
    price: 120,
    description: 'Double ristretto shot extracted from our house blend (Ethiopia Yirgacheffe x Benguet Arabica).',
    tastingNotes: ['Citrus Blossom', 'Dark Chocolate', 'Molasses'],
    tags: ['Pure Coffee', 'Single Origin'],
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot']
  },
  {
    id: 'esp-2',
    name: 'Americano',
    category: 'Espresso',
    price: 140,
    description: 'Double shot espresso diluted with hot or ice-cold purified water, retaining rich coffee oils.',
    tastingNotes: ['Balanced Acidity', 'Toasted Walnut', 'Caramel'],
    tags: ['Classic', 'Clean'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced']
  },
  {
    id: 'esp-3',
    name: 'Cappuccino',
    category: 'Espresso',
    price: 165,
    description: 'Equal parts espresso, silky steamed milk, and dense airy microfoam sprinkled with cocoa powder.',
    tastingNotes: ['Creamy Cocoa', 'Almond', 'Balanced Sweetness'],
    tags: ['Classic', 'Traditional'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot'],
    milkOptions: ['Whole Milk', 'Oat Milk', 'Almond Milk']
  },
  {
    id: 'esp-4',
    name: 'Flat White',
    category: 'Espresso',
    price: 170,
    description: 'Double ristretto shot with micro-steamed whole milk for a velvety texture and intense espresso flavor.',
    tastingNotes: ['Smooth Microfoam', 'Honey', 'Toasted Graham'],
    tags: ['Coffee-Forward', 'Silky'],
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced'],
    milkOptions: ['Whole Milk', 'Oat Milk']
  },
  {
    id: 'esp-5',
    name: 'Caffè Latte',
    category: 'Espresso',
    price: 165,
    description: 'Espresso combined with silky steamed milk and a delicate layer of poured latte art.',
    tastingNotes: ['Milk Chocolate', 'Vanilla', 'Butter Biscuit'],
    tags: ['Smooth', 'Daily Choice'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    temperatureOptions: ['Hot', 'Iced'],
    milkOptions: ['Whole Milk', 'Oat Milk', 'Almond Milk', 'Soy Milk']
  },
  {
    id: 'esp-6',
    name: 'Spanish Latte',
    category: 'Espresso',
    price: 180,
    description: 'Espresso combined with textured milk and a touch of condensed milk for a silky, comforting sweetness.',
    tastingNotes: ['Caramel Cream', 'Brown Sugar', 'Dulce de Leche'],
    tags: ['Locals Favorite', 'Sweet'],
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    temperatureOptions: ['Hot', 'Iced'],
    milkOptions: ['Whole Milk', 'Oat Milk']
  },
  {
    id: 'esp-7',
    name: 'Caffè Mocha',
    category: 'Espresso',
    price: 185,
    description: 'Espresso blended with artisanal Belgian dark chocolate ganache and steamed fresh milk.',
    tastingNotes: ['Bittersweet Dark Cocoa', 'Espresso Fudge', 'Warm Spice'],
    tags: ['Rich', 'Indulgent'],
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced']
  },

  // POUR OVER & FILTER
  {
    id: 'pour-1',
    name: 'Single Origin Hand Pour Over (Benguet Mirador)',
    category: 'Pour Over',
    price: 190,
    description: 'Locally sourced high-altitude Benguet Arabica brewed via V60. Vibrant notes of floral jasmine and sugarcane.',
    tastingNotes: ['Jasmine Floral', 'Calamansi Zest', 'Sugarcane Sweetness'],
    tags: ['Local Origin', 'Filter Coffee', 'Light Roast'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced']
  },
  {
    id: 'pour-2',
    name: 'Ethiopia Sidamo Natural V60',
    category: 'Pour Over',
    price: 210,
    description: 'Natural process Ethiopian bean with bursting aromas of blueberry jam, bergamot, and honey tea finish.',
    tastingNotes: ['Blueberry Jam', 'Bergamot', 'Wild Honey'],
    tags: ['Specialty Import', 'Exotic', 'Fruit Forward'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced']
  },

  // COLD BREW
  {
    id: 'cb-1',
    name: 'Sunndown Classic Cold Brew',
    category: 'Cold Brew',
    price: 160,
    description: 'Coarsely ground specialty Arabica steeped in cold mountain spring water for 20 hours. Ultra-smooth with zero bitterness.',
    tastingNotes: ['Dark Chocolate Truffle', 'Toasted Macadamia', 'Black Cherry'],
    tags: ['Low Acidity', 'Crisp'],
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Iced']
  },

  // NON-COFFEE
  {
    id: 'nc-1',
    name: 'Uji Matcha Latte',
    category: 'Non-Coffee',
    price: 190,
    description: 'Authentic stone-ground Japanese Uji matcha whisked with warm bamboo whisk and combined with milk.',
    tastingNotes: ['Umami', 'Sweet Grass', 'Creamy Velvet'],
    tags: ['Antioxidant', 'Japanese Import'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    temperatureOptions: ['Hot', 'Iced'],
    milkOptions: ['Whole Milk', 'Oat Milk', 'Almond Milk']
  },
  {
    id: 'nc-2',
    name: 'Artisanal Hot Chocolate',
    category: 'Non-Coffee',
    price: 175,
    description: 'Melted Davao tablea dark chocolate steamed with fresh milk and topped with toasted house marshmallow.',
    tastingNotes: ['Deep Cocoa', 'Nutty', 'Toasted Marshmallow'],
    tags: ['Comfort', 'Local Chocolate'],
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop',
    temperatureOptions: ['Hot', 'Iced']
  }
];

export const FOOD_MENU: FoodItem[] = [
  // BREAKFAST & BRUNCH
  {
    id: 'brk-1',
    name: 'Sunndown Breakfast Plate',
    category: 'Breakfast',
    price: 360,
    description: 'Two poached farm eggs, thick-cut smoked bacon, grilled garlic sausage, herb roasted tomatoes, sauteed mushrooms, and fresh toasted sourdough.',
    dietaryNotes: ['Hearty Meal', 'Proteins'],
    tags: ['Chef Special', 'All Day Breakfast'],
    image: images.brunchPlatter,
    isPopular: true,
    prepTime: '12-15 mins'
  },
  {
    id: 'brk-2',
    name: 'Avocado Sourdough Toast',
    category: 'Breakfast',
    price: 290,
    description: 'Smashed Hass avocado, whipped feta, slow-roasted cherry tomatoes, toasted pumpkin seeds, microgreens, and lemon zest on artisan sourdough.',
    dietaryNotes: ['Vegetarian Choice', 'Healthy Fats'],
    tags: ['Nomad Favorite', 'Fresh & Light'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: '10 mins'
  },
  {
    id: 'brk-3',
    name: 'Brioche French Toast',
    category: 'Breakfast',
    price: 280,
    description: 'Thick brioche slice dipped in cinnamon egg custard, pan-seared with butter, served with caramelized bananas, whipped mascarpone, and pure maple syrup.',
    dietaryNotes: ['Sweet Indulgence'],
    tags: ['Comfort Food', 'Crowd Favorite'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop',
    prepTime: '12 mins'
  },

  // SANDWICHES
  {
    id: 'snd-1',
    name: 'Four-Cheese Truffle Grilled Cheese',
    category: 'Sandwiches',
    price: 320,
    description: 'Aged sharp cheddar, mozzarella, gruyere, and cream cheese with white truffle butter on golden pan-crusted sourdough. Served with tomato bisque dip.',
    dietaryNotes: ['Vegetarian Option'],
    tags: ['Best Seller', 'Decadent'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: '12 mins'
  },
  {
    id: 'snd-2',
    name: 'Chicken Pesto Focaccia Sandwich',
    category: 'Sandwiches',
    price: 310,
    description: 'Herb-grilled chicken breast, house basil-pesto spread, fresh mozzarella, and sun-dried tomatoes pressed between house rosemary focaccia bread.',
    dietaryNotes: ['High Protein'],
    tags: ['Lunch Classic'],
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop',
    prepTime: '10 mins'
  },

  // PASTA
  {
    id: 'pst-1',
    name: 'Creamy Basil Pesto Penne',
    category: 'Pasta',
    price: 340,
    description: 'House-blend pine nut & sweet basil pesto cream sauce tossed with penne, roasted cherry tomatoes, topped with grated Parmigiano-Reggiano.',
    dietaryNotes: ['Nutrient Rich'],
    tags: ['Italian Style'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3def6166739?q=80&w=800&auto=format&fit=crop',
    prepTime: '15 mins'
  },
  {
    id: 'pst-2',
    name: 'Truffle Cream Linguine',
    category: 'Pasta',
    price: 375,
    description: 'Al dente linguine tossed in silky garlic mushroom truffle cream, crispy prosciutto crumble, and fresh Italian parsley.',
    dietaryNotes: ['Rich & Savory'],
    tags: ['Chef Signature'],
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: '15 mins'
  },

  // RICE MEALS
  {
    id: 'rc-1',
    name: 'La Union Vigan Longganisa Bowl',
    category: 'Rice Meals',
    price: 295,
    description: 'Crispy garlic-cured local longganisa sausages served with garlic fried rice, sunny-side egg, and house pickled papaya (atchara).',
    dietaryNotes: ['Filipino Comfort'],
    tags: ['Local Heritage', 'Heavy Brunch'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: '12 mins'
  },
  {
    id: 'rc-2',
    name: 'Slow-Cooked Beef Tapa Bowl',
    category: 'Rice Meals',
    price: 330,
    description: 'Tender marinated US beef sirloin tapa bites sautéed in toasted garlic butter, served with sinangag rice and spiced coconut vinegar.',
    dietaryNotes: ['Savory Classic'],
    tags: ['All-Time Favorite'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop',
    prepTime: '12 mins'
  },

  // PASTRIES & DESSERTS
  {
    id: 'pst-1',
    name: 'Butter Croissant',
    category: 'Pastries',
    price: 110,
    description: 'Classic French butter croissant, baked fresh daily with 81 flaky layers of French Normandy butter.',
    tags: ['Baked Daily', 'Flaky'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: 'Ready'
  },
  {
    id: 'pst-2',
    name: 'Pain au Chocolat',
    category: 'Pastries',
    price: 130,
    description: 'Golden butter croissant pastry filled with two batons of rich Valrhona dark chocolate.',
    tags: ['Valrhona Chocolate'],
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop',
    prepTime: 'Ready'
  },
  {
    id: 'des-1',
    name: 'San Sebastian Basque Burnt Cheesecake',
    category: 'Desserts',
    price: 220,
    description: 'Caramelized crust with a silky, molten cream cheese center. Made with pure vanilla bean.',
    tags: ['House Specialty', 'Gluten-Free Friendly'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    prepTime: 'Ready'
  },
  {
    id: 'des-2',
    name: 'Sea Salt Dark Chocolate Chunk Cookie',
    category: 'Desserts',
    price: 95,
    description: 'Thick, chewy brown butter cookie loaded with 70% dark chocolate chunks and sprinkled with Maldon sea salt flakes.',
    tags: ['Freshly Baked'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop',
    prepTime: 'Ready'
  }
];
