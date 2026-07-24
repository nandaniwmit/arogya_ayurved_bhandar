import React, { useState } from 'react';
import { ZoomIn, Eye, X, Filter, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryImage } from '../types';

const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
    alt: 'Arogya Storefront, Tekari Road Gaya',
    category: 'storefront',
    title: 'Arogya Storefront Entry'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbab9?auto=format&fit=crop&w=800&q=80',
    alt: 'Organised Medicine Shelves',
    category: 'shelves',
    title: 'Clinical Allopathic Stocks'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80',
    alt: 'Ayurvedic herbal ingredients',
    category: 'products',
    title: 'Authentic Ayurvedic Herbs'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Digital Blood Pressure Monitors',
    category: 'equipment',
    title: 'Digital BP Diagnostic Kits'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1628771065518-0d82f1118181?auto=format&fit=crop&w=800&q=80',
    alt: 'Wellness herbal supplements',
    category: 'products',
    title: 'Premium Organic Supplements'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Pharmacist assisting customers',
    category: 'customers',
    title: 'Certified Pharmacist Guidance'
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&w=800&q=80',
    alt: 'Pediatric care selection shelves',
    category: 'store',
    title: 'Baby Care & Diaper Stalls'
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    alt: 'Emergency Surgical Supplies',
    category: 'equipment',
    title: 'Certified Surgical Disposables'
  }
];

export default function GalleryView() {
  const [filter, setFilter] = useState<'all' | 'storefront' | 'shelves' | 'products' | 'equipment' | 'customers'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'storefront', label: 'Store Front' },
    { id: 'shelves', label: 'Shelves & Stalls' },
    { id: 'products', label: 'Medicines & Herbs' },
    { id: 'equipment', label: 'Medical Devices' },
    { id: 'customers', label: 'Customers Care' }
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  return (
    <div id="gallery-page-view" className="py-12 bg-white dark:bg-slate-900 animate-fade-in space-y-12">
      
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="gallery-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Our Store <span className="text-emerald-600 dark:text-emerald-400">Photo Gallery</span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Take a virtual walkthrough of Arogya Ayurved Bhandar. View our cleanly organized medicine shelves, cold storage vaults, and clinical devices.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider mr-2 font-bold font-mono">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`gallery-filter-${cat.id}`}
            onClick={() => setFilter(cat.id as any)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              filter === cat.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setLightboxIndex(index)}
              className="group relative bg-slate-50 dark:bg-slate-850 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800/80 cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Aspect-Ratio Box */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="p-2 bg-white rounded-full text-emerald-600 shadow">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <div className="p-2 bg-white rounded-full text-slate-800 shadow">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text segment */}
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400">{item.category}</span>
                <h3 className="font-extrabold text-slate-800 dark:text-white text-sm mt-0.5">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500 space-y-3">
            <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-700" />
            <p className="text-sm font-semibold">No images available for this selection.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-backdrop"
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            id="lightbox-close-btn"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Stage with Carousel buttons */}
          <div className="relative max-w-4xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Prev button */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-h-[75vh] flex flex-col">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] object-contain mx-auto"
              />
              <div className="p-6 bg-slate-950 text-white border-t border-slate-900">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">{filteredItems[lightboxIndex].category}</span>
                <h3 className="text-lg font-black mt-1">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-xs text-slate-400 mt-1">{filteredItems[lightboxIndex].alt}</p>
              </div>
            </div>

            {/* Next button */}
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Index indicator */}
          <div className="text-slate-400 text-xs font-mono mt-4">
            Image {lightboxIndex + 1} of {filteredItems.length}
          </div>
        </div>
      )}

    </div>
  );
}
