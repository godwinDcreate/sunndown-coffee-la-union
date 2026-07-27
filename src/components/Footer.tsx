import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart, Coffee, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { images } from '../assets/images';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4E342E] text-[#F8F4EE] border-t border-[#D9A066]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#F8F4EE]/10">
          
          {/* Brand Info */}
          <div className="space-y-5">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#6E2E1B] p-0.5 overflow-hidden shadow-md shrink-0 border border-[#D9A066]/30">
                  <img
                    src={images.logo}
                    alt="sunndown logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <span className="block text-[10px] font-sans tracking-[0.3em] text-[#D9A066] uppercase font-semibold mb-0.5">
                    San Juan • La Union
                  </span>
                  <Logo variant="light" size="lg" />
                </div>
              </Link>
            </div>
            <p className="text-sm text-[#EFE8DF]/80 leading-relaxed font-light">
              A relaxing specialty coffee destination in San Juan, La Union where surfers, travelers, and coffee enthusiasts gather over thoughtfully brewed coffee and handcrafted meals.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F4EE]/10 flex items-center justify-center hover:bg-[#C96C4A] hover:text-white transition-all text-[#D9A066]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F4EE]/10 flex items-center justify-center hover:bg-[#C96C4A] hover:text-white transition-all text-[#D9A066]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg font-medium text-[#D9A066] mb-5 tracking-wide">
              Explore Sunndown
            </h3>
            <ul className="space-y-3 text-sm text-[#EFE8DF]/80">
              <li>
                <Link to="/coffee-menu" className="hover:text-[#D9A066] transition-colors flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#C96C4A]" /> Specialty Coffee Menu
                </Link>
              </li>
              <li>
                <Link to="/food-menu" className="hover:text-[#D9A066] transition-colors">
                  Handcrafted Food & Brunch
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D9A066] transition-colors">
                  Our La Union Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D9A066] transition-colors">
                  Atmosphere Gallery
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#D9A066] transition-colors">
                  Visitor FAQs & Amenities
                </Link>
              </li>
              <li>
                <Link to="/visit-us" className="hover:text-[#D9A066] transition-colors">
                  Location & Operating Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Amenities */}
          <div>
            <h3 className="font-serif text-lg font-medium text-[#D9A066] mb-5 tracking-wide">
              Hours & Vibe
            </h3>
            <ul className="space-y-3 text-sm text-[#EFE8DF]/80">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C96C4A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#F8F4EE] block">Open Daily</span>
                  <span>7:00 AM – 10:00 PM</span>
                  <span className="text-xs text-[#D9A066] block mt-0.5">Kitchen closes at 9:00 PM</span>
                </div>
              </li>
              <li className="pt-2 text-xs text-[#EFE8DF]/70 space-y-1">
                <p>• 100% Pet Friendly (Indoor & Outdoor)</p>
                <p>• Fiber WiFi 100+ Mbps for Remote Work</p>
                <p>• Dedicated Power Outlets at Work Tables</p>
                <p>• Free Customer Parking On-Site</p>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="font-serif text-lg font-medium text-[#D9A066] mb-5 tracking-wide">
              Visit Us in Elyu
            </h3>
            <ul className="space-y-3 text-sm text-[#EFE8DF]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C96C4A] shrink-0 mt-0.5" />
                <span>National Highway, San Juan, La Union, 2514 Philippines</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C96C4A] shrink-0" />
                <span>+63 (917) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C96C4A] shrink-0" />
                <span>hello@sunndowncoffee.ph</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/visit-us"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-[#C96C4A] text-white hover:bg-[#A85232] transition-colors"
              >
                Get Directions on Map <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE8DF]/60 gap-4">
          <p>© {new Date().getFullYear()} Sunndown Coffee La Union. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for slow mornings & great conversations <Heart className="w-3 h-3 text-[#C96C4A] fill-[#C96C4A]" /> in San Juan, La Union
          </p>
        </div>
      </div>
    </footer>
  );
};
