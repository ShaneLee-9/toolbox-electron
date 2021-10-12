<script setup lang="ts">
import { ref } from 'vue'
import request from '@/utils/request'
import { BaseURL } from '@/utils/config'

interface NewsItem {
  content: string,
  avatar: string,
  author: string
  title: string
}

interface ResData {
  data: {
    content: string
  }[]
}

const list = ref<NewsItem[]>([])

async function getData () {
  const { data } = await request<ResData>(BaseURL.Proxy, { url: 'http://is.snssdk.com/api/news/feed/v51/' }, 'POST')
  list.value = data.map(cur => {
    const _data = JSON.parse(cur.content)
    return {
      content: _data.abstract,
      avatar: _data.media_info.avatar_url,
      author: _data.media_info.name,
      title: _data.title
    }
  })
}

getData()
</script>

<template>
  <div class="bg-grey-3">
    <q-card v-for="(item, index) of list" :key="index" class="q-mb-lg">
      <q-item>
        <q-item-section class="author-wrapper" top avatar>
          <q-avatar class="q-ml-auto q-mr-auto">
            <img :src="item.avatar" alt="avatar">
          </q-avatar>
          <q-item-label class="q-mt-sm q-ml-auto q-mr-auto">{{ item.author }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <p class="text-h6">{{ item.title }}</p>
          <p>{{ item.content }}</p>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<style scoped lang="stylus">
.author-wrapper
  width 100px
  padding-top 4px
  text-align center
</style>
