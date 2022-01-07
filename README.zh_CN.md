# vite-plugin-remove-console

生产环境删除console.log的vite插件

**中文** | [English](./README.md)  

## 安装

```bash
npm add vite-plugin-remove-console -D
or 
pnpm add vite-plugin-remove-console -D
```

## 用法

### Config plugin in vite.config.ts

- **Vue** sample config

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