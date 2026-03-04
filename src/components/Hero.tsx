
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6">
            Unleash Your <br />
            <span className="text-[#E2FF00]">Potential.</span> <br />
            Join the Revolution.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-lg">
            State-of-the art equipment, expert training, and a community built on strength. Your journey to peak performance starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#E2FF00] text-black px-10 py-4 rounded-sm font-black text-xl hover:scale-105 transition-transform uppercase tracking-widest">
              Join Now
            </button>
            <button className="border-2 border-white/20 text-white px-10 py-4 rounded-sm font-black text-xl hover:bg-white/5 transition-colors uppercase tracking-widest">
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
