<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{ bgColor: string }>()

const isVisible = ref(false)
const visibleMarker = ref(null)
const sectionIsVisible = ref(useElementVisibility(visibleMarker))
const emit = defineEmits<{
  (e: 'showBg', bg: string): void
  (e: 'hideBg', bg: string): void
}>()

watchEffect(() => {
  if (sectionIsVisible.value == true) {
    isVisible.value = true;
    emit('showBg', `bg-${props.bgColor}`)
  } else {
    isVisible.value = false;
    emit('hideBg', `bg-${props.bgColor}`)
  }
});

</script>

<template>
  <section>
    <div class="content" :class="{ isVisible: isVisible, notVisible: !isVisible}">
    <slot></slot>
    </div>
    <div ref="visibleMarker" class="visibleMarker"></div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  min-height: 101vh;
  position: relative;
}

.visibleMarker {
  position: absolute;
  top: 10%;
  height: 60%;
  width: 1px;
  /* outline: 1px solid yellow;
  background: black; */
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
