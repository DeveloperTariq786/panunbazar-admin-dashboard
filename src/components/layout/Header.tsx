import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className="pt-6 px-4 md:px-8 absolute top-0 left-0 w-full z-50">
      <nav className="relative flex items-center justify-between px-6 md:px-8 py-3 max-w-6xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="text-2xl font-bold tracking-tight z-10">
          <span className="text-[#020C04]">Eco</span><span className="text-[#49724B]">Commerce</span>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium text-[#74966F]">
          <a href="#" className="hover:text-[#2B4E31] transition-colors">Features</a>
          <a href="#" className="hover:text-[#2B4E31] transition-colors">Stories</a>
          <a href="#" className="hover:text-[#2B4E31] transition-colors">Partners</a>
          <a href="#" className="hover:text-[#2B4E31] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#2B4E31] transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center z-10">
          <button className="px-8 py-2.5 bg-[#49724B] text-white font-semibold rounded-full hover:bg-[#2B4E31] transition-colors shadow-md shadow-[#49724B]/20">
            Login
          </button>
        </div>
        
        <button className="md:hidden p-2 text-[#132A1A] z-10">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}