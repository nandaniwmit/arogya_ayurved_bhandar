import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do you sell allopathic prescription medicines alongside Ayurvedic products?',
    answer: 'Yes, absolutely. Arogya Ayurved Bhandar is an integrated pharmacy. While we are Gaya\'s premier hub for authentic Ayurvedic herbs and AYUSH compounds, we carry a full, temperature-controlled inventory of modern allopathic drugs, cardiac medications, pediatric drops, and daily health tablets.',
    category: 'Medicines'
  },
  {
    id: 'f2',
    question: 'How does the WhatsApp Order process work?',
    answer: 'It is highly straightforward! Simply go to our "WhatsApp Order" page, fill in your name, delivery address, phone, and requirements, and select "Send to WhatsApp". This automatically formats your order into a clean clinical sheet and opens your local WhatsApp application. Send the text, and our Gaya pharmacist will handle packaging and delivery details.',
    category: 'Ordering'
  },
  {
    id: 'f3',
    question: 'Is a doctor\'s prescription mandatory to order medicines?',
    answer: 'For general OTC drugs, health vitamins, and organic Ayurvedic supplements, a prescription is not mandatory. However, for scheduled clinical drugs (like specific cardiac, respiratory, or psychoactive tablets), you must upload or present a valid medical prescription signed by a registered practitioner.',
    category: 'Prescriptions'
  },
  {
    id: 'f4',
    question: 'How accurate is the AI Prescription Transcriber on your website?',
    answer: 'Our prescription reading helper is powered by server-side Gemini 3.5 Flash OCR models to identify handwriting patterns. While highly advanced, clinical decisions require expert verification. Our head pharmacist always manually verifies the actual uploaded photo before finalizing packing to ensure 100% accuracy.',
    category: 'AI Assistant'
  },
  {
    id: 'f5',
    question: 'Do you provide home delivery in Gaya, Bihar?',
    answer: 'Yes! We provide express delivery across major local areas in Gaya (including Dhamitola, Dulhingunj, Tekari Road, AP Colony, and nearby suburbs) within 2-4 hours. Minimum order values apply for free delivery; please contact our team via phone or WhatsApp at 09931075347 for details.',
    category: 'Delivery'
  },
  {
    id: 'f6',
    question: 'Are the Ayurvedic medicines stocked at Arogya pure and authentic?',
    answer: 'We stock exclusively 100% genuine formulations sourced directly from India\'s premium Ayush-approved labs (Patanjali, Baidyanath, Dabur, Zandu, Charak, and Hamdard). All compounds are stored in sealed moisture-controlled containers to prevent humidity from eroding herb potency.',
    category: 'Medicines'
  },
  {
    id: 'f7',
    question: 'What are the store operating hours?',
    answer: 'We are open seven days a week to support your health. Monday through Saturday: 8:00 AM to 10:00 PM. Sundays: 9:00 AM to 8:00 PM. Our emergency call helpline (09931075347) is available 24/7 for critical prescriptions.',
    category: 'General'
  },
  {
    id: 'f8',
    question: 'What digital and offline payment modes are accepted?',
    answer: 'We accept cash on delivery/pickup alongside all major UPI services (Google Pay, PhonePe, Paytm, BHIM App), net banking, and clinical card terminals (Debit/Credit cards) at our physical counter.',
    category: 'General'
  },
  {
    id: 'f9',
    question: 'What is your return and exchange policy?',
    answer: 'We accept exchanges or full refunds on intact, unexpired medicine strips or unopened healthcare devices within 15 days of purchase, provided you present the original cash memo. We cannot accept returns of loose capsules, cut syrup bottles, or refrigerated drugs due to safety standards.',
    category: 'Ordering'
  },
  {
    id: 'f10',
    question: 'Where is Arogya Ayurved Bhandar physically located?',
    answer: 'We are located on Tekari Road, Dhamitola, Dulhingunj, Gaya, Bihar 823001. It is a highly central landmark and easily accessible. Click the "Get Directions" button on our homepage to open live GPS navigation in your Google Maps app.',
    category: 'General'
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="faq-section-container" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-emerald-500" />
            <span>Frequently Asked Questions</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Clear, honest answers regarding prescription handling, Ayurvedic authenticity, delivery boundaries, and digital billing in Gaya.
          </p>
        </div>

        {/* Search Bar inside FAQ */}
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. prescription, delivery, Ayurveda)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
          />
        </div>

        {/* Accordion List */}
        <div id="faq-accordion-list" className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[9px] font-mono font-black uppercase rounded shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion Content with transition height */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs">
              No matching questions found. Ask our AI Wellness Advisor or call us at 09931075347 for direct help!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
