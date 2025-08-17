import React from 'react';
import BrandName from '../Components/BrandName';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About <BrandName /></h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          fxtoor is a curated directory of the best tools and resources for developers, designers, and creators. Our mission is to help you discover the tools you need to build amazing things.
        </p>
      </div>
    </div>
  );
}
