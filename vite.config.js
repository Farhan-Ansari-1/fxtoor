import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Woh sabhi requests jo '/api' se shuru hote hain, unhe backend server par bhej do
      '/api': {
        target: 'http://localhost:5000', // Yahan apne backend server ka address daalein
        changeOrigin: true,
      }
    }
  }
})