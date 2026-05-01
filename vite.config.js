import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/Sito-Web/',   // OBBLIGATORIO per GitHub Pages
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
