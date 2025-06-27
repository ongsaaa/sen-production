// src/pages/AddOpportunityPage.tsx
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
  industry: string; // Stores the single selected industry
  description: string;
  imageUrl: string;
  link: string;
  status: string;
  opening: string;
  deadline: string;
  organization: string;
  // post_date is removed from form state, will be generated on submit
}

const AddOpportunityPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    type: allowedTypes[0],
    name: '',
    industry: industryOptions[0], // Default to the first industry option
    description: '',
    imageUrl: '',
    link: '',
    status: allowedStatus[0],
    opening: '',
    deadline: '',
    organization: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formatDateForPayload = (date: Date): string => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setErrorMessage(null);

    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (formData.opening && !dateRegex.test(formData.opening)) {
      setErrorMessage('Invalid Opening Date format. Please use DD-MM-YYYY or leave empty.');
      setIsSubmitting(false);
      return;
    }
    if (formData.deadline && !dateRegex.test(formData.deadline)) {
      setErrorMessage('Invalid Deadline format. Please use DD-MM-YYYY or leave empty.');
      setIsSubmitting(false);
      return;
    }

    const currentPostDate = formatDateForPayload(new Date());

    const payload = {
      ...formData,
      industry: formData.industry ? [formData.industry] : [], // Send as an array
      post_date: currentPostDate, // Add current date as post_date
    };

    try {
      const response = await fetch(`${apiUrl}/api/createitem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMsg = typeof result.error === 'string' ? result.error : (result.message || 'An unknown error occurred');
        const errorDetails = typeof result.details === 'object' ? JSON.stringify(result.details) : result.details;
        throw new Error(`${errorMsg}${errorDetails ? ` (${errorDetails})` : ''}`);
      }

      setSubmitMessage('Opportunity created successfully!');
      setFormData({ // Reset form
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
      });
    } catch (error) {
      const err = error as Error;
      console.error('Failed to create opportunity:', err);
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass = "block w-full border rounded-md shadow-sm sm:text-sm transition-colors duration-150 ease-in-out";
  const inputPaddingClass = "px-3 py-2.5";
  const inputBorderClass = "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500";
  const placeholderClass = "placeholder-gray-400";

  const inputClass = `${inputBaseClass} ${inputPaddingClass} ${inputBorderClass} ${placeholderClass}`;
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl rounded-xl p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
            Add New Opportunity
          </h1>

          {submitMessage && <div className="mb-5 p-4 rounded-md bg-green-50 border border-green-300 text-green-700 text-sm">{submitMessage}</div>}
          {errorMessage && <div className="mb-5 p-4 rounded-md bg-red-50 border border-red-300 text-red-700 text-sm">{errorMessage}</div>}

          <form onSubmit={handleSubmit} className="space-y-5"> {/* Reduced space-y */}
            <div>
              <label htmlFor="name" className={labelClass}>Opportunity Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label htmlFor="type" className={labelClass}>Type *</label>
              <select name="type" id="type" value={formData.type} onChange={handleChange} required className={inputClass}>
                {allowedTypes.map(type => <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="description" className={labelClass}>Description *</label>
              <textarea name="description" id="description" rows={3} value={formData.description} onChange={handleChange} required className={inputClass}></textarea> {/* Reduced rows */}
            </div>

            <div>
              <label htmlFor="industry" className={labelClass}>Industry *</label>
              <select name="industry" id="industry" value={formData.industry} onChange={handleChange} required className={inputClass}>
                {industryOptions.map(industry => <option key={industry} value={industry}>{industry}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="organization" className={labelClass}>Organization / Host</label>
              <input type="text" name="organization" id="organization" value={formData.organization} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label htmlFor="imageUrl" className={labelClass}>Image URL</label>
              <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className={inputClass} placeholder="https://example.com/image.png"/>
            </div>

            <div>
              <label htmlFor="link" className={labelClass}>Link to Opportunity Details</label>
              <input type="url" name="link" id="link" value={formData.link} onChange={handleChange} className={inputClass} placeholder="https://apply.example.com"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"> {/* Reduced gap-y */}
              <div>
                <label htmlFor="status" className={labelClass}>Status *</label>
                <select name="status" id="status" value={formData.status} onChange={handleChange} required className={inputClass}>
                  {allowedStatus.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                </select>
              </div>
               {/* Post Date field is removed from UI */}
               <div>
                <label htmlFor="opening" className={labelClass}>Opening Date (DD-MM-YYYY)</label>
                <input type="text" name="opening" id="opening" value={formData.opening} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">  {/* This grid now only contains deadline or can be merged */}
              <div>
                <label htmlFor="deadline" className={labelClass}>Application Deadline (DD-MM-YYYY)</label>
                <input type="text" name="deadline" id="deadline" value={formData.deadline} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" />
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 transition-opacity">
                {isSubmitting ? 'Submitting...' : 'Create Opportunity'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOpportunityPage;