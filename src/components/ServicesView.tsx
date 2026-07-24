import { Clipboard, ShieldAlert, HeartPulse, Pill, Baby, User, Activity, Scissors, Layers, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { ActiveTab, ServiceItem } from '../types';

interface ServicesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

const HEALTH_SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Prescription Medicines',
    description: 'Authentic allopathic formulas spanning cardiology, neurology, diabetes management, respiratory, and pediatric medicines.',
    iconName: 'Pill',
    details: ['Verified batch codes and genuine safety tags', 'Extended expiry guarantees', 'Sourced directly from certified wholesalers', 'Prescription validation by expert pharmacists']
  },
  {
    id: 's2',
    title: 'Ayurvedic & General Medicines',
    description: 'A massive inventory of organic herbal formulations, churnas, rishtas, and pills from top-tier AYUSH certified brands.',
    iconName: 'Clipboard',
    details: ['Full stock of Patanjali, Baidyanath, Dabur, and Zandu', 'Classical rasas, herbal decoctions, and single-herb powders', 'Authentic traditional immunity syrups', '100% organic extraction grades']
  },
  {
    id: 's3',
    title: 'Health Supplements',
    description: 'Protein powders, dietary vitamins, amino acids, herbal wellness tonics, and energy builders to replenish daily requirements.',
    iconName: 'HeartPulse',
    details: ['Certified protein shakes (Ensure, Protinex)', 'Vitamins D3, B-Complex, Calcium, and Multi-minerals', 'Organic spirulina, omega-3, and cod-liver capsules', 'Sports nutrition and antioxidant formulas']
  },
  {
    id: 's4',
    title: 'Baby Care Products',
    description: 'Hypoallergenic formulas, diapers, infant feeding bottles, and baby personal hygiene essentials from trusted brands.',
    iconName: 'Baby',
    details: ['Pediatrician-approved baby lotions and shampoos', 'Premium diaper bundles (Pampers, MamyPoko)', 'Infant formula powders (Lactogen, Similac)', 'Safe baby-grade feeding accessories']
  },
  {
    id: 's5',
    title: 'Personal Care & Cosmetics',
    description: 'Organic skin care creams, daily hygiene items, specialized herbal soaps, medicated shampoos, and oral care kits.',
    iconName: 'User',
    details: ['Herbal face washes and natural skin hydrators', 'Medicated antidandruff and clinical hair therapies', 'Hand hygiene and body wash bundles', 'Premium oral antiseptics and dental creams']
  },
  {
    id: 's6',
    title: 'Medical Equipment',
    description: 'Reliable, certified personal diagnostics machines and home-use medical apparatus to track clinical levels.',
    iconName: 'Activity',
    details: ['Automatic Upper-Arm Blood Pressure Monitors', 'Digital Infrared Thermometers & Pulse Oximeters', 'Advanced Blood Glucometer kits with disposable strips', 'Inhalers, Nebulizers, and Vaporizers']
  },
  {
    id: 's7',
    title: 'Surgical Supplies',
    description: 'Clinical grade tools, sterile surgical gloves, disposable syringes, cannula tubes, and professional medical disposables.',
    iconName: 'Scissors',
    details: ['Sterilized latex gloves and protective masks', 'Disposable insulin syringes and IV sets', 'Surgical scalpels, scissors, and forceps', 'Clinical catheter tubes and urine collection bags']
  },
  {
    id: 's8',
    title: 'First Aid Products',
    description: 'Essential items for emergency wound dressings, sports injuries, and instant minor surgical care at home.',
    iconName: 'FirstAid',
    details: ['Sterilized cotton, bandages, and gauge rolls', 'Antiseptic solutions (Dettol, Savlon, Betadine)', 'Micropore tape and cohesive sports bands', 'Burn creams, pain sprays, and band-aids']
  },
  {
    id: 's9',
    title: 'Diabetic Care Section',
    description: 'Comprehensive products for diabetic management, blood sugar control supplements, sugar-free foods, and test kits.',
    iconName: 'Layers',
    details: ['Glucometer sensors and lancet needles', 'Certified insulin syringe pens and cooler wallets', 'Natural zero-calorie sweeteners and diabetic biscuits', 'Ayurvedic blood-sugar controllers (Madhunashini)']
  },
  {
    id: 's10',
    title: 'Healthcare Essentials & Home Care',
    description: 'Daily support essentials, adult diaper packs, heating pads, orthopedic supports, and physical rehabilitation items.',
    iconName: 'Clipboard',
    details: ['Orthopedic lumbar supports and cervical collars', 'Anti-slip knee guards and wrist splints', 'High-absorbent adult diapers and underpads', 'Walking sticks, crutches, and hot-water bags']
  }
];

export default function ServicesView({ setActiveTab }: ServicesViewProps) {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'Clipboard': return <Clipboard className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'User': return <User className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'FirstAid': return <HeartPulse className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      default: return <Clipboard className="w-6 h-6" />;
    }
  };

  return (
    <div id="services-page-view" className="py-12 bg-slate-50 dark:bg-slate-950 animate-fade-in space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Comprehensive <span className="text-emerald-600 dark:text-emerald-400">Healthcare Services</span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We combine the therapeutic potential of classical Ayurveda with certified modern medical inventories to serve as Gaya's primary health destination.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HEALTH_SERVICES.map((serv) => (
            <div 
              key={serv.id} 
              id={`service-card-${serv.id}`}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    {getIcon(serv.iconName)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{serv.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {serv.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block">Key Offerings</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {serv.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">Availability: <strong className="text-emerald-600 dark:text-emerald-400">Ready in Store</strong></span>
                <button
                  onClick={() => setActiveTab('order')}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-emerald-600 dark:bg-slate-850 dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prescription Banner Alert */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="prescription-cta-banner" className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 border border-emerald-800/60 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Decorative Leaf shape */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full pointer-events-none -mr-20 -mb-20"></div>
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
              Safe Clinical Protocols
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Have a Doctor's Prescription Ready?</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Skip the long queues at local shops. Simply upload an image of your prescription using our WhatsApp Order Form. Our head pharmacist in Gaya will personally package the medications and coordinate delivery details.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('order')}
            className="w-full lg:w-auto shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-900 hover:text-white font-extrabold rounded-xl shadow-lg shadow-emerald-500/15 transition-all text-sm flex items-center justify-center gap-2"
          >
            <Clipboard className="w-4 h-4" />
            <span>Upload Prescription Now</span>
          </button>
        </div>
      </div>

    </div>
  );
}
