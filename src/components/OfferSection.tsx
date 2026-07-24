import React, { useState } from 'react';
import { Tag, Truck, Check, Sparkles, UserCheck, Smartphone, ShoppingBag, CreditCard, Star, Send, Mail } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Shri Anil Kumar Agrawal', rating: 5, date: 'June 20, 2026', comment: 'I have been buying my monthly diabetes medications and cardiac tablets from Arogya Ayurved Bhandar for the last 10 years. Their products are always 100% genuine, with complete batches. Shri Ramesh Chandra is extremely polite and offers standard discounts on every bill.', role: 'Retired Govt. Officer', initials: 'AA' },
  { id: 't2', name: 'Dr. Neha Sharma', rating: 5, date: 'July 01, 2026', comment: 'As a practicing clinician in Gaya, I routinely recommend my patients to purchase classical Ayurvedic churnas and organic decoctions from Arogya. They store loose herbal items in excellent climate-controlled air dry spaces. Their newly launched WhatsApp order form makes prescription deliveries incredibly fast!', role: 'Clinical Consultant', initials: 'NS' },
  { id: 't3', name: 'Rajesh Kumar Gupta', rating: 5, date: 'June 14, 2026', comment: 'Highly convenient local medical store! I uploaded my father\'s prescription on their website form and clicked send to WhatsApp. Within 10 minutes, I received stock rates, and the medicines were delivered to my address in AP Colony by afternoon. Excellent UPI payment options too.', role: 'Local Merchant, AP Colony', initials: 'RG' },
  { id: 't4', name: 'Smt. Kamla Devi', rating: 5, date: 'June 08, 2026', comment: 'Arogya Bhandar carries authentic Patanjali, Dabur, and Zandu products that are sometimes hard to locate elsewhere in Gaya. The staff is very knowledgeable, always advising me on correct warm water dosages for herbal powders. Truly a blessed local business!', role: 'Home Maker', initials: 'KD' },
  { id: 't5', name: 'Vikram Singh', rating: 5, date: 'July 11, 2026', comment: 'I bought an Omron Blood Pressure Monitor and Accu-Chek glucometer from here. They checked the calibration, filled the warranty card properly, and explained the exact readings procedure. Their post-sale guidance is as trustworthy as their medicine purity.', role: 'Software Engineer', initials: 'VS' },
  { id: 't6', name: 'Sanjay Kumar Paswan', rating: 5, date: 'June 25, 2026', comment: 'Best store for surgical supplies and daily baby diapers. Fair pricing and extremely fast counter delivery. They do not overcharge even for emergency night calls. Highly recommended for all residents near Dhamitola and Tekari Road!', role: 'School Principal', initials: 'SP' }
];

export default function OfferSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div id="promotions-and-testimonials-container" className="py-16 bg-slate-50 dark:bg-slate-950 space-y-20 border-t border-slate-100 dark:border-slate-850">
      
      {/* 1. Working Process Row (4 Steps) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
            How It Works
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Our Simple Working Process
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Procuring your regular medicines or Ayurvedic compounds in Gaya is smooth and error-free.
          </p>
        </div>

        <div id="process-steps-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Visit Store / Web", desc: "Walk into our Gaya store or open our website order tab.", icon: ShoppingBag, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40" },
            { step: "02", title: "Share Prescription", desc: "Upload a copy here, search inventory, or show your list.", icon: UserCheck, color: "text-teal-600 bg-teal-50 dark:bg-teal-950/40" },
            { step: "03", title: "Get Medicines", desc: "Our certified pharmacist packs and temperature-seals items.", icon: Smartphone, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40" },
            { step: "04", title: "Easy Payment", desc: "Collect items via COD, cash, or instant digital scan codes.", icon: CreditCard, color: "text-rose-600 bg-rose-50 dark:bg-rose-950/40" }
          ].map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div
                key={idx}
                id={`process-card-${idx}`}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm text-center relative group hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
              >
                <div className="absolute top-4 right-4 font-mono font-black text-slate-100 dark:text-slate-800 text-3xl select-none">
                  {item.step}
                </div>
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${item.color}`}>
                  <StepIcon className="w-5.5 h-5.5" />
                </div>

                <h4 className="font-bold text-slate-850 dark:text-white text-base mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Offers & Delivery Cards Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Active Discount Promo */}
        <div id="promotional-discount-card" className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/25 text-amber-200 text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 fill-white/10" />
              <span>Active Seasonal Promotion</span>
            </div>
            <h4 className="text-2xl font-black">Flat 15% Off on Prescriptions</h4>
            <p className="text-xs text-emerald-100 max-w-sm leading-relaxed">
              Order your monthly healthcare medicines or Ayurvedic wellness tonics using our WhatsApp portal and get up to 15% discount on prescription items.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs font-bold text-amber-200 border-t border-white/10">
            <span>Code: AROGYA15</span>
            <span>*T&C apply • Valid in Gaya Town</span>
          </div>
        </div>

        {/* Card 2: Delivery Area Info */}
        <div id="delivery-info-card" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[220px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Local Express Home Delivery</h4>
                <p className="text-[11px] text-slate-400 font-medium">Fast door-to-door transit within Gaya</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We offer **Free Home Delivery** for all medicine orders above **₹500** within a 3km radius of Tekari Road, Dhamitola. Orders below values or other distances are subject to a nominal delivery charge of ₹20-₹40.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Tekari Rd, Dhamitola</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>AP Colony, Gaya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Dulhingunj, Gaya</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Gaya Jn nearby sectors</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
            <span>Average Delivery Time: 2-4 Hours</span>
            <span>Call 09931075347</span>
          </div>
        </div>

      </div>

      {/* 3. Customer Testimonials Section (6 Reviews) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
            Real Customer Reviews
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Why Our Customers Trust Us
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Read certified reviews from residents in Gaya who trust us for their family healthcare requirements.
          </p>
        </div>

        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-50 dark:border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-sm border border-emerald-100 dark:border-emerald-900">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-850 dark:text-white text-xs sm:text-sm leading-tight">{test.name}</h4>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{test.role} • {test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Newsletter Sign Up Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="newsletter-card" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Decorative Sparkle */}
          <div className="absolute top-2 left-2 text-emerald-100 dark:text-slate-800 pointer-events-none">
            <Sparkles className="w-12 h-12" />
          </div>

          <div className="space-y-1.5 max-w-xl text-center lg:text-left z-10">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
              <Mail className="w-5.5 h-5.5 text-emerald-500" />
              <span>Subscribe to Monthly Health Bulletins</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
              Get genuine wellness suggestions, organic diet advices, health alerts, and active storefront discount announcements delivered to your inbox. No spam, ever.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 z-10 shrink-0">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white min-w-[220px]"
            />
            
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Subscribe</span>
            </button>
          </form>

          {subscribed && (
            <div className="absolute bottom-1 right-8 p-1.5 bg-emerald-500 text-white rounded-lg text-[10px] font-bold animate-fade-in shadow-md">
              Thank you for subscribing! Check your email.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
