import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Leaf, Star, Clock, MapPin, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ActiveTab } from './types';

// Import sub-components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import OfferSection from './components/OfferSection';
import FaqSection from './components/FaqSection';
import BlogView from './components/BlogView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderView from './components/WhatsAppOrderView';
import AiAssistant from './components/AiAssistant';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('arogya_theme');
    return saved === 'dark';
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize global tracking
  useTracker();

  // Synchronize initial activeTab from URL pathname on load
  useEffect(() => {
    const path = window.location.pathname;
    const segment = path.replace(/\/$/, "").split("/").pop();
    const tab = (segment || 'home') as ActiveTab;
    const allowedTabs: ActiveTab[] = ['home', 'about', 'services', 'gallery', 'contact', 'order', 'ai-consultant'];
    if (allowedTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  // Sync the URL pathname when activeTab changes
  useEffect(() => {
    const path = activeTab === 'home' ? '/' : `/${activeTab}`;
    const currentPath = window.location.pathname;
    if (currentPath !== path) {
      const search = window.location.search;
      window.history.pushState({ tab: activeTab }, '', `${path}${search}`);
      // Dispatch a popstate event to trigger the tracker's popstate listener!
      window.dispatchEvent(new PopStateEvent('popstate', { state: { tab: activeTab } }));
    }
  }, [activeTab]);

  // Handle back/forward navigation using popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      const tab = (segment || 'home') as ActiveTab;
      const allowedTabs: ActiveTab[] = ['home', 'about', 'services', 'gallery', 'contact', 'order', 'ai-consultant'];
      if (allowedTabs.includes(tab)) {
        setActiveTab(tab);
      } else {
        setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync theme to DOM
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('arogya_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('arogya_theme', 'light');
    }
  }, [darkMode]);

  // Back to top observer
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Category Click router
  const handleCategoryClick = (categoryName: string) => {
    // Navigate directly to order form with category filled
    setActiveTab('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Page Breadcrumbs
  const getBreadcrumbLabel = (tab: ActiveTab) => {
    switch (tab) {
      case 'home': return '';
      case 'about': return 'Our Story';
      case 'services': return 'Specialized Services';
      case 'gallery': return 'Store Gallery';
      case 'contact': return 'Contact Details';
      case 'order': return 'WhatsApp Order Form';
      case 'ai-consultant': return 'AI Wellness Advisor';
      default: return '';
    }
  };

  return (
    <div id="arogya-app-root" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans antialiased transition-colors duration-200">
      
      {/* 1. STRUCTURAL SEO SCHEMA INJECTIONS */}
      <script id="seo-local-business-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          "name": "Arogya Ayurved Bhandar",
          "alternateName": "Arogya Medical Store Gaya",
          "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80",
          "description": "Your trusted local medical store for genuine allopathic medicines, Ayurvedic formulas, surgical items, baby care and daily healthcare needs near Tekari Road, Gaya.",
          "@id": "https://ais-dev-qzzndnx4pkdffwvbx6iw75-457061730116.asia-southeast1.run.app/#pharmacy",
          "url": "https://ais-dev-qzzndnx4pkdffwvbx6iw75-457061730116.asia-southeast1.run.app",
          "telephone": "09931075347",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tekari Rd, Dhamitola, Dulhingunj",
            "addressLocality": "Gaya",
            "addressRegion": "Bihar",
            "postalCode": "823001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.0286469",
            "longitude": "84.998492"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "09:00",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://maps.google.com/?q=Arogya+Ayurved+Bhandar+Tekari+Rd+Dhamitola+Gaya+Bihar"
          ]
        })}
      </script>

      {/* 2. STICKY HEADER */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* 3. BREADCRUMBS IN PAGE-VIEW HEADERS */}
      {activeTab !== 'home' && (
        <div id="page-breadcrumbs-bar" className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-850 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <button 
                onClick={() => setActiveTab('home')} 
                className="hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{getBreadcrumbLabel(activeTab)}</span>
            </nav>
          </div>
        </div>
      )}

      {/* 4. MAIN CONTENT ROUTER SWITCH */}
      <main id="app-main-content" className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-0">
            {/* Quick Emergency Banner in Hero */}
            <Hero setActiveTab={setActiveTab} />
            
            {/* Promo Offers Row and categories */}
            <FeaturedCategories onCategoryClick={handleCategoryClick} />
            <OfferSection />
            <FaqSection />
            <BlogView />
          </div>
        )}

        {activeTab === 'about' && <AboutView />}
        
        {activeTab === 'services' && <ServicesView setActiveTab={setActiveTab} />}
        
        {activeTab === 'gallery' && <GalleryView />}
        
        {activeTab === 'contact' && <ContactView />}
        
        {activeTab === 'order' && <WhatsAppOrderView />}
        
        {activeTab === 'ai-consultant' && <AiAssistant setActiveTab={setActiveTab} />}
      </main>

      {/* 5. FOOTER */}
      <Footer setActiveTab={setActiveTab} />

      {/* 6. FLOATING ACTION TOOLS */}
      
      {/* Floating Call Now Button (Left corner) */}
      <a
        id="floating-call-widget"
        href="tel:09931075347"
        className="fixed bottom-6 left-6 z-45 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 group"
        title="Emergency Phone Assistance"
      >
        <Phone className="w-6 h-6 fill-white/10 group-hover:animate-wiggle" />
        <span className="absolute left-16 bg-blue-600 text-white text-[10px] uppercase font-mono font-black px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest whitespace-nowrap">
          Call: 09931075347
        </span>
      </a>

      {/* Floating WhatsApp Quick Inquiry (Right corner, above back-to-top) */}
      <a
        id="floating-whatsapp-widget"
        href="https://wa.me/919931075347?text=Hello%20Arogya%20Ayurved%20Bhandar%2C%20I%20visited%20your%20website%20and%20need%20to%20inquire%20about%20medicine%20availability."
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-45 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 group ${
          showScrollTop ? 'translate-y-[-70px]' : ''
        }`}
        title="Instant WhatsApp Support"
      >
        <MessageSquare className="w-6 h-6 fill-white/10 group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 bg-emerald-600 text-white text-[10px] uppercase font-mono font-black px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest whitespace-nowrap">
          Chat support
        </span>
      </a>

      {/* Back to Top Widget (Right corner) */}
      {showScrollTop && (
        <button
          id="floating-back-to-top"
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-45 w-14 h-14 bg-slate-800 dark:bg-slate-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:bg-emerald-600 active:scale-95 animate-fade-in"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
