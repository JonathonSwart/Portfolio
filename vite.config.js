import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Add this to resolve case sensitivity
  server: {
    fs: {
      caseSensitive: true
    }
  }
})