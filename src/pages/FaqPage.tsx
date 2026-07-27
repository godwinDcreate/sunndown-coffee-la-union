import React from 'react';
import { FaqAccordion } from '../components/FaqAccordion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Visitor Information
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            Everything you need to know about our opening hours, parking, WiFi, pet policies, power outlets, and payment options in San Juan, La Union.
          </p>
        </div>

        {/* Accordion Component */}
        <FaqAccordion />

        {/* Contact Help Banner */}
        <div className="bg-[#EFE8DF]/60 rounded-3xl p-8 sm:p-12 border border-[#EFE8DF] text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-medium text-[#4E342E]">
            Have a question not answered here?
          </h3>
          <p className="text-sm text-[#2B2B2B]/75 font-light">
            Feel free to send us an email or message us on Instagram. We're happy to help you plan your visit!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-[#C96C4A]">
            <a href="mailto:hello@sunndowncoffee.ph" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> hello@sunndowncoffee.ph
            </a>
            <a href="tel:+639171234567" className="flex items-center gap-2 hover:underline">
              <Phone className="w-4 h-4" /> +63 (917) 123-4567
            </a>
            <span className="flex items-center gap-2 text-[#4E342E]">
              <MapPin className="w-4 h-4 text-[#D9A066]" /> San Juan, La Union
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
