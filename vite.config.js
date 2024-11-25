// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/partner-plus-connect": {
//         target: "https://partnerplus.finchglowtravels.com",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
//       },"/_next": {
//         target: "https://partnerplus.finchglowtravels.com",
//         changeOrigin: true,
//         // rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
//       },"/images": {
//         target: "https://partnerplus.finchglowtravels.com",
//         changeOrigin: true,
//         // rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
//       }
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Use environment variables for the target URL
const API_URL = process.env.VITE_API_URL || "https://partnerplus.finchglowtravels.com";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/partner-plus-connect": {
        target: API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/partner-plus-connect/, '')
      },
      "/_next": {
        target: API_URL,
        changeOrigin: true,
      },
      "/images": {
        target: API_URL,
        changeOrigin: true,
      }
    }
  }
});
