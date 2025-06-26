import { useEffect, useState } from 'react';
import { useParams } from '@tanstack/react-router';
import type { Opportunity } from '../components/OpportunityCard'; // Import the type

const OpportunityDetailPage = () => {
  const { opportunityId } = useParams({ from: '/opportunities/$opportunityId' });
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!opportunityId) return;

    const fetchOpportunity = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/getitem/${opportunityId}`);
        if (!response.ok) {
          throw new Error('Opportunity not found');
        }
        const item = await response.json();
        setOpportunity({
          id: item._id,
          imageUrl: item.imageUrl || `https://via.placeholder.com/600x400?text=${encodeURIComponent(item.name || 'Opportunity')}`,
          tags: Array.isArray(item.industry) ? item.industry : (item.industry ? [item.industry] : ['General']),
          title: item.name || 'Untitled Opportunity',
          organizer: item.organization || 'Unknown Organizer',
          description: item.description || 'No description provided.',
          date: item.opening || item.post_date,
          status: item.status,
          link: item.link || '#',
        });
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOpportunity();
  }, [opportunityId]);

  if (isLoading) {
    return <div className="text-center p-10">Loading Opportunity...</div>;
  }

  if (error || !opportunity) {
    return <div className="text-center p-10 text-red-500">Error: {error || 'Could not load the opportunity.'}</div>;
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {opportunity.imageUrl && (
            <img src={opportunity.imageUrl} alt={opportunity.title} className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg" />
        )}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{opportunity.title}</h1>
        <p className="mt-2 text-lg text-gray-500">{opportunity.organizer}</p>
        
        <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>{opportunity.description}</p>
        </div>
        
        <div className="mt-8 border-t pt-6">
            <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors">
              Visit Opportunity Page
            </a>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetailPage;