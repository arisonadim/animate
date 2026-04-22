import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'Assets': resolve(__dirname, 'src/assets'),
      'Images': resolve(__dirname, 'src/assets/images'),
      'Scss': resolve(__dirname, 'src/scss'),
    },
  },
})
