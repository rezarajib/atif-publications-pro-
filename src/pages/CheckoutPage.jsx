import React, { useState } from 'react';
import bookCoverImg from '../assets/images/Container.png'; // Using standard hero.png or fallback safely

export default function CheckoutPage({ onBack, onPaySuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('bkash');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2421] flex flex-col justify-between">
      {/* Header */}
      <header className="w-full border-b border-[#EAE3D9] px-6 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C85A32] text-white font-serif font-bold italic flex items-center justify-center rounded-[3px] text-lg">
            A
          </div>
          <span className="font-serif text-xl font-medium text-[#1F2421]">
            Atif Publications LLC
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <span>🔒</span>
          <span>Secure checkout</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-8 w-full flex-1">
        <button 
          onClick={onBack}
          className="text-xs text-[#6B7280] hover:text-[#1F2421] flex items-center gap-1.5 mb-8 transition-colors cursor-pointer"
        >
          <span>‹</span> Back to book
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Left Form */}
          <div className="space-y-10">
            <div>
              <span className="text-[#C85A32] text-[9px] font-bold tracking-[0.2em] uppercase">
                COMPLETE YOUR PURCHASE
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1F2421] font-normal mt-1">
                Checkout
              </h1>
              <p className="text-xs font-serif text-[#6B7280] mt-2">
                Your next great read is almost yours.
              </p>
            </div>

            {/* Step 1: Customer Information */}
            <div className="space-y-4 pt-4 border-t border-[#EAE3D9]">
              <div className="flex items-center gap-2">
                <span className="text-[#C85A32] font-serif italic text-sm">01</span>
                <h3 className="text-xl font-serif text-[#1F2421]">Customer Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[10px] font-bold text-[#8C827A] uppercase tracking-wider mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full bg-white border border-[#E0DFE1] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#1F2421]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#8C827A] uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-white border border-[#E0DFE1] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#1F2421]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="space-y-4 pt-4 border-t border-[#EAE3D9]">
              <div className="flex items-center gap-2">
                <span className="text-[#C85A32] font-serif italic text-sm">02</span>
                <h3 className="text-xl font-serif text-[#1F2421]">Payment Method</h3>
              </div>

              <div className="space-y-3 pt-2">
                <label 
                  onClick={() => setPaymentMethod('bkash')}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'bkash' 
                      ? 'border-[#C85A32] bg-white shadow-sm' 
                      : 'border-[#E0DFE1] bg-[#FAF8F5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'bkash'} 
                      readOnly
                      className="accent-[#C85A32]"
                    />
                    <div className="w-8 h-8 rounded-lg bg-[#D12053] text-white font-bold text-xs italic flex items-center justify-center">
                      b
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F2421]">bKash</p>
                      <p className="text-[10px] text-[#8C827A]">Pay securely with bKash</p>
                    </div>
                  </div>
                </label>

                <label 
                  onClick={() => setPaymentMethod('nagad')}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'nagad' 
                      ? 'border-[#C85A32] bg-white shadow-sm' 
                      : 'border-[#E0DFE1] bg-[#FAF8F5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'nagad'} 
                      readOnly
                      className="accent-[#C85A32]"
                    />
                    <div className="w-8 h-8 rounded-lg bg-[#E65228] text-white font-bold text-xs flex items-center justify-center">
                      N
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F2421]">Nagad</p>
                      <p className="text-[10px] text-[#8C827A]">Pay securely with Nagad</p>
                    </div>
                  </div>
                </label>

                <label 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-[#C85A32] bg-white shadow-sm' 
                      : 'border-[#E0DFE1] bg-[#FAF8F5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'card'} 
                      readOnly
                      className="accent-[#C85A32]"
                    />
                    <div className="w-8 h-8 rounded-lg bg-[#EAE3D9] text-[#1F2421] font-bold text-[10px] flex items-center justify-center">
                      💳
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F2421]">Card</p>
                      <p className="text-[10px] text-[#8C827A]">Visa, Mastercard</p>
                    </div>
                  </div>
                </label>
              </div>

              <button 
                onClick={onPaySuccess}
                className="w-full bg-[#1C2421] hover:bg-[#2B3531] text-white py-4 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md mt-4 cursor-pointer"
              >
                <span>Pay ৳499</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Summary */}
          <div className="bg-white p-6 rounded-2xl border border-[#EAE3D9] shadow-sm space-y-6">
            <span className="text-[#C85A32] text-[9px] font-bold tracking-[0.2em] uppercase">
              YOUR ORDER
            </span>

            <div className="flex gap-4">
              <img 
                src={bookCoverImg} 
                alt="Book" 
                className="w-20 h-28 object-cover rounded-md shadow-sm"
              />
              <div className="space-y-1">
                <span className="text-[8px] font-bold text-[#8C827A] uppercase">BOOK</span>
                <h4 className="text-base font-serif font-normal text-[#1F2421]">The Psychology of Money</h4>
                <p className="text-[11px] text-[#8C827A]">Morgan Housel</p>
                <p className="text-lg font-serif font-bold text-[#1F2421] pt-2">৳499</p>
              </div>
            </div>

            <div className="border-t border-[#EAE3D9] pt-4 flex justify-between items-baseline">
              <span className="text-base font-serif text-[#1F2421]">Total</span>
              <span className="text-3xl font-serif font-normal text-[#1F2421]">৳499</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}