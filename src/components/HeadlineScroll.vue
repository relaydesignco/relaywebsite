<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{ headline: string }>()

const target : Ref<HTMLDivElement | null> = ref(null)
const targetIsVisible = ref(false)
const xPos = ref(100) // % val for x translate

// detect if headline is in view
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

// update translate value based on how far we've scrolled
function handleScroll() {
  if (targetIsVisible.value == true) {
    const viewportOffset = target.value ? target.value.getBoundingClientRect() : null
    if (viewportOffset) {
      const scrollPercent = viewportOffset.top / window.innerHeight / 3
      const x = Math.max(5.5, Math.min(100, (scrollPercent * 100)))
      xPos.value = x
    }
  }
}

const style = computed(() => {
  return { transform: 'translate(' + xPos.value + '%, 0)' }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <div ref="target" class="h1 text-white font-sans font-bold" :style="style">
    {{ headline }}
  </div>
</template>

<style scoped>
  .h1 {
    @apply absolute top-0 left-10 whitespace-nowrap text-3xl md:text-5xl lg:text-6xl
  }
</style>
