import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const base = '/fxtoor/';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://Farhan-Ansari-1.github.io',
        basePath: base,
        readable: true, // XML ko padhne me aasan banata hai
        lastmod: null, // Future date ki problem ko fix karne ke liye
        dynamicRoutes: [
          '/about',
          '/contact',
          '/privacy',
          '/terms'
        ],
        // robots.txt bhi yahin se generate karein
        robots: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      }),
    ],
    base: command === 'serve' ? '/' : base, // dev me '/' aur prod me repo name
    server: {
      port: command === 'serve' ? 5173 : undefined, // sirf dev me port set hoga
    },
  };
});
