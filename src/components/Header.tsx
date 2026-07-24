import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Leaf } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'order', label: 'WhatsApp Order' },
    { id: 'ai-consultant', label: 'AI Wellness Advisor' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Business Name */}
          <div 
            id="header-logo-container"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-300">
              <Leaf className="w-6 h-6 fill-emerald-500/10" />
            </div>
            <div>
              <h1 id="business-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-none">
                <span>Arogya</span> 
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold sm:text-lg text-base">Ayurved Bhandar</span>
              </h1>
              <p id="business-subheading" className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
                Gaya, Bihar • Trusted Pharmacy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call & WhatsApp CTAs & Dark Mode Toggle */}
          <div id="desktop-actions" className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Button */}
            <button
              id="dark-mode-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Phone Button */}
            <a
              id="header-call-btn"
              href="tel:09931075347"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <button
              id="header-order-btn"
              onClick={() => handleNavClick('order')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white/10" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Right Bar: Dark Mode & Menu Toggle */}
          <div id="mobile-controls-right" className="flex items-center space-x-2 lg:hidden">
            <button
              id="dark-mode-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-lg px-4 pt-2 pb-6 absolute top-full left-0 w-full animate-fade-in">
          <div className="space-y-1.5 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                  activeTab === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/30'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800 grid grid-cols-2 gap-3">
            <a
              id="mobile-drawer-call-btn"
              href="tel:09931075347"
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>Call Us</span>
            </a>
            <button
              id="mobile-drawer-order-btn"
              onClick={() => handleNavClick('order')}
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
