<script setup lang="ts">
import { ref, Ref, watch, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'


// close menu and scroll to top when nav link is clicked
const showMenu = ref(false)
const route = useRoute()
watch(route, (to) => {
  showMenu.value = false;
  document.body.classList.remove('noScroll')
  window.scrollTo(0, 0);
}, {flush: 'pre', immediate: true, deep: true})

// remove noScroll from body when menu is closed
watch(showMenu, (newVal) => {
  if (newVal == true) {
    document.body.classList.add('noScroll')
  } else {
    document.body.classList.remove('noScroll')
  }
})

// change hamburger and logo color if over white bg
const pageView = ref<HTMLElement | null>(null)
const bgColor = computed(() => pageView.value?.bg)
const navColor = computed(() => {
  if (bgColor.value == 'bg-white') return 'bg-blue';
  return 'bg-white';
})
const logoColor = computed(() => {
  if (bgColor.value == 'bg-white') return 'fill-blue';
  return 'fill-white';
})

</script>

<template>
  <nav class="navbar fixed w-full top-0 right-0 z-50">
    <router-link to="/" class="inline-block mt-7 ml-7">
      <svg class="logo" width="86" height="36" viewBox="0 0 86 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="logoColor" d="M65.3567 35.6896C65.2707 35.6896 65.1847 35.6036 65.1847 35.5176V32.6796C65.1847 32.5936 65.2707 32.5076 65.3567 32.5076H68.0227C68.3667 32.5076 68.6247 32.5076 68.8827 32.4216C69.1407 32.3356 69.3987 32.2496 69.6567 32.0776C69.9147 31.9056 70.0867 31.7336 70.2587 31.4756C70.4307 31.2176 70.6027 30.9596 70.6887 30.7016L71.8927 27.6056L63.7227 8.85761C63.7227 8.77161 63.7227 8.77161 63.7227 8.68561C63.7227 8.59961 63.8087 8.59961 63.8947 8.59961H67.7647C67.8507 8.59961 67.9367 8.59961 67.9367 8.68561L73.9567 23.2196L79.3747 8.68561C79.3747 8.59961 79.4607 8.59961 79.5467 8.59961H83.1587C83.2447 8.59961 83.2447 8.59961 83.3307 8.68561C83.3307 8.77161 83.4167 8.77161 83.3307 8.85761L74.1287 31.5616C73.3547 33.5396 71.9787 35.7756 68.7967 35.7756L65.3567 35.6896Z" />
        <path :class="logoColor" d="M40.7631 0.172C40.7631 0.086 40.6771 0 40.5911 0L33.6251 0C33.5391 0 33.4531 0.086 33.4531 0.172V2.838C33.4531 2.924 33.5391 3.01 33.6251 3.01L37.2371 3.01V21.586V24.94V27.864C37.2371 27.95 37.3231 28.036 37.4091 28.036H40.5911C40.6771 28.036 40.7631 27.95 40.7631 27.864V0.172V0.172Z" />
        <path :class="logoColor" d="M0.172 27.9486H3.354C3.44 27.9486 3.526 27.8626 3.526 27.7766L3.526 18.9186C3.526 18.9186 3.526 16.5106 4.3 14.5326C4.902 13.1566 6.45 11.4366 8.428 11.4366C8.944 11.4366 9.46 11.5226 9.976 11.6946C10.492 11.8666 10.922 12.2106 11.266 12.6406C11.438 12.8126 11.61 13.0706 11.696 13.2426C11.782 13.3286 11.868 13.3286 11.868 13.2426L14.448 11.0926C14.534 11.0066 14.534 11.0066 14.448 10.9206C13.846 10.0606 13.072 9.37264 12.126 8.85664C11.18 8.34064 10.148 8.08264 9.03 8.16864C7.912 8.08264 6.794 8.34064 5.762 8.85664C4.73 9.37264 3.87 10.0606 3.268 11.0066L3.096 8.77064C3.096 8.68464 3.01 8.59864 2.924 8.59864H0.172C0.086 8.59864 0 8.68464 0 8.77064L0 27.6046C0 27.8626 0.086 27.9486 0.172 27.9486Z" />
        <path :class="logoColor" d="M29.1507 22.0159L28.9787 22.3599C28.7207 22.9619 28.2047 23.5639 27.6887 23.9939C26.7427 24.8539 25.6247 25.1979 24.3347 25.1119C22.9587 25.1119 21.8407 24.6819 20.8947 23.7359C20.2927 23.1339 19.8627 22.4459 19.5187 21.7579C19.1747 20.9839 19.0027 20.2099 19.0027 19.3499H32.7627C32.8487 19.3499 32.9347 19.2639 32.9347 19.1779V18.0599C32.9347 16.5979 32.7627 15.3079 32.2467 13.9319C31.7307 12.6419 31.0427 11.4379 30.0967 10.4059C29.3227 9.63194 28.3767 9.02994 27.3447 8.68594C26.3127 8.25594 25.2807 8.08394 24.1627 8.16994C23.0447 8.16994 21.9267 8.34194 20.8947 8.77194C19.8627 9.20194 18.9167 9.80394 18.0567 10.6639C17.1107 11.6959 16.4227 12.8999 15.9067 14.1899C15.3907 15.4799 15.2188 17.1999 15.2188 18.3179C15.2188 19.4359 15.3907 21.0699 15.9067 22.3599C16.4227 23.6499 17.1107 24.8539 18.0567 25.7999C18.8307 26.5739 19.7767 27.2619 20.8947 27.6919C21.9267 28.1219 23.0447 28.3799 24.1627 28.3799C28.1187 28.3799 31.1287 26.2299 32.2467 22.7899L29.1507 22.0159ZM24.3347 11.1799C25.0227 11.1799 25.6247 11.2659 26.2267 11.5239C26.8287 11.7819 27.3447 12.1259 27.7747 12.6419C28.7207 13.6739 29.2367 14.9639 29.3227 16.3399H19.1747C19.2607 14.1899 20.9807 11.1799 24.3347 11.1799Z" />
        <path :class="logoColor" d="M62.8646 24.9399H62.0046C61.4886 24.9399 61.0586 24.8539 61.0586 23.9079V14.7919C61.0586 13.7599 60.8866 12.8139 60.4566 11.9539C59.4246 9.54592 56.8446 8.16992 53.5766 8.16992C52.4586 8.16992 51.4266 8.25592 50.3946 8.68592C49.3626 9.02992 48.4166 9.63192 47.6426 10.3199C47.1266 10.8359 46.6966 11.4379 46.3526 12.1259C46.0946 12.6419 46.0086 13.0719 45.9226 13.5879C45.9226 13.6739 46.0086 13.7599 46.0946 13.7599L49.1906 14.1899C49.2766 14.1899 49.3626 14.1899 49.4486 14.0179V13.9319C49.5346 13.2439 49.7926 12.6419 50.3086 12.1259C51.2546 11.2659 52.2006 11.0079 53.5766 11.0079C54.9526 11.0079 55.7266 11.2659 56.5866 12.0399C57.2746 12.7279 57.4466 13.5019 57.4466 14.6199V15.8239L51.7706 16.1679C47.0406 16.4259 44.8906 19.5219 44.8906 22.5319C44.8906 25.2839 47.0406 28.2939 51.5986 28.2939C52.8026 28.2939 53.9206 28.1219 54.9526 27.6059C56.0706 27.0899 56.9306 26.4019 57.7046 25.4559C57.7046 25.7999 57.8766 26.1439 58.0486 26.4879C58.2206 26.8319 58.4786 27.0899 58.7366 27.3479C58.9946 27.6059 59.3386 27.7779 59.6826 27.8639C60.0266 27.9499 60.3706 28.0359 60.7146 28.0359H62.7786C62.8646 28.0359 62.9506 27.9499 62.9506 27.8639V25.1979C63.0366 25.0259 62.9506 25.0259 62.8646 24.9399ZM57.6186 19.6079C57.6186 20.3819 57.5326 21.0699 57.1886 21.8439C56.9306 22.5319 56.5006 23.2199 55.9846 23.7359C55.4686 24.2519 54.8666 24.5959 54.2646 24.8539C53.5766 25.1119 52.8886 25.1979 52.2006 25.1979C49.9646 25.1979 48.6746 24.1659 48.6746 22.2739C48.6746 20.0379 50.7386 19.0919 52.6306 19.0059L57.6186 18.7479V19.6079Z" />
        <path :class="logoColor" d="M85.0508 14.877C85.0508 14.9631 85.1369 14.9631 85.1369 15.0493C85.1369 14.9631 85.0508 14.9631 85.0508 14.877Z" />
        <path :class="logoColor" d="M84.7141 14.1895L84.6289 14.2746C84.6289 14.1895 84.7141 14.1895 84.7141 14.1895Z" />
      </svg>
    </router-link>
    <button class="absolute z-20 right-7 top-7 bg-opacity-0 text-black border-0 p-0" @click.prevent="showMenu = !showMenu">
      <div :class="navColor" class="nav-icon-line block h-1 w-10 mb-2"></div>
      <div :class="navColor" class="nav-icon-line block h-1 w-10 mb-2"></div>
      <div :class="navColor" class="nav-icon-line block h-1 w-10"></div>
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
        <div class="mt-auto font-bold">
          <span class="font-sans text-base">Talk to us:</span><br />
          <a class="font-sans font-base text-base text-red no-underline" href="mailto:hello@relaydesign.co">hello@relaydesign.co</a>
        </div>
      </div>
    </div>
  </nav>

  <router-view :style="{ 'touch-action': showMenu ? 'none' : '' }" v-slot="{ Component }">
    <component ref="pageView" :is="Component" />
  </router-view>
</template>

<style scoped>

.nav-icon-line, .logo path {
  transition: all 1.5s ease;
}

.menu {
  transform: translateX(100%);
  transition: all .3s ease;
}

.menu.showMenu {
  transform: translateX(0);
}

.nav-link {
  @apply text-4xl text-black font-sans mb-4 relative inline-block font-bold;
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
