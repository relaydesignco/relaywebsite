<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const props = defineProps<{
  title: string,
  description: string,
  imgSrc: string,
  routeUrl: string,
  textColor: string,
  clipColor: string,
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
  <div class="relative mb-12 md:h-96" :class="{ isVisible: isVisible, notVisible: !isVisible}">
    <router-link :to="routeUrl" class="md:h-96 flex flex-col md:flex-row items-center justify-end mb-8 title">
      <div class="relative z-10 md:w-1/2 order-2 md:order-1">
        <h2>{{ title }}</h2>
        <p class="text-black description medium inline-block w-auto mb-12 md:mb-0 ml-4">{{ description }}</p>
      </div>
      <img :src="imgSrc" alt="" class="content-img md:absolute md:left-2 order-1 md:order-2 z-0 md:h-96 mb-2 md:w-1/2 object-cover" />
    </router-link>
    <div ref="visibleMarker" class="visibleMarker"></div>
  </div>
</template>

<style scoped>

h2 {
  line-height: 1;
  color: #0000;
  background:
    linear-gradient(90deg, v-bind(clipColor) 50%,v-bind(textColor) 0)
    var(--_p,100%)/200% no-repeat;
  -webkit-background-clip: text;
          background-clip: text;
  transition: .15s ease-in;
  margin-left: -120px;
  margin-right: 60px;
}

a:hover h2 {
  --_p: calc(100% - 112px * -1);
}

.visibleMarker {
  position: absolute;
  top: 40%;
  height: 10%;
  width: 5px;
  /* background: blue; */
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

 a:hover .description {
  opacity: 1;
}

.content-img  {
  transition: opacity .5s ease, transform .5s ease;
  transform-origin: center right;
  opacity: 0;
}

a:hover .content-img {
  opacity: 1;
}

a:hover .content-img {
  transform: translate(-1rem, -.4rem);
}

</style>
