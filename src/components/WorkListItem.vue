<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  imgSrc: string,
  routeUrl: string,
  textColor: string,
  clipColor: string,
}>()

</script>

<template>
  <div class="relative mb-36 md:h-80 lg:h-96">
    <router-link :to="routeUrl" class="md:h-80 lg:h-96 flex flex-col md:flex-row items-center justify-end mb-8 title">
      <div class="relative z-10 md:w-1/2 order-2 md:order-1">
        <h2 class="text-blue leading-none">{{ title }}</h2>
        <p class="text-white description medium !leading-tight inline-block w-auto mb-12 md:mb-0 md:ml-8 mt-4">{{ description }}</p>
      </div>
      <img :src="imgSrc" alt="" class="content-img md:absolute md:left-0 order-1 md:order-2 z-0 md:h-80 lg:h-96 mb-2 md:w-1/2 object-cover" />
    </router-link>
  </div>
</template>

<style scoped>

h2 {
  font-size: 40px;
}

@screen md {
  h2 {
    --_p: calc(100% - 120px * -1);
    font-size: 60px;
    color: #0000;
    background:
      linear-gradient(90deg, v-bind(clipColor) 50%,v-bind(textColor) 0)
      var(--_p,100%)/200% no-repeat;
    -webkit-background-clip: text;
            background-clip: text;
    transition: 1.75s ease;
    margin-left: -120px;
    margin-right: 60px;
  }

  a:hover h2 {
    --_p: calc(100% - 80px * -1);
  }

  .content-img  {
    filter: grayscale(1) contrast(.8);
    transition: filter .5s ease, transform 1.75s ease;
    transform-origin: center right;
  }

  a:hover .content-img {
    transform: translate(-40px, -16px);
    filter: grayscale(0) contrast(1);
  }

  p {
    transition: all 1.75s ease;
  }

  a:hover p {
    margin-left: 6px;
  }
}

@screen lg {
  h2 {
    font-size: 80px;
  }
}


</style>
