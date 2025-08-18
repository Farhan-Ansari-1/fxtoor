import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20 container mx-auto">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 mb-6 text-gray-700 dark:text-gray-300">Page Not Found</p>
      <p className="text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">Go to Homepage</Link>
    </div>
  );
}