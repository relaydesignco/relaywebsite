<template>
  <div id="app" :class="this.$route.name">
    <navbar></navbar>

    <div class="page-content">
      <transition name="custom">
        <router-view></router-view>
      </transition>
    </div>
    <sitefooter></sitefooter>
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
  }
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

