// src/components/Footer.tsx
import React from 'react';

interface SocialIconProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, title, children }: SocialIconProps) => (
  <a
    href={href}
    aria-label={title}
    title={title}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      {children}
    </svg>
  </a>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#282c34] text-gray-400 text-xs py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left side: Copyright text */}
        <div className="text-center md:text-left md:w-3/4 lg:w-2/3">
          <p>
            Copyright © {currentYear} SEN. All rights reserved.
            <a href="/privacy-policy" className="ml-2 font-semibold text-white hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms-of-use" className="font-semibold text-white hover:underline">Terms of Use</a>.
          </p>
        </div>

        {/* Right side: Social media icons */}
        <div className="flex space-x-4">
          <SocialIcon href="#" title="X / Twitter">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </SocialIcon>
           <SocialIcon href="#" title="LinkedIn">
            <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-3.12V18.5h3.12v-5.2c0-.9.93-1.76 2.03-1.76 1.11 0 1.47.82 1.47 1.76v5.2H18.5zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm-1.56 9.94h3.12V9.98H5.32v8.52z" />
          </SocialIcon>
          <SocialIcon href="#" title="YouTube">
             <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28H12c-1.37 0-2.37-.09-3.18-.21L8.55 19c-.9-.23-1.48-.83-1.73-1.73-.38-1.04-.48-2.3-.48-4.15v-.17A9.93 9.93 0 016 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28H12c1.37 0 2.37.09 3.18.21l.27.06c.9.23 1.48.83 1.73 1.73z"/>
          </SocialIcon>
          <SocialIcon href="#" title="GitHub">
            <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12C22 6.48 17.52 2 12 2z"/>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;