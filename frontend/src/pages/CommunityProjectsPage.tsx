// frontend/src/pages/CommunityProjectsPage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';

const CommunityProjectsPage: React.FC = () => {
  const highlightColor = 'text-orange-400'; // A new color for this page

  // Dummy data for project cards (replace with actual data)
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A student-led initiative to create a peer-to-peer tutoring platform for high school students.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Project+Alpha',
      link: '#', // Replace with actual link to the project details
    },
    {
      title: 'Community Garden Initiative',
      description: 'Transforming urban spaces into community gardens to promote sustainability and local food sources.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Garden+Initiative',
      link: '#',
    },
    {
      title: 'Code for a Cause',
      description: 'A hackathon-style event where students build software solutions for non-profit organizations.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Code+for+Cause',
      link: '#',
    },
     {
      title: 'Mental Health Awareness Campaign',
      description: 'A campaign focused on destigmatizing mental health discussions and providing resources to students.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Mental+Health',
      link: '#',
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
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Projects
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and collaborate on inspiring projects led by SEN members from around the globe.
          </p>
        </div>
      </section>

      {/* Section 2: Main Content */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Driven by Passion, Built by Students
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEN Community Projects are initiatives started and run by our members. They are a testament to the creativity, passion, and collaborative spirit of our network. From tech for good to environmental action, these projects make a real-world impact.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link to={project.link} className="text-orange-600 hover:text-orange-700 font-semibold">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* "Get Involved" Call to Action */}
          <div className="text-center pt-10 border-t border-gray-200 mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Have an Idea for a Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Whether you want to join an existing project or start your own, there's a place for you. Share your ideas and passion with the community.
            </p>
            <Link
              to="/contacts?subject=CommunityProjectIdea"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Submit Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityProjectsPage;