import React from 'react';
import { reviewsData, relatedBooksData } from '../../data/bookData';

export default function BookReviewsAndRelated() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#1F2421]">
      
      {/* 1. READER REVIEWS SECTION */}
      <section id="reviews" className="py-16 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[#C85A32] text-[10px] font-bold tracking-[0.2em] uppercase">
              READER REVIEWS
            </span>
            <h2 className="text-4xl md:text-[46px] font-serif font-normal text-[#1F2421] mt-1">
              What readers are saying
            </h2>
          </div>

          {/* Overall Rating Display */}
          <div className="flex items-center gap-3">
            <span className="text-5xl font-serif font-normal text-[#1F2421]">4.8</span>
            <div>
              <div className="flex text-[#C85A32] text-xs gap-0.5">★★★★★</div>
              <p className="text-[9px] text-[#8C827A] font-medium mt-0.5">From 2,438 readers</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-[#F4F0EA] p-8 rounded-2xl border border-[#EAE3D9] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* User Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-semibold text-xs flex items-center justify-center`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2421]">{review.name}</h4>
                      <p className="text-[10px] text-[#8C827A]">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-[#C85A32] text-xs">★★★★★</div>
                </div>

                {/* Review Content */}
                <h3 className="text-lg font-serif font-normal text-[#1F2421] leading-snug">
                  {review.title}
                </h3>
                <p className="text-xs font-serif text-[#5A625E] leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Button */}
        <div className="flex justify-center mt-10">
          <button className="border border-[#D9D2C9] bg-[#EFECE6] hover:bg-[#EAE4DC] px-6 py-2.5 rounded-xl text-xs font-semibold text-[#1F2421] transition-all cursor-pointer">
            Read all 864 reviews
          </button>
        </div>
      </section>

      {/* 2. RELATED BOOKS SECTION */}
      <section className="py-16 max-w-[1280px] mx-auto px-6 md:px-12 border-t border-[#EAE3D9]">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#C85A32] text-[10px] font-bold tracking-[0.2em] uppercase">
              KEEP READING
            </span>
            <h2 className="text-4xl md:text-[46px] font-serif font-normal text-[#1F2421] mt-1">
              Related books
            </h2>
          </div>
          <button className="text-xs font-semibold text-[#1F2421] hover:opacity-75 transition-opacity inline-flex items-center gap-1.5 cursor-pointer">
            <span>Explore all</span>
            <span>→</span>
          </button>
        </div>

        {/* Books Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedBooksData.map((book) => (
            <div key={book.id} className="group cursor-pointer space-y-3">
              {/* Mockup Card Container */}
              <div className={`w-full h-[360px] rounded-2xl ${book.coverBg} p-6 flex flex-col justify-between relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}>
                <span className="text-[8px] font-bold tracking-[0.2em] text-white/60 uppercase z-10">
                  {book.tagline}
                </span>

                <div className="z-10">
                  <h3 className={`text-2xl font-serif leading-tight ${book.id === 2 ? 'text-[#1F2421]' : 'text-white'}`}>
                    {book.title}
                  </h3>
                </div>

                <p className={`text-[9px] font-bold tracking-[0.18em] uppercase z-10 ${book.id === 2 ? 'text-[#1F2421]/70' : 'text-white/70'}`}>
                  {book.author}
                </p>

                {/* Decorative Elements */}
                {book.id === 1 && (
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[20px] border-white/10 pointer-events-none"></div>
                )}
                {book.id === 4 && (
                  <div className="absolute right-2 bottom-4 text-[90px] font-serif italic text-[#C88A75]/30 leading-none pointer-events-none select-none">
                    4000
                  </div>
                )}
              </div>

              {/* Book Metadata Below Card */}
              <div className="space-y-1">
                <span className="text-[8px] font-bold tracking-[0.15em] text-[#C85A32] uppercase">
                  {book.category}
                </span>
                <h4 className="text-sm font-serif font-bold text-[#1F2421] group-hover:underline">
                  {book.title}
                </h4>
                <p className="text-xs text-[#8C827A] font-serif">{book.author}</p>
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-[#C85A32]">★ <strong className="text-[#1F2421]">{book.rating}</strong></span>
                  <span className="text-[#C85A32] font-medium text-[10px]">{book.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}