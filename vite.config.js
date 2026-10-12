import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/. Set VITE_BASE to that
// path at build time (e.g. VITE_BASE=/resume_frontend/); a user site (<user>.github.io) uses '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
