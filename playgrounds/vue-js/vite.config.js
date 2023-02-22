import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "../../dist/index.mjs";
import removeOtherConsole from "vite-plugin-remove-other-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole({
      externalValue: ["这个不能删除", "aa"]
    })
  ],
  build: { sourcemap: true }
});
