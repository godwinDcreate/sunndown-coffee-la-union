import React, { useState } from 'react';
import { OrderItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, Coffee, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface OrderBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
}

export const OrderBagDrawer: React.FC<OrderBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}) => {
  const [orderType, setOrderType] = useState<'Dine-In' | 'Takeout'>('Dine-In');
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('As soon as possible (~15 mins)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const ref = `SNN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setIsSubmitted(true);
  };

  const resetOrderState = () => {
    setIsSubmitted(false);
    onClearBag();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Slide-Over */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#F8F4EE] shadow-2xl flex flex-col justify-between text-[#4E342E] border-l border-[#EFE8DF]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#EFE8DF] flex items-center justify-between bg-[#EFE8DF]/50">
              <div className="flex items-center space-x-3">
                <Logo size="sm" showTagline={false} />
                <span className="bg-[#C96C4A] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {items.reduce((acc, i) => acc + i.quantity, 0)} Items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#4E342E]/70 hover:text-[#4E342E] hover:bg-[#EFE8DF] rounded-full transition-colors"
                aria-label="Close Order Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            {isSubmitted ? (
              <div className="p-8 space-y-6 text-center my-auto">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A]">
                    Order Request Received
                  </span>
                  <h4 className="font-serif text-3xl font-medium text-[#4E342E] mt-1">
                    Order #{orderRef}
                  </h4>
                  <p className="text-xs text-[#2B2B2B]/75 mt-2 leading-relaxed">
                    Thank you <span className="font-semibold">{customerName || 'Guest'}</span>! We are preparing your {orderType.toLowerCase()} order at Sunndown Coffee San Juan, La Union.
                  </p>
                </div>

                <div className="bg-[#EFE8DF] rounded-2xl p-4 text-xs space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-[#2B2B2B]/60">Order Type:</span>
                    <span className="font-semibold text-[#4E342E]">{orderType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2B2B2B]/60">Est. Pickup/Dine-In:</span>
                    <span className="font-semibold text-[#C96C4A]">{pickupTime}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#4E342E]/10 font-semibold text-sm text-[#4E342E]">
                    <span>Total Amount:</span>
                    <span>₱{subtotal}</span>
                  </div>
                </div>

                <button
                  onClick={resetOrderState}
                  className="w-full py-3 rounded-full bg-[#4E342E] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#C96C4A] transition-colors"
                >
                  Done & Back to Menu
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 overflow-y-auto space-y-4 flex-1">
                  {items.length === 0 ? (
                    <div className="text-center py-16 text-[#2B2B2B]/60 space-y-3">
                      <Coffee className="w-12 h-12 text-[#D9A066] mx-auto opacity-60" />
                      <p className="font-serif text-xl font-medium text-[#4E342E]">Your bag is empty</p>
                      <p className="text-xs max-w-xs mx-auto">
                        Explore our specialty coffees and handcrafted sourdough food to add items.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white rounded-2xl p-4 border border-[#EFE8DF] flex gap-3 shadow-2xs items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#EFE8DF]"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-base font-semibold text-[#4E342E] truncate">
                              {item.name}
                            </h4>
                            <div className="text-[11px] text-[#2B2B2B]/60 flex items-center gap-2">
                              {item.temperature && <span>{item.temperature}</span>}
                              {item.milk && <span>• {item.milk}</span>}
                            </div>
                            <span className="text-xs font-semibold text-[#C96C4A] block mt-0.5">
                              ₱{item.price * item.quantity}
                            </span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-1 bg-[#EFE8DF] rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:bg-white rounded text-[#4E342E]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:bg-white rounded text-[#4E342E]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors ml-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Checkout Form */}
                {items.length > 0 && (
                  <form onSubmit={handleSubmitOrder} className="p-6 bg-[#EFE8DF]/60 border-t border-[#EFE8DF] space-y-4">
                    {/* Order Type Tabs */}
                    <div className="flex bg-[#EFE8DF] p-1 rounded-xl text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setOrderType('Dine-In')}
                        className={`flex-1 py-1.5 rounded-lg transition-all ${
                          orderType === 'Dine-In' ? 'bg-[#4E342E] text-white' : 'text-[#4E342E]'
                        }`}
                      >
                        Dine-In at Cafe
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('Takeout')}
                        className={`flex-1 py-1.5 rounded-lg transition-all ${
                          orderType === 'Takeout' ? 'bg-[#4E342E] text-white' : 'text-[#4E342E]'
                        }`}
                      >
                        Takeout / Pickup
                      </button>
                    </div>

                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your Name (for order callout)"
                        className="w-full text-xs bg-white border border-[#4E342E]/15 rounded-xl px-3.5 py-2 text-[#4E342E] placeholder-[#4E342E]/50 focus:outline-none focus:border-[#C96C4A]"
                      />
                    </div>

                    <div className="pt-2 border-t border-[#4E342E]/10 space-y-1 text-xs">
                      <div className="flex justify-between text-[#2B2B2B]/70">
                        <span>Subtotal</span>
                        <span>₱{subtotal}</span>
                      </div>
                      <div className="flex justify-between font-serif text-base font-semibold text-[#4E342E] pt-1">
                        <span>Total</span>
                        <span>₱{subtotal}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#C96C4A] hover:bg-[#A85232] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      Send Order Request • ₱{subtotal} <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
