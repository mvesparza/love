import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> rutas relativas, funciona en GitHub Pages sin importar el nombre del repo
export default defineConfig({
  plugins: [react()],
  base: './',
})
