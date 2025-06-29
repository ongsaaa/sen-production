// src/components/Header.tsx
import React, { useState } from 'react'
import { Link } from '@tanstack/react-router'
import senLogo from '../assets/SEN_LOGO-removebg.png'

// Icons from react-icons library
import { FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa'
import { RiLineFill } from 'react-icons/ri'

// Define types for component props
interface HeaderProps {
  isVisible: boolean
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  // Toggles the accordion items in the mobile menu
  const handleAccordionToggle = (menuName: string) => {
    setOpenAccordion(openAccordion === menuName ? null : menuName)
  }

  const navLinks = [
    {
      name: 'About',
      dropdown: [
        { name: 'Who We Are', href: '/who-we-are' },
        { name: 'Partners', href: '/partners' },
        { name: 'Become a member', href: '/become-a-member' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contacts', href: '/contacts' },
      ],
    },
    {
      name: 'Community',
      dropdown: [
        { name: 'Ambassadors', href: '/ambassadors' },
        { name: 'Members', href: '/members' },
        { name: 'Staff', href: '/staff' },
        { name: 'Calendar', href: '/calendar' },
        { name: 'Special Interest Groups (SIGs)', href: '/sigs' },
      ],
    },
    {
      name: 'Essentials',
      dropdown: [
        { name: 'Opportunities', href: '/opportunities' },
        { name: 'Study Tools', href: '/study-tools' },
        { name: 'University Pathways', href: '/uni-pathways' },
        { name: 'Exams', href: '/exams' },
        { name: 'Career Pathways', href: '/career-pathways' },
        { name: 'Community Projects', href: '/community-projects' },
        { name: 'Propose an Opportunity', href: '/propose-an-opportunity' },
      ],
    },
    {
      name: 'News',
      dropdown: [
        { name: 'Announcements', href: '/announcements' },
        { name: 'News', href: '/news' },
        { name: 'Meetups', href: '/meetups' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', Icon: FaLinkedin },
    { name: 'Instagram', href: '#', Icon: FaInstagram },
    { name: 'Discord', href: '#', Icon: FaDiscord },
    { name: 'LINE', href: '#', Icon: RiLineFill },
  ]

  return (
    <header
      className={`
        bg-white shadow-md font-sans
        fixed top-0 left-0 right-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={senLogo}
                alt="SEN Logo"
                className="h-30 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src =
                    'https://placehold.co/120x50/FFFFFF/000000?text=LOGO&font=montserrat'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center cursor-pointer">
                  {link.name}
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="absolute z-20 left-0 mt-1 w-64 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out transform origin-top scale-95 group-hover:scale-100">
                  <div className="py-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150 ease-in-out hover:-translate-y-px"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Section: Actions & Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/become-a-member"
              className="bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium py-2.5 px-5 rounded-md transition-colors duration-150 cursor-pointer"
            >
              Become a Member
            </Link>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- REBUILT MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <button
                  onClick={() => handleAccordionToggle(link.name)}
                  className="w-full flex justify-between items-center text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${openAccordion === link.name ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {openAccordion === link.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <Link
                to="/become-a-member"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-150 cursor-pointer"
              >
                Become a Member
              </Link>
            </div>
            <div className="mt-3 px-5 flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
