import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessCard } from './components/BusinessCard';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AppointmentSection } from './components/AppointmentSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Haircut & Styling');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F1E1B] selection:bg-[#E2D2B5] selection:text-[#1C1A17]">
      {/* Sticky Navigation Header */}
      <Navbar onBookClick={scrollToAppointment} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={scrollToAppointment} />

        {/* Business Information Card */}
        <BusinessCard />

        {/* About Section */}
        <AboutSection onBookClick={scrollToAppointment} />

        {/* Services Section */}
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Appointment Booking Section */}
        <AppointmentSection preselectedService={selectedService} />

        {/* Gallery Section with Lightbox */}
        <GallerySection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Location Section / Find Us */}
        <LocationSection />

        {/* Contact Section */}
        <ContactSection onBookClick={scrollToAppointment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top & Mobile Action Bar */}
      <BackToTop onBookClick={scrollToAppointment} />
    </div>
  );
}
