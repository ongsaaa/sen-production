import React from 'react'
import OpportunitiesSection from '@/components/OpportunitiesSection'

const OpportunitiesPage: React.FC = () => {
  const highlightColorForOpportunities = 'text-purple-500' // Example: Emerald Green
  return (
    <div className="font-['Inter',_sans-serif]">
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span
              className={`ml-2 sm:ml-3 ${highlightColorForOpportunities} italic`}
            >
              Opportunities
            </span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Discover a comprehensive collection of the best opportunities – from local workshops to international internships – all made easy to find."
          </p>
        </div>
      </section>
      <OpportunitiesSection />
    </div>
  )
}

export default OpportunitiesPage
