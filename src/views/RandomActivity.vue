<template>
  <div>
    <div class="text-center q-mb-lg">
      <q-btn push color="primary" @click="getData">
        <q-icon name="fas fa-dice" />
        <span class="q-ml-md">获取</span>
      </q-btn>
    </div>
    <q-card v-show="info.activity" :style="{ backgroundColor: cardBg }">
      <q-card-section class="text-h6">{{ info.activity }}</q-card-section>
      <q-card-section class="content">
        <p><span>价格</span>{{ info.price }}</p>
        <p><span>参与人数</span>{{ info.participants }}</p>
        <p><span>类型</span>{{ info.type }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import randomColor from 'randomcolor'
import request from '@/utils/request'

interface ResData {
  price: number
  activity: string
  participants: number
  type: string
}

const info = ref<ResData>({})
const cardBg = ref('')

async function getData () {
  info.value = {}
  cardBg.value = randomColor({ luminosity: 'light ' })

  const res = await request<ResData>('https://www.boredapi.com/api/activity')
  info.value = res
}

getData()
</script>

<style scoped lang="stylus">
.content
  span
    display inline-block
    width 6em
</style>
