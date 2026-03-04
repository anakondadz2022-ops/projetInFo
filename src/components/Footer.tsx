
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#E2FF00] rounded-sm transform rotate-45"></div>
            <span className="font-extrabold text-2xl tracking-tighter text-white uppercase">IRON FORGE GYM</span>
          </div>
          <p className="text-zinc-500 mb-8 max-w-sm">
            Empowering serious athletes since 2010. We provide the tools, you provide the will. Join the evolution of strength today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-[#111] rounded-full hover:bg-[#E2FF00] hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#111] rounded-full hover:bg-[#E2FF00] hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#111] rounded-full hover:bg-[#E2FF00] hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-[#111] rounded-full hover:bg-[#E2FF00] hover:text-black transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest mb-8">Quick Links</h4>
          <ul className="space-y-4 text-zinc-500">
            <li><a href="#" className="hover:text-[#E2FF00] transition-colors">Our Classes</a></li>
            <li><a href="#" className="hover:text-[#E2FF00] transition-colors">Personal Trainers</a></li>
            <li><a href="#" className="hover:text-[#E2FF00] transition-colors">Pricing Plans</a></li>
            <li><a href="#" className="hover:text-[#E2FF00] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest mb-8">Newsletter</h4>
          <p className="text-zinc-500 text-sm mb-6">Stay forged with our latest training tips and events.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-black border border-white/10 px-4 py-2 w-full rounded-l-sm focus:outline-none focus:border-[#E2FF00]"
            />
            <button className="bg-[#E2FF00] text-black px-4 py-2 rounded-r-sm font-bold hover:bg-[#c9e600]">
              GO
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
        &copy; 2024 IRON FORGE GYM. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
