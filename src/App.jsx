import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {currentPage === 'home' && (
        <HomePage onBuyNow={() => setCurrentPage('checkout')} />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage 
          onBack={() => setCurrentPage('home')} 
          onPaySuccess={() => setCurrentPage('success')} 
        />
      )}

      {currentPage === 'success' && (
        <SuccessPage onGoToHome={() => setCurrentPage('home')} />
      )}
    </div>
  );
}