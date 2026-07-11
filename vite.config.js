import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/',
  build: {
    rollupOptions: {
      // Forcibly tells the bundler to ignore react-player imports during build
      external: ['react-player', 'react-player/youtube'],
    },
  },
})