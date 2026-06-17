import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [react()],
  // For GitHub Pages: set VITE_BASE=/repo-name/ in .env.production
  base: mode === 'production' ? (env.VITE_BASE || '/') : '/',
  optimizeDeps: {
    exclude: ['pyodide'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor';
          }
          if (id.includes('node_modules/@codemirror') || id.includes('node_modules/@uiw/react-codemirror')) {
            return 'codemirror';
          }
        },
      },
    },
  },
}})