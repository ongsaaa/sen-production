// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/frontend/src/pages/StudyToolsPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

interface StudyTool {
  id: string; // This will be 'toolKey' or fallback to '_id' from backend
  _id?: string; // MongoDB's actual ID, if you want to use it directly
  name: string;
  description: string;
  category: string;
  link: string;
  icon?: string | React.ReactNode;
  tags?: string[];
  // Add toolKey if you want to ensure it's always present,
  // especially if 'id' might sometimes be MongoDB's _id.
  // For this example, 'id' will be populated by the backend's transformation.
  // toolKey?: string;
}

const groupToolsByCategory = (tools: StudyTool[]): { [key: string]: StudyTool[] } => {
  return tools.reduce((acc, tool) => {
    (acc[tool.category] = acc[tool.category] || []).push(tool);
    return acc;
  }, {} as { [key: string]: StudyTool[] });
};


const StudyToolsPage: React.FC = () => {
  const highlightColorForTools = 'text-indigo-500';
  // studyTools state will hold data fetched from the backend
  const [studyTools, setStudyTools] = useState<StudyTool[]>([]);
  const [groupedTools, setGroupedTools] = useState<{ [key: string]: StudyTool[] }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchStudyTools = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/api/studytools`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: StudyTool[] = await response.json();
        setStudyTools(data);
        setGroupedTools(groupToolsByCategory(data));
      } catch (err) {
        const e = err as Error;
        setError(e.message || 'Failed to fetch study tools.');
        console.error("Error fetching study tools:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudyTools();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="font-sans">
      {/* Section 1: "Study Tools" Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Essential</span>
            <span className={`ml-2 sm:ml-3 ${highlightColorForTools} italic`}>
              Study Tools
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Access a curated library of proven tools, insightful tips, and effective tricks shared by successful graduated seniors."
          </p>
        </div>
      </section>

      {/* Section 2: Tools Showcase */}
      <section className="bg-slate-50 text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Curated for Your Success
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEN brings you a selection of powerful resources to streamline your studies, boost productivity, and enhance your learning experience. Explore tools for organization, focus, research, and more – all designed to help you achieve your academic and personal goals.
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading study tools...</p>
              {/* Optional: Add a spinner component here */}
            </div>
          )}

          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">Could not load study tools: {error}</p>
              <p className="text-sm text-gray-500 mt-2">Please ensure the backend server is running and the database is seeded. Try refreshing the page.</p>
            </div>
          )}

          {!isLoading && !error && Object.keys(groupedTools).length > 0 && (
            Object.entries(groupedTools).map(([category, tools]) => (
              <div key={category} className="mb-12 md:mb-16">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 pl-2 border-l-4 border-cyan-500">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {tools.map((tool) => (
                    <div
                      key={tool.id} // Ensure 'id' (mapped from toolKey or _id) is unique
                      className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                    >
                      <div className="p-6 flex-grow">
                        <div className="flex items-center mb-3">
                          {tool.icon && typeof tool.icon === 'string' && tool.icon.startsWith('http') ? (
                            <img src={tool.icon} alt={`${tool.name} icon`} className="w-10 h-10 mr-4 rounded-md object-contain" />
                          ) : tool.icon ? (
                            <span className="text-3xl mr-3">{tool.icon}</span>
                          ) : null}
                          <h4 className="text-xl font-bold text-gray-900">{tool.name}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                          {tool.description}
                        </p>
                        {tool.tags && tool.tags.length > 0 && (
                          <div className="mb-4">
                            {tool.tags.map(tag => (
                              <span key={tag} className="inline-block bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full text-xs font-medium mr-2 mb-2">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 px-4 rounded-md text-sm transition-colors duration-300"
                        >
                          Visit {tool.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          
          {!isLoading && !error && Object.keys(groupedTools).length === 0 && (
             <p className="text-center text-lg text-gray-500 py-10">
                No study tools listed yet. Please check back soon or suggest a tool!
            </p>
          )}

          <div className="mt-16 text-center pt-10 border-t border-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Have a Tool Suggestion?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Know a great tool that has helped you? Share it with the SEN community!
            </p>
            <Link
              to="/contacts?subject=StudyToolSuggestion"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block"
            >
              Suggest a Tool
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StudyToolsPage;