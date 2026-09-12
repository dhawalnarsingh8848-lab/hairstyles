import React from 'react';
import { Phone, MapPin, Compass, Clock, Star } from 'lucide-react';
import { salonInfo } from '../data/salonData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home', id: 'footer-link-home' },
    { name: 'About', href: '#about', id: 'footer-link-about' },
    { name: 'Services', href: '#services', id: 'footer-link-services' },
    { name: 'Book Appointment', href: '#appointment', id: 'footer-link-appointment' },
    { name: 'Gallery', href: '#gallery', id: 'footer-link-gallery' },
    { name: 'Client Reviews', href: '#reviews', id: 'footer-link-reviews' },
    { name: 'Location & Map', href: '#location', id: 'footer-link-location' },
    { name: 'Contact', href: '#contact', id: 'footer-link-contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171614] text-[#FAF8F5] pt-16 pb-12 border-t border-[#2C2822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C2822]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wider text-white uppercase">
                {salonInfo.name}
              </span>
              <p className="text-xs tracking-[0.25em] uppercase text-[#C5A869] font-medium mt-1">
                {salonInfo.tagline}
              </p>
            </div>

            <p className="text-sm text-[#A89F8F] max-w-sm leading-relaxed">
              Professional hair and grooming salon situated at Ganpati Tower, Siddharthanagar. Dedicated to tailored styling, care, and customer satisfaction.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center text-[#B8860B] gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A869] text-[#C5A869]" />
                ))}
                <Star className="w-3.5 h-3.5 text-[#5C5446]" />
              </div>
              <span className="text-xs font-semibold text-[#DDD4C4]">{salonInfo.rating.toFixed(1)} Rating</span>
              <span className="text-xs text-[#8A8172]">({salonInfo.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A869]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#B3A999] hover:text-[#FAF8F5] hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A869]">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-[#B3A999]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7A7365] block">Address:</span>
                  <span className="text-[#FAF8F5] leading-snug block">
                    {salonInfo.address}
                  </span>
                  <span className="text-xs text-[#8E8575] font-mono mt-0.5 block">
                    Plus Code: {salonInfo.plusCode}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A869] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7A7365] block">Contact:</span>
                  <a
                    href={`tel:${salonInfo.phone}`}
                    className="text-[#FAF8F5] hover:text-[#C5A869] font-medium transition-colors"
                  >
                    {salonInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#10B981] shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7A7365] block">Status:</span>
                  <span className="text-[#FAF8F5]">{salonInfo.status}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7263] gap-4">
          <p>© 2026 Jawed Habib. All rights reserved.</p>
          <p className="text-center sm:text-right text-[11px] text-[#696255]">
            Ganpati Tower, Narayanthan, Siddharthanagar 32900
          </p>
        </div>

      </div>
    </footer>
  );
};
