import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Coffee, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenReservation?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative my-16 rounded-3xl overflow-hidden bg-gradient-to-br from-[#C96C4A] via-[#B85B3A] to-[#4E342E] text-white p-8 sm:p-12 md:p-16 shadow-xl">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#D9A066]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-[#F8F4EE] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <Coffee className="w-3.5 h-3.5 text-[#D9A066]" /> Slow Living in San Juan
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F8F4EE]">
          Your Daily Coffee Haven in La Union
        </h2>

        <p className="text-base sm:text-lg text-[#F8F4EE]/90 font-light leading-relaxed">
          Whether you're stepping off the surf at Urbiztondo, opening your laptop for a quiet work session, or catching up with loved ones, Sunndown is ready to welcome you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/visit-us"
            className="px-8 py-3.5 rounded-full bg-[#F8F4EE] text-[#4E342E] hover:bg-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group"
          >
            <MapPin className="w-4 h-4 text-[#C96C4A]" />
            Visit Us in San Juan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {onOpenReservation && (
            <button
              onClick={onOpenReservation}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-sm transition-all"
            >
              Inquire for Group Table
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
