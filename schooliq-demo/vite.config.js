import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'SchoolIQ',
        short_name: 'SchoolIQ',
        description: 'AI-Powered School Management Platform',
        theme_color: '#F5EDE3',
        background_color: '#F5EDE3',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/schooliq.jpeg',
            sizes: '192x192',
            type: 'image/jpeg'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg}']
      }
    })
  ]
});
