<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{
  title: string,
  description: string,
  imgSrc: string,
  routeUrl: string,
}>()

const isVisible = ref(false)
const visibleMarker = ref(null)
const sectionIsVisible = ref(useElementVisibility(visibleMarker))

watchEffect(() => {
  if (sectionIsVisible.value == true) {
    isVisible.value = true;
    console.log("section visible", props.title)
  } else {
    isVisible.value = false;
  }
});

</script>

<template>
  <div class="relative mb-64 h-80 content" :class="{ isVisible: isVisible, notVisible: !isVisible}">
    <router-link :to="routeUrl" class="w-full md:h-80 flex flex-col md:flex-row items-center justify-end mb-8">
      <div class="relative z-10 md:w-1/2 order-2 md:order-1">
        <h2 class="leading-none text-blue">{{ title }}</h2>
        <p class="text-black description medium inline-block w-auto mb-12 md:mb-0"><span>{{ description }}</span></p>
      </div>
      <img :src="imgSrc" alt="" class="content-img md:absolute md:left-2 order-1 md:order-2 z-0 h-80 mb-2 md:w-2/3 object-contain" />
    </router-link>
    <div ref="visibleMarker" class="visibleMarker"></div>
  </div>
</template>

<style scoped>
.visibleMarker {
  position: absolute;
  top: 40%;
  height: 10%;
  width: 5px;
  /* background: blue; */
}

h2 {
  font-size: 50px;
  line-height: 1;
}


@screen md {
  h2 {
    font-size: 60px;
  }
}

@screen lg {
  h2 {
    font-size: 80px;
  }
}

@screen md {
  .description {
    @apply relative;

    opacity: 0;
    transition: opacity .25s ease;
  }
}

.description span {
  @apply inline-block relative z-20;
}

.description::after {
  @apply inline-block w-full h-full bg-white absolute top-0 -left-1 z-10;

  content: "";
  transform: scale(0, 100%);
  transform-origin: center left;
  transition: transform .4s ease;
}

 a:hover .description {
  opacity: 1;
}

a:hover .description::after {
  transform: scale(100%, 100%);
}

.content-img  {
  transition: opacity .5s ease, transform .5s ease;
  transform-origin: center right;
  opacity: 0;
}

a:hover .content-img {
  /* transform: scale(103%); */
  transform: translate(-1rem, -.4rem);
  /* opacity: 1; */
}


.isVisible .content-img {
  opacity: 1;
}

.notVisible .content-img  {
  opacity: 0;
}

</style>
