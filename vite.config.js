import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/fxtoor/', // dev me '/' aur prod me repo name
    server: {
      port: command === 'serve' ? 5173 : undefined, // sirf dev me port set hoga
    },
  };
});
