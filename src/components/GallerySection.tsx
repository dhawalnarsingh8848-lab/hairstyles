import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles, Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '../data/salonData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Hair', 'Styling', 'Color', 'Salon'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const currentLightboxImage: GalleryImage | undefined =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : undefined;

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
            Salon Gallery
          </h2>
          <p className="text-base text-[#615B4F]">
            A showcase of hair artistry, styling, coloring work, and salon ambience.
          </p>
        </div>

        {/* Category Filters with 2x padding ratio */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              id={`filter-btn-${category.toLowerCase()}`}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer focus-visible:outline-hidden ${
                activeCategory === category
                  ? 'bg-[#1C1A17] text-white shadow-xs'
                  : 'bg-[#F2EDE3] text-[#5C564A] hover:bg-[#E7DFC] hover:text-[#1C1A17]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid or Empty State */}
        {filteredImages.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-[#F5F0E6] rounded-2xl border border-[#E6DEC]">
            <ImageIcon className="w-10 h-10 text-[#9E7E3C] mx-auto opacity-70" />
            <p className="text-sm font-semibold text-[#1C1A17]">No images found in this category.</p>
            <p className="text-xs text-[#7A7365]">Please select "All" to view the complete salon gallery.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                id={`gallery-item-${image.id}`}
                tabIndex={0}
                role="button"
                aria-label={`View photo ${image.title}`}
                onClick={() => handleOpenLightbox(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(idx);
                  }
                }}
                className="group relative rounded-2xl overflow-hidden bg-[#EFE9DF] aspect-4/5 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-[#EAE3D6] focus-visible:outline-hidden"
              >
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 skeleton-shimmer z-10" />
                )}
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className={`w-full h-full object-cover object-center group-hover:scale-108 transition-all duration-700 ${
                    loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5]/90 text-[#1C1A17] backdrop-blur-xs">
                    {image.category}
                  </span>
                </div>

                {/* View Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-[#1C1A17]/80 text-[#FAF8F5] flex items-center justify-center backdrop-blur-xs shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 text-[#C5A869]" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    {image.title}
                  </h3>
                  <p className="text-[11px] text-[#E0D7C6] line-clamp-1 mt-0.5">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note on image placeholders */}
        <p className="text-center text-xs text-[#8A8174] mt-10">
          Professional gallery placeholders. Real salon and styling photos can easily be uploaded anytime.
        </p>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxImage && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            id="lightbox-close-btn"
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60 cursor-pointer focus-visible:outline-hidden"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            id="lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60 cursor-pointer focus-visible:outline-hidden"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            id="lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60 cursor-pointer focus-visible:outline-hidden"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden bg-black max-h-[70vh] shadow-2xl border border-white/10">
              <img
                src={currentLightboxImage.imageUrl}
                alt={currentLightboxImage.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-white space-y-1 max-w-xl">
              <div className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#C5A869]">
                {currentLightboxImage.category}
              </div>
              <h4 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                {currentLightboxImage.title}
              </h4>
              <p className="text-xs text-white/70">
                {currentLightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

