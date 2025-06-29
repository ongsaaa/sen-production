import { useState, useEffect } from 'react';
import type { Opportunity } from './OpportunityCard';
import OpportunityCard from './OpportunityCard';

const OpportunitiesSection = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(8);
  const INITIAL_LIMIT = 8;
  const [totalFilteredCount, setTotalFilteredCount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchOpportunities = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/api/getitem`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log(`Fetched data from ${apiUrl}/api/getitem:`, data);

        const transformedData = data.map((item: any): Opportunity => ({
          id: item._id,
          imageUrl: item.imageUrl || `https://via.placeholder.com/400x300?text=${encodeURIComponent(item.name || 'Opportunity')}`,
          tags: Array.isArray(item.industry) ? item.industry : (item.industry ? [item.industry] : ['General']),
          title: item.name || 'Untitled Opportunity',
          organizer: item.organization || 'Unknown Organizer',
          description: item.description || 'No description provided.',
          date: item.deadline || item.opening || item.post_date,
          status: item.status,
          link: item.link || '#',
        }));
        setOpportunities(transformedData);

        const counts: { [key: string]: number } = {};
        transformedData.forEach((opp: Opportunity) => {
          opp.tags?.forEach(tag => {
            counts[tag] = (counts[tag] || 0) + 1;
          });
        });
        setCategoryCounts(counts);

      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError('An unknown error occurred');
        console.error('Failed to fetch opportunities:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOpportunities();
  }, [apiUrl]);

  const filteredOpportunities = opportunities.filter(op =>
    activeFilter === 'All' || op.tags?.includes(activeFilter)
  );

  useEffect(() => {
    setTotalFilteredCount(filteredOpportunities.length);
    setLimit(INITIAL_LIMIT);
  }, [activeFilter, opportunities, filteredOpportunities.length]);

  const handleToggleView = () => {
    setLimit(prev => (prev === INITIAL_LIMIT ? totalFilteredCount : INITIAL_LIMIT));
  };

  const opportunitiesToDisplay = filteredOpportunities.slice(0, limit);
  
  const getButtonClass = (category: string) => {
    const isActive = activeFilter === category;
    return `
      px-4 py-2 text-sm font-medium border rounded-md transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
      ${isActive
        ? 'bg-red-500 text-white border-red-500 shadow-sm'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
      }
    `;
  };

  if (isLoading) {
    return (
      <div className="bg-white py-16 text-center font-sans">
        <p className="text-lg text-gray-600">Loading opportunities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-16 text-center font-sans">
        <p className="text-lg text-red-600">Error fetching opportunities: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            OPPORTUNITIES
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            List of the most exciting opportunities from all around Thailand and the world.
          </p>
        </div>

        <div className="mb-12">
            <h3 className="text-left text-gray-500 mb-4">Jump to any category:</h3>
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => setActiveFilter('All')}
                    className={getButtonClass('All')}
                >
                    All ({opportunities.length})
                </button>
                {Object.entries(categoryCounts)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([category, count]) => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={getButtonClass(category)}
                    >
                        {category} {count}
                    </button>
                ))}
            </div>
        </div>

        {opportunities.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {opportunitiesToDisplay.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </div>

            {totalFilteredCount > INITIAL_LIMIT && (
              <div className="mt-16 text-center">
                <button
                  onClick={handleToggleView}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  {limit === INITIAL_LIMIT ? 'See More' : 'See Less'}
                </button>
              </div>
            )}
            
            {filteredOpportunities.length === 0 && activeFilter !== 'All' && (
              <div className="text-center py-10 col-span-full border-2 border-dashed border-gray-300 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-gray-800">No Opportunities Found</h3>
                <p className="mt-2 text-gray-500">There are no opportunities matching the category "{activeFilter}".</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">No Opportunities Found</h3>
            <p className="mt-2 text-gray-500">Your database is likely empty. Try adding an opportunity to see it here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpportunitiesSection;