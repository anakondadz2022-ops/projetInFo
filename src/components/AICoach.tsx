
import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { getFitnessAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello athlete! I'm your Iron Forge AI Coach. How can I help you sharpen your edge today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const advice = await getFitnessAdvice(userText);
    setMessages(prev => [...prev, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#E2FF00] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-black"
      >
        <Sparkles className="w-6 h-6" />
        <span className="hidden md:inline uppercase tracking-tighter">AI Coach</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl flex flex-col h-[600px] overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-[#E2FF00] text-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <span className="font-black uppercase tracking-tighter text-xl">Iron Coach AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#E2FF00] text-black font-semibold rounded-tr-none' 
                      : 'bg-white/5 text-white border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-xl flex gap-2">
                    <div className="w-2 h-2 bg-[#E2FF00] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#E2FF00] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-[#E2FF00] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-white/5 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about exercises, diets, or goals..."
                className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#E2FF00] outline-none transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-[#E2FF00] text-black p-2 rounded-lg hover:bg-[#c9e600] disabled:opacity-50 transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AICoach;
