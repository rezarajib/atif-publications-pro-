import React from 'react';
import { heroBookData } from '../../data/bookData';
import bookCoverImg from '../../assets/images/Container.png';

export default function BookHero({ onBuyBook }) {
  const book = heroBookData;

  return (
    <section className="py-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-16 items-center">
      {/* বাম কলাম: ফিগমা বুক আর্টওয়ার্ক কনটেইনার */}
      <div className="bg-[#EFECE6] p-10 md:p-12 rounded-2xl flex flex-col items-center justify-center relative min-h-[500px]">
        {/* এডিশন লেবেল */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[8px] tracking-[0.2em] font-medium text-[#9CA3AF] uppercase whitespace-nowrap">
          LUMINA EDITION · 2020
        </div>

        {/* বুক কভার ইমেজ কনটেইনার */}
        <div className="relative w-64 md:w-72 h-[410px] rounded-r-xl shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          {bookCoverImg ? (
            <img 
              src={bookCoverImg} 
              alt={book.title} 
              className="w-full h-full object-cover rounded-r-xl"
            />
          ) : (
            <div className="w-full h-full bg-[#D7E0D8] p-6 flex flex-col justify-between border-l-4 border-[#C0C9C1] relative">
              <p className="text-[8px] font-bold tracking-[0.2em] text-[#6B7280] uppercase z-10">TIMELESS LESSONS ON</p>
              <div className="z-10 -mt-6">
                <h2 className="text-3xl font-serif text-[#1F2421] font-normal leading-[1.12]">{book.title}</h2>
              </div>
              <p className="text-[9px] font-bold text-[#6B7280] uppercase tracking-[0.18em] z-10">{book.author.toUpperCase()}</p>
            </div>
          )}
        </div>

        {/* বেস্টসেলার সাব-টেক্সট */}
        <div className="text-right w-full mt-6 pr-2">
          <p className="text-[11px] text-[#8C827A] italic font-serif leading-tight">International bestseller</p>
          <p className="text-[11px] text-[#8C827A] italic font-serif leading-tight">Translated into 53 languages</p>
        </div>
      </div>

      {/* ডান কলাম: বইয়ের ডিটেইলস (ফিগমা অনুযায়ী ৬২৩px সাইজ) */}
      <div className="space-y-6">
        {/* ক্যাটাগরি ট্যাগস */}
        <div className="flex gap-2">
          <span className="bg-[#FAF0EB] text-[#C85A32] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-[#F3E2D8]">
            PSYCHOLOGY
          </span>
          <span className="bg-[#FAF0EB] text-[#C85A32] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-[#F3E2D8]">
            PERSONAL FINANCE
          </span>
        </div>

        {/* টাইটেল বক্স */}
        <div className="max-w-[623px]">
          <h1 className="text-5xl md:text-[58px] font-serif text-[#1F2421] leading-[1.08] font-normal tracking-tight">
            The Psychology of Money
          </h1>
        </div>

        {/* লেখক */}
        <p className="text-base text-[#6B7280] font-serif">
          by <span className="underline underline-offset-2 cursor-pointer text-[#1F2421] font-medium">{book.author}</span>
        </p>

        {/* রেটিং */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#C85A32] text-sm">★</span>
          <span className="font-bold text-[#1F2421]">{book.rating}</span>
          <span className="text-[#8C827A]">{book.readersCount} readers</span>
          <span className="text-[#EAE3D9] mx-2">|</span>
          <span className="text-[#C85A32] font-medium text-[11px]">Editor's choice</span>
        </div>

        {/* সামারি */}
        <p className="text-[#4A5568] leading-relaxed text-sm max-w-lg font-serif">
          {book.summary}
        </p>

        {/* অ্যাকশন বাটনসমূহ - ফিগমা অনুযায়ী ভেক্টর আইকন ও পারফেক্ট সাইজ সহ */}
        <div className="flex items-center gap-3 pt-2">
          {/* Read Now Button */}
          <button 
            onClick={onBuyBook} 
            className="bg-[#19221E] hover:bg-[#25322C] text-white px-6 h-[48px] rounded-[14px] text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Read Now</span>
          </button>

          {/* Buy Book Button */}
          <button 
            onClick={onBuyBook} 
            className="border border-[#D9D2C9] bg-transparent text-[#1F2421] hover:bg-[#EFECE6] px-6 h-[48px] rounded-[14px] text-xs font-semibold transition-all cursor-pointer"
          >
            Buy Book · {book.price}
          </button>

          {/* Bookmark Icon Button */}
          <button 
            aria-label="Bookmark" 
            className="border border-[#D9D2C9] bg-transparent hover:bg-[#EFECE6] w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[#1F2421] transition-all cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          {/* Audio Icon Button */}
          <button 
            aria-label="Listen Audiobook" 
            className="border border-[#D9D2C9] bg-transparent hover:bg-[#EFECE6] w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[#1F2421] transition-all cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </button>
        </div>

        {/* স্পেসিফিকেশন গ্রিড */}
        <div className="grid grid-cols-5 gap-4 pt-8 border-t border-[#EAE3D9] text-xs max-w-[623px]">
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PRICE</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">{book.price}</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">READING TIME</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">{book.readingTime}</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PAGES</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">{book.pages}</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">LANGUAGE</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">{book.language}</p>
          </div>
          <div>
            <p className="text-[#8C827A] uppercase text-[9px] font-bold tracking-wider">PUBLISHED</p>
            <p className="font-serif font-bold text-[#1F2421] mt-1.5 text-sm">{book.published}</p>
          </div>
        </div>
      </div>
    </section>
  );
}