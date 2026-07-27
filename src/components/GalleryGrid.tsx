import React, { useState } from 'react';
import { GalleryItem, GalleryCategory } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';
import { X, ZoomIn, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryGridProps {
  initialCategory?: GalleryCategory;
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialCategory = 'All',
  limit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(initialCategory);
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = ['All', 'Coffee', 'Food', 'Interior', 'Exterior', 'Lifestyle', 'Community'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-[#C96C4A] text-white shadow-sm'
                : 'bg-[#EFE8DF] text-[#4E342E] hover:bg-[#D9A066]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => (
          <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveImage(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EFE8DF] shadow-sm border border-[#EFE8DF] aspect-[4/3] sm:aspect-[3/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E]/90 via-[#4E342E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#F8F4EE]">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D9A066] mb-1">
                {item.category}
              </span>
              <h3 className="font-serif text-lg font-medium text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#EFE8DF]/80 line-clamp-2 mt-1 font-light">
                {item.caption}
              </p>
              <div className="pt-3 flex items-center justify-between text-xs text-[#D9A066]">
                <span className="flex items-center gap-1 font-medium">
                  <ZoomIn className="w-4 h-4" /> Expand View
                </span>
                <Sparkles className="w-4 h-4 text-[#C96C4A]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#F8F4EE] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A066]/30 text-[#4E342E] cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C96C4A] transition-colors focus:outline-none"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#EFE8DF] aspect-square md:aspect-auto">
                  <img
                    src={activeImage.image}
                    alt={activeImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3 py-1 rounded-full">
                      {activeImage.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4E342E] mt-4 leading-snug">
                      {activeImage.title}
                    </h3>
                    <p className="text-sm text-[#2B2B2B]/80 leading-relaxed mt-3">
                      {activeImage.caption}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#EFE8DF] flex items-center justify-between text-xs text-[#2B2B2B]/70">
                    <span className="font-medium text-[#C96C4A]">Sunndown Coffee La Union</span>
                    <span className="flex items-center gap-1 text-[#4E342E]">
                      <Heart className="w-4 h-4 fill-[#C96C4A] text-[#C96C4A]" /> Loved in Elyu
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
