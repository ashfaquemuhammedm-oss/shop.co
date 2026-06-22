import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, 'casual.html'),
        third: resolve(__dirname, 'cart.html'),
        fourth: resolve(__dirname, 'product.html'),
      },
    },
  },
})