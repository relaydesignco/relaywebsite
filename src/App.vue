<template>
  <div id="app" :class="this.$route.name">

    <transition name="gameTransition">
      <breakout v-if="gameActive"></breakout>
    </transition>

    <navbar v-bind:class="[!gameActive ? 'active' : '']"></navbar>

    <section v-bind:class="[!gameActive ? 'active' : '']">
      <div class="page-content">
          <router-view></router-view>
      </div>
      <sitefooter></sitefooter>
    </section>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Sitefooter from './components/Sitefooter'
import Breakout from './components/Breakout'
import constants from './constants/constants'

export default {
  name: 'app',
  components: {
    Navbar,
    Sitefooter,
    Breakout
  },
  computed: {
    gameActive: function () {
      if (this.$store.state.gameState === constants.gameStates.INACTIVE) {
        return false;
      } else {
        return true;
      }
    }
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Karla');
  @import "./assets/base.scss";

/*
[enter] => [enter-active] => [no transition class] => [leave] => [leave-active] => [no transition class]
 */

.gameTransition-enter-active,
.gameTransition-leave-active {
  transition: height .3s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.gameTransition-enter-active {
  height: 400px;
}
.gameTransition-enter,
.gameTransition-leave-active {
  height: 0;
}
.gameTransition-leave {
  height: 400px;
}

</style>

