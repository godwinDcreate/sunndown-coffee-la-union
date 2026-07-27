import React, { useState } from 'react';
import { TableReservation } from '../types';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<TableReservation>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    guests: 2,
    seatingArea: 'Indoor Aircon',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="relative z-10 w-full max-w-xl bg-[#F8F4EE] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#EFE8DF] text-[#4E342E]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE8DF] text-[#4E342E] hover:bg-[#C96C4A] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A]">
                    Inquiry Confirmed
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-[#4E342E] mt-1">
                    Table Request Received!
                  </h3>
                  <p className="text-xs text-[#2B2B2B]/75 mt-2 leading-relaxed max-w-md mx-auto">
                    Thank you <span className="font-semibold">{formData.name}</span>! We have noted your table inquiry for {formData.guests} guests on {formData.date} at {formData.time} ({formData.seatingArea}). Our team in San Juan, La Union will reach out via SMS/Email to confirm.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#4E342E] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#C96C4A] transition-colors"
                >
                  Back to Sunndown Website
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Logo size="sm" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3 py-1 rounded-full">
                      San Juan, La Union
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#4E342E] pt-1">
                    Inquire for a Table
                  </h3>
                  <p className="text-xs text-[#2B2B2B]/75 font-light">
                    Walk-ins are always welcome! Reserve in advance for groups, work sessions, or slow morning brunches.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#4E342E] mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#4E342E] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+63 9XX XXX XXXX"
                        className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-[#4E342E] mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#4E342E] mb-1">Time</label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#4E342E] mb-1">Number of Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#4E342E] mb-1">Preferred Seating Area</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Indoor Aircon', 'Al Fresco Terrace', 'Espresso Bar Counter'] as const).map((area) => (
                        <button
                          key={area}
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingArea: area })}
                          className={`py-2 px-2 rounded-xl text-[11px] font-semibold transition-all border ${
                            formData.seatingArea === area
                              ? 'bg-[#4E342E] text-white border-[#4E342E]'
                              : 'bg-[#EFE8DF] text-[#4E342E] border-transparent hover:bg-[#D9A066]/30'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#4E342E] mb-1">Special Notes / Requests</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. High chair needed, pet bringing, birthday celebration..."
                      className="w-full bg-[#EFE8DF] border border-[#4E342E]/10 rounded-xl px-3.5 py-2 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#C96C4A] hover:bg-[#A85232] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all mt-4"
                  >
                    Submit Table Inquiry
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
