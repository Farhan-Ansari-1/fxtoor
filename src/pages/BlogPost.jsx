import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      // Reset state before fetching new post
      setLoading(true);
      setError(false);
      setPost(null);
      setContent('');

      try {
        const postsResponse = await fetch(`${import.meta.env.BASE_URL}posts.json`);
        const posts = await postsResponse.json();
        const currentPost = posts.find((p) => p.slug === slug);

        if (currentPost) {
          setPost(currentPost);
          // Markdown file ko fetch karein
          const contentResponse = await fetch(`${import.meta.env.BASE_URL}posts/${currentPost.slug}.md`);
          if (!contentResponse.ok) {
            // Agar .md file nahi milti hai to error throw karein
            throw new Error(`Markdown file not found: ${contentResponse.statusText}`);
          }
          const textContent = await contentResponse.text();
          setContent(textContent);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{post.title} - fxtoor Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{new Date(post.date).toLocaleDateString()}</p>
      <div className="prose dark:prose-invert max-w-none markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <Link to="/blog" className="text-blue-600 hover:underline mt-6 inline-block">
        ← Back to Blog
      </Link>
    </div>
  );
}
