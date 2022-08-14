import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig({
  plugins: [solidPlugin(), removeConsole()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    sourcemap: true
  },
})
