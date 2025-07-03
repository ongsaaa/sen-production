import { useState, useEffect } from 'react';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

export const usePartners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${apiUrl}/api/partners`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Partner[] = await response.json();
        setPartners(data);
      } catch (err) {
        const e = err as Error;
        setError(e.message || 'Failed to fetch partners.');
        console.error('Error fetching partners:', e);
        setPartners([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return { partners, isLoading, error };
};