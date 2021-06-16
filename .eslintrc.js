/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：.eslintrc.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    'standard',
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: 2,
  }
}
