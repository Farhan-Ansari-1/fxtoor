import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from '../blog/posts.json';
import BrandName from '../components/BrandName.jsx';

export default function Blog() {
  // Posts ko date ke hisaab se sort karein (naya sabse upar)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Blog - fxtoor</title>
        <meta name="description" content="Read the latest articles and updates from the fxtoor blog." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Blog <BrandName /> </h1>
      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2">
              <Link to={`/blog/${post.slug}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}