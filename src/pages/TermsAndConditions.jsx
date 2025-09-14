import React from 'react';
import { Link } from 'react-router-dom';
import BrandName from '../components/BrandName.jsx';

const TermsAndConditions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8 text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Terms & Conditions</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Effective Date: August 1, 2025</p>

      <p className="mb-6">
        Welcome to <BrandName />. By using our website, you agree to the following terms:
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Purpose</h2>
          <p><BrandName /> is a tool directory for educational and informational purposes only.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Accuracy</h2>
          <p>We aim to provide accurate tool details, but we do not guarantee 100% correctness.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">External Links</h2>
          <p>Our site contains links to third-party websites. We are not responsible for their content, policies, or practices.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">No Liability</h2>
          <p>We are not liable for any damage, loss, or issue caused by using tools listed on our site.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">User Responsibility</h2>
          <p>Users are responsible for verifying the safety and legality of tools before use.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Changes to Terms</h2>
          <p>We may update these terms anytime without prior notice.</p>
        </div>
      </div>

      <p className="mt-8 text-center font-semibold">
        If you do not agree with these terms, please stop using our website.
      </p>

      <p className="mt-8 text-center">
        For questions, contact us at:
        <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline"> Contact Us</Link>.
      </p>
    </div>
  );
};

export default TermsAndConditions;