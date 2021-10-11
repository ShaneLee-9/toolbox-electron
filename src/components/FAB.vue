<script setup lang="ts">
defineProps<{
  icon: string
}>()
defineEmits<(e: 'click') => void>()
</script>

<template>
  <q-page-sticky position="bottom-right" :offset="[32, 32]">
    <q-btn
      fab
      :icon="icon"
      color="primary"
      @click="$emit('click')"
    />
  </q-page-sticky>
</template>
