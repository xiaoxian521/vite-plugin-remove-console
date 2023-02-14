import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "../../dist/index.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole({ includes: ["log", "warn", "error", "info"] })
  ],
  build: { sourcemap: true }
});
