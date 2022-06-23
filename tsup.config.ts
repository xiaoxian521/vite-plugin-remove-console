import { defineConfig } from "tsup";

const config = {
  outDir: "dist",
  clean: true,
  minify: true,
  sourcemap: false,
  dts: true
};

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    ...config
  }
]);
