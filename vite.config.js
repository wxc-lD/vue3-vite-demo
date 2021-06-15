/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：delivery
 * 文件名称：vite.config.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import {resolve} from 'path';

const alias = {
  '/@': resolve('/src'),
  '@': resolve('/src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  root: process.cwd(),
  resolve: {alias},
  base: process.env.NODE_ENV === 'production' ? process.env.VITE_PUBLIC_PATH : './',
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en', 'element-plus/lib/locale/lang/zh-tw'],
  },
  server: {
    host: '0.0.0.0',
    port: process.env.VITE_PORT,
    open: process.env.VITE_OPEN,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
  },
})
