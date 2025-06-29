// frontend/src/pages/ProposeOpportunityPage.tsx
import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';

const ProposeOpportunityPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    organisation: '',
    description: '',
    link: '',
    type: 'internship', // Default value
    deadline: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('Opportunity Proposal Submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a few seconds
    setTimeout(() => {
      setFormData({
        title: '',
        organisation: '',
        description: '',
        link: '',
        type: 'internship',
        deadline: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#282c34] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-header tracking-tight">
          Propose an Opportunity
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Have an opportunity that would benefit the SEN community? Fill out the form below to propose it for our platform.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          {isSubmitted ? (
            <div className="text-center bg-green-100 text-green-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Thank You!</h2>
              <p className="mt-2">
                Your opportunity has been proposed. Our team will review it shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-xl space-y-6"
            >
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Opportunity Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="organisation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Organisation / Company
                </label>
                <input
                  type="text"
                  name="organisation"
                  id="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Application Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/apply"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Opportunity Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="internship">Internship</option>
                    <option value="scholarship">Scholarship</option>
                    <option value="competition">Competition</option>
                    <option value="event">Event</option>
                    <option value="job">Full-time Job</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Application Deadline (Optional)
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    id="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          )}
           <p className="mt-8 text-center text-gray-600">
            To see all current opportunities, visit our{' '}
            <Link to="/opportunities" className="text-indigo-600 hover:underline">
              Opportunities Board
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProposeOpportunityPage;