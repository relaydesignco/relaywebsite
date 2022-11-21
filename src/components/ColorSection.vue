<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{ bgColor: string }>()

const isVisible = ref(false)
const visibleMarker = ref(null)
const sectionIsVisible = ref(useElementVisibility(visibleMarker))
const emit = defineEmits<{
  (e: 'changeBg', bg: string): void
}>()

watchEffect(() => {
  // console.log(`${props.bgColor} sectionIsVisible: ${sectionIsVisible.value}`);
  if (sectionIsVisible.value == true) {
    isVisible.value = true;
    console.log("section visible, emitting change to", props.bgColor)
    emit('changeBg', `bg-${props.bgColor}`)
  } else {
    isVisible.value = false;
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
  top: 25%;
  height: 50%;
  width: 5px;
  /* background: black; */
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
