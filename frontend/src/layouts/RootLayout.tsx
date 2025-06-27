// src/layouts/RootLayout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet, useRouterState } from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const { location } = useRouterState();

  // This effect runs only when the pathname changes, preventing loops.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]); // The effect depends on the pathname

  // This separate effect handles the header visibility on scroll
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