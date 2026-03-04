
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#E2FF00] rounded-sm transform rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <span className="font-extrabold text-2xl tracking-tighter text-white">IRON FORGE <span className="text-[#E2FF00]">GYM</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
        <a href="#" className="hover:text-[#E2FF00] transition-colors">Home</a>
        <a href="#classes" className="hover:text-[#E2FF00] transition-colors">Classes</a>
        <a href="#pricing" className="hover:text-[#E2FF00] transition-colors">Pricing</a>
        <button className="bg-[#E2FF00] text-black px-6 py-2 rounded-sm font-bold hover:bg-[#c9e600] transition-all">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
