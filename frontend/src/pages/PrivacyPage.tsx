import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    // This outer div provides a background color for the whole page area.
    // In a real app, this might be handled by your main layout file (e.g., layout.tsx).
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
        
        {/* --- Disclaimer Box --- */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 mb-8 text-sm text-yellow-800">
          <p className="font-bold text-yellow-900">[IMPORTANT LEGAL DISCLAIMER]</p>
          <p className="mt-1">
            <strong className="text-red-700">This is a template, not legal advice.</strong> You MUST consult with a qualified lawyer to ensure this policy is complete, accurate, and legally compliant for your specific business before publishing it.
          </p>
        </div>

        {/* --- Main Content --- */}
        <div className="space-y-6 text-gray-700">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-500"><strong>Effective Date:</strong> 27 June 2025</p>
            <p className="text-sm text-gray-500"><strong>Last Updated:</strong> 27 June 2025</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">1. Introduction</h2>
            <p>
              Welcome to <strong className="font-bold text-red-700">{/* TODO: Change This */}[Enter Your Website or Company Name Here]</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="font-bold text-red-700">{/* TODO: Change This */}[Enter Your Website URL Here]</strong>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”).
            </p>
            <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this policy, please do not access the site.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <h3 className="text-lg font-semibold text-gray-800 pt-2">Personal Data You Provide to Us</h3>
            <p>We collect personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
            <h3 className="text-lg font-semibold text-gray-800 pt-2">Derivative Data</h3>
            <p>Our servers automatically collect information when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
            <h3 className="text-lg font-semibold text-gray-800 pt-2">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, or exchange from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, <strong className="font-bold text-red-700">{/* TODO: Change This */}[Enter Name of Payment Processor, e.g., Stripe, PayPal]</strong>, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 pt-2">Data From Social Networks</h3>
            <p>
              User information from social networking sites, such as <strong className="font-bold text-red-700">{/* TODO: Change This */}[List social networks your site connects to, e.g., Facebook, Google, Instagram]</strong>, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">3. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your payments and refunds.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Comply with legal and regulatory requirements.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and promotions to you.</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </div>

          <div className="space-y-4">
             <h2 className="text-2xl font-semibold text-gray-800 pt-4">5. Cookies and Tracking Technologies</h2>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">6. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">7. Your Privacy Rights</h2>
            <p>In accordance with applicable laws like Thailand's PDPA, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to be informed about the collection and use of your personal data.</li>
              <li>The right of access to your personal data.</li>
              <li>The right to rectification if any of your personal data is inaccurate or incomplete.</li>
              <li>The right to erasure ('to be forgotten') under certain circumstances.</li>
              <li>The right to restrict processing under certain circumstances.</li>
              <li>The right to data portability, allowing you to obtain and reuse your personal data for your own purposes across different services.</li>
              <li>The right to object to the processing of your personal data in certain circumstances.</li>
              <li>The right to withdraw consent at any time.</li>
            </ul>
            <p>To exercise these rights, please contact us using the contact information provided below.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">8. Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated “Last Updated” date and will be effective as soon as it is accessible. We encourage you to review this policy frequently to be informed of how we are protecting your information.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">10. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="not-italic">
              <strong className="block font-bold text-red-700">{/* TODO: Change This */}[Enter Your Company Name]</strong>
              <strong className="block font-bold text-red-700">{/* TODO: Change This */}[Enter Your Company Address]</strong>
              <strong className="block font-bold text-red-700">{/* TODO: Change This */}[Enter Your Contact Email Address]</strong>
              <strong className="block font-bold text-red-700">{/* TODO: Change This */}[Enter Your Contact Phone Number]</strong>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;