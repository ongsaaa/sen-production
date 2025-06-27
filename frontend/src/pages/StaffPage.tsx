import React from 'react'
import { Link } from '@tanstack/react-router'
import founderImageUrl from '@/assets/profile.png'
// Assuming you have a component for the profile cards like this
// import ProfileCard from './ProfileCard';

// Dummy data for team members (replace with your actual data)
const teamMembers = [
  {
    id: 'alex',
    name: 'Alex Chen',
    title: 'Program Director',
    department: 'Operations & Programs',
    bio: 'Alex oversees the planning and execution of all our core programs, ensuring they meet the needs of our community and align with our mission. With over 10 years in non-profit management, Alex brings a wealth of experience in strategic development and community engagement.',
    imageUrl: 'https://via.placeholder.com/150?text=Alex', // Replace with actual image or path
    email: 'mailto:alex@example.com',
    linkedin: 'https://linkedin.com/in/alexchen',
  },
  {
    id: 'maria',
    name: 'Maria Rodriguez',
    title: 'Community Manager',
    department: 'Community & Outreach',
    bio: 'Maria is the heart of our community, fostering connections, managing our online platforms, and organizing engagement events. She is passionate about building inclusive spaces where everyone feels welcome and empowered.',
    imageUrl: 'https://via.placeholder.com/150?text=Maria', // Replace
    email: 'mailto:maria@example.com',
    linkedin: 'https://linkedin.com/in/mariarodriguez',
  },
  {
    id: 'kenji',
    name: 'Kenji Tanaka',
    title: 'Lead Developer',
    department: 'Technology',
    bio: 'Kenji leads our tech team, driving the development and maintenance of our platform. He is a firm believer in using technology to solve real-world problems and enhance user experiences.',
    imageUrl: 'https://via.placeholder.com/150?text=Kenji', // Replace
    // email: 'mailto:kenji@example.com', // Assuming Kenji might only have LinkedIn
    linkedin: 'https://linkedin.com/in/kenjitanaka',
  },
]

// --- Reusable ProfileCard Component (Example) ---
// You likely have this already or can adapt it
const ProfileCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center flex flex-col items-center transform transition-all hover:scale-105 duration-300">
    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
      {/* In your original image, the name is overlaid. Let's assume image only for simplicity here */}
      {/* Or you can absolutely position text over a background image if needed */}
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
      {member.name}
    </h3>
    <p className="text-red-500 font-semibold text-sm md:text-md">
      {member.title}
    </p>
    <p className="text-gray-500 text-xs md:text-sm mb-3">{member.department}</p>
    <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
      {member.bio}
    </p>
    <div className="flex space-x-3">
      {member.email && (
        <a href={member.email} className="text-gray-500 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      )}
    </div>
  </div>
)
// --- End ProfileCard Component ---

const TeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Base background for the page */}
      {/* Header Section (from your screenshot - assuming this is part of a layout) */}
      {/* <header className="bg-gray-800 text-white p-4"> ... Navbar ... </header> */}
      {/* Main Content Area */}
      <main className="py-12 md:py-20">
        {/* Section 1: Meet Our Dedicated Team */}
        <section className="container mx-auto px-4 md:px-6 text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Dedicated Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The backbone of SEN, our staff members are passionate professionals
            committed to bringing our vision to life and serving our community
            every day.
          </p>
        </section>

        {/* Section 2: Founder's Section */}
        <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl overflow-hidden">
            {' '}
            {/* Added overflow-hidden for floated elements */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center md:text-left">
              A Word From Our Founder
            </h2>
            <div className="md:flex md:items-start">
              {' '}
              {/* Flex container for image and text */}
              {/* Founder Image - Floated for text wrapping */}
              <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
                <img
                  src={founderImageUrl}
                  alt="SEN Founder"
                  className="
                    float-left
                    shape-outside-image  /* Custom utility class - see tailwind.config.js */
                    w-48 h-auto /* Adjust width as needed, height will be auto */
                    md:w-64
                    mr-6 mb-3 /* Margin for spacing text away from image */
                    rounded-md /* Optional: slight rounding if image isn't perfectly cut out */
                  "
                  style={{
                    // For shape-outside to work best, the image needs to be floated.
                    // The shape-margin property can add space between the shape and the text.
                    shapeMargin: '1rem', // Adjust as needed
                  }}
                />
                {/* Text that should wrap */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed clear-left md:clear-none">
                  {/* Add a "clear-left" for smaller screens if float causes layout issues below it */}
                  {/* On medium screens and up, the flex container should handle it better */}
                  Welcome to SEN! It has been an incredible journey building
                  this platform, driven by a deep passion for empowering
                  students and fostering a vibrant, supportive community. Our
                  vision was born from the belief that every student deserves
                  access to opportunities and resources that can help them
                  thrive, regardless of their background.
                  <br />
                  <br />
                  We started with a simple idea: to create a space where
                  learning, collaboration, and innovation intersect. Seeing this
                  idea grow into a dynamic network that connects thousands of
                  ambitious individuals with transformative experiences is
                  immensely rewarding. Our dedicated team works tirelessly to
                  curate meaningful content, organize impactful events, and
                  ensure that SEN remains a beacon for those looking to make
                  their mark on the world.
                  <br />
                  <br />
                  Thank you for being a part of our story. We are excited about
                  the future and the endless possibilities that lie ahead as we
                  continue to grow and serve you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Team Profile Cards */}
        <section className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 md:mb-12 text-center">
            Our Core Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member) => (
              <ProfileCard key={member.id} member={member} />
            ))}
          </div>

          {/* Optional: Call to action to join the team / careers page */}
          <div className="text-center mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in Joining Our Team?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              We're always looking for talented and passionate individuals.
            </p>
            <Link
              to="/careers" // REPLACE with your careers page path, or contact
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TeamPage