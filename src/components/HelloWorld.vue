<!--
  - Copyright (c) 2021 fuzzy
  - 项目名称：vue3-vite-demo
  - 文件名称：HelloWorld.vue
  - 创建日期：2021年06月16日
  - 创建作者：fuzzy
  -->

<template>
  <h1>Hi,vue3 + vite!</h1>
  <el-button>我是按钮</el-button>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: null
    }
  },
  setup () {
    const state = reactive({ count: 0 })

    return {
      state
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

</style>
