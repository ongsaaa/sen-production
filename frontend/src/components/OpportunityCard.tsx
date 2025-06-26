import { Link } from '@tanstack/react-router';

// Define and export the Opportunity type to be used by other components
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
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Link
      to="/opportunities/$opportunityId"
      params={{ opportunityId: opportunity.id }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col h-full shadow-md transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out no-underline text-gray-900"
    >
      {opportunity.imageUrl && (
        <img src={opportunity.imageUrl} alt={opportunity.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {opportunity.tags?.map((tag: string) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2.5 py-1 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-1 leading-tight">{opportunity.title}</h3>
        {opportunity.organizer && <p className="text-xs text-gray-500 mb-3">{opportunity.organizer}</p>}
        <p className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed line-clamp-3">
          {opportunity.description}
        </p>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs">
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