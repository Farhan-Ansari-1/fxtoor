import React from 'react';
import BrandName from '../components/BrandName';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About <BrandName /></h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4 text-left">
          <p>
            fXtooR is a free online directory that helps you discover the best AI tools and Cybersecurity tools in one place. Our goal is to make it easy for developers, students, and tech enthusiasts to explore useful tools without wasting time searching.
          </p>
          <p className="font-semibold">
            We believe in:
          </p>
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li>Easy access to technology</li>
            <li>Reliable and updated information</li>
            <li>Free resources for everyone</li>
          </ul>
          <p>
            Whether you are into AI, coding, or cybersecurity, fXtooR has you covered.
          </p>
          <p>
            Have questions or want to suggest a tool? Feel free to <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
