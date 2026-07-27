import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { CoffeeCard } from '../components/CoffeeCard';
import { FoodCard } from '../components/FoodCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { TestimonialCard } from '../components/TestimonialCard';
import { InstagramFeed } from '../components/InstagramFeed';
import { CtaBanner } from '../components/CtaBanner';
import { COFFEE_MENU, FOOD_MENU } from '../data/menuData';
import { TESTIMONIALS } from '../data/testimonialData';
import { OrderItem } from '../types';
import { ArrowRight, Coffee, Heart, Wifi, Sun, Sparkles, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onAddToBag: (item: OrderItem) => void;
  onOpenReservation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToBag, onOpenReservation }) => {
  const signatureDrinks = COFFEE_MENU.filter((item) => item.isSignature || item.isPopular).slice(0, 4);
  const breakfastFavorites = FOOD_MENU.slice(0, 3);

  const highlights = [
    {
      icon: <Coffee className="w-6 h-6 text-[#C96C4A]" />,
      title: 'Specialty Benguet & Global Brews',
      description: 'Single-origin beans sourced directly from Benguet highlands and Ethiopia, roasted for optimal floral and cocoa notes.'
    },
    {
      icon: <Sun className="w-6 h-6 text-[#D9A066]" />,
      title: 'Tropical Scandinavian Interior',
      description: 'Warm terracotta arches, oak wood tables, and abundant natural light designed for slow mornings and relaxation.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#C96C4A]" />,
      title: 'Handcrafted Sourdough Brunch',
      description: 'All-day breakfast, 81-layer French croissants, and artisanal meals prepared fresh daily by our culinary team.'
    },
    {
      icon: <Wifi className="w-6 h-6 text-[#D9A066]" />,
      title: 'Nomad & Work Friendly',
      description: 'Complimentary 100+ Mbps fiber WiFi, accessible power outlets, quiet working corners, and 100% pet friendliness.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenReservation={onOpenReservation} />

      {/* Featured Items Quick Tray */}
      <section className="bg-white border-b border-[#EFE8DF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFE8DF]">
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-[#C96C4A] text-2xl font-serif italic mb-1">01</span>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E342E] mb-1">Dirty Matcha Latte</h4>
            <p className="text-[11px] text-[#2B2B2B]/70 leading-relaxed font-light">Uji ceremonial matcha layered with Benguet double espresso.</p>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-[#C96C4A] text-2xl font-serif italic mb-1">02</span>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E342E] mb-1">Spanish Sea Salt Latte</h4>
            <p className="text-[11px] text-[#2B2B2B]/70 leading-relaxed font-light">House condensed milk cream topped with pink Himalayan salt.</p>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="text-[#C96C4A] text-2xl font-serif italic mb-1">03</span>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#4E342E] mb-1">Black Oat Shaken Espresso</h4>
            <p className="text-[11px] text-[#2B2B2B]/70 leading-relaxed font-light">Espresso shaken with muscovado syrup and organic oat milk.</p>
          </div>

          <Link
            to="/coffee-menu"
            className="p-6 sm:p-8 flex flex-col items-center justify-center bg-[#F8F4EE] hover:bg-[#EFE8DF] transition-colors group text-center cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#4E342E] group-hover:text-[#C96C4A] transition-colors">
              Explore Full Menu
            </span>
            <div className="w-12 h-[1px] bg-[#4E342E] group-hover:bg-[#C96C4A] mt-2.5 transition-colors" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us / Value Proposition */}
      <section className="py-16 md:py-24 bg-[#EFE8DF]/50 border-y border-[#EFE8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="The Sunndown Vibe"
            title="Where Coffee Culture Meets Coastal Slow Living"
            subtitle="Thoughtfully created for coffee lovers, surfers, digital nomads, and travelers exploring San Juan, La Union."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F8F4EE] rounded-2xl p-6 sm:p-8 border border-[#EFE8DF] shadow-xs space-y-4 hover:border-[#D9A066] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFE8DF] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#4E342E]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Signature Drinks */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
              House Specialties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#4E342E] mt-3">
              Signature Coffee Creations
            </h2>
            <p className="text-sm text-[#2B2B2B]/75 mt-2 font-light max-w-xl">
              Crafted with precision extraction, house syrups, and signature sea salt cream.
            </p>
          </div>
          <Link
            to="/coffee-menu"
            className="mt-4 md:mt-0 text-xs sm:text-sm font-semibold text-[#C96C4A] hover:text-[#A85232] inline-flex items-center gap-1.5 group"
          >
            View Full Coffee Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDrinks.map((coffee) => (
            <CoffeeCard key={coffee.id} item={coffee} onAddToBag={onAddToBag} />
          ))}
        </div>
      </section>

      {/* Featured Brunch Favorites */}
      <section className="py-16 md:py-24 bg-[#EFE8DF]/40 border-t border-[#EFE8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#F8F4EE] px-3.5 py-1 rounded-full">
                All-Day Brunch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#4E342E] mt-3">
                Handcrafted Food & Bakery
              </h2>
              <p className="text-sm text-[#2B2B2B]/75 mt-2 font-light max-w-xl">
                Freshly baked French croissants, artisanal sourdough toast, and local longganisa bowls.
              </p>
            </div>
            <Link
              to="/food-menu"
              className="mt-4 md:mt-0 text-xs sm:text-sm font-semibold text-[#C96C4A] hover:text-[#A85232] inline-flex items-center gap-1.5 group"
            >
              View Full Food Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {breakfastFavorites.map((food) => (
              <FoodCard key={food.id} item={food} onAddToBag={onAddToBag} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Visual Experience"
          title="Inside Sunndown La Union"
          subtitle="Explore our warm terracotta walls, sunlit espresso bar, and cozy seating."
        />
        <GalleryGrid limit={6} />
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#4E342E] hover:bg-[#C96C4A] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Explore Complete Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#4E342E] text-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Loved in Elyu"
            title="What Our Guests Say"
            subtitle="Stories from surfers, digital nomads, couples, and weekend travelers."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstagramFeed />
      </section>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CtaBanner onOpenReservation={onOpenReservation} />
      </div>
    </div>
  );
};
