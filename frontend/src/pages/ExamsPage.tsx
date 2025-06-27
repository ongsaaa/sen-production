// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/frontend/src/pages/ExamsPage.tsx
import React, { useState, useEffect } from 'react'; // Added useEffect
// Link component is not used in this version, but keep if you add internal links
// import { Link } from '@tanstack/react-router';

interface ExamInfo {
  id: string; // Mapped from examKey or _id
  _id?: string;
  name: string;
  acronym?: string;
  icon?: string;
  description: string;
  sections: string[];
  scoring: string;
  goodScoreGeneral: string;
  usedFor: string[];
  whenToTake: string;
  registrationLink?: string;
  knowMoreLink?: string;
  practiceMaterialLinks: { name: string; url: string }[];
}

// REMOVE THE OLD DUMMY DATA ARRAY: const examsData: ExamInfo[] = [ ... ];

const ExamsPage: React.FC = () => {
  const highlightColor = 'text-indigo-500';
  const [expandedExam, setExpandedExam] = useState<string | null>(null);

  // State for fetched data
  const [exams, setExams] = useState<ExamInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchExams = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/api/examsinfo`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: ExamInfo[] = await response.json();
        setExams(data);
      } catch (err) {
        const e = err as Error;
        setError(e.message || 'Failed to fetch exam information.');
        console.error("Error fetching exams:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExams();
  }, []); // Empty dependency array means this effect runs once on mount

  const toggleExam = (id: string) => {
    setExpandedExam(expandedExam === id ? null : id);
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
            <span className="text-gray-100">Standardized</span>
            <span className={`ml-2 sm:ml-3 ${highlightColor} italic`}>
              Exams Guide
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Simplify your academic journey with straightforward explanations of standardized tests and requirements."
          </p>
        </div>
      </section>

      {/* Section 2: Exams Content */}
      <section className="bg-slate-50 text-gray-800 py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Navigating Your Test Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Standardized tests are a key part of many university applications. This guide provides an overview of common exams, what they entail, and resources to help you prepare.
              <strong className="block mt-2">Disclaimer:</strong> Information on "good scores" is general. Always check specific requirements for your target universities and programs. Test details and registration links may change; refer to official exam websites for the most current information.
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading exam information...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">Could not load exam information: {error}</p>
               <p className="text-sm text-gray-500 mt-2">Please ensure the backend server is running and the database is seeded. Try refreshing the page.</p>
            </div>
          )}

          {!isLoading && !error && exams.length > 0 && (
            <div className="space-y-6">
              {exams.map((exam) => ( // Use the fetched 'exams' state
                <div key={exam.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                  <button
                    onClick={() => toggleExam(exam.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none hover:bg-gray-50"
                    aria-expanded={expandedExam === exam.id}
                  >
                    <div className="flex items-center">
                        {exam.icon && <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{exam.icon}</span>}
                        <h3 className="text-xl sm:text-2xl font-semibold text-green-700">
                        {exam.name} {exam.acronym && `(${exam.acronym})`}
                        </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-green-600 transform transition-transform duration-200 ${
                        expandedExam === exam.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {expandedExam === exam.id && (
                    <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-gray-200 space-y-4">
                      <p className="text-sm text-gray-700 leading-relaxed">{exam.description}</p>

                      <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-1">Key Sections:</h4>
                        <p className="text-sm text-gray-600">{exam.sections.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-1">Scoring:</h4>
                        <p className="text-sm text-gray-600">{exam.scoring}</p>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-1">General "Good Score" (Competitive Unis):</h4>
                        <p className="text-sm text-gray-600">{exam.goodScoreGeneral}</p>
                      </div>
                       <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-1">Typically Used For:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 pl-4">
                            {exam.usedFor.map((use, idx) => <li key={idx}>{use}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-1">Recommended Time to Take:</h4>
                        <p className="text-sm text-gray-600">{exam.whenToTake}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
                        {exam.registrationLink && (
                            <a href={exam.registrationLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                            Register
                            </a>
                        )}
                        {exam.knowMoreLink && (
                            <a href={exam.knowMoreLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                            Learn More
                            </a>
                        )}
                      </div>
                       {exam.practiceMaterialLinks.length > 0 && (
                        <div className="pt-2">
                            <h4 className="text-md font-semibold text-gray-800 mb-1.5">Practice Materials:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                            {exam.practiceMaterialLinks.map(link => (
                                <li key={link.name}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 hover:underline">
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
          )}
          
          {!isLoading && !error && exams.length === 0 && (
            <p className="text-center text-lg text-gray-500 py-10">
                Exam information is currently being compiled. Please check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExamsPage;