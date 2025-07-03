import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import TrustedBySection from '@/components/TrustedBySection';
import LoadingScreen from '@/components/LoadingScreen';
import { usePartners } from '@/hooks/usePartners';
import GlowingText from '@/components/GlowingText'; // Import the new component

const HomePage: React.FC = () => {
  const { partners, isLoading: isPartnersLoading } = usePartners();
  
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isPartnersLoading) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShowLoadingScreen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPartnersLoading]);

  return (
    <>
      {showLoadingScreen && <LoadingScreen isExiting={isExiting} />}
      
      <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-[#212529] to-[#282c34] text-white">
        
        <main className="container mx-auto text-center px-4 sm:px-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white font-header">
            <GlowingText className="text-white">
              Stop searching.
            </GlowingText>
            <br />
            <GlowingText className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Start discovering.
            </GlowingText>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Your central platform for student opportunities, practical
            resources, and future pathways, finally in one place.
          </p>

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

        <footer className="absolute bottom-0 left-0 right-0 w-full">
          <TrustedBySection partners={partners} />
        </footer>
      </div>
    </>
  );
};

export default HomePage;