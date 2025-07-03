// src/pages/FaqPage.tsx
import GlowingText from '@/components/GlowingText'
import React, { useState } from 'react'
// Optional: Consider an icon for the expand/collapse toggle
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Interface for an FAQ item
interface FaqItem {
  id: string
  question: string
  answer: string | React.ReactNode // Answer can be simple text or include JSX
}

const FaqItem: React.FC<{
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onClick: () => void
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 hover:text-purple-600 focus:outline-none transition-colors"
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
      >
        <div className="prose prose-purple max-w-none text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqPage: React.FC = () => {
  // State to manage which FAQ item is open
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  // Choose a highlight color for "FAQ"
  const highlightColorForFaq = 'text-amber-400' // Example: Amber

  const faqData: FaqItem[] = [
    {
      id: 'faq1',
      question: 'What is SEN?',
      answer: (
        <>
          <p className="lead">
            <strong>
              SEN: Stop searching, start discovering. Your central platform for
              student opportunities, finally in one place.
            </strong>
          </p>
          <p>
            SEN is a community-driven platform supporting English-speaking high
            school students in Thailand with a wealth of curated opportunities,
            practical academic resources, and resources to explore future
            directions to confidently navigate their journey.
          </p>
        </>
      ),
    },
    {
      id: 'faq2',
      question: 'Who is SEN for?',
      answer: (
        <p>
          SEN is for ambitious English-speaking high school students in Thailand
          who are tired of the endless, time-consuming hunt for ways to grow and
          succeed. We believe your energy is better spent on achieving, not just
          searching.
        </p>
      ),
    },
    {
      id: 'faq3',
      question: 'What kind of opportunities can I find?',
      answer: (
        <p>
          You can discover a comprehensive collection of the best opportunities
          – from local workshops to international internships – all made easy to
          find.
        </p>
      ),
    },
    {
      id: 'faq4',
      question: 'How does SEN help with university and career planning?',
      answer: (
        <p>
          We help you navigate your future with demystified career pathways and
          clear university option breakdowns, simplifying the process of
          planning your next steps after high school.
        </p>
      ),
    },
    {
      id: 'faq5',
      question: 'What academic resources do you offer?',
      answer: (
        <p>
          We simplify your academic journey with straightforward explanations of
          standardized tests and requirements. You can also access a curated
          library of proven tools, insightful tips, and effective tricks shared
          by successful graduated seniors.
        </p>
      ),
    },
    {
      id: 'faq6',
      question: 'Is SEN just a resource website?',
      answer: (
        <p>
          Beyond being a resource hub, SEN is a non-profit initiative dedicated
          to student empowerment. We foster a vibrant community where you can
          connect with like-minded peers who share your interests and drive,
          helping you build not just a resume, but an exceptional future.
        </p>
      ),
    },
    {
      id: 'faq7',
      question: 'How do I join the SEN community?',
      answer: (
        <p>
          Becoming a member is easy! You can sign up by visiting our membership
          page.We'd love to have you.
        </p>
      ),
    },
    {
      id: 'faq8',
      question: 'Is there a cost to become a member?',
      answer: (
        <p>
          SEN is a non-profit initiative committed to student empowerment. Our
          platform and the majority of our resources are completely free. While
          some special events or partnered programs may have an associated cost,
          our core mission is to provide accessible opportunities and resources
          to every student.
        </p>
      ),
    },
  ]

  return (
    <div className="font-sans">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white p-6">
        <div className="text-center">
          <h1
            className="font-header font-bold tracking-tight"
            style={{ fontSize: 'calc(15px + 3vmin)' }}
          >
            <GlowingText className={`italic ${highlightColorForFaq}`}>FAQ</GlowingText>
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
              href="/contacts" // REPLACE with your contact page path
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
