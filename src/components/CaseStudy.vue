<script setup lang="ts">
import { computed } from 'vue'

import ColorSection from '../components/ColorSection.vue'
import Footer from '../components/Footer.vue'
import { useMainStore } from "../stores/index"
import { useInverseColor } from '../composables/useInverseColor';

const store = useMainStore()
const { getInverseColor } = useInverseColor()
const inverseColor = computed(() => {
  return getInverseColor(store.bgColor)
})

const props = defineProps<{
  color: string,
  secondaryColor: string,
  title: string,
  description: string,
  intro: string,
  heroImgSrc: string,
  nextTitle: string,
  nextUrl: string,
  nextSrc: string,
}>()

</script>

<template>
  <main :class="`bg-${store.bgColor}`">

    <ColorSection :bg-color="color">
      <div class="flex flex-col min-h-screen px-8 md:px-36 items-center justify-center">
        <h1 :class="`text-${inverseColor}`" class="h1 page-title text-center leading-none">{{title}}</h1>
        <p class="text-center large text-white lg:px-32">{{description}}</p>
      </div>
      <img :src="heroImgSrc" class="w-full" alt="" />
      <div class="flex flex-col px-12 md:px-36 lg:px-2 lg:max-w-5xl lg:mx-auto py-36 lg:py-54 mb-16 md:mb-24 items-center justify-center">
        <p class="text-center intro text-black">{{ intro }}</p>
      </div>
    </ColorSection>

    <ColorSection bg-color="white">

      <div class="flex flex-col md:flex-row pb-24 md:pb-36 items-center">
        <slot name="challenge"></slot>
      </div>

      <slot name="images"></slot>

      <div class="flex flex-col md:flex-row px-16 md:px-24 py-36 lg:max-w-6xl lg:mx-auto items-start text-white capabilities">
        <h2 class="subheading md:w-1/4">Outcome</h2>
        <div class="md:w-3/4">
          <div class="mb-14 text-black">
            <slot name="outcome"></slot>
          </div>
        </div>
      </div>

      <slot name="images2"></slot>

    </ColorSection>


    <ColorSection :bg-color="secondaryColor">
      <div class="flex flex-col md:flex-row px-16 md:px-24 py-44 lg:max-w-6xl lg:mx-auto items-start text-white capabilities">
        <h2 class="subheading md:w-1/4">Services</h2>
        <div class="md:w-3/4">
          <div class="mb-14 text-black">
            <slot name="services"></slot>
          </div>
        </div>
      </div>

      <router-link :to="nextUrl" class="case-study-block w-full flex items-center justify-center relative">
        <div class="z-10">
          <p class="text-center text-white font-sans font-bold text-4xl my-0">Next Project</p>
          <h3 class="text-center text-white font-sans font-bold my-0 leading-none">{{ nextTitle }}</h3>
        </div>
        <img :src="nextSrc" alt="" class="w-full h-full absolute top-0 left-0 object-cover z-0" />
      </router-link>
    </ColorSection>

    <Footer />
  </main>
</template>

<style scoped>

@screen lg {
  .page-title {
    font-size: 100px
  }
}

.intro {
  font-size: 24px;
  line-height: 38px;
}

@screen md {
  .intro {
    font-size: 30px;
    line-height: 48px;
  }
}


:slotted(p:not(.large)),
:slotted(li) {
  @apply mb-6;

  font-size: 20px;
}

:slotted(li) {
  @apply relative;
}

:slotted(li::before) {
  @apply block w-5 -ml-7 absolute bg-white;

  content: "";
  height: 3px;
  margin-top: 14px;
}

.bg-white :slotted(li::before) {
  @apply bg-blue
}

.case-study-block {
  height: 300px;
  overflow: hidden;
}

@screen md {
  .case-study-block {
    height: 500px;
  }
}


.case-study-block h3 {
  font-size: 50px;
}

@screen md {
  .case-study-block h3 {
    font-size: 70px;
  }
}

.case-study-block img {
  transition: all .4s ease;
}


.case-study-block:hover img {
  transform: scale(1.1);
}
</style>
