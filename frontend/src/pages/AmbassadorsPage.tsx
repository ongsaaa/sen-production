// frontend/src/pages/AmbassadorsPage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';

const AmbassadorsPage: React.FC = () => {
  const highlightColor = 'text-green-400'; // Example color for this page

  // Dummy data for ambassador profiles (replace with actual data)
  const ambassadors = [
    {
      name: 'Jane Doe',
      title: 'University of Example',
      imageUrl: 'https://via.placeholder.com/150?text=Jane',
      bio: 'Jane is passionate about building communities and connecting students with opportunities in the tech field.',
    },
    {
      name: 'John Smith',
      title: 'Example High School',
      imageUrl: 'https://via.placeholder.com/150?text=John',
      bio: 'John focuses on bringing creative arts and design workshops to high school students across the region.',
    },
    {
      name: 'Sam Wilson',
      title: 'International School of SEN',
      imageUrl: 'https://via.placeholder.com/150?text=Sam',
      bio: 'As a community builder, Sam enjoys organizing networking events and fostering collaboration among members.',
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
            <span className="text-gray-100">Our</span>
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Ambassadors
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the passionate leaders who represent SEN and drive our mission forward in communities around the world.
          </p>
        </div>
      </section>

      {/* Section 2: Main Content */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Introduction to the Program */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              What is a SEN Ambassador?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEN Ambassadors are student leaders who are passionate about our mission of empowering students. They are the face of SEN in their schools and local communities, helping to connect their peers with valuable resources, opportunities, and a supportive network.
            </p>
          </div>

          {/* "Why Become an Ambassador?" Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              Why Become an Ambassador?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Develop Leadership Skills
                </h4>
                <p className="text-gray-700">
                  Gain hands-on experience in community management, event organization, and public speaking.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Expand Your Network
                </h4>
                <p className="text-gray-700">
                  Connect with a global network of student leaders, mentors, and professionals in various fields.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  Exclusive Access
                </h4>
                <p className="text-gray-700">
                  Receive early access to opportunities, specialized training, and official SEN merchandise.
                </p>
              </div>
            </div>
          </div>

          {/* "Meet Our Ambassadors" Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
              Meet Some of Our Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {ambassadors.map((ambassador, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                  <img src={ambassador.imageUrl} alt={ambassador.name} className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 object-cover" />
                  <h4 className="text-xl font-bold text-gray-900">{ambassador.name}</h4>
                  <p className="text-green-600 font-semibold text-sm mb-2">{ambassador.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{ambassador.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* "How to Apply" Call to Action */}
          <div className="text-center pt-10 border-t border-gray-200 mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Ready to Make an Impact?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              We are looking for motivated and enthusiastic students to join our Ambassador Program. If you're ready to lead, inspire, and grow, we want to hear from you.
            </p>
            <Link
              to="/contacts?subject=AmbassadorApplication"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Apply to be an Ambassador
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmbassadorsPage;