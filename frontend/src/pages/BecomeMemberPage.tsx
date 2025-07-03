// src/pages/BecomeMemberPage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';
import GlowingText from '@/components/GlowingText';

const BecomeMemberPage: React.FC = () => {
  const highlightColorForMember = 'text-purple-400';

  return (
    <div className="font-sans">
      {/* Section 1: "Become a Member" Hero (Dark Background) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Become a</span>
            <span className={`ml-2 sm:ml-3 ${highlightColorForMember} italic`}>
              Member
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            "What if finding the perfect internship or competition was easy?"
            <br />
            <span className="mt-2 block text-base text-gray-400">
              SEN: Stop searching, start discovering. Your central platform for student opportunities, finally in one place.
            </span>
          </p>
        </div>
      </section>
      
      {/* Section 2: Membership Details (White Background) */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Join Our Thriving Community
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEN is a community-driven platform supporting English-speaking high school students in Thailand with a wealth of curated opportunities, practical academic resources, and resources to explore future directions to confidently navigate their journey.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              What You'll Unlock
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Curated Opportunities
                </h4>
                <p className="text-gray-700">
                  Discover a comprehensive collection of the best opportunities – from local workshops to international internships.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Future Navigation
                </h4>
                <p className="text-gray-700">
                  Navigate your future with demystified career pathways and clear university option breakdowns.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Academic Simplicity
                </h4>
                <p className="text-gray-700">
                  Simplify your journey with straightforward explanations of standardized tests and requirements.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Proven Resource Library
                </h4>
                <p className="text-gray-700">
                  Access a curated library of tools, tips, and tricks shared by successful graduated seniors.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Vibrant Community
                </h4>
                <p className="text-gray-700">
                  Connect with a vibrant community of like-minded peers who share your interests and drive.
                </p>
              </div>
            </div>
          </div>

          {/* How to Join Section */}
          <div className="mb-12 md:mb-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              How to Become a Member
            </h3>
            <div className="max-w-xl mx-auto text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                Joining is simple! Follow these steps to start your journey with us:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Visit our registration page by clicking the button below.</li>
                <li>Fill out the membership application form.</li>
                <li>Await approval from our team.</li>
                <li>
                  Once confirmed, you'll receive your welcome kit and access to
                  all member benefits!
                </li>
              </ol>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="https://tally.so/r/mDP9JE"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Sign Up For Membership Now
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Have questions?{' '}
              <Link to="/contacts" className="text-purple-600 hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>  
        </div>
      </section>
    </div>
  );
};

export default BecomeMemberPage;