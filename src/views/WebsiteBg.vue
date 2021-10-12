<script setup lang="ts">
import { ref } from 'vue'
import { saveAs } from 'file-saver'
import { useQuasar } from 'quasar'
import request from '@/utils/request'
import FAB from '@/components/FAB.vue'

const imgUrl = ref('')
let imgBlob: Blob
const $q = useQuasar()

async function getData () {
  imgBlob = await request<Blob>('https://api.sumt.cn/api/bg.img.php', null, 'get', 'blob')

  const fileReader = new FileReader()

  fileReader.onload = function () {
    imgUrl.value = this.result
  }

  fileReader.readAsDataURL(imgBlob)
}

getData()

function download () {
  try {
    saveAs(imgBlob, Date.now() + '.png')
  } catch (e) {
    console.log(e)
    $q.notify({
      color: 'negative',
      message: '保存失败，详情查看控制台'
    })
  }
}
</script>

<template>
  <div class="text-center">
    <img class="result-img" :src="imgUrl" alt="">
    <br>
    <q-btn
      class="q-mt-xl"
      push
      color="primary"
      @click="download"
    >
      <q-icon name="download" />
      下载
    </q-btn>

    <FAB icon="refresh" @click="getData" />
  </div>
</template>

<style scoped lang="stylus">
.result-img
  max-width 100%
</style>
