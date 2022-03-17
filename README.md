# vite-plugin-remove-console

A vite plugin that deletes console.log in the production environment

**English** | [中文](./README.zh_CN.md)  

## Install

```bash
npm install vite-plugin-remove-console -D
or 
pnpm add vite-plugin-remove-console -D
```

## Usage

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