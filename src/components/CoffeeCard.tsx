import React, { useState } from 'react';
import { CoffeeItem, OrderItem } from '../types';
import { Plus, Check, Sparkles, Thermometer, Flame, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';

interface CoffeeCardProps {
  item: CoffeeItem;
  onAddToBag: (orderItem: OrderItem) => void;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ item, onAddToBag }) => {
  const [selectedTemp, setSelectedTemp] = useState<'Hot' | 'Iced'>(
    item.temperatureOptions?.includes('Iced') ? 'Iced' : 'Hot'
  );
  const [selectedMilk, setSelectedMilk] = useState<string>(
    item.milkOptions && item.milkOptions.length > 0 ? item.milkOptions[0] : ''
  );
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToBag({
      id: `${item.id}-${selectedTemp}-${selectedMilk}`,
      type: 'coffee',
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      temperature: selectedTemp,
      milk: selectedMilk || undefined,
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
            {item.isSignature && (
              <span className="bg-[#C96C4A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3" /> Signature
              </span>
            )}
            {item.isPopular && !item.isSignature && (
              <span className="bg-[#4E342E] text-[#D9A066] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                Best Seller
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
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-[#C96C4A] uppercase block mb-0.5">
                {item.category}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#4E342E] leading-snug">
                {item.name}
              </h3>
            </div>
          </div>

          <p className="text-xs text-[#2B2B2B]/75 leading-relaxed line-clamp-2 font-normal">
            {item.description}
          </p>

          {/* Tasting Notes */}
          {item.tastingNotes && item.tastingNotes.length > 0 && (
            <div className="pt-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4E342E]/60 block mb-1">
                Tasting Notes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-[#EFE8DF] text-[#4E342E] px-2 py-0.5 rounded-md"
                  >
                    • {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Temperature Choice Pills */}
          {item.temperatureOptions && item.temperatureOptions.length > 1 && (
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase text-[#4E342E]/60">Temp:</span>
              <div className="flex bg-[#EFE8DF] p-0.5 rounded-lg text-xs font-medium">
                {item.temperatureOptions.map((temp) => (
                  <button
                    key={temp}
                    onClick={() => setSelectedTemp(temp)}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] transition-all flex items-center gap-1 ${
                      selectedTemp === temp
                        ? 'bg-[#4E342E] text-white shadow-xs font-semibold'
                        : 'text-[#4E342E]/70 hover:text-[#4E342E]'
                    }`}
                  >
                    {temp === 'Hot' ? <Flame className="w-2.5 h-2.5 text-[#D9A066]" /> : <Snowflake className="w-2.5 h-2.5 text-blue-300" />}
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Milk Options */}
          {item.milkOptions && item.milkOptions.length > 0 && (
            <div className="pt-1">
              <select
                value={selectedMilk}
                onChange={(e) => setSelectedMilk(e.target.value)}
                className="w-full text-xs bg-[#EFE8DF]/80 border border-[#4E342E]/10 rounded-lg px-2.5 py-1.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
              >
                {item.milkOptions.map((milkOption) => (
                  <option key={milkOption} value={milkOption}>
                    {milkOption}
                  </option>
                ))}
              </select>
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
