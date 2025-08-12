import React from 'react';
import BrandName from '../components/BrandName.jsx';

const TermsAndConditions = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>
      <p className="text-center text-gray-600 mb-6">Effective Date: December 2, 2023</p>

      <p className="mb-6">
        Welcome to <BrandName />. By using our website, you agree to the following terms:
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Purpose</h2>
          <p><BrandName /> is a tool directory for educational and informational purposes only.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Accuracy</h2>
          <p>We aim to provide accurate tool details, but we do not guarantee 100% correctness.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">External Links</h2>
          <p>Our site contains links to third-party websites. We are not responsible for their content, policies, or practices.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">No Liability</h2>
          <p>We are not liable for any damage, loss, or issue caused by using tools listed on our site.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">User Responsibility</h2>
          <p>Users are responsible for verifying the safety and legality of tools before use.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mt-6 mb-2">Changes to Terms</h2>
          <p>We may update these terms anytime without prior notice.</p>
        </div>
      </div>

      <p className="mt-8 text-center font-semibold">
        If you do not agree with these terms, please stop using our website.
      </p>

      <p className="mt-8 text-center">
        For questions, contact us at <a href="mailto:farx.root.01@gmail.com" className="text-blue-500 hover:underline">farx.root.01@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;