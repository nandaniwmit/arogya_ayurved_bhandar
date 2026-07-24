import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, CalendarRange } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    // Simulate API delivery
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error' || status === 'success') setStatus('idle');
  };

  return (
    <div id="contact-page-view" className="py-12 bg-slate-50 dark:bg-slate-950 animate-fade-in space-y-12">
      
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Connect With Our <span className="text-emerald-600 dark:text-emerald-400">Pharmacist Team</span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Need drug clarification, dosage details, or bulk clinical rates? Drop us a query or visit our physical store in Gaya today.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Contact Details, Map and Hours */}
        <div id="contact-details-col" className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Direct Contact */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarRange className="w-5.5 h-5.5 text-emerald-500" />
              <span>Gaya Store Information</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Our Address</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">Tekari Rd, Dhamitola, Dulhingunj, Gaya, Bihar 823001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Phone Numbers</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                    <a href="tel:09931075347" className="hover:text-emerald-600 font-mono font-bold">+91 99310 75347</a> (Direct Call)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Email Address</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">info.arogyagaya@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Business Hours */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3.5">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span>Standard Working Hours</span>
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Monday - Saturday:</span>
                <span className="text-slate-800 dark:text-slate-250 font-mono font-bold">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Sunday & National Holidays:</span>
                <span className="text-slate-800 dark:text-slate-250 font-mono font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-[11px] text-amber-700 dark:text-amber-350 rounded-xl leading-relaxed">
                📢 **Patient Note**: For immediate emergency prescription orders outside hours, please call us directly. Our helpline remains on-duty.
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Interactive Contact Inquiry Form */}
        <div id="contact-form-col" className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">Submit a Quick Inquiry</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Complete the details below, and our pharmacist team will reach out within 2 hours.</p>

          <form onSubmit={handleSubmit} id="contact-quick-form" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Shri Ramesh Patel"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="099310 75347"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ramesh@gmail.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Your Message / Requirements</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="List required tablets, syrups, brand preference or general questions..."
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
              ></textarea>
            </div>

            {/* Error alerts */}
            {status === 'error' && (
              <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Please fill in all required (*) fields correctly.</span>
              </div>
            )}

            {/* Success alerts */}
            {status === 'success' && (
              <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5" />
                <div>
                  <strong className="block">Inquiry Received Successfully!</strong>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Our executive pharmacist will verify medicine stocks and call you shortly.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'sending' ? 'Transmitting...' : 'Submit Inquiry'}</span>
            </button>
          </form>

        </div>
      </div>

      {/* 4. Google Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="maps-embed-card" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white">Physical Store Map Ingress</h3>
              <p className="text-[11px] text-slate-400">Tekari Rd, Dhamitola, Dulhingunj, Gaya, Bihar 823001</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Arogya+Ayurved+Bhandar+Tekari+Rd+Dhamitola+Gaya+Bihar" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-lg border border-emerald-100 dark:border-emerald-900 hover:bg-emerald-100 transition-all"
            >
              Open in Google Maps App
            </a>
          </div>
          
          <div className="w-full h-80 rounded-2xl overflow-hidden relative border border-slate-100 dark:border-slate-850">
            <iframe
              title="Arogya Ayurved Bhandar Store Location Gaya Bihar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.158428387258!2d84.99849207595354!3d25.02864693850554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bd5064db3eb%3A0xc6cb6961cf9fc03f!2sArogya%20Ayurved%20Bhandar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}
