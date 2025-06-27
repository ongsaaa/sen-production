// src/layouts/RootLayout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-center font-['Inter',_sans-serif]">
      <Header isVisible={isHeaderVisible} />
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;