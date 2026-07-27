import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { CtaBanner } from '../components/CtaBanner';

interface GalleryPageProps {
  onOpenReservation?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenReservation }) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Atmosphere & Lifestyle
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            Moments at Sunndown
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            A visual journey through our specialty brews, handcrafted brunch plates, warm terracotta architecture, and coastal community vibes in La Union.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />

        {/* CTA Banner */}
        <CtaBanner onOpenReservation={onOpenReservation} />

      </div>
    </div>
  );
};
