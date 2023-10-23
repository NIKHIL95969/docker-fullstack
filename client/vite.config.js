import { defineConfig } from 'vite'
// import hotReload from "vite-plugin-hot-reload";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  }
})
