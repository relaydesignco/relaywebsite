<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Sharing a Vision</span> Garage Bar</h2>
          <p class="intro">Working from vision of chef and owners  – how to bring a large team (inc. interior arch., architects, owners, designers, photographers, etc) together to create a cohesive brand..</p>
        </section>
        
        <img src="/static/project-garage-feature.jpg" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Envisioning a brand with an inspired team</h3>
              <p>Talk about brand id workshop process, PBR, discussions… how we got opionated people to rally around an identity and build it collaboratively from there. Lorme ipsum dolor sit amet consecteur ipsum dolor.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-garage-sign.jpg" />
            </div>
          </div>
        </section>     

        <img src="/static/fpo_large.png" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Local Flavor</h3>
              <p>Talk about bringing history, local influence to identity design. How we did research to understand audience(s) and created a design to resonate with them. </p>
            </div>
            <div class="column-half">
              <img src="/static/project-garage-coaster.jpg" />
            </div>
          </div>
        </section>      


        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>An analog brand in a digital world</h3>
              <p>Talk about how digital drives revenue for restaurants now, and how we made the digital artifacts express the brand and appeal to diners. </p>
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
                <li>Logo and Identity System Design</li>
                <li>Advertising</li>
              </ul>
            </div>
            <div class="column-half">
              <ul class="dash-list">
                <li>Print Collateral Design</li>
                <li>Signage</li>
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
  name: 'ProjectGarage',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Projects: Garage Bar',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
  
  @import "../assets/project.scss";  

</style>
