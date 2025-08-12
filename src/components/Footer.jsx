import React from 'react';
import { Link } from 'react-router-dom';
import BrandName from './BrandName.jsx';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-12 border-t">
      <div className="container mx-auto px-4 py-6 text-center">
        
        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 md:gap-x-6 mb-4 text-sm">
          <Link to="/about" className="hover:text-blue-500 hover:underline">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500 hover:underline">Contact Us</Link>
          <Link to="/privacy" className="hover:text-blue-500 hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-500 hover:underline">Terms & Conditions</Link>
        </div>

        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <BrandName />. All rights reserved. Made by <strong>farX</strong>.
        </p>
      </div>
    </footer>
  );
}
