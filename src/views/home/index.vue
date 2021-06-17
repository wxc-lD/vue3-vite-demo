<!--
  - Copyright (c) 2021 fuzzy
  - 项目名称：vue3-vite-demo
  - 文件名称：index.vue
  - 创建日期：2021年06月17日
  - 创建作者：fuzzy
  -->

<template>
  <div class="about">
    <v-header/>
    <v-sidebar/>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from "@/components/layout/Header.vue"
import vSidebar from "@/components/layout/Sidebar.vue"
import vTags from "@/components/layout/Tags.vue"
import {store} from "@/store"

export default {
  components: {
    vHeader,
    vSidebar,
    vTags
  },
  computed: {
    tagsList() {
      return store.state.Layout.tagsList.map(item => item.name)
    },
    collapse() {
      return store.state.Layout.collapse
    }
  }
}
</script>
