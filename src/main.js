/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：delivery
 * 文件名称：main.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./router";
import 'element-plus/packages/theme-chalk/src/base.scss'
import { ElButton } from 'element-plus';

const app = createApp(App)
app.use(ElButton)

app.use(router).mount('#app')
