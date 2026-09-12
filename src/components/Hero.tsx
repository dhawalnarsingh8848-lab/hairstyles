import React, { useState } from 'react';
import { Calendar, Phone, Star, Clock, MapPin, Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle organic warm background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F3ECE0]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EFE6D6]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Operational Status & Rating Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 sm:gap-3 bg-[#F4EFE6] border border-[#E4DCCF] px-4 py-1.5 rounded-full shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span className="text-xs font-semibold text-[#1F2937]">Open · Closes 7:30 PM</span>
              </div>
              <span className="text-xs text-[#9C9484]">•</span>
              <div className="flex items-center gap-1 text-[#9E7E3C]">
                <Star className="w-3.5 h-3.5 fill-[#C5A869] text-[#C5A869]" />
                <span className="text-xs font-bold text-[#1C1A17]">{salonInfo.rating.toFixed(1)}</span>
                <span className="text-xs text-[#6B6354]">({salonInfo.reviewCount} Reviews)</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#171614] leading-[1.08]">
                Style That <br />
                <span className="italic font-normal text-[#9E7E3C]">Defines You.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#5C564A] font-light max-w-xl leading-relaxed">
                Professional hair and beauty services in Siddharthanagar. Dedicated craftsmanship tailored to your individual look and lifestyle.
              </p>
            </div>

            {/* CTAs with strict 2x padding ratio */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                id="hero-book-btn"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-md transition-all group cursor-pointer focus-visible:outline-hidden"
              >
                <Calendar className="w-4 h-4 text-[#C5A869] group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${salonInfo.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#1C1A17] bg-[#F7F3EB] hover:bg-[#ECE4D6] border border-[#DDD3C2] active:scale-98 rounded-xl transition-all shadow-2xs focus-visible:outline-hidden"
              >
                <Phone className="w-4 h-4 text-[#9E7E3C]" />
                <span>Call {salonInfo.phone}</span>
              </a>
            </div>

            {/* Location & Quick Context Bar */}
            <div className="pt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-[#70685B] border-t border-[#E8E2D5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9E7E3C] shrink-0" />
                <span className="font-medium text-[#2C271F]">{salonInfo.address}</span>
              </div>
              <span className="hidden sm:inline text-[#D0C7B7]">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Open today until 7:30 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Salon Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with subtle hairline warm border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] bg-[#EFEAE1]">
                {!imageLoaded && (
                  <div className="absolute inset-0 skeleton-shimmer z-10" />
                )}
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Jawed Habib Salon interior and styling stations at Ganpati Tower, Siddharthanagar"
                  className={`w-full h-[420px] sm:h-[480px] lg:h-[510px] object-cover object-center transform hover:scale-102 transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Overlay Badge on image bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FAF8F5]/96 backdrop-blur-md border border-[#E8E2D8] shadow-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-widest text-[#9E7E3C] font-bold">
                      {salonInfo.category}
                    </span>
                    <p className="text-xs font-semibold text-[#1C1A17]">
                      Ganpati Tower, Siddharthanagar
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-[#9E7E3C]">
                      <Star className="w-3.5 h-3.5 fill-[#C5A869] text-[#C5A869]" />
                      <span className="text-xs font-bold text-[#1C1A17]">{salonInfo.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-[10px] text-[#7A7365]">{salonInfo.reviewCount} Verified Reviews</span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Salon Accent Tag */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 bg-[#1C1A17] text-[#FAF8F5] px-4 py-2 rounded-xl shadow-lg border border-[#3A352C]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
                <span className="text-xs font-semibold tracking-wide">Hair & Beauty Salon</span>
              </div>

              {/* Inset Secondary Detail Tag */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2.5 bg-[#FAF8F5] text-[#1C1A17] px-4 py-2.5 rounded-xl shadow-md border border-[#E5DEC] z-20">
                <div className="w-6 h-6 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#9E7E3C]">
                  <Scissors className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#1C1A17] leading-none">Men & Women</p>
                  <p className="text-[10px] text-[#7A7365] mt-0.5">Styling & Grooming</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

