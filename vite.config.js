import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = dir => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '/@': resolve('src'),
      '/cpn': resolve('src/components'),
      '/utils': resolve('src/utils')
    }
  },

  server: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
