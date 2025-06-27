// src/pages/FaqPage.tsx
import React, { useState } from 'react'
// Optional: Consider an icon for the expand/collapse toggle
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Interface for an FAQ item
interface FaqItem {
  id: string
  question: string
  answer: string | React.ReactNode // Answer can be simple text or include JSX
}

// Dummy FAQ data - REPLACE WITH YOUR ACTUAL FAQs
const faqData: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is SEN all about?',
    answer:
      'SEN is dedicated to you. We provide alot of things to help you achieve your dreams.',
  },
  {
    id: 'faq2',
    question: 'How can I become a member?',
    answer: (
      <>
        You can become a member by visiting our{' '}
        <a href="/become-a-member" className="text-purple-600 hover:underline">
          Membership Page
        </a>{' '}
        and following the simple registration steps. We offer various benefits
        like [mention a key benefit].
      </>
    ),
  },
  {
    id: 'faq3',
    question: 'Who is eligible to join or use your services?',
    answer:
      'Our platform and services are primarily aimed at [your target audience, e.g., young innovators aged 15-25, aspiring entrepreneurs, etc.]. However, we welcome anyone interested in [your field/mission] to explore our public resources.',
  },
  {
    id: 'faq4',
    question: 'Are there any fees associated with membership or services?',
    answer:
      'Details about membership fees (if any) and costs for specific services can be found on our [link to relevant page, e.g., Membership or Services page]. We strive to keep our core offerings accessible.',
  },
  {
    id: 'faq5',
    question: 'How can I get involved or partner with you?',
    answer: (
      <>
        We're always excited to collaborate! If you're interested in
        volunteering, mentoring, or forming a partnership, please visit our{' '}
        <a href="/partners" className="text-purple-600 hover:underline">
          Partners Page
        </a>{' '}
        or{' '}
        <a href="/contact" className="text-purple-600 hover:underline">
          Contact Us
        </a>{' '}
        directly.
      </>
    ),
  },
  // Add more FAQs
]

const FaqPage: React.FC = () => {
  // State to manage which FAQ item is open
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  // Choose a highlight color for "FAQ"
  const highlightColorForFaq = 'text-amber-400' // Example: Amber

  return (
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <span className={`italic ${highlightColorForFaq}`}>FAQ</span>
          </h1>
          {/* ADDED SUBTITLE */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your questions, answered. Find information about SEN, our services,
            and how you can get involved.
          </p>
        </div>
      </section>
      {/* Section 2: Questions and Answers (White Background) */}
      <section className="bg-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-3xl">
          {' '}
          {/* Max width for FAQ readability */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions? We've got answers! If you don't find what you're
              looking for, feel free to reach out to us.
            </p>
          </div>
          {/* FAQ List */}
          {faqData.length > 0 ? (
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left p-4 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    aria-expanded={openFaqId === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {/* Basic text-based toggle indicator, replace with icons if preferred */}
                    <span className="text-xl text-purple-600 transform transition-transform duration-200">
                      {openFaqId === faq.id ? '-' : '+'}
                      {/* Example with react-icons:
                       {openFaqId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                      */}
                    </span>
                  </button>
                  {openFaqId === faq.id && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="p-4 md:p-6 border-t border-gray-200 bg-gray-50"
                    >
                      <div className="text-gray-700 leading-relaxed faq-answer-content">
                        {typeof faq.answer === 'string' ? (
                          <p>{faq.answer}</p>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500">
              No FAQs available at the moment. Please check back soon!
            </p>
          )}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600">
              Can't find the answer you're looking for?
            </p>
            <a
              href="/contact" // REPLACE with your contact page path
              className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-colors duration-300"
            >
              Contact Our Support Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqPage