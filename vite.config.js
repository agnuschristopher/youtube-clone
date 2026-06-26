import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/', // 👈 Make sure the forward slashes are exactly like this!
})
