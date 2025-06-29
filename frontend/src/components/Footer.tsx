// src/components/Footer.tsx
import React from 'react';
// Import the specific brand icons you need from react-icons
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa6';
import { RiLineFill } from 'react-icons/ri'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // We can define our social links in an array for cleaner mapping
  const socialLinks = [
    { name: 'LinkedIn', href: '#', Icon: FaLinkedin },
    { name: 'Instagram', href: '#', Icon: FaInstagram },
    { name: 'Discord', href: '#', Icon: FaDiscord },
    { name: 'LINE', href: '#', Icon: RiLineFill },
  ]

  return (
    <footer className="bg-[#282c34] text-gray-400 text-xs py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left side: Copyright text */}
        <div className="text-center md:text-left">
          <p>
            Copyright © {currentYear} SEN. All rights reserved.
            <a href="/privacy-policy" className="ml-4 font-semibold text-white hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use" className="font-semibold text-white hover:underline">
              Terms of Use
            </a>
            .
          </p>
        </div>

        {/* Right side: Social media icons */}
        <div className="flex space-x-5">
          {socialLinks.map((social) => (
            <a
              key={social.title}
              href={social.href}
              aria-label={social.title}
              title={social.title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <social.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;