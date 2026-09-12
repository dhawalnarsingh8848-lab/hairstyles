import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Calendar } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface BackToTopProps {
  onBookClick: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ onBookClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar for Easy Booking & Calling */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8E2D8] p-3 shadow-lg flex items-center gap-2">
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${salonInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold text-[#1C1A17] bg-[#F2EDE4] hover:bg-[#E8E0D2] border border-[#DDD4C4] rounded-xl active:scale-98 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#9E7E3C]" />
          <span>Call Salon</span>
        </a>

        <button
          id="mobile-bottom-book-btn"
          onClick={onBookClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1A17] hover:bg-[#342F28] rounded-xl shadow-xs active:scale-98 transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A869]" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-6 z-40 p-3 rounded-full bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#9E7E3C] shadow-lg border border-[#3E382E] transition-all duration-300 focus:outline-hidden transform hover:-translate-y-1"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
