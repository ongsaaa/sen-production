import React, { useState, useEffect } from 'react'

interface Partner {
  id: string
  name: string
  logoUrl: string
  websiteUrl?: string
}

const TrustedBySection: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchPartners = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${apiUrl}/api/partners`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: Partner[] = await response.json()
        setPartners(data)
      } catch (err) {
        const e = err as Error
        setError(e.message || 'Failed to fetch partners.')
        console.error('Error fetching partners:', e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPartners()
  }, [apiUrl])

  if (isLoading || error || partners.length === 0) {
    return null
  }

  // This sub-component renders a single set of logos
  const LogoSet = () => (
    <div className="flex-shrink-0 flex items-center justify-around w-max space-x-16">
      {partners.map((partner) => (
        <a
          key={partner.id}
          href={partner.websiteUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          title={partner.name}
          className="flex-shrink-0"
        >
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className="max-h-8 w-auto object-contain"
          />
        </a>
      ))}
    </div>
  )

  return (
    <div className="bg-transparent w-full py-12">
      <div className="container mx-auto">
        {/* <div className="text-center mb-8">
          <span className="text-sm font-light tracking-widest text-gray-400 uppercase">
            TRUSTED BY 100+ OF THE LARGEST COMPANIES
          </span>
        </div> */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-carousel">
            <LogoSet />
            <div className="w-16 flex-shrink-0"></div>
            <LogoSet />
            <div className="w-16 flex-shrink-0"></div>
            <LogoSet />
            <div className="w-16 flex-shrink-0"></div>
            <LogoSet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection
