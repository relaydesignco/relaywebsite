<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string,
  imgSrc: string,
  routeUrl: string,
}>()

const min = 1
const max = 80
const xPos = ref((Math.floor(Math.random() * (max - min + 1)) + min) + '%')


</script>

<template>
  <div class="relative mb-12 md:mb-20 mx-4">
    <router-link :to="routeUrl">
      <div class="relative flex flex-col md:flex-row items-center justify-center">
        <img :src="imgSrc" alt="" class="content-image mb-2 md:mb-0 object-cover h-48 md:h-56 lg:h-72 w-full md:w-1/3 md:absolute md:top-0 mb:left-0" />
        <h2 class="z-10 mb-24 md:mb-0 text-white text-4xl leading-none text-center">{{ title }}</h2>
      </div>
    </router-link>
  </div>
</template>

<style scoped>

@screen md {
  .content-image {
    @apply opacity-0;

    top: -100px;
    left: v-bind(xPos);
    transition: all .4s ease;
  }

  a:hover .content-image {
    opacity: 1;
    transform: translate(2%, -2%);
  }

  h2 {
    font-size: 75px;
  }
}
</style>
