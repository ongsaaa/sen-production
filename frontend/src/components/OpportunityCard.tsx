// src/components/OpportunityCard.tsx
import { Link } from '@tanstack/react-router';

export interface Opportunity {
  id: string;
  imageUrl?: string;
  tags?: string[];
  title: string;
  organizer?: string;
  description: string;
  date: string;
  status?: string;
  link?: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const formatDate = (dateString: string): string => {
    if (!dateString || new Date(dateString).toString() === 'Invalid Date') {
      return 'Date N/A';
    }
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  };

  // Function to handle broken images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop if the placeholder also fails
    target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(opportunity.title || 'Opportunity')}`;
  };

  return (
    <Link
      to="/opportunities/$opportunityId"
      params={{ opportunityId: opportunity.id }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col h-full shadow-md transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out no-underline text-gray-900"
    >
      {opportunity.imageUrl && (
        <img
          src={opportunity.imageUrl}
          alt={opportunity.title}
          className="w-full h-48 object-cover flex-shrink-0"
          onError={handleImageError} // Add this onError handler
        />
      )}
      <div className="p-5 flex flex-col flex-grow">
        
        <div className="flex-shrink-0 h-8 flex items-center overflow-x-auto scrollbar-hide [mask-image:linear-gradient(to_right,black_90%,transparent_100%)]">
          <div className="flex flex-nowrap gap-2">
            {opportunity.tags?.map((tag: string) => (
              <span key={tag} className="flex-shrink-0 bg-gray-100 text-gray-700 px-2.5 py-1 text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* --- THE FIX IS IN THIS SECTION --- */}

        {/* CHANGE 1: Reduced the container height from h-20 to h-16 to make it tighter. */}
        <div className="mt-3 h-16">
          <h3 className="text-lg font-bold line-clamp-2 leading-tight">
            {opportunity.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1 truncate">
            {opportunity.organizer}
          </p>
        </div>

        {/* CHANGE 2: Removed the top margin (mt-3) to close the gap completely. */}
        <div className="relative h-36 overflow-y-auto scrollbar-hide [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
          <p className="text-sm text-gray-700 leading-relaxed">
            {opportunity.description}
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs flex-shrink-0">
        <span className="font-medium text-gray-600">{formatDate(opportunity.date)}</span>
        {opportunity.status && (
          <span className={`font-semibold px-2.5 py-1 rounded-full ${
            opportunity.status.toLowerCase() === 'open'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
            }`}>
            {opportunity.status}
          </span>
        )}
      </div>
    </Link>
  );
};

export default OpportunityCard;