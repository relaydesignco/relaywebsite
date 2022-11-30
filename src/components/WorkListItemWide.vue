<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{
  title: string,
  description: string,
  imgSrc: string,
  routeUrl: string,
}>()

</script>

<template>
  <div class="relative h-auto md:h-80 work-item-container mb-12 md:mb-72 mx-8 md:mx-32 py-12">
    <router-link :to="routeUrl" class="md:h-full flex flex-col md:flex-row items-center justify-center">
      <div class="relative z-10 order-2 md:order-1">
        <h2>{{ title }}</h2>
        <p class="text-white w-full text-center description medium !leading-tight inline-block mb-12 md:mb-0 mt-4">
          <span class="text">
            {{ description }}
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow">
              <path d="M14.3022 7.09932C14.2313 7.09932 14.16 7.09932 14.0891 7.09932C9.68792 7.09932 5.28631 7.09932 0.885172 7.09742C0.759783 7.09742 0.62909 7.09362 0.509971 7.04989C0.164188 6.92251 -0.0291992 6.49789 0.0035947 5.97631C0.0325305 5.51938 0.299222 5.15117 0.651756 5.09286C0.746762 5.07702 0.844179 5.07892 0.940632 5.07892C5.32971 5.07892 9.71927 5.07892 14.1083 5.07892H14.3157C14.334 5.04406 14.3529 5.00857 14.3712 4.97372C14.3128 4.93252 14.2429 4.90591 14.1976 4.84697C13.4139 3.82789 12.6345 2.80375 11.8518 1.78341C11.6242 1.48618 11.5239 1.14522 11.617 0.729478C11.7752 0.0241114 12.4267 -0.232558 12.8569 0.240855C12.9167 0.306765 12.9707 0.382181 13.0261 0.455063C14.2492 2.06099 15.4722 3.66629 16.6947 5.27285C17.1027 5.809 17.1018 6.36734 16.6918 6.90603C15.4394 8.55125 14.1836 10.192 12.936 11.8436C12.4291 12.5147 11.7356 12.0768 11.6025 11.3664C11.5282 10.9696 11.6469 10.6597 11.8567 10.3853C12.6341 9.36942 13.4086 8.34972 14.1865 7.33444C14.2328 7.27424 14.2979 7.23811 14.3538 7.19122L14.3013 7.09932H14.3022Z" fill="white"/>
            </svg>
          </span>
        </p>
      </div>
      <div class="img-container md:absolute md:left-0 md:top-0 order-1 md:order-2 z-0 h-72 mb-4 md:mb-0 md:h-full w-full object-cover">
        <img :src="imgSrc" alt="" class="content-img h-full w-full object-cover" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>

h2 {
  @apply text-white leading-none text-center;

  font-size: 40px;
}


svg {
    @apply absolute opacity-0;

    right: .75rem;
    top: 1.25rem;
    transition: opacity .5s ease .3s;
  }


@screen lg {
  h2 {
    font-size: 80px;
  }

  p {
    @apply relative;

    font-size: 26px;
  }

  .text {
    @apply relative inline-block z-10 px-4 py-2 pr-9;

    transition: color .5s ease;
  }

  .text::after {
    @apply absolute top-0 left-0 w-full h-full bg-black inline-block;

    content: "";
    transform: scale(0, 1);
    transform-origin: center left;
    transition: transform .5s ease;
    z-index: -1;
  }

  a:hover .text::after {
    transform: scale(1, 1);
  }

  a:hover svg {
    @apply opacity-100
  }

  .work-item-container {
    height: 500px;
  }

  .img-container {
    transition: transform .8s ease;
  }

  img {
    filter: grayscale(1) contrast(.7);
    transition: filter .8s ease;
  }

  a:hover .img-container {
    transform: scale(1.05)
  }

  a:hover img {
    filter: grayscale(0) contrast(1);
  }
}

</style>
