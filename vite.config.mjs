import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://Farhan-Ansari-1.github.io/fxtoor',
        // Yeh plugin aapke saare pages ko automatically dhoondh lega
      }),
    ],
    base: command === 'serve' ? '/' : '/fxtoor/', // dev me '/' aur prod me repo name
    server: {
      port: command === 'serve' ? 5173 : undefined, // sirf dev me port set hoga
    },
  };
});
