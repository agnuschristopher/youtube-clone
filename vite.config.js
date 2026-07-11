import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/',
  build: {
    rolldownOptions: {
      // This tells Vite's bundler to skip checking react-player, fixing the crash
      external: ['react-player', 'react-player/youtube']
    }
  }
})