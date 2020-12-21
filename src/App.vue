<template>
  <div id="app" :class="this.$route.name">
    <navbar v-if="this.$route.name !== 'holiday-message'"></navbar>

    <div v-if="this.$route.name !== 'holiday-message'" class="page-content">
      <transition name="custom">
        <router-view></router-view>
      </transition>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
    <sitefooter v-if="this.$route.name !== 'holiday-message'"></sitefooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sitefooter from './components/Sitefooter'

export default {
  name: 'app',
  components: {
    Navbar,
    Sitefooter
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Karla');
  @import "./assets/base.scss";

  // @keyframes slideInFromLeft {
  //   0% {
  //     transform: translateX(0);
  //   }
  //   100% {
  //     transform: translateX(100%);
  //   }
  // }
  // .custom-enter-active, .custom-leave-active {
  //   transition-property: opacity;
  //   transition-duration: .25s;
  //   animation: .5s ease-out 0s 1 slideInFromLeft;
  // }

  // .custom-enter-active {
  //   transition-delay: .25s;
  // }

  // .custom-enter, .custom-leave-active {
  //   opacity: 0
  // }

  // .fade-enter-active, .fade-leave-active {
  //   transition-property: opacity;
  //   transition-duration: .25s;
  // }

  // .fade-enter-active {
  //   transition-delay: .25s;
  // }

  // .fade-enter, .fade-leave-active {
  //   opacity: 0
  // }
</style>

