<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useMouseInElement, useWindowSize, useTemplateRefsList } from '@vueuse/core'
type Coordinate = {
  x: number,
  y: number
}

const { width, height } = useWindowSize()
const target = ref(null)
const m = ref(useMouseInElement(target))
let fakeMouse : Coordinate | null = { x: -100, y: height.value / 2 } // fake mouse pointer movement
let timeTillStart = 600 // delay start of inital animation

// desktop safari has janky rendering of lerp, so detect browser here
const isDesktopSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") == -1 && width.value >= 480;

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
  return Math.floor(val)
}

/* Linear conversion */
const oldMin = 0
const oldMax = dist({x: 0, y: 0}, {x: Math.floor(width.value * .4), y: Math.floor(height.value * .4)})
const newMin = width.value < 480 ? 200 : 100
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
  if (m.value.isOutside == true) return newMin
  const viewportOffset = el.getBoundingClientRect();
  let mouseCoord : Coordinate = { x: m.value.x, y: m.value.y }
  if (fakeMouse) {
    mouseCoord = { x: fakeMouse.x, y: fakeMouse.y }
  }
  const letterPos : Coordinate = { x: viewportOffset.left + el.offsetWidth / 2, y: viewportOffset.top +  + el.offsetHeight / 2 }
  const d = dist(mouseCoord, letterPos)
  const scaledD = scaleNumberInRange(d)
  const weight = Math.floor(Math.max(newMin, 900 - scaledD))
  const currentWeight = el.style.fontWeight == '' ? newMin : parseInt(el.style.fontWeight)
  // do not lerp on desktop safari
  const lerpedWeight = isDesktopSafari ? weight : lerp(currentWeight, weight, spike(deltaTime * .009))
  return lerpedWeight.toString()
}

/* animation loop */
let lastTimestamp : number
let loop : number
function updateFontWeights() {
  const now = Date.now()
  const elapsed = now - lastTimestamp
  if (now !== lastTimestamp && timeTillStart <= 0) {
    if (fakeMouse && timeTillStart <= 0) {
      if (fakeMouse.x <= width.value) {
        const remainingX = Math.max(20, (width.value - fakeMouse.x) * .05)
        fakeMouse.x = Math.min(fakeMouse.x + remainingX, width.value + 100)
        fakeMouse.y = height.value / 2
      } else {
        fakeMouse = null
      }
    }
    refs.value.forEach((d) => {
      d.style.fontWeight = String(getWeight(d, elapsed));
    })
  }
  timeTillStart -= elapsed
  lastTimestamp = now
  loop = window.requestAnimationFrame(updateFontWeights)
}

onMounted(() => {
  lastTimestamp = Date.now()
  updateFontWeights()
})

// if the user moves their mouse while the initial animation is going,
// stop the anim and use their mouse moves instead
watch(
  () => m.value.y,
  (y, prevY) => {
    if (y != prevY && prevY != 0) {
      fakeMouse = null
    }
  }
)

// create dynamic refs for each letter
const headline1 =  reactive("Software products ".split(""))
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
      <div class="headline mb-24 md:mb-0 font-sans leading-none text-center text-white">
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
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

@screen md {
  .headline {
    font-size: 6.5vw;
  }
}

.headline span {
  font-weight: 200;
  font-synthesis: none;
  text-rendering:geometricPrecision;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  font-optical-sizing: none;
  font-kerning: none;
}

@screen md {
  .headline span {
    font-weight: 100;
  }
}

section {
  @apply bg-red;

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
