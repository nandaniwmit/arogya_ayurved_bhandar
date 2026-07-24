import React, { useState, useRef } from 'react';
import { MessageSquare, Phone, Upload, Eye, FileText, CheckCircle2, ShieldAlert, Sparkles, Trash2, ArrowRight } from 'lucide-react';

export default function WhatsAppOrderView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicines: '',
    hasPrescription: 'No',
    message: '',
    deliveryTime: 'Evening (4:00 PM - 8:00 PM)'
  });

  const [prescriptionImage, setPrescriptionImage] = useState<string | null>(null);
  const [prescriptionName, setPrescriptionName] = useState<string | null>(null);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file (PNG, JPG, JPEG) of your prescription.");
      return;
    }

    setPrescriptionName(file.name);
    setFormData(prev => ({ ...prev, hasPrescription: 'Yes' }));

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPrescriptionImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const removePrescription = () => {
    setPrescriptionImage(null);
    setPrescriptionName(null);
    setAiAnalysisResult(null);
    setFormData(prev => ({ ...prev, hasPrescription: 'No' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Premium OCR & Prescription Analysis via Server-side Gemini 3.5 Flash
  const analyzePrescriptionWithAI = async () => {
    if (!prescriptionImage) return;
    setAiAnalyzing(true);
    setAiAnalysisResult(null);

    try {
      const res = await fetch("/api/analyze-prescription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: prescriptionImage })
      });

      const data = await res.json();
      if (data.analysis) {
        setAiAnalysisResult(data.analysis);
        
        // Append AI suggestions to medicine requirements for easier checkout
        setFormData(prev => ({
          ...prev,
          medicines: prev.medicines 
            ? `${prev.medicines}\n\n[Prescription Transcription Result]:\n${data.analysis}`
            : `[AI Transcribed Medicines]:\n${data.analysis}`
        }));
      } else {
        setAiAnalysisResult("AI Analysis complete. No clear medicine names extracted. Please proceed with manual checkout.");
      }
    } catch (err) {
      console.error("Prescription reading error:", err);
      setAiAnalysisResult("Failed to contact the AI Transcription service. Please proceed with standard submission.");
    } finally {
      setAiAnalyzing(false);
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.medicines) {
      alert("Please complete Name, Mobile, Address and Medicines required before sending.");
      return;
    }

    // Format final prefilled message according to layout specifications
    const formattedText = `Hello Arogya Ayurved Bhandar

Customer Name:
${formData.name}

Phone:
${formData.phone}

Medicine Required:
${formData.medicines}

Address:
${formData.address}

Prescription:
${formData.hasPrescription}

Message:
${formData.message || 'None'}

Preferred Delivery:
${formData.deliveryTime}

Ordered via Website Store Portal.`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/919931075347?text=${encodedText}`;
    
    // Safely open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="order-page-view" className="py-12 bg-white dark:bg-slate-900 animate-fade-in space-y-12">
      
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="order-title" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Express <span className="text-emerald-600 dark:text-emerald-400">WhatsApp Order Portal</span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Need quick home delivery or storefront packaging? Order instantly by filling our formatted checkout sheet. We prepare order bundles immediately in Gaya.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Core Order Form */}
        <div id="order-form-container" className="lg:col-span-7 bg-slate-50 dark:bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-200/60 dark:border-slate-800 pb-4">
            <MessageSquare className="w-6 h-6 text-emerald-500 fill-emerald-500/10" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Formatted Order Sheet</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">All responses will automatically format and open in WhatsApp upon submitting.</p>
            </div>
          </div>

          <form onSubmit={handleOrderSubmit} id="whatsapp-order-form" className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Customer Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Singh"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 099310 75347"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Preferred Delivery / Pickup Time</label>
                <select
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
                >
                  <option>Morning (8:00 AM - 12:00 PM)</option>
                  <option>Afternoon (12:00 PM - 4:00 PM)</option>
                  <option>Evening (4:00 PM - 8:00 PM)</option>
                  <option>Storefront Instant Self-Pickup</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Full Delivery Address *</label>
              <input
                type="text"
                name="address"
                required
                placeholder="Door No, Street Name, Landmark, Gaya City area, Pincode"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Medicines / Herbs Required *</label>
              <textarea
                name="medicines"
                required
                rows={4}
                placeholder="List required items clearly (e.g. 1x Ashwagandha Vati Patanjali, 2x Dolo 650, 1x BP monitor Omron...)"
                value={formData.medicines}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white font-sans"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">Additional Message / Note</label>
              <input
                type="text"
                name="message"
                placeholder="e.g. Please bring changes of 500 rupees, or call before dispatching..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
              />
            </div>

            {/* Submit Action Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/10 animate-bounce" />
                <span>Format & Send via WhatsApp</span>
              </button>
              
              <a
                href="tel:09931075347"
                className="w-full sm:w-auto px-5 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold rounded-xl text-center transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Hotline</span>
              </a>
            </div>

          </form>
        </div>

        {/* Right Col: Drag-and-Drop Prescription Upload & AI Reader */}
        <div id="prescription-upload-sidebar" className="lg:col-span-5 space-y-6">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Upload className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Quick Prescription Upload</h4>
                <p className="text-[11px] text-slate-400">Drag & Drop or Select image file</p>
              </div>
            </div>

            {/* Drag & Drop Canvas */}
            <div
              id="drag-drop-zone"
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[160px] ${
                dragActive
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-900 bg-slate-50/50 dark:bg-slate-900/40'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {!prescriptionImage ? (
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>Drag & Drop prescription here or </span>
                    <span className="text-emerald-600 dark:text-emerald-400 underline">Browse File</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Supports JPG, JPEG, PNG formats</p>
                </div>
              ) : (
                <div className="space-y-3 w-full">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-800 max-h-40">
                    <img
                      src={prescriptionImage}
                      alt="Prescription preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="text-[11px] text-white font-bold bg-slate-900/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Prescription Active</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs px-1">
                    <span className="font-mono text-slate-600 dark:text-slate-400 truncate max-w-[180px]" title={prescriptionName || ''}>
                      {prescriptionName}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removePrescription(); }}
                      className="text-red-500 hover:text-red-600 p-1 bg-red-50 dark:bg-red-950/20 rounded-lg transition-colors"
                      title="Remove Prescription"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Smart Gemini Prescription Transcribe Button */}
            {prescriptionImage && (
              <div id="ai-ocr-trigger-container" className="pt-2">
                <button
                  type="button"
                  onClick={analyzePrescriptionWithAI}
                  disabled={aiAnalyzing}
                  className="w-full py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold rounded-xl shadow-md text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4.5 h-4.5 fill-white/10 animate-pulse" />
                  <span>{aiAnalyzing ? 'AI Scribing Prescription...' : 'Let AI Transcribe/Read Prescription'}</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-1.5">Powered by server-side Gemini 3.5 Flash transcription OCR models.</p>
              </div>
            )}

            {/* Prescription Download / Send Warning Reminder */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 rounded-2xl text-xs space-y-1 text-emerald-800 dark:text-emerald-300 leading-normal">
              <span className="font-bold flex items-center gap-1">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>How to send Prescription file:</span>
              </span>
              <p>
                *Important:* The prescription image uploaded here is used for transcription. Don't forget to attach the actual photo directly in WhatsApp when chat opens!
              </p>
            </div>
          </div>

          {/* AI results display area */}
          {aiAnalysisResult && (
            <div id="ai-ocr-output-box" className="bg-slate-900 text-slate-100 p-5 rounded-3xl border border-slate-800 space-y-3 animate-fade-in shadow-lg">
              <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 fill-amber-400/20" />
                <span>Gemini Prescription Audit Result</span>
              </h4>
              <div className="text-xs leading-relaxed space-y-2 border-t border-slate-800 pt-2.5 max-h-[180px] overflow-y-auto pr-1">
                <p className="whitespace-pre-line text-slate-300">{aiAnalysisResult}</p>
              </div>
              <p className="text-[10px] text-slate-500 italic">Transcribed details added to the Order Sheet requirements automatically.</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
