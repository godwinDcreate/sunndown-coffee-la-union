import React, { useState } from 'react';
import { FoodItem, OrderItem } from '../types';
import { Plus, Check, Clock, Utensils } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodCardProps {
  item: FoodItem;
  onAddToBag: (orderItem: OrderItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onAddToBag }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToBag({
      id: `${item.id}-food`,
      type: 'food',
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="bg-[#F8F4EE] rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Image Header */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DF]">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {item.isPopular && (
              <span className="bg-[#C96C4A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                Brunch Favorite
              </span>
            )}
            {item.prepTime && (
              <span className="bg-[#4E342E]/90 text-[#D9A066] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                <Clock className="w-3 h-3" /> {item.prepTime}
              </span>
            )}
          </div>

          {/* Price Tag */}
          <div className="absolute bottom-3 right-3 bg-[#4E342E]/90 text-[#F8F4EE] px-3 py-1 rounded-full text-sm font-semibold tracking-tight shadow-md backdrop-blur-sm">
            ₱{item.price}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-3">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#C96C4A] uppercase block mb-0.5">
              {item.category}
            </span>
            <h3 className="font-serif text-xl font-medium text-[#4E342E] leading-snug">
              {item.name}
            </h3>
          </div>

          <p className="text-xs text-[#2B2B2B]/75 leading-relaxed line-clamp-3 font-normal">
            {item.description}
          </p>

          {/* Dietary Notes */}
          {item.dietaryNotes && item.dietaryNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.dietaryNotes.map((note, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-medium bg-[#EFE8DF] text-[#C96C4A] px-2.5 py-0.5 rounded-full flex items-center gap-1"
                >
                  <Utensils className="w-2.5 h-2.5" /> {note}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action */}
      <div className="p-5 pt-0">
        <button
          onClick={handleAdd}
          className={`w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
            isAdded
              ? 'bg-emerald-700 text-white'
              : 'bg-[#4E342E] hover:bg-[#C96C4A] text-[#F8F4EE] shadow-xs'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" /> Added to Order Bag
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Add to Order • ₱{item.price}
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
