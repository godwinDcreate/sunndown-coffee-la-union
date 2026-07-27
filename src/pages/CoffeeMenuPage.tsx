import React, { useState } from 'react';
import { COFFEE_MENU } from '../data/menuData';
import { CoffeeCard } from '../components/CoffeeCard';
import { CoffeeCategory, OrderItem } from '../types';
import { Search, Coffee, Sparkles, Filter } from 'lucide-react';

interface CoffeeMenuPageProps {
  onAddToBag: (item: OrderItem) => void;
}

export const CoffeeMenuPage: React.FC<CoffeeMenuPageProps> = ({ onAddToBag }) => {
  const [selectedCategory, setSelectedCategory] = useState<CoffeeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [tempFilter, setTempFilter] = useState<'All' | 'Hot' | 'Iced'>('All');

  const categories: CoffeeCategory[] = ['All', 'Signature Drinks', 'Espresso', 'Pour Over', 'Cold Brew', 'Non-Coffee'];

  const filteredItems = COFFEE_MENU.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tastingNotes && item.tastingNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesTemp =
      tempFilter === 'All' || (item.temperatureOptions && item.temperatureOptions.includes(tempFilter));

    return matchesCategory && matchesSearch && matchesTemp;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Specialty Coffee Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            Artisanal Brews & Signature Elixirs
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            Extracted from Benguet single-origin Arabica and premium global micro-lots. Customize milk and temperature to your preference.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#EFE8DF]/60 rounded-3xl p-6 sm:p-8 border border-[#EFE8DF] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-[#4E342E]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee by name, flavor notes (e.g., Sea Salt, Oat Milk, Vanilla)..."
                className="w-full pl-12 pr-4 py-3 bg-[#F8F4EE] border border-[#EFE8DF] rounded-2xl text-sm text-[#4E342E] placeholder-[#4E342E]/50 focus:outline-none focus:ring-2 focus:ring-[#C96C4A]"
              />
            </div>

            {/* Temp Filter */}
            <div className="flex items-center space-x-2 bg-[#F8F4EE] px-4 py-2 rounded-2xl border border-[#EFE8DF]">
              <Filter className="w-4 h-4 text-[#C96C4A]" />
              <span className="text-xs font-semibold text-[#4E342E]">Serve:</span>
              <div className="flex gap-1 text-xs font-medium flex-1 justify-end">
                {(['All', 'Hot', 'Iced'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTempFilter(t)}
                    className={`px-3 py-1 rounded-xl transition-all ${
                      tempFilter === t ? 'bg-[#4E342E] text-white' : 'text-[#4E342E] hover:bg-[#EFE8DF]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Tabs */}
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

        {/* Coffee Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#EFE8DF]/40 rounded-3xl p-8 space-y-3">
            <Coffee className="w-12 h-12 text-[#C96C4A] mx-auto opacity-70" />
            <h3 className="font-serif text-2xl font-medium text-[#4E342E]">No drinks found</h3>
            <p className="text-xs text-[#2B2B2B]/70">Try resetting your search query or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((coffee) => (
              <CoffeeCard key={coffee.id} item={coffee} onAddToBag={onAddToBag} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
