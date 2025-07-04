// frontend/src/pages/MeetupsPage.tsx
import GlowingText from '@/components/GlowingText';
import React from 'react';

const MeetupsPage: React.FC = () => {
  const highlightColor = 'text-red-400'; // A new color for this page

  // Dummy data for placeholder meetups
  const placeholderMeetups = [
    {
      title: 'Tech Talk & Networking Night',
      date: 'July 15, 2025',
      location: 'Online / Zoom',
      content: 'Join us for a series of lightning talks from industry experts followed by virtual networking sessions.',
    },
    {
      title: 'Student Social Mixer',
      date: 'July 10, 2025',
      location: 'London, UK',
      content: 'Meet fellow SEN members in the London area for a casual evening of conversation and fun.',
    },
    {
      title: 'Career Pathways Q&A',
      date: 'July 05, 2025',
      location: 'Online / Discord',
      content: 'Have questions about your career? Join our live Q&A session with professionals from various fields.',
    },
  ];

  return (
    <div className="font-sans">
      {/* Section 1: Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Community</span>
            <GlowingText className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Meetups
            </GlowingText>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow students and professionals at our online and in-person events.
          </p>
        </div>
      </section>

      {/* Section 2: Main Content */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* "Coming Soon" Notice */}
          <div className="text-center bg-yellow-50 border-2 border-dashed border-yellow-300 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold text-yellow-800">
              Feature Coming Soon!
            </h2>
            <p className="mt-3 text-lg text-yellow-700 max-w-2xl mx-auto">
              Our new meetups and events calendar is currently in development. The functionality is not yet complete, but it will soon be the best place to find and RSVP to SEN events. Please check back later!
            </p>
          </div>

          {/* Placeholder Meetups List */}
          <div className="space-y-8 opacity-50 cursor-not-allowed">
            <h3 className="text-2xl font-semibold text-center text-gray-400">
              Future meetups will appear below...
            </h3>
            {placeholderMeetups.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-gray-700">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded-full">{item.location}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                <p className="mt-3 text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetupsPage;