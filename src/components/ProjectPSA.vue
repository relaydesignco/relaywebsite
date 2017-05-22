<template>
  <div class="projects detail">

        <header class="wrapper">
            <h2 class="page_title"><span>Re-inventing</span> PSA Airlines</h2>
            <p class="intro">PSA Airlines is a regional airline with a storied history. After its parent company merged with American Airlines in 2013, PSA was in need of an updated brand that better reflected its evolving identity. </p>
        </header>

        <img src="/static/fpo_large.png" class="feature" />

        <section class="wrapper">
          <h3>Joining the new American Airlines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
          <img src="/static/fpo_large.png" />
        </section>
      
      <sitefooter></sitefooter>
  </div>

</template>

<script>
import Sitefooter from '../components/Sitefooter'

export default {
  name: 'projectpsa',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Projects',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
  
  @import "../assets/_variables.scss";


</style>
