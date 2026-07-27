import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { CtaBanner } from '../components/CtaBanner';
import { Coffee, Heart, Smile, Sun, Shield, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from '../assets/images';

interface AboutPageProps {
  onOpenReservation?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenReservation }) => {
  const coreValues = [
    {
      icon: <Coffee className="w-6 h-6 text-[#C96C4A]" />,
      title: 'Uncompromising Specialty Coffee',
      desc: 'We roast and pull single-origin Benguet beans and specialty international micro-lots with calibrated water chemistry and precision extraction.'
    },
    {
      icon: <Smile className="w-6 h-6 text-[#D9A066]" />,
      title: 'Warm & Welcoming Staff',
      desc: 'Hospitality is at the heart of Sunndown. Our baristas take time to guide you through flavor profiles and share recommendations.'
    },
    {
      icon: <Sun className="w-6 h-6 text-[#C96C4A]" />,
      title: 'Minimalist Tropical Aesthetics',
      desc: 'Inspired by Scandinavian simplicity and coastal warmth—terracotta, oak wood, linen textures, and sunlit greenery.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#D9A066]" />,
      title: 'Community & Slow Living',
      desc: 'A sanctuary designed to encourage slow mornings, deep conversations, pet-friendly outdoor lounges, and creative work.'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Our La Union Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            Brewed for Slow Mornings in San Juan
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            A relaxing specialty coffee destination where locals, travelers, surfers, and coffee lovers gather over thoughtfully brewed coffee and handcrafted meals.
          </p>
        </div>

        {/* Feature Story Grid 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A066]">
              The Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4E342E] leading-tight">
              A Space Built Around Light, Connection, and Coffee Craft
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed font-light">
              Sunndown Coffee began with a simple belief: that coffee should be an experience of presence. Nestled in San Juan, La Union—the surfing capital of Northern Luzon—we designed Sunndown as an architectural respite from the bustling beach crowd.
            </p>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed font-light">
              With warm terracotta walls, natural oak furniture, lush tropical fronds, and golden sunlight streaming through glass windows, Sunndown offers a cozy atmosphere where time slows down.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#C96C4A]">
              <span className="flex items-center gap-1.5 bg-[#EFE8DF] px-3 py-1.5 rounded-full">
                <MapPin className="w-4 h-4" /> San Juan, La Union
              </span>
              <span className="flex items-center gap-1.5 bg-[#EFE8DF] px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4" /> Est. 2023
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-[#EFE8DF]"
          >
            <img
              src={images.cafeInterior}
              alt="Sunndown Coffee Interior Vibe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-serif text-lg">
              "The warmth of La Union sunlight inside every cup."
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-[#EFE8DF]/60 rounded-3xl p-8 sm:p-12 md:p-16 border border-[#EFE8DF]">
          <SectionTitle
            eyebrow="What Drives Us"
            title="The Five Pillars of Sunndown"
            subtitle="Every detail in our café is curated to deliver an elevated yet laid-back coffee experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-[#F8F4EE] rounded-2xl p-6 border border-[#EFE8DF] space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#EFE8DF] flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#4E342E]">
                  {value.title}
                </h3>
                <p className="text-xs text-[#2B2B2B]/75 leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Story Grid 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-[#EFE8DF] order-2 lg:order-1"
          >
            <img
              src={images.specialtyLatte}
              alt="Specialty Coffee Pouring"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A]">
              Our Coffee Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4E342E] leading-tight">
              Sourcing Benguet Arabica & Specialty Imports
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed font-light">
              We proudly partner with coffee farmers in the highlands of Benguet to showcase northern Philippine coffee heritage. From single-origin V60 pour overs to our viral Sea Salt Latte and Black Oat Milk Shaken Espresso, every drink is an homage to quality.
            </p>
            <p className="text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed font-light">
              Our kitchen serves all-day brunch featuring 81-layer Normandy butter croissants, artisan sourdough toasts, four-cheese truffle grilled sandwiches, and local Vigan longganisa bowls.
            </p>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <CtaBanner onOpenReservation={onOpenReservation} />

      </div>
    </div>
  );
};
