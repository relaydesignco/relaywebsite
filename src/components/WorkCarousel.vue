<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

function shuffle(array: Array<any>) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var slides = [
  {
    title: 'Odessa Connect',
    src: '/odessa-header.jpg',
    url: '/work/odessa',
  },
  {
    title: 'GE Appliances',
    src: '/ge-header-2.jpg',
    url: '/work/ge',
  },
  {
    title: 'Embodied Labs',
    src: '/el-header.jpg',
    url: '/work/embodied-labs',
  },
  {
    title: '21c Museum Hotels',
    src: '/21c-header.jpg',
    url: '/work/21c',
  },
  {
    title: 'American Airlines',
    src: '/aa-header.jpg',
    url: '/work/american-airlines',
  }
]

slides = shuffle(slides)

const breakpoints = {
  // 700px and up
  768: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
}



</script>

<template>
  <div class="px-8 md:px-24 pt-12 md:pt-24 text-white capabilities">
    <h2 class="h4 mb-12 md:mb-20 text-white leading-none">
      <a href="/work" class="bar-link block"><span>See our work.</span></a>
    </h2>
  </div>

  <div class="w-full mb-48">
    <carousel :breakpoints="breakpoints" :items-to-show="1" :itemsToScroll="1" :wrapAround="false" :transition="800">
      <slide v-for="slide in slides" :key="slide.url" class="">
        <div class="px-8 md:pr-32 md:pl-0">
          <a :href="slide.url" class="block">
            <img :src="slide.src" alt="" class="relative z-0 h-60 w-full object-cover" />
            <h4 class="text-white text-right leading-none text-3xl -mt-4 -mr-4 z-10 relative">{{  slide.title }}</h4>
          </a>
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<style scoped>

:deep(.carousel__prev),
:deep(.carousel__next) {
  margin: 0;
}

@screen md {
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    top: auto;
    bottom: -50px;
    margin: 0 10px;
  }
}
:deep(.carousel__next--disabled),
:deep(.carousel__prev--disabled) {
  display: none;
}

:deep(.carousel__icon path) {
  fill: white;
}
</style>
