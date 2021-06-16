/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：storage.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

// 1. localStorage
// 设置永久缓存
class Storage {
  setLocal(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  // 获取永久缓存
  getLocal(key) {
    const json = window.localStorage.getItem(key)
    return JSON.parse(json)
  }

  // 移除永久缓存
  removeLocal(key) {
    window.localStorage.removeItem(key)
  }

  // 移除全部永久缓存
  clearLocal() {
    window.localStorage.clear()
  }

  // 2. sessionStorage
  // 设置临时缓存
  setSession(key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  }

  // 获取临时缓存
  getSession(key) {
    const json = window.sessionStorage.getItem(key)
    return JSON.parse(json)
  }

  // 移除临时缓存
  removeSession(key) {
    window.sessionStorage.removeItem(key)
  }

  // 移除全部临时缓存
  clearSession() {
    window.sessionStorage.clear()
  }
}

export default new Storage()
