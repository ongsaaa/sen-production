// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';

const NotFoundPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 text-gray-800 p-6">
      <div className="max-w-md">
        <h1 className="font-header text-6xl md:text-9xl font-bold text-purple-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or you might have mistyped the URL.
        </p>
        <div className="mt-8">
          <Link
            to="/" // Link to the homepage
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 inline-block"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;