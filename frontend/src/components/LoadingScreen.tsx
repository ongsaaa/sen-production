import React from 'react';
import senLogo from '../assets/SEN_LOGO-removebg.png';

interface LoadingScreenProps {
  isExiting: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isExiting }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-gradient-to-r from-purple-400 to-indigo-500
        transition-transform duration-1000 ease-in-out
        ${isExiting ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="animate-pulse">
        <img
          src={senLogo}
          alt="SEN Logo"
          className="h-60 w-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/120x50/FFFFFF/000000?text=LOGO&font=montserrat';
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;