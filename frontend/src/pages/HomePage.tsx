// src/pages/HomePage.tsx
import React from 'react';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import { Link } from '@tanstack/react-router';

const HomePage: React.FC = () => {
  return (
    <>
      <header className="min-h-screen flex items-center bg-[#282c34]">
        <div className="container mx-auto text-center px-4 sm:px-6">
          {/* FONT SIZE: Smaller on mobile, larger on desktop */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Stop searching.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Start discovering.
            </span>
          </h1>
          {/* FONT SIZE: Slightly smaller on mobile */}
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
            Your central platform for student opportunities, practical resources, and future pathways, finally in one place.
          </p>
          {/* BUTTON LAYOUT: Stacked on mobile, side-by-side on larger screens */}
          <div className="mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
            <Link
              to="/opportunities"
              // WIDTH: Full-width on mobile, auto-width on larger screens
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-md text-lg shadow-md transition-all duration-300 ease-in-out"
            >
              Explore Opportunities
            </Link>
            <Link
              to="/who-we-are"
              className="text-white font-semibold py-3 px-8 text-lg transition-colors duration-300 hover:text-gray-200"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </header>

      <OpportunitiesSection />
    </>
  );
};

export default HomePage;