<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useMouseInElement, useWindowSize, useTemplateRefsList } from '@vueuse/core'
type Coordinate = {
  x: number,
  y: number
}

const { width, height } = useWindowSize()
const target = ref(null)
const m = ref(useMouseInElement(target))

/* Easing functions */
function easeIn(t: number){
    return t * t
}

function flip(x: number) {
    return 1 - x
}

function spike(t: number) {
    if (t <= .5) return easeIn(t / .5)
    return easeIn(flip(t)/.5)
}

function lerp(start: number, end: number, pct: number){
  if (Math.floor(start) == Math.floor(end)) return end
  const val = (1 - pct) * start + pct * end
  return val
}

/* Linear conversion */
const oldMin = 0
const oldMax = dist({x: 0, y: 0}, {x: Math.floor(width.value / 2), y: Math.floor(height.value / 2)})
const newMin = 100
const newMax = 900
const oldRange = (oldMax - oldMin)
const newRange = (newMax - newMin)
function scaleNumberInRange(oldVal: number) {
  const newVal = (((oldVal - oldMin) * newRange) / oldRange) + newMin
  return newVal
}

/* distance between points */
function dist(a:Coordinate, b:Coordinate) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}

/* calculate eased weight for animation */
function getWeight(el: HTMLSpanElement, deltaTime: number) {
  if (width.value <= 768 || m.value.isOutside == true) return '100'
  const viewportOffset = el.getBoundingClientRect();
  const mouseCoord : Coordinate = { x: m.value.x, y: m.value.y }
  const letterPos : Coordinate = { x: viewportOffset.left, y: viewportOffset.top }
  const d = dist(mouseCoord, letterPos)
  const scaledD = scaleNumberInRange(d)
  const weight = Math.floor(Math.max(100, 900 - scaledD))
  const currentWeight = el.style.fontWeight == '' ? 100 : parseInt(el.style.fontWeight)
  const lerpedWeight = lerp(currentWeight, weight, spike(deltaTime * .009))
  return lerpedWeight.toString()
}

/* animatio loop */
let lastTimestamp : number
let loop
function updateFontWeights() {
  const now = Date.now()
  const elapsed = now - lastTimestamp
  if (now !== lastTimestamp) {
    refs.value.forEach((d) => {
      d.style.fontWeight = getWeight(d, elapsed);
    })
  }
  lastTimestamp = now
  loop = window.requestAnimationFrame(updateFontWeights)
}

onMounted(() => {
  lastTimestamp = Date.now()
  updateFontWeights()
})

// @TODO cancel anim frame if offscreen
// watch(m.value, (newVal, oldVal) => {
//   if (newVal.isOutside == true && loop != undefined) {
//     cancelAnimationFrame(loop)
//   } else if (newVal.isOutside == false && loop == undefined)
//     lastTimestamp = Date.now()
//     updateFontWeights()
//  })

// create dynamic refs for each letter
const headline1 =  reactive("Digital products ".split(""))
const headline2 = reactive("that delight users ".split(""))
const headline3 = reactive("and grow brands".split(""))
const refs = useTemplateRefsList<HTMLSpanElement>()
</script>

<template>
      <div class="posDebug">{{ m.x }}, {{ m.y }}</div>

      <div ref="target" class="flex flex-col min-h-screen px-8 md:px-24 items-center justify-center">
        <div class="headline font-sans leading-none text-center text-white">
          <span v-for="item in headline1" :ref="refs.set">
            {{ item }}
          </span>
        </div>
        <div class="headline font-sans leading-none text-center text-white">
          <span v-for="item in headline2" :ref="refs.set">
            {{ item }}
          </span>
        </div>
        <div class="headline font-sans leading-none text-center text-white">
          <span v-for="item in headline3" :ref="refs.set">
            {{ item }}
          </span>
        </div>
      </div>
</template>

<style scoped>

.posDebug {
  @apply absolute top-0 left-0 -z-20 opacity-0
}

.headline {
  font-size: 12vw;
}

@screen md {
  .headline {
    font-size: 6.5vw;
  }
}

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
