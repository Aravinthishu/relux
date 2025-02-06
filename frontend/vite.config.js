import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
  server: {
    proxy: {
      '/media': 'http://127.0.0.1:8000',  // Proxy for media files
    },
  },
})
