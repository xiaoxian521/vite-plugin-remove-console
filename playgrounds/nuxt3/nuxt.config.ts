import { defineNuxtConfig } from "nuxt/config";
import removeConsole from "vite-plugin-remove-console";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [removeConsole()]
  }
});
