// ongsaaa/sen/ongsaaa-sen-4e4cea7668c1db19ffeb9a5559c07323af263c80/frontend/src/pages/PartnersPage.tsx
import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

interface Partner {
  id: string
  _id?: string
  name: string
  logoUrl: string
  websiteUrl?: string
  description?: string
  partnerType: string
}

const groupPartnersByType = (
  partners: Partner[],
): { [key: string]: Partner[] } => {
  return partners.reduce(
    (acc, partner) => {
      const type = partner.partnerType || 'Other Partners'
      ;(acc[type] = acc[type] || []).push(partner)
      return acc
    },
    {} as { [key: string]: Partner[] },
  )
}

const PartnersPage: React.FC = () => {
  const highlightColorForPartners = 'text-emerald-400'

  const [partners, setPartners] = useState<Partner[]>([])
  const [groupedPartners, setGroupedPartners] = useState<{
    [key: string]: Partner[]
  }>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPartners = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`${apiUrl}/api/partners`)
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`,
          )
        }
        const data: Partner[] = await response.json()
        setPartners(data)
        setGroupedPartners(groupPartnersByType(data))
      } catch (err) {
        const e = err as Error
        setError(e.message || 'Failed to fetch partners.')
        console.error('Error fetching partners:', e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPartners()
  }, [])

  return (
    <div className="font-['Inter',_sans-serif]">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Our</span>
            <span
              className={`ml-2 sm:ml-3 ${highlightColorForPartners} italic`}
            >
              Partners
            </span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Building a stronger future for students through powerful
            collaborations and shared visions.
          </p>
        </div>
      </section>

      {/* Section 2: Content Area */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-5xl">
          {/* Partner Logos Section */}
          {isLoading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Loading partners...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-10 px-4">
              <p className="text-lg text-red-600">
                Could not load partners: {error}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please ensure the backend server is running and the database is
                seeded. Try refreshing the page.
              </p>
            </div>
          )}

          {!isLoading && !error && Object.keys(groupedPartners).length > 0 && (
            <>
              {/* ADDED: Main Title for Partners Section */}
              <div className="mb-10 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center tracking-tight">
                  Meet Our Valued Partners
                </h2>
                <p className="mt-3 text-lg text-gray-600 text-center max-w-2xl mx-auto">
                  We are proud to collaborate with a diverse group of
                  organizations and individuals who share our commitment to
                  student empowerment.
                </p>
              </div>

              {Object.entries(groupedPartners).map(
                ([type, partnerList], index) => (
                  <div
                    key={type}
                    className={`py-8 ${index > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-10">
                      {type} {/* Displaying partner type as section title */}
                    </h3>
                    {partnerList.length > 0 ? (
                      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
                        {partnerList.map((partner) => (
                          <a
                            key={partner.id}
                            href={partner.websiteUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={
                              partner.name +
                              (partner.description
                                ? ` - ${partner.description}`
                                : '')
                            }
                            className="grayscale hover:grayscale-0 transition-all duration-300 flex flex-col items-center text-center group"
                          >
                            <img
                              src={partner.logoUrl}
                              alt={`${partner.name} Logo`}
                              className="h-16 md:h-20 object-contain mb-2"
                            />
                            <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">
                              {partner.name}
                            </p>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-500">
                        No partners currently listed in this category.
                      </p>
                    )}
                  </div>
                ),
              )}
            </>
          )}

          {!isLoading &&
            !error &&
            Object.keys(groupedPartners).length === 0 && (
              <p className="text-center text-lg text-gray-500 py-10">
                We are actively seeking partners to join our mission!
              </p>
            )}

          {/* Separator Line */}
          {/* Only show separator if there was partner content OR if there was no error and no partners (to separate from the CTA below) */}
          {!isLoading && <hr className="my-12 md:my-16 border-gray-300" />}

          {/* "Collaborate With Us & Amplify Impact" Intro Text */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Collaborate With Us & Amplify Impact
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              At SEN, we believe in the power of collaboration. Partnering with
              us means joining a mission-driven network dedicated to fostering
              innovation, empowering communities, and driving change.
            </p>
          </div>

          {/* Why Partner With Us Section */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              Why Partner With Us?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-600 mb-2">
                  Reach & Visibility
                </h4>
                <p className="text-gray-700">
                  Connect with our engaged audience of students and enhance your
                  brand's presence.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-teal-500 mb-2">
                  Shared Impact
                </h4>
                <p className="text-gray-700">
                  Align your organization with meaningful initiatives and
                  contribute to student empowerment.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-amber-500 mb-2">
                  Custom Collaborations
                </h4>
                <p className="text-gray-700">
                  We offer flexible partnership models, from event sponsorships
                  to co-created programs and content.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action for Partnership */}
          <div className="text-center pt-8 border-t border-gray-200 mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Interested in Partnering?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              We're always looking for organizations that share our vision and
              values. Let's explore how we can achieve great things together.
            </p>
            <Link
              to="/contacts?subject=PartnershipInquiry"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300 inline-block"
            >
              Get In Touch To Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
