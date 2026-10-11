import React from 'react';
import bookCoverImg from '../assets/images/Container.png';

export default function SuccessPage({ onGoToHome }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2421] flex flex-col justify-between">
      <header className="w-full border-b border-[#EAE3D9] px-6 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg">
            A
          </div>
          <span className="font-serif text-xl font-medium text-[#1F2421]">
            Atif Publications LLC
          </span>
        </div>
        <span className="text-xs text-[#8C827A]">Purchase complete</span>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-12 w-full flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="relative flex justify-center items-center">
            <div className="relative w-64 h-[380px] shadow-2xl rounded-r-xl overflow-hidden">
              <img 
                src={bookCoverImg} 
                alt="Book Cover" 
                className="w-full h-full object-cover rounded-r-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="w-10 h-10 rounded-full bg-[#4D6358] text-white flex items-center justify-center text-lg">
              ✓
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-[#1F2421]">
              A new story is waiting.
            </h1>
            <p className="text-sm font-serif text-[#6B7280]">
              <strong>The Psychology of Money</strong> has been added to your library.
            </p>
            <div className="flex gap-3 pt-2">
              <button 
                onClick={onGoToHome}
                className="bg-[#1C2421] hover:bg-[#2B3531] text-white px-6 py-3.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}