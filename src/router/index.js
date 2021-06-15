/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：delivery
 * 文件名称：index.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

import {createRouter, createWebHashHistory} from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const routes = [
  {
    path: '/', component: () => import('@/components/HelloWorld.vue')
  }
]

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})
