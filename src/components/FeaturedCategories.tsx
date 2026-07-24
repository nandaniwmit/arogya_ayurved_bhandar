import { Activity, ShieldCheck, Heart, Clock, HeartHandshake, Smile, MapPin, Pill, Scissors, Layers, Thermometer, ShoppingBag } from 'lucide-react';

interface FeaturedCategoriesProps {
  onCategoryClick: (categoryName: string) => void;
}

const CATEGORIES = [
  { name: 'Tablets', count: '1200+ items', icon: Pill, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900' },
  { name: 'Capsules', count: '850+ items', icon: Pill, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900' },
  { name: 'Syrups', count: '450+ items', icon: Activity, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900' },
  { name: 'Injection', count: '150+ items', icon: Scissors, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900' },
  { name: 'Medical Equipment', count: '80+ items', icon: Thermometer, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900' },
  { name: 'Protein Supplements', count: '120+ items', icon: Layers, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900' },
  { name: 'Vitamins', count: '310+ items', icon: Heart, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900' },
  { name: 'Skin Care', count: '240+ items', icon: ShoppingBag, color: 'text-pink-600 bg-pink-50 dark:bg-pink-950/40 border-pink-100 dark:border-pink-900' },
  { name: 'Baby Products', count: '400+ items', icon: ShoppingBag, color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/40 border-yellow-100 dark:border-yellow-900' },
  { name: 'Personal Hygiene', count: '180+ items', icon: ShieldCheck, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-100 dark:border-cyan-900' },
  { name: 'Orthopedic Support', count: '90+ items', icon: Layers, color: 'text-slate-600 bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800' },
  { name: 'Diabetic Care', count: '210+ items', icon: Activity, color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900' }
];

const TRUST_FACTORS = [
  { title: "Experienced Pharmacy", desc: "Over 24 years of reliable pharmaceutical and Ayurvedic dispensing in Gaya.", icon: AwardIcon },
  { title: "100% Quality Medicines", desc: "Sourced directly from verified companies with intact clinical batch codes.", icon: QualityIcon },
  { title: "Quick Local Service", desc: "10-minute prescription verification and 2-4 hour express home delivery.", icon: SpeedIcon },
  { title: "Friendly Certified Staff", desc: "Compassionate, certified pharmacists who assist in herbal and modern advice.", icon: StaffIcon },
  { title: "Reasonable Pricing", desc: "Honest retail pricing and standard promotional discounts on prescriptions.", icon: PricingIcon },
  { title: "Convenient Location", desc: "Centrally based on Tekari Road, Gaya with active parking & instant pickup.", icon: LocationIcon }
];

function AwardIcon() { return <ShieldCheck className="w-6 h-6 text-emerald-600" />; }
function QualityIcon() { return <Pill className="w-6 h-6 text-teal-600" />; }
function SpeedIcon() { return <Clock className="w-6 h-6 text-amber-600" />; }
function StaffIcon() { return <HeartHandshake className="w-6 h-6 text-blue-600" />; }
function PricingIcon() { return <Smile className="w-6 h-6 text-rose-600" />; }
function LocationIcon() { return <MapPin className="w-6 h-6 text-purple-600" />; }

export default function FeaturedCategories({ onCategoryClick }: FeaturedCategoriesProps) {
  return (
    <div id="categories-and-trust-section" className="py-16 bg-white dark:bg-slate-900 space-y-20 border-t border-slate-100 dark:border-slate-850">
      
      {/* 1. Featured Categories Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Explore Featured Categories
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Browse our clinical stocks categorized for easy navigation. Click any card to inquire availability on WhatsApp immediately.
          </p>
        </div>

        <div id="categories-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                id={`cat-card-${idx}`}
                onClick={() => onCategoryClick(cat.name)}
                className={`p-5 rounded-2xl border text-center cursor-pointer hover:shadow-md hover:scale-102 transition-all flex flex-col items-center justify-center space-y-3 ${cat.color}`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-white/60 dark:bg-slate-900/60">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-850 dark:text-slate-200 text-xs sm:text-sm leading-tight">{cat.name}</h4>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium font-mono block mt-0.5">{cat.count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Why Customers Trust Us Segment */}
      <div className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Trusted Pharmacy Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Why Customers Trust Our Store
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Our business operations are anchored on clinical safety, genuine supplies, and fast customer delivery.
            </p>
          </div>

          <div id="trust-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_FACTORS.map((fact, idx) => {
              const IconComponent = fact.icon;
              return (
                <div
                  key={idx}
                  id={`trust-card-${idx}`}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex gap-4 items-start"
                >
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 shrink-0 shadow-sm">
                    <IconComponent />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-850 dark:text-white text-sm sm:text-base">{fact.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{fact.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}
