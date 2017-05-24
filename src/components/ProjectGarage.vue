<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Sharing a Vision</span> Garage Bar</h2>
          <p class="intro">The team at Relay worked with an inspired chef and innovative restauranteur to create a brand identity that blends perfectly with the atmosphere and influences of the restaurant. </p>
        </section>
        
        <img src="/static/project-garage-feature.jpg" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Collaborating on a vision</h3>
              <p>The team at Relay worked with the talented folks behind Garage Bar to imagine designs that complemented the chef and restauranteur's vision – from the menus on the tables to the signs on the doors, as well as marketing materials and the website.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-garage-sign.jpg" />
            </div>
          </div>
        </section>     


        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Timeless flavor</h3>
              <p>Garage Bar is located in a former automotive garage. It was important for the brand to match the vibe of the space itself, which, although renovated, retains its rough-around-the-edges charm. The team from Relay took inspiration from the design of items left behind by the former tenants – mechanics' invoice slips, a vintage calendar, a typeface found on old-school ballpoint pens.
              Collectively, these elements add up to a memorable experience for guests.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-garage-coaster.jpg" />
            </div>
          </div>
        </section>      



        <div class="flex-grid">
          <div class="column-third">
            <img src="/static/project-garage-etc-1.jpg" />
          </div>
          <div class="column-third">
            <img src="/static/project-garage-etc-3.jpg" />
          </div>
          <div class="column-third">
            <img src="/static/project-garage-etc-2.jpg" />
          </div>
        </div>

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
                <li>Collateral Design</li>
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
export default {
  name: 'ProjectGarage',
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
