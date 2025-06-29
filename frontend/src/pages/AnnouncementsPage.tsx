// frontend/src/pages/AnnouncementsPage.tsx
import React from 'react';

const AnnouncementsPage: React.FC = () => {
  const highlightColor = 'text-purple-400'; // A new color for this page

  // Dummy data for placeholder announcements
  const placeholderAnnouncements = [
    {
      title: 'New Partnership with Tech Corp',
      date: 'June 28, 2025',
      content: 'We are excited to announce a new partnership that will bring more internship opportunities...',
    },
    {
      title: 'Upcoming Workshop: Intro to UI/UX',
      date: 'June 25, 2025',
      content: 'Join us for a hands-on workshop covering the fundamentals of user interface and user experience design...',
    },
    {
      title: 'Community Project Showcase',
      date: 'June 22, 2025',
      content: 'Submissions are now open for our first-ever community project showcase. Share what you have built!',
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
            <span className="text-gray-100">Latest</span>
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Announcements
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stay up-to-date with the latest news, events, and updates from the SEN community.
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
              Our new announcements board is currently under construction. The functionality is not yet complete, but you'll soon be able to find all important community news right here. Please check back later!
            </p>
          </div>

          {/* Placeholder Announcements List */}
          <div className="space-y-8 opacity-50 cursor-not-allowed">
            <h3 className="text-2xl font-semibold text-center text-gray-400">
              Future announcements will appear below...
            </h3>
            {placeholderAnnouncements.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-sm"
              >
                <p className="text-sm text-gray-500">{item.date}</p>
                <h4 className="text-xl font-bold text-gray-700 mt-1">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnouncementsPage;