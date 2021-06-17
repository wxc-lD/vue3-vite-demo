/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：main.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'element-plus/packages/theme-chalk/src/base.scss'
// import { ElButton, ElForm } from 'element-plus'

// const app = createApp(App)
// app.use(ElButton)
// app.use(ElForm)

// app.use(router).mount('#app')

import { ElForm, ElFormItem, ElInput, ElButton, ElSelect, ElOption } from 'element-plus';
const app = createApp(App)

// app.component(ElForm.name, ElForm);
// app.component(ElFormItem.name, ElFormItem);

// app.config.globalProperties.$ELEMENT = option
app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)
app.use(ElButton)
app.use(ElSelect)
app.use(ElOption)
app.use(router).mount('#app')

