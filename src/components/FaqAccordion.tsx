import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hours & Location', 'Amenities', 'Policies', 'Reservations', 'General'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search Input & Category Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-[#4E342E]/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. WiFi, parking, pets, hours)..."
            className="w-full pl-12 pr-4 py-3 bg-[#EFE8DF] border border-[#EFE8DF] rounded-2xl text-sm text-[#4E342E] placeholder-[#4E342E]/50 focus:outline-none focus:ring-2 focus:ring-[#C96C4A]"
          />
        </div>

        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C96C4A] text-white shadow-xs'
                  : 'bg-[#EFE8DF] text-[#4E342E] hover:bg-[#D9A066]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#EFE8DF]/50 rounded-2xl p-6 text-[#2B2B2B]/70">
            <HelpCircle className="w-8 h-8 text-[#C96C4A] mx-auto mb-2" />
            <p className="font-serif text-lg font-medium">No matching questions found</p>
            <p className="text-xs mt-1">Try searching with a different keyword or contact us directly.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#F8F4EE] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#C96C4A] shadow-md' : 'border-[#EFE8DF] hover:border-[#D9A066]'
                }`}
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C96C4A] bg-[#EFE8DF] px-2.5 py-1 rounded-full shrink-0 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#4E342E]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C96C4A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-[#2B2B2B]/80 leading-relaxed border-t border-[#EFE8DF] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
