import { MapPin, Phone, Mail, Clock, Leaf, ShieldAlert } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 border-t-4 border-emerald-500 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About & Info */}
          <div id="footer-col-about" className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Leaf className="w-5 h-5 fill-emerald-400/20" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Arogya <span className="text-emerald-400">Ayurved</span>
              </h3>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for 100% genuine Ayurvedic formulations, prescription medicines, surgical tools, personal care, and high-quality clinical supplies in Gaya, Bihar.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <a 
                href="https://maps.google.com/?q=Arogya+Ayurved+Bhandar+Tekari+Rd+Dhamitola+Gaya+Bihar" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start space-x-2.5 hover:text-emerald-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tekari Rd, Dhamitola, Dulhingunj, Gaya, Bihar 823001</span>
              </a>
              <a href="tel:09931075347" className="flex items-center space-x-2.5 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 99310 75347</span>
              </a>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info.arogyagaya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div id="footer-col-links" className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-emerald-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-emerald-400 transition-colors text-left w-full">
                  • Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-emerald-400 transition-colors text-left w-full">
                  • Our Business Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-emerald-400 transition-colors text-left w-full">
                  • Specialized Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-emerald-400 transition-colors text-left w-full">
                  • Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-emerald-400 transition-colors text-left w-full">
                  • Support & Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('order')} className="hover:text-emerald-400 text-emerald-300 font-semibold transition-colors text-left w-full">
                  • Order via WhatsApp
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('ai-consultant')} className="hover:text-emerald-400 text-emerald-300 font-semibold transition-colors text-left w-full">
                  • AI Wellness Chatbot
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div id="footer-col-products" className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-emerald-500 pl-2.5">
              Medicines & Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Pure Ayurvedic Herbs & Kadhas</li>
              <li>• Prescription Allopathic Medicines</li>
              <li>• OTC Fever, Cough & Pain Relievers</li>
              <li>• Certified Surgical Supplies</li>
              <li>• Diabetic Care & Monitors</li>
              <li>• Pediatric & Baby Care Essentials</li>
              <li>• Herbal Skin & Organic Hair Oils</li>
              <li>• Nutritional Health Supplements</li>
            </ul>
          </div>

          {/* Col 4: Business Hours */}
          <div id="footer-col-hours" className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-emerald-500 pl-2.5">
              Working Hours
            </h4>
            <div className="space-y-3.5 text-sm bg-slate-800/40 border border-slate-800 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Open All Days</span>
              </div>
              
              <div className="space-y-1 text-xs">
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span className="text-slate-400">Monday - Saturday:</span>
                  <span className="text-slate-200 font-mono">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="text-slate-200 font-mono">9:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <div className="text-[11px] text-amber-400/85 leading-relaxed pt-1 flex items-start gap-1">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Emergency prescription requests are prioritised. Please call directly.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Area */}
        <div id="footer-disclaimer" className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed space-y-2">
          <p className="flex items-center gap-1.5 font-bold text-slate-400">
            <ShieldAlert className="w-4 h-4 text-emerald-600/80" />
            <span>MEDICAL DISCLAIMER / INFORMATION ADVISORY</span>
          </p>
          <p>
            All content on this website, including suggestions from our AI Wellness Advisor, is provided solely for general informational purposes. It does not constitute medical advice, diagnosis, or active treatment. Always consult with a registered medical practitioner before commencing any health routine, using herbal medicines, or altering prescribed dosages. Genuine medicines are sold only upon presenting a valid prescription at our physical store.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div id="footer-bottom" className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="copyright-text">
            © {currentYear} <strong>Arogya Ayurved Bhandar</strong>. All rights reserved. Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-dotted font-semibold">WMIT</a>.
          </p>
          <div className="flex space-x-4">
            <button onClick={() => alert("Privacy Policy: We protect all uploaded prescription images. No data is stored or sold.")} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => alert("Terms & Conditions: All products sold comply with Indian pharmaceutical standards.")} className="hover:text-emerald-400 transition-colors">Terms & Conditions</button>
            <span>|</span>
            <span className="text-slate-500">Design: Modern Healthcare UI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
