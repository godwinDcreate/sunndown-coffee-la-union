import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderBagDrawer } from './components/OrderBagDrawer';
import { ReservationModal } from './components/ReservationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoffeeMenuPage } from './pages/CoffeeMenuPage';
import { FoodMenuPage } from './pages/FoodMenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { VisitUsPage } from './pages/VisitUsPage';
import { FaqPage } from './pages/FaqPage';
import { OrderItem } from './types';
import { ShoppingBag, Calendar } from 'lucide-react';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Add Item to Order Bag
  const handleAddToBag = (newItem: OrderItem) => {
    setOrderItems((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === newItem.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
    setIsBagOpen(true);
  };

  // Adjust Item Quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  // Remove Item
  const handleRemoveItem = (id: string) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear Bag
  const handleClearBag = () => {
    setOrderItems([]);
  };

  const totalItemCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F4EE] text-[#2B2B2B] font-sans antialiased selection:bg-[#C96C4A] selection:text-white">
        
        {/* Navbar */}
        <Navbar
          orderCount={totalItemCount}
          onOpenBag={() => setIsBagOpen(true)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onAddToBag={handleAddToBag}
                  onOpenReservation={() => setIsReservationOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenReservation={() => setIsReservationOpen(true)} />}
            />
            <Route
              path="/coffee-menu"
              element={<CoffeeMenuPage onAddToBag={handleAddToBag} />}
            />
            <Route
              path="/food-menu"
              element={<FoodMenuPage onAddToBag={handleAddToBag} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenReservation={() => setIsReservationOpen(true)} />}
            />
            <Route path="/visit-us" element={<VisitUsPage />} />
            <Route path="/faqs" element={<FaqPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Drawers & Modals */}
        <OrderBagDrawer
          isOpen={isBagOpen}
          onClose={() => setIsBagOpen(false)}
          items={orderItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearBag={handleClearBag}
        />

        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />

        {/* Floating Quick Action Button */}
        {totalItemCount > 0 && !isBagOpen && (
          <button
            onClick={() => setIsBagOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-[#C96C4A] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#A85232] transition-all flex items-center gap-3 animate-bounce-slow"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Order Bag ({totalItemCount})
            </span>
            <span className="bg-[#4E342E] text-[#D9A066] text-xs font-bold px-2.5 py-0.5 rounded-full">
              ₱{orderItems.reduce((acc, i) => acc + i.price * i.quantity, 0)}
            </span>
          </button>
        )}

      </div>
    </Router>
  );
}
