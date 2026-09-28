import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    // Avoid exhausting the host's inotify watch limit in environments with
    // many other development servers or watched files.
    watch: { usePolling: true, interval: 1000 },
  },
})
