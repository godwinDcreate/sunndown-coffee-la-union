import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Coffee, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from '../assets/images';

interface HeroProps {
  onOpenReservation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative bg-[#F8F4EE] border-b border-[#EFE8DF] overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DF] text-[#C96C4A] text-[10px] uppercase tracking-[0.3em] font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" /> San Juan • La Union, Philippines
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-medium leading-[0.95] text-[#4E342E] tracking-tight">
                Brewed for <br />
                <span className="italic font-light text-[#C96C4A]">Slow Mornings.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#2B2B2B]/80 font-light leading-relaxed max-w-xl"
            >
              Experience specialty coffee, handcrafted brunch, and cozy moments in the heart of the surf capital. Single-origin Benguet beans extracted with precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/coffee-menu"
                className="px-8 py-4 bg-[#4E342E] text-[#F8F4EE] text-xs uppercase tracking-widest font-semibold hover:bg-[#C96C4A] transition-colors shadow-sm inline-flex items-center gap-2 group"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/visit-us"
                className="px-8 py-4 border border-[#4E342E] text-[#4E342E] text-xs uppercase tracking-widest font-semibold hover:bg-[#4E342E] hover:text-[#F8F4EE] transition-colors"
              >
                Visit Us
              </Link>

              {onOpenReservation && (
                <button
                  onClick={onOpenReservation}
                  className="text-xs uppercase tracking-widest font-semibold text-[#C96C4A] hover:text-[#A85232] underline underline-offset-4 transition-colors ml-2"
                >
                  Book Table
                </button>
              )}
            </motion.div>

            {/* Quick Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-8 border-t border-[#EFE8DF] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#2B2B2B]/80"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#C96C4A] shrink-0">
                  <Star className="w-4 h-4 fill-[#C96C4A]" />
                </div>
                <div>
                  <span className="font-bold text-[#4E342E] block text-xs">4.9 / 5.0 Rating</span>
                  <span className="text-[10px] text-[#2B2B2B]/60">500+ Local Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#4E342E] shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#4E342E] block text-xs">Benguet Micro-lots</span>
                  <span className="text-[10px] text-[#2B2B2B]/60">Single-Origin Arabica</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DF] flex items-center justify-center text-[#C96C4A] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#4E342E] block text-xs">100% Pet Friendly</span>
                  <span className="text-[10px] text-[#2B2B2B]/60">Aircon & Al Fresco</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Signature Visual Arch & Information Grid */}
          <div className="lg:col-span-5 relative flex flex-col justify-between space-y-6">
            
            {/* Arched Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-xl relative border border-[#EFE8DF] bg-[#EFE8DF]"
            >
              <img
                src={images.heroCafe}
                alt="Sunndown Coffee La Union"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#D9A066]">Signature Espresso</p>
                  <h3 className="text-xl sm:text-2xl font-serif italic">Sea Salt Cream Latte</h3>
                </div>
                <span className="text-xs font-serif italic bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  ₱185
                </span>
              </div>
            </motion.div>

            {/* Information Grid Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-5 bg-white border border-[#EFE8DF] rounded-2xl shadow-xs">
                <p className="text-[9px] uppercase tracking-widest text-[#D9A066] font-bold mb-1">Opening Hours</p>
                <p className="text-xs font-semibold text-[#4E342E] leading-relaxed">Mon — Sun<br />7:00 AM — 10:00 PM</p>
              </div>

              <div className="p-5 bg-[#4E342E] text-white rounded-2xl shadow-xs">
                <p className="text-[9px] uppercase tracking-widest text-[#D9A066] font-bold mb-1">Location</p>
                <p className="text-xs font-semibold leading-relaxed text-[#F8F4EE]">San Juan Beach<br />La Union, PH</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
