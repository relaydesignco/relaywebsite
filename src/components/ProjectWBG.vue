<template>
  <div class="projects detail">
        <!--
        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>
        -->
        <section class="wrapper">
          <h2 class="project_title">Introducing <strong>Waterfront Botanical Gardens</strong></h2>
          <p class="intro">When the non-profit organization Botanica began planning a botanical garden in Louisville, they tapped the team from Relay to brand the gardens and create print and digital materials to support their fundraising efforts.</p>
        </section>

        <img src="/static/project-wbg-feature.jpg" class="feature" />

        <section class="wrapper text-center">
            <h3>Communicating a Vision with a Brand</h3>
            <p>Because Waterfront Botanical Gardens was still just an idea when the identity design began, it was crucial that the branding help communicate the vision and inspire the community. The team at Relay used the design of the garden itself as inspiration for the logomark, which alludes to both an aerial view of the landscape and goldenrod, Kentucky's state flower.</p>
            <img src="/static/project-wbg-brand.jpg" class="feature" />
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


        <br />
        <section class="wrapper text-center">
            <h3>Providing tools for growth</h3>
            <p>The team at Relay also designed and developed a content-managed website for the Gardens. The website illustrates the vision for the future gardens, including the various phases of development and fundraising progress. The website also includes an integrated shop for donations and memberships and an event calendars to help organize volunteers.</p>
        </section>

        <img src="/static/project-wbg-web.jpg" class="feature" />


        <section class="wrapper">
          <h3>Services</h3>
          <div class="slat compressed">
            <div class="column-half">
              <ul class="dash-list">
                <li>Brand Strategy</li>
                <li>Naming</li>
                <li>Logo and Identity System Design</li>
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
          <a class="btn prev-btn" href="/project/21c"><span>Previous</span></a>
          <a class="btn next-btn" href="/project/garage-bar"><span>Next</span></a>
        </section>
  </div>

</template>

<script>
export default {
  name: 'ProjectWBG',
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
