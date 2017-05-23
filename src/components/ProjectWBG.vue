<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Introducing</span> Waterfront Botanical Gardens</h2>
          <p class="intro">Create and introduce new brand that reflects community, motivates donors, and can grow as location is built out. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
        </section>
        
        <img src="/static/project-wbg-feature.jpg" class="feature" />

        <section class="wrapper text-center">
            <h3>Communicating a Vision with a Brand</h3>
            <p>Talk about how WBG doesn’t exist yet, so creating a shared vision and brand to rally behind is critical to motivating donors and inspiring the community. Architects led the charge, we played off their vision to arrive at the mark, which represents both local plant goldenrod and an aerial view of the future gardens themselves. Got input from community on naming, validating assumptions and testing feasability through surveys, competitive research… </p>
        </section>

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <img src="/static/project-wbg-brand-2.jpg" />
            </div>
            <div class="column-half">
              <img src="/static/project-wbg-brand-1.jpg" />
            </div>
          </div>
        </section>      

      <img src="/static/fpo_large.png" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Providing tools for growth</h3>
              <p>How we provided digital tools to support business processes - donations collection, memberships, rsvps, etc.  isicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Knowing fundraising goals change, and need to accomodate different phases of development.</p>
            </div>
            <div class="column-half">
              <img src="/static/fpo_large.png" />
            </div>
          </div>
        </section>     


        <section class="wrapper">
          <h3>Services</h3>
          <div class="slat">
            <div class="column-half">    
              <ul class="dash-list">
                <li>Brand Strategy</li>
                <li>Naming, Logo and Identity System Design</li>
              </ul>
            </div>
            <div class="column-half">
              <ul class="dash-list">
                <li>Print Collateral Design</li>
                <li>Website Design & Development</li>
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
  name: 'ProjectWBG',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Projects: Waterfront Botanical Gardens',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
  
  @import "../assets/project.scss";  

</style>
