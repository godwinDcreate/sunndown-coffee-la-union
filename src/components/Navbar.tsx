import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, MapPin, Clock, Coffee, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { images } from '../assets/images';

interface NavbarProps {
  orderCount: number;
  onOpenBag: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ orderCount, onOpenBag, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Coffee Menu', path: '/coffee-menu' },
    { name: 'Food Menu', path: '/food-menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Visit Us', path: '/visit-us' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <>
      {/* Top Bar Announcement */}
      <div className="bg-[#4E342E] text-[#F8F4EE] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-6 border-b border-[#D9A066]/20">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[#D9A066]">
          <Clock className="w-3.5 h-3.5" /> Open Daily: 7:00 AM – 10:00 PM
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#C96C4A]" /> San Juan, La Union, Philippines
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-[#EFE8DF]/80">
          <Sparkles className="w-3.5 h-3.5 text-[#D9A066]" /> 100% Pet-Friendly & High-Speed Fiber WiFi
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#EFE8DF] py-3'
            : 'bg-[#F8F4EE] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#6E2E1B] p-0.5 overflow-hidden shadow-sm shrink-0 border border-[#C96C4A]/30">
                <img
                  src={images.logo}
                  alt="sunndown logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] font-semibold text-[#C96C4A] -mb-0.5">
                  San Juan • La Union
                </span>
                <Logo size="md" />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[11px] uppercase tracking-widest font-medium transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#C96C4A] font-semibold'
                        : 'text-[#2B2B2B]/80 hover:text-[#4E342E]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C96C4A] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Order Bag Button */}
              <button
                onClick={onOpenBag}
                className="relative p-2.5 rounded-full text-[#4E342E] hover:bg-[#EFE8DF] transition-colors focus:outline-none"
                aria-label="View Order Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {orderCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C96C4A] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#F8F4EE] animate-pulse">
                    {orderCount}
                  </span>
                )}
              </button>

              {/* Reserve Table Inquiry */}
              <button
                onClick={onOpenReservation}
                className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full border border-[#4E342E]/30 text-[#4E342E] hover:border-[#4E342E] hover:bg-[#4E342E] hover:text-[#F8F4EE] transition-all"
              >
                Book a Table
              </button>

              {/* Visit Us CTA */}
              <Link
                to="/visit-us"
                className="text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full bg-[#C96C4A] text-white hover:bg-[#A85232] shadow-xs hover:shadow transition-all"
              >
                Visit Us
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenBag}
                className="relative p-2 rounded-full text-[#4E342E] hover:bg-[#EFE8DF] transition-colors focus:outline-none"
                aria-label="View Order Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {orderCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C96C4A] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {orderCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#4E342E] hover:bg-[#EFE8DF] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[88px] z-30 bg-[#F8F4EE] border-b border-[#EFE8DF] shadow-lg lg:hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#C96C4A] text-white font-semibold'
                          : 'text-[#2B2B2B] hover:bg-[#EFE8DF]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EFE8DF] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full text-center py-3 rounded-xl border border-[#4E342E] text-[#4E342E] font-medium hover:bg-[#4E342E] hover:text-white transition-colors"
                >
                  Book a Table Inquiry
                </button>
                <Link
                  to="/visit-us"
                  className="w-full text-center py-3 rounded-xl bg-[#C96C4A] text-white font-semibold hover:bg-[#A85232] transition-colors"
                >
                  Visit Sunndown La Union
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
