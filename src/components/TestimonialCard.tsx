import React from 'react';
import { TestimonialItem } from '../types';
import { Star, Quote, Coffee } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#F8F4EE] rounded-2xl p-6 sm:p-8 border border-[#EFE8DF] shadow-sm flex flex-col justify-between relative group hover:border-[#D9A066] transition-all">
      <Quote className="w-8 h-8 text-[#D9A066]/20 absolute top-6 right-6" />

      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 text-[#D9A066]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D9A066]" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-sm sm:text-base text-[#2B2B2B]/85 font-light leading-relaxed italic">
          "{testimonial.comment}"
        </p>

        {/* Favorite Drink Badge */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C96C4A] bg-[#EFE8DF] px-3 py-1 rounded-full">
            <Coffee className="w-3 h-3" /> Favorite: {testimonial.favoriteDrink}
          </span>
        </div>
      </div>

      {/* Author Details */}
      <div className="flex items-center space-x-3 pt-6 border-t border-[#EFE8DF] mt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border-2 border-[#D9A066]"
        />
        <div>
          <h4 className="font-serif text-base font-semibold text-[#4E342E]">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#2B2B2B]/60">
            {testimonial.role} • <span className="text-[#C96C4A]">{testimonial.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
