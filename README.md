<h1 align="center">vite-plugin-remove-console</h1>
<p align="center">Vite plugin to in the production environment delete all console.log</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-remove-console?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-remove-console?color=50a36f&label="></a>
</p>

English | [简体中文](./README.zh_CN.md)

## 🚀 Features

- ⚡ **High precision, zero intrusion**: Accurately and complete remove `console.log` in the code, currently supports the removal of file formats `.js`, `.ts`, `.jsx`, `.tsx`, `.vue`, `.svelte`
- 🧪 **Perfect example**: Currently we have added `preact-js`, `preact-ts`, `react-js`, `react-ts`, `solid-js`, `solid-ts`, `svelte-js`, `svelte-ts`, `vue-js`, `vue-ts` examples to the [playgrounds](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds) folder, zero usage cost
- 🦾 **Configurable**: Support passing `external`, which means that some files do not delete `console.log`, for example: `removeConsole({ external: ["src/assets/iconfont/iconfont.js", ...] })`

## 📦 install

```bash
npm install vite-plugin-remove-console -D
or
pnpm add vite-plugin-remove-console -D
````

## 🦄 Usage

- vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole()
  ]
});
````

Refer to [more examples](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds)

## License

[MIT © xiaoxian521-2022](./LICENSE)
