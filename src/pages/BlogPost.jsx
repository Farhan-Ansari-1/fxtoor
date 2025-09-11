import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../blog/posts.json';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <Link to="/blog" className="text-blue-600 hover:underline mt-6 inline-block">
        ← Back to Blog
      </Link>
    </div>
  );
}
