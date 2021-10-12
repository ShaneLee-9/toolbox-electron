<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label class="logo" header>
          <img src="@/assets/img/logo.svg" alt="">
          <span>Toolbox</span>
        </q-item-label>
        <q-item
          v-for="item of navRoutes"
          :key="item.path"
          v-ripple
          :to="item.path"
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.meta.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-lg g-page" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import randomColor from 'randomcolor'
import { setCssVar } from 'quasar'
import { navRoutes } from '@/router'

const route = useRoute()
const leftDrawerOpen = ref<boolean>(false)

// 每次切换路由就切换主题色
watch(route, () => {
  setCssVar('primary', randomColor({ luminosity: 'bright' }))
})
</script>

<style lang="stylus">
.logo
  flexible(center, center)

  img
    width 50px
    margin-right 16px

  span
    font-weight bold
    font-size 24px !important
    text-shadow 2px 2px 6px rgba(0, 0, 0, .1)
    color transparent
    background linear-gradient(to bottom, #496cf6, #677ae5) no-repeat
    -webkit-background-clip text

.g-page
  height calc(100vh - 50px)
  overflow-y auto
</style>
