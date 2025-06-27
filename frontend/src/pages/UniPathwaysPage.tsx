// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/frontend/src/pages/UniPathwaysPage.tsx
import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from '@tanstack/react-router';

interface UniversityTier {
  name: string;
  description: string;
  exampleSAT?: string;
  exampleACT?: string;
  exampleIB?: string;
  exampleAP?: string;
  exampleIELTS?: string;
  exampleTOEFL?: string;
}

interface CountryPathway {
  id: string; // Mapped from pathwayKey or _id
  _id?: string;
  countryName: string;
  flagIcon?: string;
  generalTips: string[];
  standardizedTests: {
    name: string;
    details: string;
    typicalScoreRange?: string;
  }[];
  universityTiers: UniversityTier[];
  keyConsiderations: string[];
  usefulLinks?: { name: string; url: string }[];
  // pathwayKey?: string; // if needed explicitly, covered by 'id' from backend transform
}

// REMOVE THE OLD DUMMY DATA ARRAY: const pathwaysData: CountryPathway[] = [ ... ];

const UniPathwaysPage: React.FC = () => {
  const highlightColor = 'text-indigo-500';
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  // State for fetched data
  const [pathways, setPathways] = useState<CountryPathway[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPathways = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/api/unipathways`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: CountryPathway[] = await response.json();
        setPathways(data);
      } catch (err) {
        const e = err as Error;
        setError(e.message || 'Failed to fetch university pathways.');
        console.error("Error fetching university pathways:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPathways();
  }, []);

  const toggleCountry = (id: string) => {
    setExpandedCountry(expandedCountry === id ? null : id);
  };

  return (
    <div className="font-sans">
      {/* Section 1: Hero (Keep as is) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">University</span>
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Pathways
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Navigate your future with demystified career pathways and clear university option breakdowns."
          </p>
        </div>
      </section>

      {/* Section 2: Pathways Content */}
      <section className="bg-gray-50 text-gray-800 py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Explore Your Global University Options
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Applying to university can be complex. SEN provides generalized guidance on requirements, standardized tests, and key considerations for popular study destinations to help you start your journey. Remember to always verify specific requirements with individual universities.
            </p>
          </div>
          
          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading university pathways...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">Could not load university pathways: {error}</p>
               <p className="text-sm text-gray-500 mt-2">Please ensure the backend server is running and the database is seeded. Try refreshing the page.</p>
            </div>
          )}

          {!isLoading && !error && pathways.length > 0 ? (
            <div className="space-y-8">
              {pathways.map((pathway) => ( // Use the fetched 'pathways' state
                <div key={pathway.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                  <button
                    onClick={() => toggleCountry(pathway.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-100"
                    aria-expanded={expandedCountry === pathway.id}
                  >
                    <h3 className="text-2xl font-semibold text-purple-700">
                      {pathway.flagIcon && <span className="mr-3">{pathway.flagIcon}</span>}
                      {pathway.countryName}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-purple-600 transform transition-transform duration-200 ${
                        expandedCountry === pathway.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {expandedCountry === pathway.id && (
                    <div className="px-6 pb-8 pt-4 border-t border-gray-200">
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-700 mb-3">General Application Tips</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm leading-relaxed">
                          {pathway.generalTips.map((tip, index) => <li key={index}>{tip}</li>)}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-700 mb-3">Common Standardized Tests</h4>
                        {pathway.standardizedTests.map((test, index) => (
                          <div key={index} className="mb-3 p-3 bg-purple-50 rounded-md">
                            <p className="font-semibold text-purple-800">{test.name}</p>
                            <p className="text-xs text-gray-600">{test.details}</p>
                            {test.typicalScoreRange && <p className="text-xs text-purple-700 mt-1">Typical Range: {test.typicalScoreRange}</p>}
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-700 mb-3">University Tiers (General Guide)</h4>
                        <div className="space-y-4">
                          {pathway.universityTiers.map((tier) => (
                            <div key={tier.name} className="p-4 border border-gray-200 rounded-lg bg-white">
                              <h5 className="text-md font-bold text-purple-600">{tier.name}</h5>
                              <p className="text-xs text-gray-500 mb-2">{tier.description}</p>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                                {tier.exampleSAT && <div><strong>SAT:</strong> {tier.exampleSAT}</div>}
                                {tier.exampleACT && <div><strong>ACT:</strong> {tier.exampleACT}</div>}
                                {tier.exampleIB && <div><strong>IB:</strong> {tier.exampleIB}</div>}
                                {tier.exampleAP && <div><strong>AP:</strong> {tier.exampleAP}</div>}
                                {tier.exampleIELTS && <div><strong>IELTS:</strong> {tier.exampleIELTS}</div>}
                                {tier.exampleTOEFL && <div><strong>TOEFL:</strong> {tier.exampleTOEFL}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                         <p className="mt-3 text-xs text-gray-500 italic">Note: Tiers and score ranges are illustrative and vary significantly. Always check specific university requirements.</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-700 mb-3">Key Considerations</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm leading-relaxed">
                          {pathway.keyConsiderations.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                      </div>
                      {pathway.usefulLinks && pathway.usefulLinks.length > 0 && (
                        <div>
                            <h4 className="text-xl font-semibold text-gray-700 mb-3">Useful Links</h4>
                            <ul className="space-y-1.5">
                            {pathway.usefulLinks.map(link => (
                                <li key={link.name}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline text-sm">
                                    {link.name}
                                </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
             !isLoading && !error && ( // Only show if not loading and no error, but no data
                <p className="text-center text-lg text-gray-500 py-10">
                    University pathway information is currently being updated. Please check back soon!
                </p>
             )
          )}
           {/* ... (Keep the "Need More Specific Advice?" section as is) ... */}
           <div className="mt-16 text-center pt-10 border-t border-gray-300">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Need More Specific Advice?
                </h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Consider reaching out to university counselors or alumni for personalized guidance.
                SEN aims to provide a starting point for your research.
                </p>
                <Link
                to="/contacts?subject=UniPathwayQuery"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                >
                Contact Us for General Queries
                </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniPathwaysPage;