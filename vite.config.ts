import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'

function publicBoundaryPlugin() {
  return {
    name: 'sanctum-public-boundary',
    closeBundle: async () => {
      await rm(resolve(process.cwd(), 'dist', 'ontology'), { recursive: true, force: true })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), publicBoundaryPlugin()],
  server: {
    host: '127.0.0.1',
    port: 5192,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5192,
    strictPort: true,
  },
})
