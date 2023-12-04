import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "vite-plugin-remove-console";
// import removeConsole from "../../dist/index.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole({
      includes: ["log", "warn", "error", "info"],
      externalValue: ["这个不删", "noRemove"],
      // Completely customize the statements that need to be removed, which will overwrite `includes`
      custom: [
        "debugger",
        "console.log()",
        // "console.warn()",
        // "console.error()",
        // "console.info()",
        "val.value = 8"
      ]
    })
  ],
  build: { sourcemap: true }
});