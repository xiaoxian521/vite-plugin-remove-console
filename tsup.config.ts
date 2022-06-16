import { defineConfig } from "tsup";

const config = {
  outDir: "dist",
  clean: true,
  minify: true,
  sourcemap: false,
  dts: false,
};

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    ...config,
  },
]);
