<script setup lang="ts">
import { ref, Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{ headline: string }>()

// detect if headline is in view
const target : Ref<HTMLDivElement | null> = ref(null)
const targetIsVisible = ref(false)
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

</script>

<template>
  <div class="px-8 md:px-24">
    <div ref="target" class="h1 text-white font-sans font-bold" :class="{ 'inposition': targetIsVisible }">
      {{ headline }}
    </div>
  </div>
</template>

<style scoped>
  .h1 {
    @apply leading-none md:whitespace-nowrap text-5xl lg:text-6xl pt-24;
  }

  @screen md {
    .h1 {
      transition: all .8s cubic-bezier(0, 1.4, 1, 1);
      transform: translate(80%, 0);
    }
  }

  .inposition {
    transform: translate(0, 0);
  }
</style>
