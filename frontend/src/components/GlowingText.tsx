import React from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
  className: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children, className }) => {
  return (
    <span className="relative inline-block">
      {/* The background layer creates the blurred, pulsing glow */}
      <span
        aria-hidden="true"
        // Use the new animation and reduce the blur effect
        className={`absolute top-0 left-0 blur-lg animate-subtle-pulse ${className}`}
      >
        {children}
      </span>
      {/* The foreground layer is the sharp, main text */}
      <span className={`relative ${className}`}>
        {children}
      </span>
    </span>
  );
};

export default GlowingText;