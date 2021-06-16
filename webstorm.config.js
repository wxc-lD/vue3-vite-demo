/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：webstorm.config.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '/@': resolve('src'),
    }
  }
}
