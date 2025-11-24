import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import posts from './src/blog/posts.json';

const base = '/fxtoor';

// Blog posts ke liye dynamic routes banayein
const dynamicRoutes = posts.map(post => `/blog/${post.slug}`);

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://Farhan-Ansari-1.github.io', // Aapki site ka base URL
        readable: true,
        dynamicRoutes: dynamicRoutes, // Blog posts ko sitemap mein add karein
        robots: [
          {
            userAgent: '*',
            allow: '/',
            // Sitemap URL plugin khud add kar dega
          },
        ],
      }),
    ],
    base: `${base}/`, // Project ka base path
    server: {
      port: 5173,
    },
  };
});
