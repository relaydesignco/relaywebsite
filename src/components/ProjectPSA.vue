<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Re-inventing</span> PSA Airlines</h2>
          <p class="intro">PSA Airlines is a regional airline with a storied history. After its parent company merged with American Airlines in 2013, PSA was in need of an updated brand that better reflected its evolving identity. </p>
        </section>
        
        <img src="/static/project-psa-feature.jpg" class="feature" />

        <section class="wrapper text-center">
          <h3>Joining the new American Airlines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
          <img src="/static/fpo_large.png" />
        </section>
      
        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Preserving brand equity while modernizing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
            </div>
            <div class="column-half">
              <img src="/static/project-psa-ad.jpg" />
            </div>
          </div>
        </section>

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>A modern website with integrated marketing tools</h3>
              <p>Integrated with CRM, CMS, SEO PPC… lead generation… lorem ipsum dolor sit amet, consectetur adipisicing elit, sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-psa-digital-small.jpg" />
            </div>
          </div>
        </section>      


        <section class="wrapper">
          <h3>Services</h3>
          <div class="slat">
            <div class="column-half">    
              <ul class="dash-list">
                <li>Brand Strategy</li>
                <li>Logo and Identity System Design</li>
                <li>Print Collateral Design</li>
                <li>Advertising</li>
              </ul>
            </div>
            <div class="column-half">
              <ul class="dash-list">
                <li>Website Design & Development</li>
                <li>Intranet Design & Development</li>
                <li>Photography Art Direction</li>
              </ul>
            </div>
          </div>
        </section>      

        <section class="wrapper project-navigation">
          <a class="btn prev-btn" href=""><span>Previous</span></a>
          <a class="btn next-btn" href=""><span>Next</span></a>
        </section>


      <sitefooter></sitefooter>

  </div>

</template>

<script>
import Sitefooter from '../components/Sitefooter'

export default {
  name: 'ProjectPSA',
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
  
  @import "../assets/project.scss";  

</style>
