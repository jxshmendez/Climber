import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tailwindcss(),
      react()],

    server: {
      host: true,
        port:5173,

        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Spring Boot backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
})
