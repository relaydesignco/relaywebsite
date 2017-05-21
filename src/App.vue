<template>
  <div id="app" :class="this.$route.name">
    <navbar></navbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Karla');
  @import "./assets/base.scss";

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  } 
</style>

