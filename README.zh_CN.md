<h1 align="center">vite-plugin-remove-console</h1>
<p align="center">生产环境删除所有指定console类型的vite插件</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-remove-console?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-remove-console?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.md)

## 🚀 特性

#### ⚡ **高精准、零侵入**: 精准又完整剔除代码中指定的 `console` 类型，目前支持剔除文件格式 `.js`、`.ts`、`.jsx`、`.tsx`、`.vue`、`.svelte`

#### 🧪 **完善的示例**: 目前我们在 [playgrounds](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds) 文件夹中加入了 `nuxt3`、`preact-js`、`preact-ts`、`react-js`、`react-ts`、`solid-js`、 `solid-ts`、 `svelte-js`、`svelte-ts`、`vue-js`、`vue-ts` 示例，零使用成本

#### 🦾 **可配置**:

| **配置项名称**  | **必传** | **含义**                                                     | **类型**        | **举例**                                                     |
| :-------------- | :------- | :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- |
| `external`      | 否       | 代表某些文件不进行删除指定 `console` 类型的操作              | `Array<string>` | `removeConsole({ external: ["src/assets/iconfont/iconfont.js", ...] })` |
| `includes`      | 否       | 指定需要删除的 `console` 类型，不传 `includes` 默认删除 `console.log` | `Array<string>` | `removeConsole({ includes: ["log", "warn", "error", "info", ...] })` |
| `externalValue` | 否       | 保留某些 `console` 语句，若 `console` 的 `value` 中有传入的 `externalValue` 值，则此 `console` 会被保留 | `Array<string>` | `removeConsole({ externalValue: ["这个不删", "noRemove", ...] })` |
| `custom`        | 否       | 完全自定义需要删除的语句，会覆盖 `includes`                   | `Array<string>` | `removeConsole({ custom: ["console.log()", "console.warn()", "debugger", ...] })` |

## 📦 安装

```bash
# npm
npm install vite-plugin-remove-console -D

# or yarn
yarn add vite-plugin-remove-console -D

# or pnpm
pnpm add vite-plugin-remove-console -D
```

## 📕 用法

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

## 许可证

[MIT © 2022-present, xiaoxian521](./LICENSE)
