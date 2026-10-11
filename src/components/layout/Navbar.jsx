import React from 'react';

export default function Navbar({ onBuyNow }) {
  return (
    <header className="w-full border-b border-[#EAE3D9] bg-[#FAF8F5] px-6 md:px-16 py-4 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg shadow-sm">
            A
          </div>
          <span className="font-serif text-2xl font-medium tracking-tight text-[#1F2421]">
            Atif Publications LLC
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#5A625E]">
          <a href="#explore" className="hover:text-[#1F2421] transition-colors">Explore</a>
          <a href="#about" className="hover:text-[#1F2421] transition-colors">About</a>
          <a href="#takeaways" className="hover:text-[#1F2421] transition-colors">Key Takeaways</a>
          <a href="#reviews" className="hover:text-[#1F2421] transition-colors">Reviews</a>
        </nav>

        <div className="flex items-center gap-6 text-xs font-medium">
          <button className="text-[#1F2421] hover:opacity-70 transition-opacity cursor-pointer">
            Log in
          </button>
          <button 
            onClick={onBuyNow} 
            className="bg-[#1C2421] hover:bg-[#2B3531] text-white px-5 py-2.5 rounded-xl transition-colors font-medium text-xs shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}