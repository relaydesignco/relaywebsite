<template>
  <div id="app">
    <header class="wrapper">
        <img src="/static/logo.svg" class="logo" alt="Relay Design Co." />
    </header>
    <navbar></navbar>
    <router-link to="/">Home</router-link>
    <router-link to="/page">Company</router-link>
    <router-view></router-view>
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
</style>

