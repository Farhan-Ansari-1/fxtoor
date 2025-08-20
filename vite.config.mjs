import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const base = '/fxtoor';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://Farhan-Ansari-1.github.io',
        basePath: base,
        readable: true,
        robots: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
        // XML ko simple banane ke liye
        lastmod: false,
        changefreq: false,
        priority: 0.7,
        xmlns: {
          news: false,
          xhtml: false,
          image: false,
          video: false,
        }
      }),
    ],
    base: command === 'serve' ? '/' : `${base}/`, // dev me '/' aur prod me repo name
    server: {
      port: command === 'serve' ? 5173 : undefined, // sirf dev me port set hoga
    },
  };
});
