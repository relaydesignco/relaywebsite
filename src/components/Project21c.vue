<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Growing to scale</span> 21c Museum Hotels</h2>
          <p class="intro">Long term partner. Challenge is to help an existing brand grow to scale while preserving brand integrity and adapting to new markets, new tech, changes in hosplitality trends.  We helped them by serving as partners to their creative team, providing design and tech services and brand consulting.</p>
        </section>
        
        <img src="/static/project-21c-feature.jpg" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Adapting to rapid growth</h3>
              <p>Talk about how 21c grew from 1 to X locations in XX years, and we’ve been with them for X. Talk about need to adapt quickly when going into new markets, and the need to respond to changes in the industry, new marketing channels. How we provided team with design tools like templates, standards, etc to use themselves.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-21c-ad.jpg" />
            </div>
          </div>
        </section>

        <img src="/static/project-21c-collateral.jpg" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Driving revenue through digital</h3>
              <p>Talk about success of marketing site, how many bookings are direct, important for revenue. How we did user testing and rely on analytics to ensure usability. Scale of multi-site installation and size of team involved, the CMS requirements for that… </p>
            </div>
            <div class="column-half">
              <img src="/static/fpo_large.png" />
            </div>
          </div>
        </section>      

        <img src="/static/fpo_large.png" class="feature" />

        <section class="wrapper text-center">
          <h3>A family of distinctive brands</h3>
          <p class="intro">Talk about how each location has at least one restaurant, so they all need id’s. Try to represent local flavors in cuisine and design. Always paying reference to history of buildings, city, etc.</p>
          <div class="flex-grid">
            <div class="column-third">
              <img src="/static/project-21c-graydudley.jpg" />
            </div>
            <div class="column-third">
              <img src="/static/project-21c-hive.jpg" />
            </div>
            <div class="column-third">
              <img src="/static/project-21c-lockbox.jpg" />
            </div>
            <div class="column-third">
              <img src="/static/project-21c-maryeddys.jpg" />
            </div>
            <div class="column-third">
              <img src="/static/project-21c-metropole.jpg" />
            </div>
            <div class="column-third">
              <img src="/static/project-21c-proof.jpg" />
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
  name: 'Project21c',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Projects: 21c',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
  
  @import "../assets/project.scss";  

</style>
