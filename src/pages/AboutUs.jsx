import React from 'react';
import { Link } from 'react-router-dom';
import BrandName from '../components/BrandName.jsx';

const AboutUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">About <BrandName /></h1>
      
      <p className="text-lg mb-6 text-center">
        <BrandName /> is a free online directory that helps you discover the best AI tools and Cybersecurity tools in one place.
        Our goal is to make it easy for developers, students, and tech enthusiasts to explore useful tools without wasting time searching.
      </p>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">We believe in:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-center mx-auto max-w-md">
          <li>Easy access to technology</li>
          <li>Reliable and updated information</li>
          <li>Free resources for everyone</li>
        </ul>
      </div>

      <p className="text-lg mt-8 text-center">
        Whether you are into AI, coding, or cybersecurity — <BrandName /> has you covered.
      </p>
      
      <p className="text-center mt-6">
        Have questions or want to suggest a tool? Feel free to <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link>.
      </p>
    </div>
  );
};

export default AboutUs;