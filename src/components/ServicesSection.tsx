import React, { useState } from 'react';
import { Scissors, Sparkles, Palette, Droplets, Crown, Info, ArrowUpRight, Phone } from 'lucide-react';
import { salonServices, salonInfo } from '../data/salonData';
import { SalonService } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4" />;
      case 'Crown':
        return <Crown className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] inline-block">
            Salon Offerings • Ganpati Tower
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
            Hair & Grooming Services
          </h2>
          <p className="text-base sm:text-lg text-[#5C564A] leading-relaxed">
            Personalized hair care, cuts, coloring, and styling sessions tailored for both men and women in Siddharthanagar.
          </p>

          {/* Explicit Placeholder Transparency Notice as mandated */}
          <div className="inline-flex items-center gap-2.5 bg-[#F5EFE4] text-[#6C6353] px-4 py-2.5 rounded-xl border border-[#E5DCB] text-xs max-w-xl mx-auto text-left mt-2">
            <Info className="w-4 h-4 text-[#9E7E3C] shrink-0" />
            <span className="leading-snug">
              Note: Listed services are website placeholders unless confirmed by the salon. Please contact the salon for details and exact inquiries.
            </span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salonServices.map((service: SalonService) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#FFFFFF] border border-[#E8E2D6] rounded-2xl overflow-hidden hover:border-[#C5A869]/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image with overlay icon */}
              <div className="relative h-56 overflow-hidden bg-[#ECE6DC]">
                {!loadedImages[service.id] && (
                  <div className="absolute inset-0 skeleton-shimmer z-10" />
                )}
                <img
                  src={service.image}
                  alt={`${service.name} at Jawed Habib Salon`}
                  className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ${
                    loadedImages[service.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(service.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                
                {/* Floating category icon */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-xs text-[#9E7E3C] flex items-center justify-center shadow-md border border-[#E8E2D8]">
                  {getIcon(service.iconName)}
                </div>

                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#EAD8B5]">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#1C1A17] group-hover:text-[#9E7E3C] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#5C564A] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className="text-xs text-[#8A8174]">
                    Consult salon for details
                  </span>

                  {/* Enquire Now Button with 2x padding ratio */}
                  <button
                    id={`enquire-btn-${service.id}`}
                    onClick={() => onSelectServiceForEnquiry(service.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#1C1A17] bg-[#F5F0E6] hover:bg-[#1C1A17] hover:text-[#FAF8F5] active:scale-98 rounded-lg transition-all group/btn cursor-pointer focus-visible:outline-hidden"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9E7E3C] group-hover/btn:text-[#EAD8B5] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F4EDE2] border border-[#E2D8C6] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#1C1A17]">
              Need a personalized styling consultation?
            </h4>
            <p className="text-sm text-[#5C564A]">
              Speak directly with our salon team at Ganpati Tower, Siddharthanagar for custom styling or treatment queries.
            </p>
          </div>
          <a
            id="services-consultation-call-btn"
            href={`tel:${salonInfo.phone}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-hidden"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Call {salonInfo.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

