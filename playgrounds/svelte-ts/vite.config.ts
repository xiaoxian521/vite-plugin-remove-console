import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), removeConsole()],
  build: { sourcemap: true }
});
