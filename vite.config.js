import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/partner-plus-connect": {
        target: "https://partnerplus.finchglowtravels.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
      },"/_next": {
        target: "https://partnerplus.finchglowtravels.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
      },"/images": {
        target: "https://partnerplus.finchglowtravels.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
      }
    }
  }
});
