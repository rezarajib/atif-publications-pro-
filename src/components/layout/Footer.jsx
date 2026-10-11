import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#19221E] text-white pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-12">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg">
                L
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-white">
                Lumina
              </span>
            </div>
            <p className="text-xs text-[#8C9C93] font-serif">
              Exceptional books, thoughtfully chosen.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav className="flex flex-wrap items-center gap-8 text-xs font-medium text-[#8C9C93]">
            <a href="#explore" className="hover:text-white transition-colors">Explore</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#authors" className="hover:text-white transition-colors">Authors</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          </nav>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#2A3731] pt-6 flex justify-between items-center text-[10px] text-[#6B7C73]">
          <p>© 2025 Lumina Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}