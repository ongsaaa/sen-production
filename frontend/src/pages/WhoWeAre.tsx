// src/pages/WhoWeAre.tsx
import GlowingText from '@/components/GlowingText';
import React from 'react';

const WhoWeAre: React.FC = () => {
  const highlightColorForUs = 'text-indigo-500';

  return (
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1 className="font-header font-bold tracking-tight" style={{ fontSize: 'calc(15px + 3vmin)' }}>
            <span className="text-gray-100">About</span>
            <GlowingText className={`ml-2 sm:ml-3 ${highlightColorForUs} italic`}>Us</GlowingText>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our mission to empower students and the values that drive us forward.
          </p>
        </div>
      </section>

      {/* Section 2: Detailed Content using your new text */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 md:mb-16">
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEN is for ambitious English-speaking high school students in Thailand who are tired of the endless, time-consuming hunt for ways to grow and succeed. We believe your energy is better spent on achieving, not just searching.
            </p>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Imagine a single, supportive space...
            </h2>
          </div>

          {/* Core Features Section */}
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Discover Opportunities</h3>
              <p className="text-gray-700">Discover a comprehensive collection of the best opportunities – from local workshops to international internships – all made easy to find.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Navigate Your Future</h3>
              <p className="text-gray-700">Navigate your future with demystified career pathways and clear university option breakdowns.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Simplify Your Journey</h3>
              <p className="text-gray-700">Simplify your academic journey with straightforward explanations of standardized tests and requirements, and access a curated library of proven tools, insightful tips, and effective tricks shared by successful graduated seniors.</p>
            </div>
             <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Connect with a Community</h3>
              <p className="text-gray-700">Connect with a vibrant community of like-minded peers who share your interests and drive.</p>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-gray-200">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              That Place is SEN.
            </h2>
            <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are your central hub, a non-profit initiative dedicated to student empowerment, committed to providing the resources and connections you need to not just be a student, but to build an exceptional future.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;