import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RTripss/', // <-- This line is critical for GitHub Pages subdirectory!
})