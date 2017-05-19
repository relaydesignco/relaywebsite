<template>
  <div id="app">
    <navbar></navbar>
    <homepage></homepage>
  </div>
</template>

<script>
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Homepage,
    Navbar
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Karla');
  @import "./assets/base.scss";
</style>
