import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin, Sparkles, Navigation } from 'lucide-react';
import { salonInfo } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'appointment', 'gallery', 'reviews', 'location', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'nav-link-home' },
    { name: 'About', href: '#about', id: 'nav-link-about' },
    { name: 'Services', href: '#services', id: 'nav-link-services' },
    { name: 'Appointment', href: '#appointment', id: 'nav-link-appointment' },
    { name: 'Gallery', href: '#gallery', id: 'nav-link-gallery' },
    { name: 'Reviews', href: '#reviews', id: 'nav-link-reviews' },
    { name: 'Location', href: '#location', id: 'nav-link-location' },
    { name: 'Contact', href: '#contact', id: 'nav-link-contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/96 backdrop-blur-md shadow-xs border-b border-[#E8E2D5] py-3'
            : 'bg-[#FAF8F5]/85 backdrop-blur-xs py-4.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Title */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex flex-col focus-visible:outline-hidden"
              aria-label={`${salonInfo.name} - ${salonInfo.tagline}`}
            >
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wider text-[#1C1A17] uppercase group-hover:text-[#9E7E3C] transition-colors leading-tight">
                {salonInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#7A7365] font-medium -mt-0.5">
                {salonInfo.tagline}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    id={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-semibold tracking-wider uppercase transition-colors relative py-1.5 ${
                      isActive
                        ? 'text-[#9E7E3C]'
                        : 'text-[#4A453C] hover:text-[#1C1A17]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9E7E3C] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                id="nav-quick-call-btn"
                href={`tel:${salonInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#2C271F] bg-[#F2EDE4] hover:bg-[#E8E0D2] border border-[#E0D7C9] rounded-lg transition-colors focus-visible:outline-hidden"
                title={`Call ${salonInfo.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7E3C]" />
                <span>{salonInfo.phone}</span>
              </a>

              <button
                id="nav-book-appointment-btn"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-lg shadow-xs transition-all cursor-pointer focus-visible:outline-hidden"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                id="mobile-quick-call-icon-btn"
                href={`tel:${salonInfo.phone}`}
                className="p-2.5 text-[#1C1A17] bg-[#F2EDE4] hover:bg-[#E8E0D2] rounded-lg active:scale-95 transition-transform"
                aria-label={`Call Salon at ${salonInfo.phone}`}
              >
                <Phone className="w-4 h-4 text-[#9E7E3C]" />
              </a>
              <button
                id="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-[#1C1A17] hover:text-[#9E7E3C] bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg focus-visible:outline-hidden active:scale-95 transition-transform"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-xs pt-16 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FAF8F5] border-b border-[#E8E2D8] px-6 py-6 space-y-5 shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
              <div>
                <span className="font-serif-luxury text-xl font-semibold text-[#1C1A17] block">
                  {salonInfo.name}
                </span>
                <p className="text-[11px] tracking-wider uppercase text-[#7A7365] mt-0.5">{salonInfo.tagline}</p>
              </div>
              <span className="text-[10px] font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] px-2.5 py-1 rounded-full">
                {salonInfo.status}
              </span>
            </div>

            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    id={`mobile-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F2EDE4] text-[#9E7E3C]'
                        : 'text-[#2C271F] hover:bg-[#F2EDE4] hover:text-[#1C1A17]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9E7E3C]" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#E8E2D8] space-y-2.5">
              <button
                id="mobile-menu-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#2C271F] active:scale-98 rounded-xl shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4 text-[#C5A869]" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  id="mobile-menu-call-btn"
                  href={`tel:${salonInfo.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold text-[#1C1A17] bg-[#F2EDE4] hover:bg-[#E8E0D2] border border-[#E0D7C9] rounded-xl active:scale-98 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7E3C]" />
                  <span>Call Salon</span>
                </a>

                <a
                  id="mobile-menu-directions-btn"
                  href={salonInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold text-[#1C1A17] bg-[#F2EDE4] hover:bg-[#E8E0D2] border border-[#E0D7C9] rounded-xl active:scale-98 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#9E7E3C]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#7A7365] flex items-center gap-1.5 justify-center">
              <MapPin className="w-3.5 h-3.5 text-[#9E7E3C] shrink-0" />
              <span>Ganpati Tower, Narayanthan, Siddharthanagar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

