<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title: string,
  description: string,
  imgSrc: string,
  routeUrl: string,
  textColor: string,
  clipColor: string,
}>()

// reactive screen dimensions
const width = ref(document.documentElement.clientWidth)
const height = ref(document.documentElement.clientHeight)
function getDimensions() {
  width.value = document.documentElement.clientWidth;
  height.value = document.documentElement.clientHeight;
}
onMounted(() => window.addEventListener('resize', getDimensions))
onUnmounted(() => window.removeEventListener('resize', getDimensions))

// calculate random transforms and related text clip positions
const minX = 60
const maxX = 140
const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX
const xPos = ref(x + 'px')
const clipOffset = computed(() => {
  if (width.value >= 768 &&  width.value < 1024) {
    return 220
  } else if (width.value >= 1024 && width.value < 1280) {
    return 100
  } else {
    return 160
  }
})
const xClip = ref(x + clipOffset.value + 'px')

const minY = 10
const maxY = 30
const isPositive = Math.random() > .5 ? true : false
let y = Math.floor(Math.random() * (maxY - minY + 1)) + minY
y = isPositive ? y : y * -1
const yPos = ref(y + 'px')

</script>

<template>
  <div class="item-container relative mb-36 md:mb-48 md:h-80 lg:h-96">
    <router-link :to="routeUrl" class="md:h-80 lg:h-96 flex flex-col md:flex-row md:items-center justify-end mb-8 title">
      <div class="relative z-10 md:w-3/5 order-2 md:order-1">
        <div class="text-container ">
          <h2 class="text-blue leading-none">{{ title }}</h2>
          <p class="text-white description medium !leading-tight inline-block w-auto mb-12 md:mb-0 mt-1 md:mt-4">
            <span class="text-with-bar">
              {{ description }}
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
                <path d="M14.3022 7.09932C14.2313 7.09932 14.16 7.09932 14.0891 7.09932C9.68792 7.09932 5.28631 7.09932 0.885172 7.09742C0.759783 7.09742 0.62909 7.09362 0.509971 7.04989C0.164188 6.92251 -0.0291992 6.49789 0.0035947 5.97631C0.0325305 5.51938 0.299222 5.15117 0.651756 5.09286C0.746762 5.07702 0.844179 5.07892 0.940632 5.07892C5.32971 5.07892 9.71927 5.07892 14.1083 5.07892H14.3157C14.334 5.04406 14.3529 5.00857 14.3712 4.97372C14.3128 4.93252 14.2429 4.90591 14.1976 4.84697C13.4139 3.82789 12.6345 2.80375 11.8518 1.78341C11.6242 1.48618 11.5239 1.14522 11.617 0.729478C11.7752 0.0241114 12.4267 -0.232558 12.8569 0.240855C12.9167 0.306765 12.9707 0.382181 13.0261 0.455063C14.2492 2.06099 15.4722 3.66629 16.6947 5.27285C17.1027 5.809 17.1018 6.36734 16.6918 6.90603C15.4394 8.55125 14.1836 10.192 12.936 11.8436C12.4291 12.5147 11.7356 12.0768 11.6025 11.3664C11.5282 10.9696 11.6469 10.6597 11.8567 10.3853C12.6341 9.36942 13.4086 8.34972 14.1865 7.33444C14.2328 7.27424 14.2979 7.23811 14.3538 7.19122L14.3013 7.09932H14.3022Z" fill="white"/>
              </svg>
            </span>
          </p>
        </div>
      </div>
      <img :src="imgSrc" alt="" class="content-img md:absolute md:left-0 order-1 md:order-2 z-0 md:h-80 lg:h-96 mb-2 object-cover" />
    </router-link>
  </div>
</template>

<style scoped>
.item-container {
  --item-transition: .9s ease-out;
  --bar-transition: .4s ease;
}


h2 {
  font-size: 40px;
}


svg {
  @apply absolute opacity-0;

  right: .75rem;
  top: .95rem;
  transition: opacity var(--bar-transition) .3s;
}

@screen md{
  .item-container {
    @apply mx-auto;

    width: 700px;
  }

  h2 {
    --_p: calc(100% - 220px * -1);
    color: #0000;
    background:
      linear-gradient(90deg, v-bind(clipColor) 50%,v-bind(textColor) 0)
      var(--_p,100%)/200% no-repeat;
    -webkit-background-clip: text;
            background-clip: text;
    transition: var(--item-transition);
    font-size: 60px;
    width: 400px;
  }

  p {
    margin-left: -12px;
  }

  a:hover h2 {
    --_p: calc(100% - v-bind(xClip) * -1);
  }

  .content-img  {
    filter: grayscale(1) contrast(.8);
    transition: filter var(--bar-transition), transform var(--item-transition);
    transform-origin: center right;
    width: 500px;
  }

  a:hover .content-img {
    transform: translate(v-bind(xPos), v-bind(yPos));
    filter: grayscale(0) contrast(1);
  }

  a:hover svg {
    @apply opacity-100
  }

}


@screen lg {
  .item-container {
    width: 1000px;
  }
  h2 {
    --_p: calc(100% - 100px * -1);
  }
  a:hover h2 {
    --_p: calc(100% - v-bind(xClip) * -1);
  }
}

@screen xl {
  .item-container {
    width: 1200px;
  }

  .content-img  {
    width: 640px;
  }

  h2 {
    font-size: 80px;
    width: 640px;
    --_p: calc(100% - 160px * -1);
  }
  a:hover h2 {
    --_p: calc(100% - v-bind(xClip) * -1);
  }
}

</style>
