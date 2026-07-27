import React, { useState } from 'react';
import { FOOD_MENU } from '../data/menuData';
import { FoodCard } from '../components/FoodCard';
import { FoodCategory, OrderItem } from '../types';
import { Search, Utensils } from 'lucide-react';

interface FoodMenuPageProps {
  onAddToBag: (item: OrderItem) => void;
}

export const FoodMenuPage: React.FC<FoodMenuPageProps> = ({ onAddToBag }) => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: FoodCategory[] = ['All', 'Breakfast', 'Sandwiches', 'Pasta', 'Rice Meals', 'Pastries', 'Desserts'];

  const filteredItems = FOOD_MENU.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.dietaryNotes && item.dietaryNotes.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Handcrafted Food & Brunch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            All-Day Sourdough & Fresh Bakery
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            Made with fresh farm eggs, artisan sourdough, house pesto, and local La Union longganisa.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-[#EFE8DF]/60 rounded-3xl p-6 sm:p-8 border border-[#EFE8DF] space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-[#4E342E]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food by name, ingredient (e.g. Croissant, Truffle, Avocado, Longganisa)..."
              className="w-full pl-12 pr-4 py-3 bg-[#F8F4EE] border border-[#EFE8DF] rounded-2xl text-sm text-[#4E342E] placeholder-[#4E342E]/50 focus:outline-none focus:ring-2 focus:ring-[#C96C4A]"
            />
          </div>

          <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 pt-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C96C4A] text-white shadow-xs'
                    : 'bg-[#F8F4EE] text-[#4E342E] hover:bg-[#D9A066]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#EFE8DF]/40 rounded-3xl p-8 space-y-3">
            <Utensils className="w-12 h-12 text-[#C96C4A] mx-auto opacity-70" />
            <h3 className="font-serif text-2xl font-medium text-[#4E342E]">No food items found</h3>
            <p className="text-xs text-[#2B2B2B]/70">Try resetting your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((food) => (
              <FoodCard key={food.id} item={food} onAddToBag={onAddToBag} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
