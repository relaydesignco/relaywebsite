<template>
  <div class="projects detail">

        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>

        <section class="wrapper">
          <h2 class="project_title"><span>Growing to scale</span> 21c Museum Hotels</h2>
          <p class="intro">Over the past nine years, the Relay team has helped the 21c brand grow rapidly while maintaining brand integrity. We've served as creative partners to their marketing team, providing design and technology services and consulting, as well as helping them adapt to new technologies, trends and markets.</p>
        </section>
        
        <img src="/static/project-21c-feature.jpg" class="feature" />

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Adapting to rapid growth</h3>
              <p>When a company grows rapidly, it can be a challenge to maintain consistency in branding efforts. The team at Relay helped 21c Museum Hotels maintain the integrity of their brand while expanding from one location to six. As 21c's in-house capabilities have grown, our role has shifted to include providing more standards, templates and tools that 21c staff can edit directly, as well as providing full-service design and technology capabilities. 
              </p>
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
              <h3>Digital drives revenue</h3>
              <p>For any hospitality business, a well-designed and user-friendly website is vital to revenue, as hotels now have to compete with discounted or commission-based travel websites for bookings. The Relay team did extensive user testing and design research prior to creating the design for the new website to ensure it met customers' expectations and increased the ease of booking direct. 21c now enjoys a higher-than-average rate of direct bookings compared to the industry average, an important factor in the hotels' bottom line.</p>
            </div>
            <div class="column-half">
              <img src="/static/fpo_large.png" />
            </div>
          </div>
        </section>      

        <img src="/static/project-21c-web.jpg" class="feature" />

        <section class="wrapper text-center">
          <h3>A family of distinctive brands</h3>
          <p class="intro">21c Museum Hotels is more than just a hotel and museum – each location also features a distinctive restaurant that incorporates local flavors and design elements. The Relay team worked with 21c's marketing and food and beverage teams to create unique identities that reflects the local influences of the menus and interiors. Each restaurant brand is unique, but they're all part of the 21c family.</p>
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
