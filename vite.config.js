import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/Landing-page/",        // Base path for deployment
  plugins: [react(),tailwindcss()],
})