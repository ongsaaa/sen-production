// src/components/Header.jsx
import senLogo from '../assets/SEN_LOGO-removebg.png'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

// Define types for props
interface HeaderProps {
  isVisible: boolean
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.06 20.45H3.55V9H7.06v11.45zM5.3 7.52c-1.11 0-2.01-.9-2.01-2.01s.9-2.01 2.01-2.01 2.01.9 2.01 2.01c0 1.11-.9 2.01-2.01 2.01zm15.15 12.93h-3.51V14.8c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.75h-3.51V9h3.37v1.54h.05c.47-.88 1.62-1.81 3.32-1.81 3.55 0 4.21 2.34 4.21 5.38v6.34z" />
  </svg>
)

// Instagram Icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.791.218 2.227.42a2.913 2.913 0 0 1 1.094.748 2.913 2.913 0 0 1 .748 1.094c.202.436.368 1.055.42 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.791-.42 2.227a2.913 2.913 0 0 1-.748 1.094 2.913 2.913 0 0 1-1.094.748c-.436.202-1.055.368-2.227.42-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.791-.218-2.227-.42a2.913 2.913 0 0 1-1.094-.748 2.913 2.913 0 0 1-.748-1.094c-.202-.436-.368-1.055-.42-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.791.42-2.227a2.913 2.913 0 0 1 .748-1.094 2.913 2.913 0 0 1 1.094-.748c.436-.202 1.055-.368 2.227-.42C8.416 2.175 8.796 2.163 12 2.163zm0-1.631C8.72 0.532 8.316 0.52 7.053 0.468 5.74.416 4.89.25 4.135.057a4.543 4.543 0 0 0-1.688.653 4.543 4.543 0 0 0-1.16 1.16A4.543 4.543 0 0 0 .653 4.135C.46 4.89.298 5.74.246 7.053.193 8.316.182 8.72.182 12s.011 3.684.064 4.947c.052 1.313.214 2.163.41 2.918a4.543 4.543 0 0 0 .653 1.688 4.543 4.543 0 0 0 1.16 1.16 4.543 4.543 0 0 0 1.688.653c.755.193 1.605.355 2.918.408C8.316 23.48 8.72 23.488 12 23.488s3.684-.008 4.947-.06c1.313-.053 2.163-.215 2.918-.41a4.543 4.543 0 0 0 1.688-.653 4.543 4.543 0 0 0 1.16-1.16 4.543 4.543 0 0 0 .653-1.688c.196-.755.358-1.605.41-2.918.053-1.263.065-1.667.065-4.947s-.012-3.684-.065-4.947c-.052-1.313-.214-2.163-.41-2.918a4.543 4.543 0 0 0-.653-1.688 4.543 4.543 0 0 0-1.16-1.16A4.543 4.543 0 0 0 19.865.468c-.755-.193-1.605-.355-2.918-.408C15.684.01 15.28 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
  </svg>
)

// Discord Icon
const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.222 0H3.778C1.691 0 0 1.732 0 3.875v15.25C0 21.268 1.691 23 3.778 23h12.667l1.416-2.279h2.361c1.044 0 1.778-.836 1.778-1.875V3.875C22 1.732 20.309 0 20.222 0zM7.778 15.542c-1.069 0-1.938-.912-1.938-2.038s.869-2.038 1.938-2.038c1.069 0 1.938.912 1.938 2.038s-.869 2.038-1.938 2.038zm4.444 0c-1.069 0-1.938-.912-1.938-2.038s.869-2.038 1.938-2.038c1.069 0 1.938.912 1.938 2.038s-.869 2.038-1.938 2.038zm4.444 0c-1.069 0-1.938-.912-1.938-2.038s.869-2.038 1.938-2.038c1.069 0 1.938.912 1.938 2.038s-.869 2.038-1.938 2.038z" />
  </svg>
)

// LINE Icon
const LINEIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5v17A3.5,3.5,0,0,0,3.5,24h17A3.5,3.5,0,0,0,24,20.5V3.5A3.5,3.5,0,0,0,20.5,0ZM9.76,18.2H6.33V10.36h3.43Zm6.49,0H12.82a5.44,5.44,0,0,1-4.5-2.35V18.2H4.89V7.18h3.3V9.07a6.28,6.28,0,0,1,5.22-2.8c3.43,0,4.44,2.21,4.44,6.17v5.76Z" />
    <path
      d="M16.171,9.31c-1.018,0-1.842.824-1.842,1.842s.824,1.842,1.842,1.842,1.842-.824,1.842-1.842-.824-1.842-1.842-1.842Z"
      fill="#fff"
    />
    <path
      d="M8.042,9.31c-1.018,0-1.842.824-1.842,1.842s.824,1.842,1.842,1.842,1.842-.824,1.842-1.842-.824-1.842-1.842-1.842Z"
      fill="#fff"
    />
  </svg>
)

const Header = ({ isVisible }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    {
      name: 'About',
      href: '#',
      dropdown: [
        { name: 'Who We Are', href: '/who-we-are' },
        { name: 'Partners', href: '/partners' },
        { name: 'Become a member', href: '/become-a-member' },
        { name: 'Staff', href: '/staff' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contacts', href: '/contacts' },
      ],
    },
    {
      name: 'Community',
      href: '#',
      dropdown: [
        { name: 'Ambassadors', href: '/ambassadors' },
        { name: 'Members', href: '/members' },
        { name: 'Calendar', href: '/calendar' },
        { name: 'Special Interest Groups (SIGs)', href: '/sigs' },
      ],
    },
    {
      name: 'Essentials',
      href: '#',
      dropdown: [
        { name: 'Opportunities', href: '/opportunities' },
        { name: 'Study Tools', href: '/study-tools' },
        { name: 'University Pathways', href: '/uni-pathways' },
        { name: 'Exams', href: '/exams' },
        { name: 'Career Pathways', href: '/career-pathways' },
        { name: 'Community Projects', href: '/comuunity-projects' },
        { name: 'Propose an Opportunity', href: '/propose-an-opportunity' },
      ],
    },
    {
      name: 'News',
      href: '#',
      dropdown: [
        { name: 'Announcements', href: '/announcements' },
        { name: 'News', href: '/news' },
        { name: 'Meetups', href: '/meetups' },
      ],
    },
  ]

  // Social media links data
  const socialLinks = [
    { name: 'LinkedIn', href: '#', Icon: LinkedInIcon },
    { name: 'Instagram', href: '#', Icon: InstagramIcon },
    { name: 'Discord', href: '#', Icon: DiscordIcon },
    { name: 'LINE', href: '#', Icon: LINEIcon },
  ]

  return (
    <header
      className={`
        bg-white shadow-md font-['Inter',_sans-serif]
        fixed top-0 left-0 right-0 w-full z-50   শক্তি {/* Core fixed positioning and z-index */}
        transition-all duration-300 ease-in-out   {/* Smooth transition for visibility changes */}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} {/* Conditional visibility classes */}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={senLogo}
                alt="SEN Logo"
                className="h-30 w-auto" 
                onError={(e) => {
                  // Type the event target to fix the error
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src =
                    'https://placehold.co/120x50/FFFFFF/000000?text=LOGO&font=montserrat'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center"
                  >
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
                  </a>
                  {/* Dropdown panel */}
                  <div className="absolute z-20 left-0 mt-1 w-64 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out transform origin-top scale-95 group-hover:scale-100">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150 ease-in-out hover:-translate-y-px"
                          role="menuitem"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  {link.name}
                </a>
              ),
            )}
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
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                <social.Icon />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" // Updated focus ring
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.name}
                  </a>
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ),
            )}
          </div>
          {/* Mobile Action Buttons & Socials */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-150 cursor-pointer">
                Become a Member
              </button>
            </div>
            <div className="mt-3 px-5 flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  <social.Icon />
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
