import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Wifi, Car, Heart, CheckCircle } from 'lucide-react';
import { TableReservation } from '../types';

export const VisitUsPage: React.FC = () => {
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

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#EFE8DF] px-3.5 py-1 rounded-full">
            Find Us in La Union
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#4E342E]">
            Visit Sunndown San Juan
          </h1>
          <p className="text-base sm:text-lg text-[#2B2B2B]/75 leading-relaxed font-light">
            Located along the main coastal stretch in San Juan, La Union—just a 2-minute walk from Urbiztondo surf beach.
          </p>
        </div>

        {/* Location Details + Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Info Cards */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-[#EFE8DF]/60 rounded-3xl p-8 border border-[#EFE8DF] space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C96C4A] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#4E342E]">Address & Landmark</h3>
                  <p className="text-sm text-[#2B2B2B]/80 mt-1 font-light leading-relaxed">
                    National Highway, Brgy. Urbiztondo, San Juan, La Union 2514, Philippines
                  </p>
                  <span className="text-xs text-[#C96C4A] font-semibold block mt-1">
                    (Landmark: Opposite Kahuna Resort & 2 mins from Urbiztondo Point)
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-[#4E342E]/10">
                <div className="w-12 h-12 rounded-2xl bg-[#4E342E] text-[#D9A066] flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#4E342E]">Operating Hours</h3>
                  <p className="text-sm text-[#2B2B2B]/80 mt-1 font-light">
                    <strong className="text-[#4E342E]">Monday – Sunday:</strong> 7:00 AM – 10:00 PM
                  </p>
                  <p className="text-xs text-[#2B2B2B]/60 mt-0.5">
                    Kitchen closes at 9:00 PM • Espresso bar & desserts open until 9:45 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-[#4E342E]/10">
                <div className="w-12 h-12 rounded-2xl bg-[#D9A066] text-[#4E342E] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#4E342E]">Contact & Social</h3>
                  <p className="text-sm text-[#2B2B2B]/80 mt-1">Phone: +63 (917) 123-4567</p>
                  <p className="text-sm text-[#2B2B2B]/80">Email: hello@sunndowncoffee.ph</p>
                  <p className="text-xs text-[#C96C4A] font-medium mt-1">Instagram: @sunndowncoffee.launion</p>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-[#4E342E] text-[#F8F4EE] rounded-3xl p-6 sm:p-8 space-y-4">
              <h4 className="font-serif text-xl font-medium text-[#D9A066]">Guest Amenities On-Site</h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#EFE8DF]/80">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#D9A066]" /> 100+ Mbps Fiber WiFi
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C96C4A]" /> 100% Pet Friendly
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#D9A066]" /> Dedicated Free Parking
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#D9A066]" /> Indoor Aircon & Al Fresco
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulated Google Map */}
          <div className="bg-[#EFE8DF] rounded-3xl overflow-hidden border border-[#EFE8DF] shadow-md flex flex-col justify-between min-h-[450px] relative">
            {/* Map Frame Background */}
            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                title="Sunndown Coffee La Union Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.753303723382!2d120.3204!3d16.6575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339183411b0e0000%3A0x0!2zMTYgw4A2OSc0OC4wIk4gMTIwwrAxOScxMy40IkU!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-120"
              />

              {/* Map Card Badge Overlay */}
              <div className="absolute top-4 left-4 right-4 bg-[#F8F4EE]/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#EFE8DF] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#4E342E]">
                    Sunndown Coffee La Union
                  </h4>
                  <p className="text-xs text-[#2B2B2B]/70">San Juan, La Union, Philippines</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#C96C4A] text-white text-xs font-semibold hover:bg-[#A85232] transition-colors flex items-center gap-1 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" /> Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Group Table Reservation Form Section */}
        <div className="bg-[#EFE8DF]/60 rounded-3xl p-8 sm:p-12 border border-[#EFE8DF] max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-3xl font-medium text-[#4E342E]">Table Request Sent!</h3>
              <p className="text-sm text-[#2B2B2B]/80 max-w-md mx-auto">
                Thank you <span className="font-semibold">{formData.name}</span>! Our La Union team will contact you at {formData.phone} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C96C4A] bg-[#F8F4EE] px-3.5 py-1 rounded-full">
                  Group Booking & Inquiries
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#4E342E]">
                  Planning a Visit to Sunndown?
                </h3>
                <p className="text-xs text-[#2B2B2B]/75 font-light">
                  Let us know your group size and date so we can prepare comfortable seating for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#4E342E] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full bg-[#F8F4EE] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
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
                    className="w-full bg-[#F8F4EE] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#4E342E] mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#F8F4EE] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#4E342E] mb-1">Time</label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#F8F4EE] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#4E342E] mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full bg-[#F8F4EE] border border-[#4E342E]/10 rounded-xl px-3.5 py-2.5 text-[#4E342E] focus:outline-none focus:border-[#C96C4A]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#C96C4A] hover:bg-[#A85232] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Send Table Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
