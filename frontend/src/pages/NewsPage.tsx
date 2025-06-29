// frontend/src/pages/NewsPage.tsx
import React from 'react';

const NewsPage: React.FC = () => {
  const highlightColor = 'text-cyan-400'; // A new color for this page

  // Dummy data for placeholder news articles
  const placeholderNews = [
    {
      title: 'SEN Network Hits 10,000 Members',
      date: 'June 29, 2025',
      source: 'Community Times',
      content: 'The Student Empowerment Network has officially crossed the 10,000 member milestone, connecting more students than ever...',
    },
    {
      title: 'Annual Student Survey Results Published',
      date: 'June 26, 2025',
      source: 'SEN Insights',
      content: 'Our annual survey results are in, highlighting key trends in student career aspirations and challenges...',
    },
    {
      title: 'How AI is Changing Higher Education',
      date: 'June 24, 2025',
      source: 'Tech Tomorrow Magazine',
      content: 'An in-depth look at how artificial intelligence is transforming learning, research, and university life...',
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
              News
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the latest news and stories from the SEN community and the wider world of education and careers.
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
              Our new News section is currently in development. The functionality is not yet complete, but it will soon be your go-to source for relevant news and articles. Please check back later!
            </p>
          </div>

          {/* Placeholder News List */}
          <div className="space-y-8 opacity-50 cursor-not-allowed">
            <h3 className="text-2xl font-semibold text-center text-gray-400">
              Future news articles will appear below...
            </h3>
            {placeholderNews.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-sm"
              >
                <p className="text-sm font-semibold text-gray-500">{item.source} - {item.date}</p>
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

export default NewsPage;