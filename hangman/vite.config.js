import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // listen on 0.0.0.0 so the dev container can forward it
    port: 5173,
    strictPort: true,  // fail loudly instead of drifting to 5174, 5175, ...
  },
})
