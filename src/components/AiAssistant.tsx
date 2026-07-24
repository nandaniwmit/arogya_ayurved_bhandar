import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Leaf, AlertCircle, RefreshCw, ArrowRight, HelpCircle } from 'lucide-react';
import { ActiveTab } from '../types';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AiAssistantProps {
  setActiveTab: (tab: ActiveTab) => void;
}

const PRESET_PROMPTS = [
  "What is Ashwagandha used for?",
  "Standard Ayurvedic tips for digestion?",
  "Tulsi remedies for seasonal cough & cold",
  "How can I order prescription medicines here?"
];

export default function AiAssistant({ setActiveTab }: AiAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Namaste! 🙏 I am your **Arogya AI Wellness Advisor**. I am here to help you understand traditional Ayurvedic herbs, wellness remedies, daily health habits, and check product categories available at **Arogya Ayurved Bhandar**.\n\nHow may I assist you with your natural health goals today?"
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const newMessages: Message[] = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(1) // exclude the initial welcome message from history formatting if needed
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with our healthcare server.");
      }

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: 'model', text: data.text }]);
      } else {
        throw new Error("Empty response received.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresetClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'model',
        text: "Namaste! 🙏 Conversation restarted. How can I assist you with your Ayurvedic questions today?"
      }
    ]);
    setError(null);
  };

  return (
    <div id="ai-assistant-page-view" className="py-12 bg-slate-50 dark:bg-slate-950 animate-fade-in space-y-12">
      
      {/* Header Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 id="ai-advisor-heading" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-emerald-500 fill-emerald-500/10" />
          <span>Arogya AI <span className="text-emerald-600 dark:text-emerald-400">Wellness Advisor</span></span>
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Ask questions about classical herbs, ayurvedic lifestyle tips, diet regimes, and store stocks. Powered by secure server-side Gemini 3.5 models.
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Main Chat Canvas */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="chat-frame" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[550px]">
          
          {/* Chat Header */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Leaf className="w-5 h-5 fill-emerald-500/10" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">AyurConsultant v1.2</h3>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Online • Secure Proxy Session</span>
                </span>
              </div>
            </div>

            <button
              id="clear-chat-btn"
              onClick={clearChat}
              className="text-xs font-bold text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
          </div>

          {/* Messages Viewport */}
          <div id="messages-viewport" className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/20 dark:bg-slate-950/20">
            {messages.map((msg, idx) => {
              const isModel = msg.role === 'model';
              return (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${isModel ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                    isModel 
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-800/80 dark:text-emerald-400' 
                      : 'bg-indigo-50 border-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:border-indigo-800/80 dark:text-indigo-400'
                  }`}>
                    {isModel ? <Leaf className="w-4 h-4 fill-emerald-500/5" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Bubble */}
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isModel
                      ? 'bg-white dark:bg-slate-850 text-slate-850 dark:text-slate-150 shadow-sm border border-slate-50 dark:border-slate-800/60'
                      : 'bg-emerald-600 dark:bg-emerald-700 text-white shadow-md'
                  }`}>
                    {/* Render basic custom bolding and bullets */}
                    <p className="whitespace-pre-line">
                      {msg.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center dark:bg-emerald-950/40 dark:border-emerald-800/80">
                  <Leaf className="w-4 h-4 animate-spin text-emerald-500" />
                </div>
                <div className="p-4 bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-50 dark:border-slate-800/60 flex items-center space-x-1.5 py-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl text-xs flex items-center gap-2 max-w-lg mx-auto">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Helper Chips */}
          <div className="px-6 py-2.5 bg-slate-50/50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto pr-4 scrollbar-none shrink-0">
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase shrink-0 font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
              <span>Suggestions:</span>
            </div>
            {PRESET_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePresetClick(prompt)}
                className="px-3 py-1.5 bg-white dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Prompt Entry Box */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <form
              id="ai-prompt-form"
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Ashwagandha, Tulsi, digestion remedies..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading || !userInput.trim()}
                className="p-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white rounded-2xl shadow transition-colors flex items-center justify-center cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Clinical warning & redirect */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-indigo-50/50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-2xl text-xs space-y-1.5 text-slate-600 dark:text-slate-400">
          <p className="font-bold flex items-center gap-1.5 text-slate-800 dark:text-white">
            <AlertCircle className="w-4 h-4 text-emerald-500" />
            <span>AI Advice Warning</span>
          </p>
          <p className="leading-relaxed">
            All AI-generated insights are designed for dietary and educational awareness. They are not substitutes for real medical exams. If you already have a prescription to purchase medicines, please proceed to our **WhatsApp Order Form** to secure genuine items from our store.
          </p>
          <div className="pt-1">
            <button 
              onClick={() => setActiveTab('order')}
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
            >
              <span>Go to WhatsApp order form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
