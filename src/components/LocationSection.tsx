import React, { useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Copy, Check, Compass, Layers } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyPlusCode = () => {
    navigator.clipboard.writeText(`${salonInfo.plusCode}, ${salonInfo.region}`);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(salonInfo.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] inline-block">
            Visit Our Salon
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
            Find Us
          </h2>
          <p className="text-base text-[#5C564A]">
            Conveniently located at Ganpati Tower, Narayanthan in Siddharthanagar, Lumbini Province.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFFFF] border border-[#E8E2D6] rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C]">
                  Salon Location
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1C1A17] mt-1">
                  Ganpati Tower
                </h3>
                <p className="text-xs text-[#7A7365]">Narayanthan, Siddharthanagar 32900</p>
              </div>

              {/* Verified Details List (Flat hierarchy, elegant dividers) */}
              <div className="space-y-4 pt-1 text-sm text-[#3E3930]">
                
                {/* Address Item */}
                <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFE8DC] space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9E7E3C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A7365]">
                        Street Address
                      </p>
                      <p className="font-medium text-[#1C1A17] text-sm mt-0.5">
                        {salonInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={copyAddress}
                      className="text-xs text-[#9E7E3C] hover:text-[#1C1A17] font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-hidden"
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAddress ? 'Address Copied' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>

                {/* Plus Code Item */}
                <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFE8DC] space-y-2">
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#9E7E3C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A7365]">
                        Google Plus Code
                      </p>
                      <p className="font-mono text-sm text-[#1C1A17] font-bold mt-0.5">
                        {salonInfo.plusCode}
                      </p>
                      <p className="text-xs text-[#7A7365]">{salonInfo.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      onClick={copyPlusCode}
                      className="text-xs text-[#9E7E3C] hover:text-[#1C1A17] font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-hidden"
                    >
                      {copiedPlusCode ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPlusCode ? 'Plus Code Copied' : 'Copy Plus Code'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EFE8DC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#9E7E3C] shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#7A7365]">
                        Direct Phone
                      </p>
                      <a
                        href={`tel:${salonInfo.phone}`}
                        className="font-bold text-sm text-[#1C1A17] hover:text-[#9E7E3C]"
                      >
                        {salonInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="px-4 py-2 text-xs font-semibold uppercase bg-[#1C1A17] text-white rounded-lg hover:bg-[#342F28] transition-colors focus-visible:outline-hidden"
                  >
                    Call
                  </a>
                </div>

              </div>
            </div>

            {/* Quick Directions Button with 2x padding ratio */}
            <div className="pt-6 border-t border-[#F0EBE1] mt-6">
              <a
                id="location-directions-btn"
                href={salonInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-7 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-hidden"
              >
                <Navigation className="w-4 h-4 text-[#C5A869]" />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map View */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[450px] lg:h-full min-h-[460px] bg-[#EBE5DA] rounded-3xl border border-[#E0D8CA] overflow-hidden shadow-md flex flex-col justify-between">
              
              {/* Embedded Google Map */}
              <iframe
                title={`Google Maps location of ${salonInfo.name} at Ganpati Tower, Siddharthanagar`}
                src="https://maps.google.com/maps?q=Ganpati+Tower+Narayanthan+Siddharthanagar+Nepal&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0 filter saturate-90"
                loading="lazy"
                allowFullScreen
              />

              {/* Top Floating Map Location Badge */}
              <div className="relative z-10 m-4 sm:m-5 p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5]/96 backdrop-blur-md border border-[#E2D9CA] shadow-lg max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1A17] text-[#C5A869] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-base font-bold text-[#1C1A17] leading-tight">
                      {salonInfo.name}
                    </h4>
                    <p className="text-xs text-[#5C564A] leading-snug">
                      Ganpati Tower, Siddharthanagar
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Google Maps Navigation CTA */}
              <div className="relative z-10 m-4 sm:m-5 self-center sm:self-end">
                <a
                  id="open-in-google-maps-btn"
                  href={salonInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-xl transition-all group focus-visible:outline-hidden"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#C5A869] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

