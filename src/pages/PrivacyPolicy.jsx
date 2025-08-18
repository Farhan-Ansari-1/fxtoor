import React from 'react';
import { Link } from 'react-router-dom';
import BrandName from '../components/BrandName.jsx';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8 text-gray-700 dark:text-gray-300">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Privacy Policy</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Effective Date: August 1, 2025</p>

      <p className="mb-4">
        At <BrandName />, we respect your privacy. We do not collect personal information unless you voluntarily provide it (e.g., via our contact form).
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Information We Collect</h2>
          <p>We may collect non-personal data like browser type, device, and IP for analytics purposes.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Cookies</h2>
          <p>We may use cookies to improve user experience. You can disable cookies in your browser settings.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Third-party Links</h2>
          <p>Our site contains links to other websites. We are not responsible for their privacy practices.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Advertising</h2>
          <p>Third-party vendors like Google may use cookies to serve ads based on your interests.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Changes</h2>
          <p>We may update this policy anytime.</p>
        </div>
      </div>
      <p className="mt-8 text-center">
        If you have any questions, contact us at:
        <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline"> Contact Us</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;