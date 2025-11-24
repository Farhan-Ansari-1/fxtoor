import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BrandName from '../components/BrandName.jsx';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}posts.json`); // public folder se fetch karein
        const data = await response.json();
        // Posts ko date ke hisaab se sort karein (naya sabse upar)
        const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Blog - fxtoor</title>
        <meta name="description" content="Read the latest articles and updates from the fxtoor blog." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Blog <BrandName /> </h1>
      <div className="space-y-6">
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/blog/${post.slug}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Read More &rarr;
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}