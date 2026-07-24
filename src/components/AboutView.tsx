import { ShieldAlert, Award, Star, History, Target, Heart, Check, Quote, Leaf } from 'lucide-react';

export default function AboutView() {
  const values = [
    { title: "Purity & Authenticity", desc: "Every capsule, syrup, and loose herb is sourced directly from certified manufactures like Patanjali, Dabur, and Baidyanath.", icon: Leaf, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40" },
    { title: "Ethical Dispensing", desc: "We enforce absolute adherence to drug guidelines, verifying prescriptions carefully for active drugs.", icon: Award, color: "text-blue-500 bg-blue-50 dark:bg-blue-950/40" },
    { title: "Affordable Access", desc: "Healthcare shouldn't break the bank. We offer standard discounts on prescriptions and bulk items.", icon: Star, color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40" },
    { title: "Compassionate Support", desc: "Our team is highly experienced and offers personal guidance for healthy, toxic-free living.", icon: Heart, color: "text-rose-500 bg-rose-50 dark:bg-rose-950/40" }
  ];

  const timeline = [
    { year: "2002", title: "The Humble Seed", desc: "Shri Ramesh Chandra founded Arogya Ayurved Bhandar on Tekari Road with a tiny inventory of hand-picked raw herbs and classic churnas." },
    { year: "2008", title: "Integrated Healthcare", desc: "To better serve local families, we expanded into certified modern prescription medicines and surgical essentials." },
    { year: "2015", title: "Bebé & Home Diagnostics", desc: "Introduced dedicated baby care sections and digital health monitors (BP devices, thermometers, glucometers) to support daily tracking." },
    { year: "2021", title: "Store Digitalization", desc: "Upgraded our inventory storage to state-of-the-art climate-controlled chambers to maintain raw herb potency and preserve drugs securely." },
    { year: "2026", title: "Omnichannel Care", desc: "Integrated smart WhatsApp ordering and server-side AI solutions to deliver 10-minute prescription verification for customers in Gaya." }
  ];

  return (
    <div id="about-page-view" className="py-12 bg-white dark:bg-slate-900 animate-fade-in space-y-16">
      
      {/* 1. Header Hero Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="about-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          A Legacy of Purity & <span className="text-emerald-600 dark:text-emerald-400">Authentic Wellness</span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Serving the community of Gaya with top-grade Ayurvedic compounds and reliable allopathic formulations for over 24 years.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* 2. Business Story & Owner Quote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Story Paragraphs */}
        <div id="story-paragraphs" className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <History className="w-5.5 h-5.5 text-emerald-500" />
            <span>Our Journey & Roots</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
            Established in 2002 on the bustling Tekari Road of Gaya, Bihar, **Arogya Ayurved Bhandar** was founded on a simple, powerful promise: to deliver 100% genuine, unadulterated medical compounds to our neighbors. At a time when finding fresh, certified Ayurvedic formulations was a challenge, we brought pure products directly from India's most respected laboratories.
          </p>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
            As families placed their trust in our service, we adapted to their comprehensive needs. Today, we stand as an integrated healthcare hub. Whether you are looking for rare Ayurvedic oils, critical cardiac prescriptions, baby formulas, orthopedic supporters, or surgical gloves, you will find authentic stocks maintained with strict temperature controls.
          </p>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                <Target className="w-5.5 h-5.5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">Our Mission</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                To provide Gaya with authentic medicines, pure Ayurvedic therapies, and reliable daily care products at fair, transparent rates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                <Heart className="w-5.5 h-5.5" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">Our Vision</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                To blend ancient Ayurvedic wisdom with digital-age efficiency, ensuring every patient receives fast, error-free medicine delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Owner message box */}
        <div id="owner-message-box" className="lg:col-span-5 bg-gradient-to-br from-emerald-500 to-teal-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          
          <div className="relative space-y-6">
            <Quote className="w-12 h-12 text-white/20 fill-white/5" />
            <p className="text-base italic leading-relaxed font-medium">
              "Ayurveda is not merely a collection of books; it is a philosophy of harmonious living. At Arogya Ayurved Bhandar, we consider pharmacy to be a sacred service. When you buy from us, you aren't just getting medicines — you are receiving our lifelong pledge of absolute authenticity, fair pricing, and pure therapeutic grades."
            </p>

            <div className="border-t border-white/20 pt-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-black text-white text-lg">
                RC
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base">Shri Ramesh Chandra</h4>
                <p className="text-xs text-white/80">Founder & Chief Pharmacist</p>
                <p className="text-[10px] text-amber-200 uppercase tracking-widest font-mono">Estd. 2002 • Gaya</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Core Values Section */}
      <div className="bg-slate-50 dark:bg-slate-950 py-16 border-y border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Our Foundational Values</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">The parameters that dictate our store operation, prescription handlings, and patient services.</p>
          </div>

          <div id="values-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Timeline Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">Our Timeline & Growth</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Tracing our milestones from a single-shelf vendor to the premier full-stack digital store in Bihar.</p>
        </div>

        <div id="timeline-flow" className="relative border-l-2 border-emerald-200 dark:border-emerald-900 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-8 py-2">
          {timeline.map((item, idx) => (
            <div key={idx} id={`timeline-item-${item.year}`} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 group-hover:scale-125 transition-transform duration-200 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors">
                <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm tracking-widest block mb-1">{item.year}</span>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-base mb-1.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Trust Badges Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-emerald-100 dark:border-emerald-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldAlert className="w-5 h-5 text-emerald-600" />
              <span>Certified Drug Licence Holder</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We strictly abide by the guidelines of the Drug Controller Organization, Government of Bihar. License: **G/DL-2204-M / G/DL-2205-MS**.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 font-bold text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-2 rounded-xl shadow-sm border border-emerald-100 dark:border-slate-800">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-2 rounded-xl shadow-sm border border-emerald-100 dark:border-slate-800">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Ayush Approved</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
