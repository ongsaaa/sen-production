import React, { useState } from 'react';

// --- Constants and Types ---
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
};

// --- Main Component ---
const AddOpportunityPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.name.trim() || !formData.description.trim()) {
        setErrorMessage('Please fill in the Opportunity Name and Description.');
        return;
      }
    }
    setErrorMessage(null);
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    if (!window.confirm("Are you sure you want to submit this opportunity?")) return;

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

      setSubmitMessage('Opportunity created successfully! You will be redirected shortly.');
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

  // --- Styling Classes ---
  const inputClass = "block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors duration-150 ease-in-out bg-gray-50 p-3";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";
  const buttonClass = "w-auto flex justify-center py-2.5 px-8 border border-transparent rounded-lg shadow-md text-base font-medium text-white transition-all duration-300 ease-in-out";

  // --- Render Logic ---
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className={labelClass}>Opportunity Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="e.g., Summer Tech Internship" />
            </div>
            <div>
              <label htmlFor="type" className={labelClass}>Type *</label>
              <select name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                {allowedTypes.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="organization" className={labelClass}>Organization / Host</label>
              <input type="text" name="organization" value={formData.organization} onChange={handleChange} className={inputClass} placeholder="e.g., SEN Corporation" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className={labelClass}>Description *</label>
              <textarea name="description" rows={4} value={formData.description} onChange={handleChange} className={inputClass} placeholder="Describe the opportunity..."></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="status" className={labelClass}>Status *</label>
              <select name="status" value={formData.status} onChange={handleChange} className={inputClass}>
                {allowedStatus.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="industry" className={labelClass}>Industry *</label>
              <select name="industry" value={formData.industry} onChange={handleChange} className={inputClass}>
                {industryOptions.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="opening" className={labelClass}>Opening Date</label>
              <input type="text" name="opening" value={formData.opening} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" />
            </div>
            <div>
              <label htmlFor="deadline" className={labelClass}>Application Deadline</label>
              <input type="text" name="deadline" value={formData.deadline} onChange={handleChange} className={inputClass} placeholder="DD-MM-YYYY" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="link" className={labelClass}>Link to Opportunity</label>
              <input type="url" name="link" value={formData.link} onChange={handleChange} className={inputClass} placeholder="https://apply.example.com" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="imageUrl" className={labelClass}>Image URL</label>
              <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className={inputClass} placeholder="https://example.com/image.png" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 text-sm">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Review Your Submission</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-4 bg-gray-50 rounded-lg border">
              <div><dt className="font-bold text-gray-600">Name</dt><dd className="text-gray-800">{formData.name || 'N/A'}</dd></div>
              <div><dt className="font-bold text-gray-600">Type</dt><dd className="text-gray-800">{formData.type}</dd></div>
              <div><dt className="font-bold text-gray-600">Organization</dt><dd className="text-gray-800">{formData.organization || 'N/A'}</dd></div>
              <div><dt className="font-bold text-gray-600">Industry</dt><dd className="text-gray-800">{formData.industry}</dd></div>
              <div><dt className="font-bold text-gray-600">Status</dt><dd className="text-gray-800">{formData.status}</dd></div>
              <div><dt className="font-bold text-gray-600">Link</dt><dd className="text-gray-800 break-words">{formData.link || 'N/A'}</dd></div>
              <div><dt className="font-bold text-gray-600">Opening</dt><dd className="text-gray-800">{formData.opening || 'N/A'}</dd></div>
              <div><dt className="font-bold text-gray-600">Deadline</dt><dd className="text-gray-800">{formData.deadline || 'N/A'}</dd></div>
              <div className="md:col-span-2"><dt className="font-bold text-gray-600">Description</dt><dd className="text-gray-800 mt-1">{formData.description || 'N/A'}</dd></div>
            </dl>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 transition-all duration-500 ease-in-out">
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Add an Opportunity</h1>
            <p className="text-gray-500 mt-1">Step {step} of 3</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
              <div
                className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {submitMessage && <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-300 text-green-800 text-sm">{submitMessage}</div>}
          {errorMessage && <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm">{errorMessage}</div>}

          <div className="min-h-[350px] md:min-h-[320px]">
             {renderStepContent()}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrevStep}
              className={`${buttonClass} bg-gray-600 hover:bg-gray-700 disabled:opacity-0 disabled:pointer-events-none`}
              disabled={step === 1}
            >
              Back
            </button>
            
            {step < 3 && (
              <button
                type="button"
                onClick={handleNextStep}
                className={`${buttonClass} bg-indigo-600 hover:bg-indigo-700`}
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`${buttonClass} bg-green-600 hover:bg-green-700 disabled:opacity-50`}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm & Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOpportunityPage;