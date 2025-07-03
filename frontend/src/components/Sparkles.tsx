import React from 'react';

// A utility to generate random values for the sparkles
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

// An array to hold the styles for each sparkle
const sparkles = Array.from({ length: 15 }).map(() => ({
  top: `${random(0, 100)}%`,
  left: `${random(0, 100)}%`,
  animationDelay: `${random(0, 4000)}ms`,
  width: `${random(1, 3)}px`,
  height: `${random(1, 3)}px`,
}));

const Sparkles: React.FC = () => {
  return (
    <>
      {sparkles.map((style, index) => (
        <span
          key={index}
          className="absolute bg-white rounded-full animate-particle-glow"
          style={{
            top: style.top,
            left: style.left,
            width: style.width,
            height: style.height,
            animationDelay: style.animationDelay,
          }}
        />
      ))}
    </>
  );
};

export default Sparkles;