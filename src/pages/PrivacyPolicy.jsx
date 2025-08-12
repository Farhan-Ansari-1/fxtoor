import React from 'react';
import BrandName from '../components/BrandName.jsx';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-6">Effective Date: December 2, 2023</p>

      <p className="mb-4">
        At <BrandName />, we respect your privacy. We do not collect personal information unless you voluntarily provide it (e.g., via our contact form).
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Information We Collect</h2>
          <p>We may collect non-personal data like browser type, device, and IP for analytics purposes.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Cookies</h2>
          <p>We may use cookies to improve user experience. You can disable cookies in your browser settings.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Third-party Links</h2>
          <p>Our site contains links to other websites. We are not responsible for their privacy practices.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Advertising</h2>
          <p>Third-party vendors like Google may use cookies to serve ads based on your interests.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Changes</h2>
          <p>We may update this policy anytime.</p>
        </div>
      </div>
      <p className="mt-8 text-center">
        If you have any questions, contact us at <a href="mailto:farx.root.01@gmail.com" className="text-blue-500 hover:underline">farx.root.01@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;