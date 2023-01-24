<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import intersectionEntry from "../composables/intersectionEntry"

const props = defineProps<{ bgColor: string }>()

const { observedElement, interCallback, observer } = intersectionEntry(props.bgColor)

const visibleMarker = ref(null)
const sectionIsVisible = ref(useElementVisibility(visibleMarker))

onMounted(() => {
  observedElement.value = visibleMarker.value
  interCallback();
  observer.observe(observedElement.value!);
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

  @screen lg {
    min-height: 100.1vh;
  }
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
