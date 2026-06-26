import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/', // 👈 This tells Vite where to link your main index.js and styling assets!
})
