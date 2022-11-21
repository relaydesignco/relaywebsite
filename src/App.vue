<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const showMenu = ref(false)

// close menu when nav link is clicked
const route = useRoute()
watch(route, (to) => {
  showMenu.value = false;
  document.body.classList.remove('noScroll')
}, {flush: 'pre', immediate: true, deep: true})

// remove noScroll from body when menu is closed
watch(showMenu, (newVal) => {
  if (newVal == true) {
    document.body.classList.add('noScroll')
  } else {
    document.body.classList.remove('noScroll')
  }
})

</script>

<template>
  <nav class="navbar fixed w-full top-0 right-0 z-50">
    <router-link to="/" class="inline-block mt-7 ml-7">
      <img src="/logo.svg" alt="Relay" />
    </router-link>
    <button class="absolute z-20 right-7 top-7 bg-opacity-0 text-black border-0 p-0" @click.prevent="showMenu = !showMenu">
      <div class="block h-1 w-10 bg-white mb-2"></div>
      <div class="block h-1 w-10 bg-white mb-2"></div>
      <div class="block h-1 w-10 bg-white"></div>
    </button>
    <div class="menu absolute right-0 top-0 w-full md:w-1/2 lg:w-1/3 h-screen bg-blue z-10" :class="{ showMenu: showMenu } ">
      <div class="nav-menu flex items-start flex-col p-10 pt-32 h-full">
        <router-link class="nav-link" to="/work">
          <span class="bar"></span>
          <span class="text">Work.</span>
        </router-link>
        <router-link class="nav-link" to="/approach">
          <span class="bar"></span>
          <span class="text">Approach.</span>
        </router-link>
        <router-link class="nav-link" to="/about">
          <span class="bar"></span>
          <span class="text">About.</span>
        </router-link>
        <div class="mt-auto">
          <span class="font-sans text-base">Talk to us:</span><br />
          <a class="font-sans font-base text-base text-red no-underline" href="mailto:hello@relaydesign.co">hello@relaydesign.co</a>
        </div>
      </div>
    </div>
  </nav>

  <router-view :style="{ 'touch-action': showMenu ? 'none' : '' }"></router-view>
</template>

<style scoped>
.menu {
  transform: translateX(100%);
  transition: all .3s ease;
}

.menu.showMenu {
  transform: translateX(0);
}

.nav-link {
  @apply text-4xl text-black font-sans mb-4 relative inline-block;
}

.nav-link .text {
  @apply inline-block z-20 relative
}
.nav-link .bar {
  @apply inline-block w-full h-12 bg-yellow absolute top-0 left-0 z-10 pr-3;

  transform: scale(0, 100%);
  transform-origin: left center;
  transition: all .3s ease;
}

.nav-link:hover .bar {
  transform: scale(100%, 100%);
}

</style>
