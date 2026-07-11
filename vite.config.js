import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/',
  build: {
    // Explicitly configure both configurations so Vite 8 cannot fail the build
    rolldownOptions: {
      external: ['react-player', 'react-player/youtube']
    },
    rollupOptions: {
      external: ['react-player', 'react-player/youtube']
    }
  }
})