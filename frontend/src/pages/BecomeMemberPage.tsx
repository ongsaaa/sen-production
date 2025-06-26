// src/pages/BecomeMemberPage.tsx
import React from 'react'
import { Link } from '@tanstack/react-router' // For a Call to Action button

const BecomeMemberPage: React.FC = () => {
  // Choose a highlight color for "Member"
  const highlightColorForMember = 'text-indigo-500' // Example: Sky Blue

  return (
    <div className="font-['Inter',_sans-serif]">
      {' '}
      {/* Font applied to the whole page */}
      {/* Section 1: "Become a Member" Hero (Dark Background) */}
       <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Become a</span>
            <span className={`ml-2 sm:ml-3 ${highlightColorForMember} italic`}>
              Member
            </span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join a vibrant community of ambitious students. Unlock exclusive benefits and resources to fuel your journey.
          </p>
        </div>
      </section>
      {/* Section 2: Membership Details (White Background) */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Our Thriving Community
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {/* Replace with an engaging intro about your membership */}
              Unlock exclusive access, connect with like-minded individuals, and
              accelerate your journey with SEN. Becoming a member opens the door
              to a world of opportunities.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              Membership Benefits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                {/* You can add icons here later if you wish */}
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Exclusive Content
                </h4>
                <p className="text-gray-700">
                  Gain access to members-only resources, workshops, and insights
                  curated to help you succeed.
                </p>
              </div>
              {/* Benefit 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-teal-500 mb-2">
                  Networking Opportunities
                </h4>
                <p className="text-gray-700">
                  Connect with peers, mentors, and industry leaders through our
                  dedicated channels and events.
                </p>
              </div>
              {/* Benefit 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-amber-500 mb-2">
                  Early Access & Discounts
                </h4>
                <p className="text-gray-700">
                  Be the first to know about new programs and receive special
                  offers on events and partner services.
                </p>
              </div>
              {/* Add more benefits as needed */}
            </div>
          </div>

          {/* How to Join Section */}
          <div className="mb-12 md:mb-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              How to Become a Member
            </h3>
            <div className="max-w-xl mx-auto text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                Joining is simple! Follow these steps to start your journey with
                us:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Visit our registration page.</li>
                <li>Fill out the membership application form.</li>
                <li>
                  {/* Add details about payment if any, or approval process */}
                  (Optional: Complete the payment / Await approval from our
                  team).
                </li>
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
              to="https://tally.so/r/mDP9JE" // REPLACE with your actual registration page path
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Sign Up For Membership Now
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Have questions?{' '}
              <Link to="/contact" className="text-purple-600 hover:underline">
                Contact us
              </Link>
              . {/* REPLACE with contact page path */}
            </p>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default BecomeMemberPage
