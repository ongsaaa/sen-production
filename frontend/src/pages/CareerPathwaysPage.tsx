import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import GlowingText from '@/components/GlowingText';

interface CareerPathway {
  id: string;
  title: string;
  icon?: string;
  description: string;
  typicalEducationalPathways: string[];
  lessonsAndTopics: string[];
  keySkills: string[];
  relevantToolsAndTechnologies: string[];
  stepsToEnterField: string[];
  relevantUniversityMajors: string[];
  futureOutlook: string;
  majorPlayersInIndustry?: { name: string; type?: string; url?: string }[];
  resourceLinks: { name: string; url: string }[];
}

const CareerPathwaysPage: React.FC = () => {
  const highlightColor = 'text-indigo-400';
  const [expandedPathway, setExpandedPathway] = useState<string | null>(null);

  // State for fetched data
  const [pathways, setPathways] = useState<CareerPathway[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPathways = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/api/careerpathways`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: CareerPathway[] = await response.json();
        setPathways(data);
      } catch (err) {
        const e = err as Error;
        setError(e.message || 'Failed to fetch career pathways.');
        console.error("Error fetching career pathways:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPathways();
  }, []);

  const togglePathway = (id: string) => {
    setExpandedPathway(expandedPathway === id ? null : id);
  };

  return (
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Explore Your</span>
            <GlowingText className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Career Pathways
            </GlowingText>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Navigate your future with demystified career pathways..."
          </p>
        </div>
      </section>

      {/* Section 2: Pathways Content */}
      <section className="bg-slate-50 text-gray-800 py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Discover Potential Futures
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choosing a career is a significant step. This section provides insights into various professions.
              <strong className="block mt-2">Disclaimer:</strong> Career pathways can vary greatly. The information here is generalized. Always research specific requirements and consult with professionals in your fields of interest.
            </p>
          </div>
          
          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading career pathways...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">Could not load career pathways: {error}</p>
              <p className="text-sm text-gray-500 mt-2">Please ensure the backend server is running and the database is seeded. Try refreshing the page.</p>
            </div>
          )}

          {!isLoading && !error && pathways.length > 0 ? (
            <div className="space-y-6">
              {pathways.map((pathway) => (
                <div key={pathway.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                  <button
                    onClick={() => togglePathway(pathway.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none hover:bg-gray-50"
                    aria-expanded={expandedPathway === pathway.id}
                  >
                    <div className="flex items-center">
                        {pathway.icon && <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{pathway.icon}</span>}
                        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700">
                        {pathway.title}
                        </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 transform transition-transform duration-200 ${
                        expandedPathway === pathway.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {expandedPathway === pathway.id && (
                    <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-gray-200 space-y-5">
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{pathway.description}</p>
                        
                        {/* Dynamically render all sections */}

                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            !isLoading && !error && (
                <p className="text-center text-lg text-gray-500 py-10">
                    Career pathway information is currently being compiled. Please check back soon!
                </p>
            )
          )}
           <div className="mt-16 text-center pt-10 border-t border-gray-300">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Need Personalized Career Guidance?
                </h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Consider speaking with school counselors, industry professionals, or university career services.
                </p>
                <Link
                to="/contacts?subject=CareerPathwayInquiry"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                >
                Ask Us a General Question
                </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPathwaysPage;