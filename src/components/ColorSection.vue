<script setup lang="ts">
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{ bgColor: string }>()

const visibleMarker = ref(null)
const sectionIsVisible = ref(useElementVisibility(visibleMarker))
const emit = defineEmits<{
  (e: 'showBg', bg: string): void
  (e: 'hideBg', bg: string): void
}>()

watch(sectionIsVisible, (newVal, prevVal) => {
  if (newVal == true) {
    emit('showBg', `${props.bgColor}`)
  } else {
    emit('hideBg', `${props.bgColor}`)
  }
})


</script>

<template>
  <section>
    <div ref="visibleMarker" class="content" :class="{ isVisible: sectionIsVisible, notVisible: !sectionIsVisible}">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 30vh;
  position: relative;
}

.content {
  transition: opacity .5s;
}

.content.isVisible {
  opacity: 1;
}

.content.notVisible {
  opacity: 0;
}

</style>
