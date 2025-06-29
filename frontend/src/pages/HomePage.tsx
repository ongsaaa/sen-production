// src/pages/HomePage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';
import TrustedBySection from '@/components/TrustedBySection';

const HomePage: React.FC = () => {
  return (
    // The main container is now a positioning parent (relative)
    // and centers its direct children.
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-[#212529] to-[#282c34] text-white">
      
      {/* Main Content Area */}
      <main className="container mx-auto text-center px-4 sm:px-6">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white font-header">
          Stop searching.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Start discovering.
          </span>
        </h1>

        {/* Sub-paragraph */}
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Your central platform for student opportunities, practical
          resources, and future pathways, finally in one place.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
          <Link
            to="/opportunities"
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
      </main>

      {/* Footer containing the carousel is now positioned absolutely */}
      <footer className="absolute bottom-0 left-0 right-0 w-full">
        <TrustedBySection />
      </footer>
    </div>
  );
};

export default HomePage;