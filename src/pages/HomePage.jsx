import React from 'react';
import Navbar from '../components/layout/Navbar';
import BookHero from '../features/book/BookHero';
import BookDetails from '../features/book/BookDetails';
import BookReviewsAndRelated from '../features/book/BookReviewsAndRelated';
import Footer from '../components/layout/Footer';

export default function HomePage({ onBuyNow }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2421]">
      <Navbar onBuyNow={onBuyNow} />
      <main>
        <BookHero onBuyBook={onBuyNow} />
        <BookDetails />
        <BookReviewsAndRelated />
      </main>
      <Footer />
    </div>
  );
}