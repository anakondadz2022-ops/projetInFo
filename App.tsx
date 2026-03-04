
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TrainingCalendar from './components/TrainingCalendar';
import AICoach from './components/AICoach';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E2FF00] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Gallery Section */}
        <section className="py-24 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                <div className="col-span-1 h-full rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" alt="Gym 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="col-span-1 h-full rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" alt="Gym 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="col-span-1 h-full rounded-lg overflow-hidden group translate-y-8">
                    <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" alt="Gym 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="col-span-1 h-full rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Gym 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
            </div>
          </div>
        </section>

        <Features />
        
        <TrainingCalendar />
        
        {/* Pricing/Cta Section */}
        <section className="relative py-24" id="pricing">
          <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=2000" alt="Gym bg" className="w-full h-full object-cover"/>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">Ready to transform?</h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your ambition. From casual lifters to elite athletes, we have a place for you.
            </p>
            <div className="flex justify-center gap-6">
                <button className="bg-[#E2FF00] text-black px-12 py-5 rounded-sm font-black text-xl hover:scale-105 transition-transform uppercase tracking-widest shadow-[0_0_30px_rgba(226,255,0,0.3)]">
                  Start Membership
                </button>
            </div>
          </div>
        </section>
      </main>

      <AICoach />
      <Footer />
    </div>
  );
};

export default App;
