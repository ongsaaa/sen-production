import React, { useState } from 'react';

const allowedTypes = ['workshops', 'lectures', 'skill development', 'shadowing', "internships", "externships", "competitions", "networking", "community projects"];
const allowedStatus = ['open', 'closed'];
const industryOptions = [
  "General", "Business", "Law", "Agriculture", "Technology", "Healthcare",
  "Education", "Engineering", "Arts & Media", "Science", "Finance",
  "Hospitality", "Manufacturing", "Social Impact", "Other"
];
const apiUrl = import.meta.env.VITE_API_URL;

interface FormData {
  type: string;
  name: string;
  industry: string;
  description: string;
  imageUrl: string;
  link: string;
  status: string;
  opening: string;
  deadline: string;
  organization: string;
  ageRestriction: string;
  location: string;
  schedule: string;
  fee: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  type: allowedTypes[0],
  name: '',
  industry: industryOptions[0],
  description: '',
  imageUrl: '',
  link: '',
  status: allowedStatus[0],
  opening: '',
  deadline: '',
  organization: '',
  ageRestriction: '',
  location: '',
  schedule: '',
  fee: '',
  additionalInfo: '',
};

const WebscrapePage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isScraping, setIsScraping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [scrapedData, setScrapedData] = useState<Partial<FormData> | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleScrape = async () => {
    if (!url) {
      setErrorMessage('Please enter a URL to scrape.');
      return;
    }
    setIsScraping(true);
    setErrorMessage(null);
    setScrapedData(null);
    try {
      const response = await fetch(`${apiUrl}/api/webscrape`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to scrape URL');
      }
      setScrapedData(result);
      setFormData(prev => ({...initialFormData, ...result}));
    } catch (error) {
      const err = error as Error;
      setErrorMessage(err.message || 'An unexpected error occurred during scraping.');
    } finally {
      setIsScraping(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to submit this opportunity?")) return;

    setIsSubmitting(true);
    setSubmitMessage(null);
    setErrorMessage(null);

    const dateRegex = /^(\d{2}-\d{2}-\d{4})?$/;
    if ((formData.opening && !dateRegex.test(formData.opening)) || (formData.deadline && !dateRegex.test(formData.deadline))) {
        setErrorMessage('Invalid Date format. Please use DD-MM-YYYY or leave empty.');
        setIsSubmitting(false);
        return;
    }

    const currentPostDate = ((d) => `${('0' + d.getDate()).slice(-2)}-${('0' + (d.getMonth() + 1)).slice(-2)}-${d.getFullYear()}`)(new Date());

    const payload = {
      ...formData,
      industry: formData.industry ? [formData.industry] : [],
      post_date: currentPostDate,
    };

    try {
      const response = await fetch(`${apiUrl}/api/createitem`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || 'An unknown error occurred');
      }

      setSubmitMessage('Opportunity created successfully! Redirecting...');
      setTimeout(() => {
        window.location.href = '/opportunities';
      }, 2000);

    } catch (error) {
      const err = error as Error;
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors duration-150 ease-in-out bg-gray-50 p-3";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Scrape Opportunity from URL</h1>
        
        <div className="flex gap-2 mb-6">
            <input 
                type="url" 
                value={url} 
                onChange={handleUrlChange} 
                className={inputClass} 
                placeholder="https://example.com/opportunity"
            />
            <button onClick={handleScrape} disabled={isScraping} className="w-auto flex justify-center py-2.5 px-8 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50">
                {isScraping ? 'Scraping...' : 'Scrape'}
            </button>
        </div>

        {errorMessage && <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm">{errorMessage}</div>}
        {submitMessage && <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-300 text-green-800 text-sm">{submitMessage}</div>}

        {scrapedData && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label htmlFor="name" className={labelClass}>Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} /></div>
                <div><label htmlFor="organization" className={labelClass}>Organization</label><input type="text" name="organization" value={formData.organization} onChange={handleChange} className={inputClass} /></div>
                <div className="md:col-span-2"><label htmlFor="description" className={labelClass}>Description *</label><textarea name="description" rows={5} value={formData.description} onChange={handleChange} className={inputClass}></textarea></div>
                <div><label htmlFor="type" className={labelClass}>Type *</label><select name="type" value={formData.type} onChange={handleChange} className={inputClass}>{allowedTypes.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}</select></div>
                <div><label htmlFor="industry" className={labelClass}>Industry *</label><select name="industry" value={formData.industry} onChange={handleChange} className={inputClass}>{industryOptions.map(i => <option key={i} value={i}>{i}</option>)}</select></div>
                <div><label htmlFor="opening" className={labelClass}>Opening Date</label><input type="text" name="opening" value={formData.opening} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" /></div>
                <div><label htmlFor="deadline" className={labelClass}>Deadline</label><input type="text" name="deadline" value={formData.deadline} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" /></div>
                <div><label htmlFor="location" className={labelClass}>Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} className={inputClass} /></div>
                <div><label htmlFor="ageRestriction" className={labelClass}>Age Restriction</label><input type="text" name="ageRestriction" value={formData.ageRestriction} onChange={handleChange} className={inputClass} /></div>
                <div className="md:col-span-2"><label htmlFor="schedule" className={labelClass}>Schedule</label><input type="text" name="schedule" value={formData.schedule} onChange={handleChange} className={inputClass} /></div>
                <div><label htmlFor="fee" className={labelClass}>Fee</label><input type="text" name="fee" value={formData.fee} onChange={handleChange} className={inputClass} /></div>
                <div><label htmlFor="status" className={labelClass}>Status *</label><select name="status" value={formData.status} onChange={handleChange} className={inputClass}>{allowedStatus.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}</select></div>
                <div className="md:col-span-2"><label htmlFor="link" className={labelClass}>Link</label><input type="url" name="link" value={formData.link} onChange={handleChange} className={inputClass} /></div>
                <div className="md:col-span-2"><label htmlFor="imageUrl" className={labelClass}>Image URL</label><input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className={inputClass} /></div>
                <div className="md:col-span-2"><label htmlFor="additionalInfo" className={labelClass}>Additional Info</label><textarea name="additionalInfo" rows={3} value={formData.additionalInfo} onChange={handleChange} className={inputClass}></textarea></div>
            </div>
            <div className="pt-6 border-t flex justify-end">
              <button type="submit" disabled={isSubmitting} className="w-auto flex justify-center py-2.5 px-8 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50">
                {isSubmitting ? 'Submitting...' : 'Add Opportunity'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WebscrapePage;