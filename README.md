<h1 align="center">vite-plugin-remove-console</h1>
<p align="center">A vite plugin that remove all the specified console types in the production environment</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-remove-console?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-remove-console?color=50a36f&label="></a>
</p>

English | [简体中文](./README.zh_CN.md)

## 🚀 Features

#### ⚡ **High precision, zero intrusion**: Accurately and completely remove the `console` type specified in the code, and currently support the removal of file formats `.js`、`.ts`、`.jsx`、`.tsx`、`.vue`、`.svelte`

#### 🧪 **Perfect example**: Currently we have added `nuxt3`、`preact-js`、`preact-ts`、`react-js`、`react-ts`、`solid-js`、 `solid-ts`、 `svelte-js`、`svelte-ts`、`vue-js`、`vue-ts` examples to the [playgrounds](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds) folder, zero usage cost

#### 🦾 **Configurable**:

| configuration   | must | meaning                                                      | type            | example                                                      |
| :-------------- | :--- | :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| `external`      | No   | supported to pass external to represent certain files not to delete the specified `console` type of operation | `Array<string>` | `removeConsole({external: ["src/assets/iconfont/iconfont.js",...]})` |
| `includes`      | No   | supports passing `includes` to specify the type of `console` that needs to be removed，If `includes` is not passed, `console.log` will be removed by default | `Array<string>` | `removeConsole({ includes: ["log", "warn", "error", "info", ...] })` |
| `externalValue` | No   | some `console` statements are reserved, if there is an incoming `externalValue` value in the `value` of the `console`, the `console ` will be preserved | `Array<string>` | `removeConsole({ externalValue: ["这个不删", "noRemove", ...] })` |
| `custom`          | No   | Completely customize the statements that need to be removed, which will overwrite `includes` | `Array<string>` | `removeConsole({ custom: ["console.log()", "console.warn()", "debugger", ...] })` |

## 📦 install

```bash
# npm
npm install vite-plugin-remove-console -D

# or yarn
yarn add vite-plugin-remove-console -D

# or pnpm
pnpm add vite-plugin-remove-console -D
```

## 📕 Usage

```ts
// vite.config.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), removeConsole()]
});
```

Refer to [more examples](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds)

## License

[MIT © 2022-present, xiaoxian521](./LICENSE)
