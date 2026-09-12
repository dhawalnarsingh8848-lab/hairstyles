import React from 'react';
import { Phone, Navigation, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface ContactSectionProps {
  onBookClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookClick }) => {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2EADB]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1A17] text-[#FAF8F5] rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle gold accent frame */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A869] to-transparent" />

          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#2D2821] border border-[#443D32] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jawed Habib • Siddharthanagar</span>
            </div>

            {/* Exact requested heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              Let's Make Your Next Look Exceptional.
            </h2>

            {/* Display details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-4 border-y border-[#383229]">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A251E] flex items-center justify-center text-[#C5A869]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-wider text-[#A39989]">Phone</p>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="text-lg sm:text-xl font-bold text-white hover:text-[#C5A869] transition-colors"
                  >
                    {salonInfo.phone}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#383229]" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A251E] flex items-center justify-center text-[#C5A869]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-wider text-[#A39989]">Address</p>
                  <p className="text-sm font-medium text-white max-w-xs">
                    {salonInfo.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Status note */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#C5BBAA]">
              <Clock className="w-4 h-4 text-[#10B981]" />
              <span>Current Status: <strong className="text-white">{salonInfo.status}</strong></span>
            </div>

            {/* Required Buttons: CALL NOW, GET DIRECTIONS, BOOK APPOINTMENT */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              
              {/* CALL NOW */}
              <a
                id="contact-call-btn"
                href={`tel:${salonInfo.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#1C1A17] bg-[#C5A869] hover:bg-[#D6BB80] active:scale-98 rounded-xl shadow-md transition-all font-sans cursor-pointer focus-visible:outline-hidden"
              >
                <Phone className="w-4 h-4 text-[#1C1A17]" />
                <span>Call Now</span>
              </a>

              {/* GET DIRECTIONS */}
              <a
                id="contact-directions-btn"
                href={salonInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#2A251E] hover:bg-[#3B342A] border border-[#483F33] active:scale-98 rounded-xl transition-all cursor-pointer focus-visible:outline-hidden"
              >
                <Navigation className="w-4 h-4 text-[#C5A869]" />
                <span>Get Directions</span>
              </a>

              {/* BOOK APPOINTMENT */}
              <button
                id="contact-book-btn"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-transparent hover:bg-white/10 border border-[#FAF8F5]/30 active:scale-98 rounded-xl transition-all cursor-pointer focus-visible:outline-hidden"
              >
                <Calendar className="w-4 h-4 text-[#C5A869]" />
                <span>Book Appointment</span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
