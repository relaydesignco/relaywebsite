// mouse.js
import { ref, Ref } from 'vue'


export function useBgColor() {
  const bg = ref('bg-white')
  const visibleColors : Ref<Array<string>> = ref([])

  function onShowBg(color: string) {
    visibleColors.value.push(color)
    bg.value = color
  }

  function onHideBg(color: string) {
    const idx = visibleColors.value.indexOf(color)
    if (idx >= 0) {
      const r = visibleColors.value.splice(idx, 1)
    }
    if (visibleColors.value.length > 0) {
      bg.value = visibleColors.value[visibleColors.value.length - 1]
    }
  }

  // expose managed state as return value
  return { bg, onShowBg, onHideBg }
}