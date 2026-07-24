import { useState } from 'react';
import { BookOpen, Clock, Heart, Eye, ArrowRight, CalendarDays, Award } from 'lucide-react';
import { BlogArticle } from '../types';

const ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    title: 'Ashwagandha: The Ayurvedic Shield Against Daily Stress',
    excerpt: 'Explore how this ancient adaptogenic root helps lower cortisol levels, promote restful sleep patterns, and revitalize cognitive performance naturally.',
    category: 'Ayurveda',
    date: 'July 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1118181?auto=format&fit=crop&w=600&q=80',
    content: 'Ashwagandha, scientifically known as Withania somnifera, is the cornerstone of Ayurvedic rasayana therapies. By acting on the endocrine system, it regulates stress hormones and increases daily energy levels without causing palpitations.'
  },
  {
    id: 'b2',
    title: 'Home First Aid Kit: 10 Essentials Every Family Must Stock',
    excerpt: 'Accidents happen without warning. Check our certified checklist of surgical gauzes, antiseptic solutions, and wound tapes to keep your family protected.',
    category: 'First Aid',
    date: 'July 05, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    content: 'A complete clinical first-aid pack should feature sterilized gauze pads, adhesive micro tapes, triple antibiotic ointments, pain relief sprays, digital oximeters, and premium antiseptic fluids like Dettol.'
  },
  {
    id: 'b3',
    title: 'Natural Ways to Fight Digestive Disorders this Monsoon',
    excerpt: 'Damp monsoon weather slows down your metabolic fire (Agni). Learn how Ginger, Triphala, and fennel seeds work to prevent gas, bloating, and stomach cramps.',
    category: 'Daily Health',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    content: 'Monsoon season dampens the digestive fire, leading to a build-up of toxins (Ama). Traditional herbs like Haritaki and Bibhitaki help support easy digestion and fortify gut immunity.'
  },
  {
    id: 'b4',
    title: 'Nurturing Infant Skin: Pediatrician-Backed Guidelines',
    excerpt: 'Baby skin is highly sensitive and prone to rashes. Discover why pure coconut oils, herbal baby powders, and soap-free liquid washes prevent eczema flareups.',
    category: 'Baby Care',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&w=600&q=80',
    content: 'Infants have thin skin barrier structures that dry out rapidly. Opting for Ayush-approved botanical baby washes over hard surfactant chemicals shields them from allergic eczema.'
  }
];

export default function BlogView() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Ayurveda' | 'Daily Health' | 'Baby Care' | 'First Aid'>('All');
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);

  const filterTags = ['All', 'Ayurveda', 'Daily Health', 'Baby Care', 'First Aid'] as const;

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === selectedCategory);

  return (
    <div id="blog-section-container" className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title area */}
        <div className="text-center space-y-3">
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
            Health & Wellness Advice
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Arogya Health Awareness Blog
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Practical guidelines and traditional natural wisdom to help you achieve a balanced, symptom-free lifestyle.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {filterTags.map((tag) => (
            <button
              key={tag}
              id={`blog-filter-${tag}`}
              onClick={() => { setSelectedCategory(tag); setReadingArticle(null); }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tag
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Main Grid or Reader */}
        {!readingArticle ? (
          <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                id={`blog-card-${art.id}`}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Photo cover */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Body text */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                      <span className="text-emerald-600 dark:text-emerald-400 uppercase">{art.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-850 dark:text-white text-sm line-clamp-2 leading-tight">
                      {art.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-normal">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read button */}
                <div className="p-4 pt-0 border-t border-slate-50 dark:border-slate-800 mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{art.date}</span>
                  <button
                    onClick={() => setReadingArticle(art)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed Single Article Reader view */
          <div id="blog-detailed-reader" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto space-y-6 animate-fade-in shadow-md">
            <button
              onClick={() => setReadingArticle(null)}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-lg transition-all"
            >
              ← Back to All Articles
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono font-bold text-slate-400 border-b border-slate-100 dark:border-slate-850 pb-2.5">
                <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded uppercase">{readingArticle.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>{readingArticle.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{readingArticle.readTime}</span>
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{readingArticle.title}</h4>
              
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4 font-serif">
                <p className="font-sans font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border-l-4 border-emerald-500">
                  "{readingArticle.excerpt}"
                </p>
                <p>{readingArticle.content}</p>
                <p>
                  Consuming genuine herbs sourced under professional conditions ensures maximum preservation of beneficial bioactive compounds. At Arogya Ayurved Bhandar, we carry high-purity packed formulations stored under moisture-proof settings for secure results. For individualised therapies, present your clinic diagnostic documents to our in-store experts.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-850 flex items-center gap-2 text-xs text-slate-500">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Reviewed and published by Certified Pharmacists at Arogya Ayurved Bhandar, Gaya.</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
