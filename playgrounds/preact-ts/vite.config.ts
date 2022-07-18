import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), removeConsole()],
  build: { sourcemap: true }
});
