import { ref, Ref } from 'vue'

export function useBgColor() {
  const bg = ref('white')

  // multiple colors can be on-screen at same time
  const visibleColors : Ref<Array<string>> = ref([])

  // add color to stack when section becomes visible
  // show color from bottom of stack
  function onShowBg(color: string) {
    const idx = visibleColors.value.indexOf(color)
    if (idx == -1) {
      const r = visibleColors.value.push(color)
    }
    if (visibleColors.value.length > 0) {
      bg.value = visibleColors.value[0]
    }
  }

  // show top color on stack when a color is removed
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