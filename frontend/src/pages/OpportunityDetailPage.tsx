import { useEffect, useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

// A more detailed type for this page
interface OpportunityDetail {
  id: string;
  title: string;
  organizer: string;
  description: string;
  link: string;
  type?: string;
  opening?: string;
  deadline?: string;
  ageRestriction?: string;
  location?: string;
  fee?: string;
  schedule?: string;
  imageUrl?: string;
  tags?: string[];
  status?: string;
}

const OpportunityDetailPage = () => {
  const { opportunityId } = useParams({ from: '/opportunities/$opportunityId' });
  const [opportunity, setOpportunity] = useState<OpportunityDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!opportunityId) return;

    const fetchOpportunity = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/getitem/${opportunityId}`);
        if (!response.ok) {
          throw new Error('Opportunity not found');
        }
        const item = await response.json();
        
        setOpportunity({
          id: item._id,
          title: item.name || 'Untitled Opportunity',
          organizer: item.organization || 'Unknown Organizer',
          description: item.description || 'No description provided.',
          link: item.link || '#',
          type: item.type,
          opening: item.opening,
          deadline: item.deadline,
          ageRestriction: item.ageRestriction,
          location: item.location,
          fee: item.fee,
          schedule: item.schedule,
          imageUrl: item.imageUrl,
          tags: Array.isArray(item.industry) ? item.industry : (item.industry ? [item.industry] : []),
          status: item.status,
        });
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOpportunity();
  }, [opportunityId, apiUrl]);

  if (isLoading) {
    return <div className="text-center p-10 min-h-screen bg-gray-50">Loading Opportunity...</div>;
  }

  if (error || !opportunity) {
    return <div className="text-center p-10 min-h-screen bg-gray-50 text-red-500">Error: {error || 'Could not load the opportunity.'}</div>;
  }
  
  const formatDate = (dateString?: string) => {
    if (!dateString) return undefined;
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const date = new Date(`${year}-${month}-${day}`);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
    }
    return dateString;
  }

  const details = [
    { label: 'Type', value: opportunity.type },
    { label: 'Start Date', value: formatDate(opportunity.opening) },
    { label: 'Deadline', value: formatDate(opportunity.deadline) },
    { label: 'Age Requirement', value: opportunity.ageRestriction },
    { label: 'Duration', value: opportunity.schedule },
    { label: 'Cost', value: opportunity.fee },
    { label: 'Location', value: opportunity.location },
  ].filter(detail => detail.value && detail.value.trim() !== '');

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#282c34] rounded-t-xl p-8 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-purple-400">
            {opportunity.title}
          </h1>
          <div className="flex items-center mt-3 text-gray-400">
            <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
            <span>{opportunity.organizer}</span>
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg mb-10">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b border-gray-200 pb-4">Program Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {details.map(detail => (
                <div key={detail.label} className="grid grid-cols-2 gap-4">
                  <span className="font-semibold text-gray-500">{detail.label}</span>
                  <span className="text-gray-900">{detail.value}</span>
                </div>
              ))}
               {details.length === 0 && <p className="text-gray-500 col-span-full">More details will be provided soon.</p>}
            </div>
          </div>
          
          {opportunity.description && (
             <div className="p-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b border-gray-200 pb-4">Description</h2>
                <div className="prose prose-purple max-w-none text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-wrap">{opportunity.description}</p>
                </div>
             </div>
          )}
        </div>

        <div className="flex items-center justify-between">
            <Link
                to="/opportunities"
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 font-semibold transition-colors"
            >
                <FaArrowLeft />
                Back to Opportunities
            </Link>
            <a
              href={opportunity.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            >
              Apply Now
            </a>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetailPage;