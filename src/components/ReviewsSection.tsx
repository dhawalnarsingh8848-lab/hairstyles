import React from 'react';
import { Star, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#F5F0E6]/50 border-y border-[#E8E1D4] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Reviews Container - Single flat container */}
        <div className="bg-[#FFFFFF] border border-[#E6E0D4] rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg shadow-[#1C1A17]/4 text-center relative overflow-hidden">
          
          {/* Subtle gold line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A869] via-[#9E7E3C] to-[#C5A869]" />

          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Verified Business Rating
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
                Client Experiences
              </h2>
            </div>

            {/* Score & Stars Presentation (Flattened without nested card) */}
            <div className="py-6 border-y border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="font-serif-luxury text-6xl sm:text-7xl font-semibold text-[#1C1A17] tracking-tight">
                {salonInfo.rating.toFixed(1)}
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start text-[#9E7E3C] gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C5A869] text-[#C5A869]" />
                  ))}
                  <Star key={5} className="w-5 h-5 text-[#D6CBBB]" />
                </div>
                <p className="text-base font-bold text-[#1C1A17]">
                  {salonInfo.reviewCount} Verified Reviews
                </p>
                <p className="text-xs text-[#7A7365]">
                  Public rating for Jawed Habib Hair Salon, Siddharthanagar
                </p>
              </div>
            </div>

            {/* STRICT MANDATED TEXT - DO NOT CREATE FAKE REVIEWS */}
            <div className="space-y-3 max-w-lg mx-auto">
              <p className="text-sm sm:text-base text-[#2C271F] font-medium leading-relaxed italic">
                "Customer reviews are available through the business listing."
              </p>

              <p className="text-xs text-[#7A7365] leading-relaxed">
                In strict adherence to authentic business information and transparency, we do not fabricate or invent customer testimonials. All customer feedback is publicly accessible on Google.
              </p>
            </div>

            {/* VIEW REVIEWS BUTTON with 2x padding ratio */}
            <div className="pt-2">
              <a
                id="view-reviews-btn"
                href={salonInfo.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-hidden"
              >
                <span>View Reviews</span>
                <ExternalLink className="w-4 h-4 text-[#C5A869]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

