<script lang="ts" setup>
import { ref } from 'vue'
import FAB from '@/components/FAB.vue'
import request from '@/utils/request'

interface Info {
  context: string
  time: string
}

interface ResData {
  status: number
  data: Info[]
}

const status = ref<number>(-1)
const list = ref<Info[]>([])

async function getData () {
  const { status: _status, data } = await request<ResData>('http://localhost:9999/proxy', {
    url: 'http://www.kuaidi.com/index-ajaxselectcourierinfo--.html'
  }, 'POST')

  status.value = _status
  list.value = data
}

getData()
</script>

<template>
  <div>
    <q-timeline>
      <template v-for="(item, index) of list" :key="item.time">
        <q-timeline-entry
          v-if="index === 0 && status > 2"
          :subtitle="item.time"
          icon="fas fa-check"
          color="positive"
        >
          <div>{{ item.context }}</div>
        </q-timeline-entry>

        <q-timeline-entry v-else :subtitle="item.time">
          <div>{{ item.context }}</div>
        </q-timeline-entry>
      </template>
    </q-timeline>

    <FAB icon="refresh" @click="getData" />
  </div>
</template>
