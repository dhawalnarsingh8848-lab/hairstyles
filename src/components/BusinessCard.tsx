import React, { useState } from 'react';
import { Phone, Navigation, Share2, Star, Clock, MapPin, Check, Copy, Sparkles, Compass } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const BusinessCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `${salonInfo.name} - Hair Salon\n${salonInfo.address}\nPhone: ${salonInfo.phone}\nPlus Code: ${salonInfo.plusCode}\nRating: ${salonInfo.rating} (${salonInfo.reviewCount} Reviews)`;

    if (navigator.share && navigator.canShare && navigator.canShare({ title: salonInfo.name, text: shareText, url: window.location.href })) {
      try {
        await navigator.share({
          title: `${salonInfo.name} - ${salonInfo.tagline}`,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback silently if dismissed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16 sm:mb-20 z-20">
      <div className="bg-[#FFFFFF] border border-[#E6E0D4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-[#1C1A17]/4 relative overflow-hidden">
        
        {/* Subtle top warm hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A869] via-[#9E7E3C] to-[#C5A869]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Main Info Column */}
          <div className="md:col-span-7 space-y-4 text-left">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] mb-1">
                {salonInfo.category} • Siddharthanagar
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#1C1A17] tracking-tight">
                {salonInfo.name}
              </h2>
            </div>

            {/* Rating Stars & Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center text-[#9E7E3C] gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A869] text-[#C5A869]" />
                ))}
                <Star className="w-4 h-4 text-[#D6CBBB]" />
              </div>
              <span className="text-sm font-bold text-[#1C1A17]">{salonInfo.rating.toFixed(1)}</span>
              <span className="text-xs text-[#7A7365] font-medium">({salonInfo.reviewCount} Reviews)</span>
            </div>

            {/* Address, Phone, Plus Code, Hours details */}
            <div className="pt-2 space-y-2.5 text-sm text-[#4A453C]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E7E3C] shrink-0 mt-0.5" />
                <span className="text-[#2C271F] font-medium">{salonInfo.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9E7E3C] shrink-0" />
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="font-semibold text-[#1C1A17] hover:text-[#9E7E3C] transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#9E7E3C] shrink-0" />
                <span className="text-xs font-mono text-[#5C564A]">
                  Plus Code: <strong className="text-[#1C1A17]">{salonInfo.plusCode}</strong>, {salonInfo.region}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="inline-flex items-center gap-2 font-medium text-xs text-[#065F46] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#D1FAE5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  {salonInfo.status}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons Column */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3 pt-4 md:pt-0 md:border-l md:border-[#EFE9DF] md:pl-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A7F6E] mb-1">
              Direct Contact & Directions
            </p>

            {/* CALL Button */}
            <a
              id="business-card-call-btn"
              href={`tel:${salonInfo.phone}`}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-7 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-hidden"
            >
              <Phone className="w-4 h-4 text-[#C5A869]" />
              <span>Call ({salonInfo.phone})</span>
            </a>

            {/* GET DIRECTIONS Button */}
            <a
              id="business-card-directions-btn"
              href={salonInfo.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-7 text-xs font-semibold tracking-wider uppercase text-[#1C1A17] bg-[#F7F3EB] hover:bg-[#ECE4D6] border border-[#DDD3C2] active:scale-98 rounded-xl transition-all shadow-2xs focus-visible:outline-hidden"
            >
              <Navigation className="w-4 h-4 text-[#9E7E3C]" />
              <span>Get Directions</span>
            </a>

            {/* SHARE Button */}
            <button
              id="business-card-share-btn"
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-6 text-xs font-semibold text-[#5C564A] hover:text-[#1C1A17] bg-transparent hover:bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl transition-all cursor-pointer focus-visible:outline-hidden"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#065F46] font-semibold">Salon Details Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#9E7E3C]" />
                  <span>Share Business Details</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

