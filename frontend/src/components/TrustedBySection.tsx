import React from 'react';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

interface TrustedBySectionProps {
  partners: Partner[];
}

const TrustedBySection: React.FC<TrustedBySectionProps> = ({ partners }) => {
  // This sub-component renders a single set of logos
  const LogoSet = () => (
    <div className="flex-shrink-0 flex items-center justify-around w-max space-x-16 pr-16">
      {partners.map((partner) => (
        <a
          key={partner.id}
          href={partner.websiteUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          title={partner.name}
          className="flex-shrink-0"
        >
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className="max-h-8 w-auto object-contain"
          />
        </a>
      ))}
    </div>
  );

  // Don't render if there are no partners
  if (partners.length === 0) {
    return null;
  }

  return (
    <div className="bg-transparent w-full py-12">
      <div className="container mx-auto">
        <div className="w-full flex overflow-hidden">
          {/* Duplicate the logo set to ensure a seamless loop */}
          <div className="flex animate-carousel">
            <LogoSet />
            <LogoSet />
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;