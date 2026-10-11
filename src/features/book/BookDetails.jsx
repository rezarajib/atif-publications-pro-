import React from 'react';
import { keyTakeawaysData } from '../../data/bookData';

export default function BookDetails() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#1F2421] pt-6 pb-20">
      {/* Top Secondary Sticky Navigation */}
      <div className="border-t border-b border-[#EAE3D9] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-16 z-40 mb-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center gap-8 py-3 text-xs font-semibold text-[#5A625E]">
          <a href="#about" className="text-[#1F2421] border-b-2 border-[#1F2421] pb-1">About</a>
          <a href="#takeaways" className="hover:text-[#1F2421] transition-colors pb-1">Key takeaways</a>
          <a href="#author" className="hover:text-[#1F2421] transition-colors pb-1">Author</a>
          <a href="#reviews" className="hover:text-[#1F2421] transition-colors pb-1">Reviews</a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
          
          {/* Left Main Column */}
          <div className="space-y-16">
            
            {/* ABOUT THE BOOK SECTION */}
            <section id="about" className="space-y-6">
              <span className="text-[#C85A32] text-[10px] font-bold tracking-[0.2em] uppercase">
                ABOUT THE BOOK
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.18] font-normal text-[#1F2421] max-w-2xl">
                Doing well with money isn’t necessarily about what you know.
              </h2>
              <div className="space-y-4 text-sm font-serif text-[#4A5568] leading-relaxed max-w-2xl pt-2">
                <p>It’s about how you behave. And behavior is hard to teach, even to really smart people.</p>
                <p>
                  Money—investing, personal finance, and business decisions—is typically taught as a math-based field, 
                  where data and formulas tell us exactly what to do. But in the real world people don’t make financial 
                  decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal 
                  history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled 
                  together.
                </p>
                <p>
                  In nineteen short stories, award-winning author Morgan Housel explores the strange ways people think 
                  about money and teaches you how to make better sense of one of life’s most important topics.
                </p>
              </div>

              {/* Quote Banner */}
              <div className="border-l-2 border-[#C85A32] pl-6 py-2 my-8">
                <blockquote className="text-xl md:text-2xl font-serif italic text-[#1F2421] leading-snug">
                  “Financial success is not a hard science. It’s a soft skill, where how you behave is more important than what you know.”
                </blockquote>
              </div>
            </section>

            {/* KEY TAKEAWAYS SECTION */}
            <section id="takeaways" className="space-y-8 pt-6">
              <div>
                <span className="text-[#C85A32] text-[10px] font-bold tracking-[0.2em] uppercase">
                  KEY TAKEAWAYS
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#1F2421] mt-2">
                  Ideas worth carrying with you
                </h2>
              </div>

              <div className="divide-y divide-[#EAE3D9] border-t border-[#EAE3D9]">
                {(keyTakeawaysData || []).map((item) => (
                  <div key={item.id} className="py-8 grid grid-cols-[40px_1fr] gap-4 items-start">
                    <span className="text-[#C85A32] font-serif italic text-sm">{item.id}</span>
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-serif font-normal text-[#1F2421]">{item.title}</h3>
                      <p className="text-xs font-serif text-[#6B7280] leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: AI Card & Dark Quote Box */}
          <div className="space-y-6 lg:sticky lg:top-32">
            
            {/* AI Assistant Promo Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] shadow-sm space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#FAF0EB] flex items-center justify-center text-[#C85A32]">
                ✨
              </div>
              <div className="space-y-1">
                <span className="text-[#C85A32] text-[9px] font-bold tracking-[0.15em] uppercase">
                  READ WITH LUMINA
                </span>
                <h3 className="text-xl font-serif font-normal text-[#1F2421] leading-tight">
                  AI can help you understand this book.
                </h3>
              </div>
              <p className="text-xs text-[#6B7280] font-serif leading-relaxed">
                Explore unfamiliar ideas, trace key themes, or ask for context—without leaving the page.
              </p>
              <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#1F2421] cursor-pointer hover:opacity-75 transition-opacity">
                <span>Ask about this book</span>
                <span>→</span>
              </div>
            </div>

            {/* Dark Aesthetic Chapter Quote Card */}
            <div className="bg-[#1C2421] text-white p-8 rounded-2xl space-y-8 shadow-md">
              <span className="text-[#C85A32] font-serif text-3xl font-bold leading-none block">“</span>
              <p className="font-serif italic text-base leading-relaxed text-[#E0E7E3]">
                The highest form of wealth is the ability to wake up every morning and say, I can do whatever I want today.
              </p>
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#8C9C93] uppercase">
                CHAPTER 7 · FREEDOM
              </p>
            </div>

          </div>

        </div>

        {/* ABOUT THE AUTHOR SECTION */}
        <section id="author" className="mt-20">
          <div className="bg-[#EFECE6] rounded-2xl p-8 md:p-12 max-w-4xl flex flex-col md:flex-row items-center gap-8">
            {/* Author Circle Avatar */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#825241] text-white font-serif italic text-3xl font-normal flex items-center justify-center shrink-0 shadow-inner">
              MH
            </div>

            {/* Author Info */}
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[#C85A32] text-[9px] font-bold tracking-[0.2em] uppercase">
                ABOUT THE AUTHOR
              </span>
              <h3 className="text-3xl font-serif font-normal text-[#1F2421]">
                Morgan Housel
              </h3>
              <div className="text-xs font-serif text-[#4A5568] leading-relaxed space-y-2 max-w-xl">
                <p>
                  Morgan Housel is a partner at The Collaborative Fund and the author of <em>Same as Ever</em> and <em>The Psychology of Money</em>. His writing explores wealth, greed, happiness, and how people make sense of an uncertain world.
                </p>
                <p>
                  A two-time winner of the Best in Business Award from the Society of American Business Editors and Writers, he lives in Seattle with his family.
                </p>
              </div>

              <div className="pt-2">
                <button className="text-xs font-semibold text-[#1F2421] border-b border-[#1F2421] pb-0.5 hover:opacity-75 transition-opacity inline-flex items-center gap-1.5 cursor-pointer">
                  <span>Explore more by Morgan</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}