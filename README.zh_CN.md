<h1 align="center">vite-plugin-remove-console</h1>
<p align="center">生产环境删除所有console.log的vite插件</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-remove-console?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-remove-console" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-remove-console?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.md)  

## 🚀 特性

- ⚡ **高精准、零侵入**: 精准又完整剔除代码中的`console.log`，目前支持剔除文件格式`.js`、`.ts`、`.jsx`、`.tsx`、`.vue`、`.svelte`
- 🧪 **完善的示例**: 目前我们在[playgrounds](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds)文件夹中加入了`preact-js`、`preact-ts`、`react-js`、`react-ts`、`solid-js`、 `solid-ts`、 `svelte-js`、`svelte-ts`、`vue-js`、`vue-ts`示例，零使用成本
- 🦾 **可配置**: 支持传`external`，代表某些文件不进行删除`console.log`的操作，比如像这样：`removeConsole({ external: ["src/assets/iconfont/iconfont.js", ...] })`

## 📦 安装

```bash
npm install vite-plugin-remove-console -D
or 
pnpm add vite-plugin-remove-console -D
```

## 🦄 用法

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
```

Refer to [more examples](https://github.com/xiaoxian521/vite-plugin-remove-console/tree/main/playgrounds) 

## 许可证

[MIT © xiaoxian521-2022](./LICENSE)