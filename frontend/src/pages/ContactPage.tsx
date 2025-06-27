// src/pages/ContactPage.tsx
import React, { useState } from 'react';
// Optional: Icons for contact details
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  // State for form inputs (basic example)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    // Here you would typically send the formData to a backend API or email service
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form (optional)
    // setFormData({ name: '', email: '', subject: '', message: '' });
    // You might want to clear the form after a delay or keep the data
  };

  // Choose a highlight color for "Us" in "Contact Us"
  const highlightColorForUs = 'text-violet-400'; // Example: Violet

  return (
    <div className="font-sans"> {/* Font applied to the whole page */}

      {/* Section 1: "Contact Us" Hero (Dark Background) */}
      <section
        className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6"
      >
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className="text-gray-100">Contact</span>
            <span className={`ml-2 sm:ml-3 ${highlightColorForUs} italic`}>
              Us
            </span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? We're here to help. Reach out and let's connect!
          </p>
        </div>
      </section>

      {/* Section 2: Contact Information & Form (White Background) */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have a question, a partnership inquiry, or just want to say hello, feel free to reach out through any of the methods below or use our contact form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left Column: Contact Details & Map (Optional) */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="flex items-center">
                    {/* <FaMapMarkerAlt className="mr-3 text-purple-600 h-5 w-5" /> */}
                    <span className="font-semibold mr-2">Address:</span> 123 Innovation Drive, Tech City, TC 54321 {/* Replace */}
                  </p>
                  <p className="flex items-center">
                    {/* <FaPhone className="mr-3 text-purple-600 h-5 w-5 transform scale-x-[-1]" /> */}
                    <span className="font-semibold mr-2">Phone:</span> <a href="tel:+1234567890" className="hover:text-purple-600">+1 (234) 567-890</a> {/* Replace */}
                  </p>
                  <p className="flex items-center">
                    {/* <FaEnvelope className="mr-3 text-purple-600 h-5 w-5" /> */}
                    <span className="font-semibold mr-2">Email:</span> <a href="mailto:info@example.com" className="hover:text-purple-600">info@example.com</a> {/* Replace */}
                  </p>
                </div>
              </div>

              {/* Optional: Embedded Map */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h3>
                {/* Replace with your Google Maps embed code or a static image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322814!2d106.81956131476995!3d-6.194741395511977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43519138e51%3A0x73196801c6d8f7d1!2sNational%20Monument%20(Monas)!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" // REPLACE THIS EXAMPLE URL
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative" role="alert">
                  <strong className="font-bold">Thank you!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
                  </div>
                  <div>
                    <button type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;