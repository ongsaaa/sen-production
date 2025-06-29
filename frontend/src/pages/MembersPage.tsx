// frontend/src/pages/MembersPage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';

const MembersPage: React.FC = () => {
  const highlightColor = 'text-blue-400'; // A different color for this page

  return (
    <div className="font-sans">
      {/* Section 1: Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Join Our</span>
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Community
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Become a SEN member to unlock exclusive resources, connect with peers, and accelerate your academic and professional journey.
          </p>
        </div>
      </section>

      {/* Section 2: Main Content */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Why Become a Member? */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Become a SEN Member?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Joining the Student Empowerment Network (SEN) means becoming part of a vibrant, global community dedicated to helping students like you succeed. Whether you're looking for academic support, career guidance, or a network of like-minded peers, membership gives you the tools you need to thrive.
            </p>
          </div>

          {/* Membership Benefits Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              Membership Benefits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Access to Resources
                </h4>
                <p className="text-gray-700">
                  Get unlimited access to our curated library of study tools, exam guides, and career pathway resources.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Networking Opportunities
                </h4>
                <p className="text-gray-700">
                  Connect with students, mentors, and industry professionals through our exclusive events and forums.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  Skill Development
                </h4>
                <p className="text-gray-700">
                  Participate in workshops and Special Interest Groups (SIGs) to develop new skills and explore your passions.
                </p>
              </div>
            </div>
          </div>

          {/* "How to Join" Call to Action */}
          <div className="text-center pt-10 border-t border-gray-200 mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Joining is easy and opens up a world of opportunities. Click the button below to fill out the membership form and start your journey with SEN today.
            </p>
            <Link
              to="/become-member"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;