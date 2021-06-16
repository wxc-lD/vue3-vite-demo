/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：index.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */
import {createStore} from "vuex"

export const store = createStore({
  state: {
    isLogin: false
  },
  getters: {
    isLogin: state => state.isLogin
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    setLoginStatus({commit}, flag) {
      commit("setLogin", flag)
    }
  }
})
