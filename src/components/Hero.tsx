import React, { useState } from 'react';
import { Search, Phone, MessageSquare, MapPin, CheckCircle2, ShieldCheck, AlertCircle, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { ActiveTab, Medicine } from '../types';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

// 20+ Typical high-demand healthcare products for interactive search feedback
const STORE_MEDICINES: Medicine[] = [
  { id: '1', name: 'Triphala Churna (Patanjali / Baidyanath)', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Digestive aid and colon cleanser, pure herbal formulation.', inStock: true, price: '₹95 - ₹160' },
  { id: '2', name: 'Ashwagandha Tablets (Dabur / Zandu)', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Stress-relief and natural vitality booster.', inStock: true, price: '₹120 - ₹240' },
  { id: '3', name: 'Chyawanprash Awaleha (Baidyanath / Dabur)', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Immunity enhancer containing Amla and 40+ exotic herbs.', inStock: true, price: '₹195 - ₹380' },
  { id: '4', name: 'Tulsi Ghan Vati (Patanjali)', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Effective relief for seasonal cough, cold, and respiratory health.', inStock: true, price: '₹110' },
  { id: '5', name: 'Giloy Ghan Vati', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Natural immunomodulator and defense against chronic fevers.', inStock: true, price: '₹90' },
  { id: '6', name: 'Shatavari Kalpa Granules', category: 'Ayurvedic', type: 'Ayurvedic', description: 'Nourishing female health tonic and vitality booster.', inStock: true, price: '₹220' },
  { id: '7', name: 'Paracetamol Tablets (Calpol / Dolo 650)', category: 'Prescription Medicines', type: 'Tablet', description: 'Fever reducer and analgesic for systemic body aches.', inStock: true, price: '₹15 - ₹30' },
  { id: '8', name: 'Amoxycillin Capsules (Novamox 500)', category: 'Prescription Medicines', type: 'Capsule', description: 'Broad-spectrum antibiotic. Requires valid prescription.', inStock: true },
  { id: '9', name: 'Pantocid 40mg Tablets', category: 'Prescription Medicines', type: 'Tablet', description: 'Anti-acidity and reflux reliever. Taken on empty stomach.', inStock: true },
  { id: '10', name: 'B-Complex with Zinc (Becosules)', category: 'Vitamins', type: 'Capsule', description: 'Daily energy booster, immunity and skin health vitamin.', inStock: true, price: '₹45' },
  { id: '11', name: 'Digital Blood Pressure Monitor (Omron)', category: 'Medical Equipment', type: 'Equipment', description: 'Highly accurate automatic digital upper-arm BP checker.', inStock: true, price: '₹1,850' },
  { id: '12', name: 'Glucometer Test Strips (Accu-Chek Active)', category: 'Diabetic Care', type: 'Equipment', description: 'Blood glucose monitoring strips, pack of 50.', inStock: true, price: '₹975' },
  { id: '13', name: 'Pampers Baby Diapers (Premium Care)', category: 'Baby Products', type: 'General', description: 'Ultra-soft wetness lock diapers with breathable material.', inStock: true, price: '₹349 - ₹899' },
  { id: '14', name: 'Aloe Vera Moisturizing Gel (Patanjali)', category: 'Skin Care', type: 'General', description: 'Pure herbal skin soothing gel for dry and sun-damaged skin.', inStock: true, price: '₹90' },
  { id: '15', name: 'Multivitamin Supplements (Revital H)', category: 'Vitamins', type: 'Capsule', description: 'Combats exhaustion, improves physical and mental alertness.', inStock: true, price: '₹150 - ₹310' },
  { id: '16', name: 'Kofol Herbal Cough Syrup (Charak)', category: 'Syrups', type: 'Syrup', description: 'Soothes throat irritation, dry and wet cough relief.', inStock: true, price: '₹85' },
  { id: '17', name: 'Orthopedic Knee Support Sleeve', category: 'Orthopedic Support', type: 'Equipment', description: 'Provides compression and relief for joint arthritis pain.', inStock: true, price: '₹280' },
  { id: '18', name: 'Dettol Antiseptic Liquid', category: 'Personal Hygiene', type: 'General', description: 'First-aid antiseptic sanitizer for wounds and hygiene.', inStock: true, price: '₹65 - ₹210' },
  { id: '19', name: 'Neosporin First Aid Ointment', category: 'First Aid Supplies', type: 'General', description: 'Triple antibiotic skin infection treatment ointment.', inStock: true, price: '₹80' },
  { id: '20', name: 'Zincovit Tablets', category: 'Vitamins', type: 'Tablet', description: 'Zinc and multivitamin daily immunity defense pills.', inStock: true, price: '₹110' }
];

export default function Hero({ setActiveTab }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSearched(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = STORE_MEDICINES.filter(med => 
      med.name.toLowerCase().includes(query) || 
      med.category.toLowerCase().includes(query) || 
      med.description.toLowerCase().includes(query)
    );
    setSearchResults(results);
    setSearched(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSearched(false);
  };

  return (
    <section id="hero-section" className="relative bg-slate-50 dark:bg-slate-950 overflow-hidden pt-6 pb-20">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-950/20 rounded-full filter blur-3xl pointer-events-none -mr-16"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-100/40 dark:bg-blue-950/10 rounded-full filter blur-3xl pointer-events-none -ml-16"></div>

      {/* Emergency Contact Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div id="emergency-banner" className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white rounded-2xl px-4 py-3 shadow-md flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-white/20 rounded-lg animate-pulse">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold tracking-wide uppercase text-xs text-amber-200">Emergency Medicine Support</span>
              <p className="text-xs sm:text-sm font-medium">Critical drugs & life-saving medical supplies available on call in Gaya.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="tel:09931075347" 
              className="px-4 py-1.5 bg-white text-red-700 hover:bg-red-50 text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 fill-red-700/10" />
              <span>Call Us Now: 09931075347</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <div id="hero-text-container" className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Certified Pharmacy</span>
          </div>

          <h2 id="hero-headline" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Arogya <span className="text-emerald-600 dark:text-emerald-400">Ayurved</span> Bhandar
          </h2>
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">
            Your Trusted Pharmacy in Tekari Rd, Gaya.
          </p>

          <p id="hero-description" className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            For over two decades, we have been delivering 100% authentic Ayurvedic and herbal formulations alongside standard prescription drugs, surgical supplies, neonatal care products, and wellness devices. Your safety is our privilege.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { title: "100% Authentic", desc: "Genuine Brands Only" },
              { title: "Expert Staff", desc: "Certified Assistance" },
              { title: "Affordable", desc: "Fair Direct Pricing" },
              { title: "Fast Ordering", desc: "WhatsApp Dispatch" }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800/80 p-3 rounded-xl shadow-sm">
                <span className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-sm sm:text-base leading-tight">{stat.title}</span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>

          {/* Core Action CTAs */}
          <div id="hero-cta-buttons" className="flex flex-wrap gap-3.5 pt-4">
            <button
              onClick={() => setActiveTab('order')}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/25 flex items-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white/10" />
              <span>Order on WhatsApp</span>
            </button>
            <a
              href="tel:09931075347"
              className="px-6 py-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 font-bold rounded-xl flex items-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Call Us: 09931075347</span>
            </a>
            <a
              href="https://maps.google.com/?q=Arogya+Ayurved+Bhandar+Tekari+Rd+Dhamitola+Gaya+Bihar"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl flex items-center gap-2 transition-all text-sm"
            >
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Hero Right Content: Interactive Search & Image */}
        <div id="hero-interactive-card" className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl relative">
            <div className="absolute -top-3.5 -right-3.5 px-3 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-white/10" />
              <span>Live Inventory Search</span>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <span>Check Medicine Availability</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Search 1000+ items instantly. Type name, type, or clinical category below.</p>
            </div>

            {/* Live Search Form */}
            <form onSubmit={handleSearch} id="hero-medicine-search-form" className="relative flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Ashwagandha, Dolo, BP Monitor, Glucometer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-slate-800 dark:text-white"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-2.5 top-3.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center transition-colors shadow-md shadow-emerald-600/10"
              >
                Search
              </button>
            </form>

            {/* Results Output */}
            <div id="search-results-viewport" className="mt-4 min-h-[160px] max-h-[250px] overflow-y-auto border border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-3 bg-slate-50/50 dark:bg-slate-900/40">
              
              {!searched && (
                <div className="flex flex-col items-center justify-center h-32 text-center text-slate-400 dark:text-slate-500 space-y-2">
                  <HelpCircle className="w-8 h-8 text-slate-300 dark:text-slate-700" />
                  <p className="text-xs font-medium">No active search. Try typing above to find direct store stock rates!</p>
                </div>
              )}

              {searched && searchResults.length === 0 && (
                <div className="flex flex-col items-center justify-center h-32 text-center p-3">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">" {searchQuery} " Not Found in Cache</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Don't worry! We carry 15,000+ items. Click **WhatsApp Order** below to send an instant inquiry to our live pharmacist.
                  </p>
                  <button 
                    onClick={() => setActiveTab('order')}
                    className="mt-3 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 text-xs font-extrabold rounded-lg flex items-center gap-1.5 transition-all"
                  >
                    <span>Send WhatsApp Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {searched && searchResults.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span>Matches Found ({searchResults.length})</span>
                    <span>Status / Rate</span>
                  </div>
                  {searchResults.map((med) => (
                    <div 
                      key={med.id} 
                      id={`search-med-${med.id}`}
                      className="flex items-start justify-between gap-3 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-800/80 transition-all group"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{med.name}</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[9px] text-slate-500 dark:text-slate-400 font-mono rounded font-bold uppercase">{med.type}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">{med.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-black bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded font-mono border border-emerald-100 dark:border-emerald-950">
                          <CheckCircle2 className="w-3 h-3 fill-emerald-600/10" />
                          <span>In Stock</span>
                        </span>
                        {med.price && <p className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-1">{med.price}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* AI Advisor Promotional Banner */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 fill-indigo-600/10" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Need Ayurvedic Guidance?</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Ask our certified AI assistant for herbal suggestions.</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('ai-consultant')}
                className="px-3 py-1.5 bg-indigo-550 hover:bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all bg-emerald-600"
              >
                Ask AI Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
