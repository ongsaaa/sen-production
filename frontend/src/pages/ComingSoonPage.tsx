// frontend/src/pages/ComingSoonPage.tsx
import React from 'react';
import GlowingText from '@/components/GlowingText';
import { Link } from '@tanstack/react-router';

const ComingSoonPage: React.FC = () => {
  const highlightColor = 'text-cyan-400';

  return (
    <div className="font-sans">
      {/* Section 1: Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Something Awesome is</span>
            <GlowingText className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Coming Soon
            </GlowingText>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We're working hard to bring you a new and exciting feature. Stay tuned!
          </p>
        </div>
      </section>

      {/* Section 2: Main Content */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            We're Putting the Finishing Touches!
          </h2>
          <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
            Our team is currently developing this feature to make your experience even better. It won't be long now. Please check back later!
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Go Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;