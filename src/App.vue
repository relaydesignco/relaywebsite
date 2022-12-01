<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// close menu when nav link is clicked
const showMenu = ref(false)
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

// change hamburger and logo color if over white bg
const pageView = ref<HTMLElement | null>(null)
// @ts-ignore
const bgColor = computed(() => pageView.value?.bg) // trust that all pageview components expose bg
const inverseColor = computed(() => {
  switch(bgColor.value) {
    case 'white':
      return 'black'
    case 'blue':
      return 'pink'
    case 'red':
      return 'white'
    case 'pink':
      return 'blue'
    case 'orange':
      return 'yellow'
    case 'yellow':
      return 'pink'
    case 'green':
      return 'pink'
    default:
      return 'blue'
  }
})

// translate logo "lay" and bar if we've scrolled
let isScrolled = ref(false)
const scrollTriggerY = 64
function handleScroll() {
  if (window.scrollY > scrollTriggerY && isScrolled.value == false) {
    isScrolled.value = true
  } else if (window.scrollY <= scrollTriggerY && isScrolled.value == true) {
    isScrolled.value = false
  }
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

</script>

<template>
  <nav class="navbar fixed w-full top-0 right-0 z-50">
    <router-link to="/" class="inline-block">
      <svg class="logo" width="115" height="64" viewBox="0 0 115 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :class="`fill-${inverseColor}`" d="M26.172 51.9486H29.354C29.44 51.9486 29.526 51.8626 29.526 51.7766V42.9186C29.526 42.9186 29.526 40.5106 30.3 38.5326C30.902 37.1566 32.45 35.4366 34.428 35.4366C34.944 35.4366 35.46 35.5226 35.976 35.6946C36.492 35.8666 36.922 36.2106 37.266 36.6406C37.438 36.8126 37.61 37.0706 37.696 37.2426C37.782 37.3286 37.868 37.3286 37.868 37.2426L40.448 35.0926C40.534 35.0066 40.534 35.0066 40.448 34.9206C39.846 34.0606 39.072 33.3726 38.126 32.8566C37.18 32.3406 36.148 32.0826 35.03 32.1686C33.912 32.0826 32.794 32.3406 31.762 32.8566C30.73 33.3726 29.87 34.0606 29.268 35.0066L29.096 32.7706C29.096 32.6846 29.01 32.5986 28.924 32.5986H26.172C26.086 32.5986 26 32.6846 26 32.7706V51.6046C26 51.8626 26.086 51.9486 26.172 51.9486Z" />
        <path :class="`fill-${inverseColor}`" d="M55.1507 46.0169L54.9787 46.3609C54.7207 46.9629 54.2047 47.5649 53.6887 47.9949C52.7427 48.8549 51.6247 49.1989 50.3347 49.1129C48.9587 49.1129 47.8407 48.6829 46.8947 47.7369C46.2927 47.1349 45.8627 46.4469 45.5187 45.7589C45.1747 44.9849 45.0027 44.2109 45.0027 43.3509H58.7627C58.8487 43.3509 58.9347 43.2649 58.9347 43.1789V42.0609C58.9347 40.5989 58.7627 39.3089 58.2467 37.9329C57.7307 36.6429 57.0427 35.4389 56.0967 34.4069C55.3227 33.6329 54.3767 33.0309 53.3447 32.6869C52.3127 32.2569 51.2807 32.0849 50.1627 32.1709C49.0447 32.1709 47.9267 32.3429 46.8947 32.7729C45.8627 33.2029 44.9167 33.8049 44.0567 34.6649C43.1107 35.6969 42.4227 36.9009 41.9067 38.1909C41.3907 39.4809 41.2188 41.2009 41.2188 42.3189C41.2188 43.4369 41.3907 45.0709 41.9067 46.3609C42.4227 47.6509 43.1107 48.8549 44.0567 49.8009C44.8307 50.5749 45.7767 51.2629 46.8947 51.6929C47.9267 52.1229 49.0447 52.3809 50.1627 52.3809C54.1187 52.3809 57.1287 50.2309 58.2467 46.7909L55.1507 46.0169ZM50.3347 35.1809C51.0227 35.1809 51.6247 35.2669 52.2267 35.5249C52.8287 35.7829 53.3447 36.1269 53.7747 36.6429C54.7207 37.6749 55.2367 38.9649 55.3227 40.3409H45.1747C45.2607 38.1909 46.9807 35.1809 50.3347 35.1809Z" />
        <path :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="moveable" d="M91.3586 59.6896C91.2726 59.6896 91.1866 59.6036 91.1866 59.5176V56.6796C91.1866 56.5936 91.2726 56.5076 91.3586 56.5076H94.0246C94.3686 56.5076 94.6266 56.5076 94.8846 56.4216C95.1426 56.3356 95.4006 56.2496 95.6586 56.0776C95.9166 55.9056 96.0886 55.7336 96.2606 55.4756C96.4326 55.2176 96.6046 54.9596 96.6906 54.7016L97.8946 51.6056L89.7246 32.8576C89.7246 32.7716 89.7246 32.7716 89.7246 32.6856C89.7246 32.5996 89.8106 32.5996 89.8966 32.5996H93.7666C93.8526 32.5996 93.9386 32.5996 93.9386 32.6856L99.9586 47.2196L105.377 32.6856C105.377 32.5996 105.463 32.5996 105.549 32.5996H109.161C109.247 32.5996 109.247 32.5996 109.333 32.6856C109.333 32.7716 109.419 32.7716 109.333 32.8576L100.131 55.5616C99.3566 57.5396 97.9806 59.7756 94.7986 59.7756L91.3586 59.6896Z" />
        <path :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="moveable" d="M66.7651 24.172C66.7651 24.086 66.6791 24 66.5931 24H59.6271C59.5411 24 59.4551 24.086 59.4551 24.172V26.838C59.4551 26.924 59.5411 27.01 59.6271 27.01H63.2391V45.586V48.94V51.864C63.2391 51.95 63.3251 52.036 63.4111 52.036H66.5931C66.6791 52.036 66.7651 51.95 66.7651 51.864V24.172V24.172Z" />
        <path :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="moveable" d="M88.8627 48.9399H88.0027C87.4867 48.9399 87.0567 48.8539 87.0567 47.9079V38.7919C87.0567 37.7599 86.8847 36.8139 86.4547 35.9539C85.4227 33.5459 82.8427 32.1699 79.5747 32.1699C78.4567 32.1699 77.4247 32.2559 76.3927 32.6859C75.3607 33.0299 74.4147 33.6319 73.6407 34.3199C73.1247 34.8359 72.6947 35.4379 72.3507 36.1259C72.0927 36.6419 72.0067 37.0719 71.9207 37.5879C71.9207 37.6739 72.0067 37.7599 72.0927 37.7599L75.1887 38.1899C75.2747 38.1899 75.3607 38.1899 75.4467 38.0179V37.9319C75.5327 37.2439 75.7907 36.6419 76.3067 36.1259C77.2527 35.2659 78.1987 35.0079 79.5747 35.0079C80.9507 35.0079 81.7247 35.2659 82.5847 36.0399C83.2727 36.7279 83.4447 37.5019 83.4447 38.6199V39.8239L77.7687 40.1679C73.0387 40.4259 70.8887 43.5219 70.8887 46.5319C70.8887 49.2839 73.0387 52.2939 77.5967 52.2939C78.8007 52.2939 79.9187 52.1219 80.9507 51.6059C82.0687 51.0899 82.9287 50.4019 83.7027 49.4559C83.7027 49.7999 83.8747 50.1439 84.0467 50.4879C84.2187 50.8319 84.4767 51.0899 84.7347 51.3479C84.9927 51.6059 85.3367 51.7779 85.6807 51.8639C86.0247 51.9499 86.3687 52.0359 86.7127 52.0359H88.7767C88.8627 52.0359 88.9487 51.9499 88.9487 51.8639V49.1979C89.0347 49.0259 88.9487 49.0259 88.8627 48.9399ZM83.6167 43.6079C83.6167 44.3819 83.5307 45.0699 83.1867 45.8439C82.9287 46.5319 82.4987 47.2199 81.9827 47.7359C81.4667 48.2519 80.8647 48.5959 80.2627 48.8539C79.5747 49.1119 78.8867 49.1979 78.1987 49.1979C75.9627 49.1979 74.6727 48.1659 74.6727 46.2739C74.6727 44.0379 76.7367 43.0919 78.6287 43.0059L83.6167 42.7479V43.6079Z" />
        <path :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="moveable" d="M111.052 38.8779C111.052 38.9641 111.138 38.9641 111.138 39.0502C111.138 38.9641 111.052 38.9641 111.052 38.8779Z" />
        <path :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="moveable" d="M110.714 38.1904L110.629 38.2756C110.629 38.1904 110.714 38.1904 110.714 38.1904Z" />
        <rect :class="[`fill-${inverseColor}`, {moved : isScrolled}]" class="bar" x="25" y="60" width="34" height="3" />
      </svg>
    </router-link>
    <button class="hamburger absolute z-20 right-7 top-7 text-black border-0 p-0" :class="{close : showMenu}" @click.prevent="showMenu = !showMenu">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect :class="showMenu == false ? `fill-${inverseColor}` : `fill-${bgColor}`" class="nav-icon-line line-1" width="32" height="3"/>
        <rect :class="showMenu == false ? `fill-${inverseColor}` : `fill-${bgColor}`" class="nav-icon-line line-2" width="32" height="3" y="10"  />
        <rect :class="showMenu == false ? `fill-${inverseColor}` : `fill-${bgColor}`" class="nav-icon-line line-3" width="32" height="3" y="20"  />
      </svg>
    </button>
    <div class="menu absolute right-0 top-0 w-full md:w-1/2 lg:w-1/3 h-screen z-10" :class="[{ showMenu: showMenu }, `bg-${inverseColor}`]">
      <div class="nav-menu flex items-start flex-col p-10 pt-32 h-full">
        <router-link class="nav-link" :class="`text-${bgColor}`" to="/work">
          <span class="bar"></span>
          <span class="text">Work.</span>
        </router-link>
        <router-link class="nav-link" :class="`text-${bgColor}`" to="/approach">
          <span class="bar"></span>
          <span class="text">Approach.</span>
        </router-link>
        <router-link class="nav-link" :class="`text-${bgColor}`" to="/about">
          <span class="bar"></span>
          <span class="text">About.</span>
        </router-link>
        <div class="mt-auto font-bold">
          <span class="font-sans text-base" :class="`text-${bgColor}`">Talk to us:</span><br />
          <a class="font-sans font-base text-base no-underline" :class="`text-${bgColor}`" href="mailto:hello@relaydesign.co">hello@relaydesign.co</a>
        </div>
      </div>
    </div>
  </nav>

  <router-view :style="{ 'touch-action': showMenu ? 'none' : '' }" v-slot="{ Component }">
    <component ref="pageView" :is="Component" />
  </router-view>
</template>

<style scoped>
.navbar {
  --movement-transition: .3s ease-in-out;
  --color-transition: 1s ease;
}

.nav-icon-line, .logo path {
  transition: background-color var(--color-transition), fill var(--color-transition), transform var(--movement-transition);
}

.logo .moveable.moved {
  transform: translate(0, -60px);
}

.logo .bar {
  transform: translate(-100px, 0);
  transition: transform var(--movement-transition);
}

.logo .bar.moved {
  transform: translate(0, 0);
}

.menu {
  transform: translateX(100%);
  transition: all var(--movement-transition);
}

.menu.showMenu {
  transform: translateX(0);
}

.nav-link {
  @apply text-4xl font-sans mb-4 relative inline-block font-bold;
}

.nav-link .text {
  @apply inline-block z-20 relative
}
.nav-link .bar {
  @apply inline-block w-full h-12 bg-yellow absolute top-0 left-0 z-10 pr-3;

  transform: scale(0, 100%);
  transform-origin: left center;
  transition: all var(--movement-transition);
}

.nav-link.text-yellow .bar {
  @apply bg-black
}

.nav-link:hover .bar,
.nav-link .router-link-active .bar {
  transform: scale(100%, 100%);
}

.nav-link .router-link-active .bar {
  height: 5px;
  top: 3.1rem;
}

.hamburger {
  animation: bounce-top 1.2s both;
}

 @keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
  }
  24% {
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
}

.hamburger .nav-icon-line {
  transition: fill var(--color-transition), transform var(--movement-transition);
  transform-origin: center center;
  transform: scaleX(100%);
}

.hamburger .nav-icon-line.line-1 {
  transform-origin: top left;
}

.hamburger .nav-icon-line.line-3 {
  transform-origin: bottom left;
}

.hamburger.close .nav-icon-line.line-1 {
  transform: rotate(45deg) translate(4px, -1px);
}

.hamburger.close .nav-icon-line.line-2 {
  transform: scaleX(0);
}

.hamburger.close .nav-icon-line.line-3 {
  transform: rotate(-45deg) translate(7px, 8px);
}

</style>
