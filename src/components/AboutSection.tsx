import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Sparkles, CheckCircle2, Scissors, ShieldCheck } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F1E9]/60 border-y border-[#EBE4D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Salon Image with architectural framing */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] bg-[#EFE9DF]">
                {!imageLoaded && <div className="absolute inset-0 skeleton-shimmer z-10" />}
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                  alt="Jawed Habib hair salon interior at Ganpati Tower, Siddharthanagar"
                  className={`w-full h-[400px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                
                {/* Image caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FAF8F5]/96 backdrop-blur-xs border border-[#E8E2D8] shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#1C1A17] uppercase tracking-wider">
                      Ganpati Tower Salon
                    </p>
                    <p className="text-[11px] text-[#7A7365] mt-0.5">
                      Narayanthan, Siddharthanagar
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#9E7E3C] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E2D8C6]">
                    Hair Salon
                  </span>
                </div>
              </div>

              {/* Decorative side accent card with verified rating */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#FAF8F5] border border-[#E2D8C6] p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1.5 text-[#9E7E3C] mb-1">
                  <Star className="w-4 h-4 fill-[#C5A869] text-[#C5A869]" />
                  <span className="font-bold text-sm text-[#1C1A17]">{salonInfo.rating.toFixed(1)} / 5.0</span>
                </div>
                <p className="text-xs text-[#7A7365] font-medium">{salonInfo.reviewCount} Google Reviews</p>
              </div>

            </div>
          </div>

          {/* Right Column: About Content (Flat depth without awkward nested boxes) */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Hair Salon in Siddharthanagar
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
                About Jawed Habib
              </h2>
            </div>

            {/* Core introduction as strictly requested */}
            <p className="text-lg text-[#2C271F] font-normal leading-relaxed">
              Jawed Habib is a hair salon located at Ganpati Tower, Narayanthan, Siddharthanagar.
            </p>

            <p className="text-base text-[#5C564A] leading-relaxed">
              Serving both male and female clients with specialized hair and grooming care, our salon provides a dedicated setting focused on personal style, hair health, and attentive customer service.
            </p>

            {/* Verified Details Docket with clean dividers */}
            <div className="pt-3 pb-2 space-y-3.5 border-y border-[#E6DEC] text-sm text-[#3E3930]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E7E3C] shrink-0 mt-1" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A7365] block">Location:</span>
                  <span className="font-medium text-[#1C1A17] block">{salonInfo.address}</span>
                  <span className="text-xs text-[#7A7365] font-mono mt-0.5 block">Plus Code: {salonInfo.plusCode}, {salonInfo.region}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9E7E3C] shrink-0" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A7365] mr-2">Phone:</span>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="font-semibold text-[#1C1A17] hover:text-[#9E7E3C] transition-colors"
                  >
                    {salonInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A7365] mr-2">Operational Hours:</span>
                  <span className="font-medium text-[#1C1A17]">{salonInfo.status}</span>
                </div>
              </div>
            </div>

            {/* Action buttons with strict 2x padding ratio */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="about-book-btn"
                onClick={onBookClick}
                className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xs transition-all cursor-pointer focus-visible:outline-hidden"
              >
                Request Appointment
              </button>
              
              <a
                id="about-call-btn"
                href={`tel:${salonInfo.phone}`}
                className="px-6 py-3.5 text-xs font-semibold text-[#1C1A17] bg-[#FAF8F5] hover:bg-[#EFE9DF] border border-[#DDD4C4] active:scale-98 rounded-xl transition-all shadow-2xs focus-visible:outline-hidden"
              >
                Call Salon ({salonInfo.phone})
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
