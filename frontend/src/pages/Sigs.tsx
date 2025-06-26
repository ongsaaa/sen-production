// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/frontend/src/pages/Sigs.tsx
import React, { useState, useEffect } from 'react' // Added useEffect
import { Link } from '@tanstack/react-router'

interface SigItem {
  id: string // Mapped from sigKey or _id
  _id?: string
  name: string
  icon?: string | React.ReactNode
  description: string
  focusAreas: string[]
  coordinator?: string
  joinLink?: string
  // sigKey?: string; // If needed explicitly
}

// REMOVE THE OLD DUMMY DATA ARRAY: const sigsData: SigItem[] = [ ... ];

const SigsPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null) // This seems to be for a different FAQ section logic, review if needed for SIGs.
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id) // If not used for SIGs, this can be removed.

  const highlightColorForSigs = 'text-indigo-500'

  const [sigs, setSigs] = useState<SigItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSigs = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch('/api/sigs')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`,
          )
        }
        const data: SigItem[] = await response.json()
        setSigs(data)
      } catch (err) {
        const e = err as Error
        setError(e.message || 'Failed to fetch SIGs.')
        console.error('Error fetching SIGs:', e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSigs()
  }, [])

  return (
    <div className="font-['Inter',_sans-serif]">
      {/* Section 1: Hero (Keep as is) */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Special Interest Groups</span>
            <span className={`ml-2 sm:ml-3 ${highlightColorForSigs} italic`}>
              (SIGs)
            </span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            "Connect with a vibrant community of like-minded peers who share
            your interests and drive." Dive deeper into your passions.
          </p>
        </div>
      </section>

      {/* Section 2: SIG Details */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Connect with Your Niche
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Special Interest Groups (SIGs) are member-driven communities
              designed to bring together individuals with shared passions and
              niche interests. Explore specific topics, collaborate on projects,
              and learn from peers in a focused environment.
            </p>
          </div>

          {/* What are SIGs? Section (Keep as is) */}
          <div className="mb-12 md:mb-16 bg-gray-50 p-8 rounded-xl shadow-md">
            {/* ... content ... */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-6">
              What is a Special Interest Group?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed text-lg">
              <p>
                SIGs are small, focused communities within SEN where members can
                dive deep into specific subjects. They provide a platform for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>In-depth discussions and knowledge sharing.</li>
                <li>Collaborative projects and problem-solving.</li>
                <li>
                  Networking with experts and enthusiasts in a specific field.
                </li>
                <li>
                  Skill development through targeted activities and resources.
                </li>
                <li>
                  Staying updated with the latest trends and research in a niche
                  area.
                </li>
              </ul>
            </div>
          </div>

          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading SIGs...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">
                Could not load SIGs: {error}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please ensure the backend server is running and the database is
                seeded. Try refreshing the page.
              </p>
            </div>
          )}

          {!isLoading && !error && sigs.length > 0 && (
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
                Explore Our Current SIGs
              </h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {sigs.map(
                  (
                    sig, // Use fetched 'sigs' state
                  ) => (
                    <div
                      key={sig.id} // 'id' is mapped from sigKey or _id
                      className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {sig.icon && (
                          <span className="text-3xl mr-4">
                            {typeof sig.icon === 'string' ? sig.icon : sig.icon}
                          </span>
                        )}
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900">
                          {sig.name}
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                        {sig.description}
                      </p>
                      <div className="mb-3">
                        <strong className="text-sm text-gray-600">
                          Focus Areas:
                        </strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {sig.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      {sig.coordinator && (
                        <p className="text-sm text-gray-600 mb-4">
                          <strong>Coordinator:</strong> {sig.coordinator}
                        </p>
                      )}
                      {sig.joinLink && (
                        <a
                          href={sig.joinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md text-sm text-center transition-colors duration-300"
                        >
                          Join This SIG
                        </a>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {!isLoading && !error && sigs.length === 0 && (
            <p className="text-center text-lg text-gray-500 py-10">
              No SIGs available at the moment. Why not propose one?
            </p>
          )}

          {/* How to Join or Propose a SIG (Keep as is) */}
          <div className="pt-10 border-t border-gray-200 text-center">
            {/* ... content ... */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Get Involved!
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Join an Existing SIG
                </h4>
                <p className="text-gray-700 mb-4">
                  Browse our list of current SIGs and find one that matches your
                  interests. Click the "Join" button on a SIG card (if
                  available) or look for joining instructions on their dedicated
                  page/channel.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Propose a New SIG
                </h4>
                <p className="text-gray-700 mb-4">
                  Have an idea for a new Special Interest Group? We encourage
                  members to initiate and lead new SIGs. If you're passionate
                  about a niche topic and want to build a community around it,
                  we'd love to hear from you!
                </p>
                <Link
                  to="/contacts?subject=SIGProposal"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-md text-sm transition-colors duration-300"
                >
                  Propose a SIG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SigsPage
