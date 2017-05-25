<template>
  <div class="projects detail">
        <!--
        <header class="wrapper">
            <h1 class="page_title">{{page_title}}</h1>
        </header>
        -->
        <section class="wrapper">
          <h2 class="project_title">Re-inventing <strong>PSA Airlines</strong></h2>
          <p class="intro">PSA Airlines is a regional airline with a storied history. After its parent company merged with American Airlines, PSA was in need of an updated brand that better reflected its evolving identity. In addition to re-branding PSA, the team at Relay helped the company respond to an industry-wide pilot shortage by providing design, branding, and digital support during recruitment initiatives.</p>
        </section>

        <img src="/static/project-psa-feature.jpg" class="feature" />

        <section class="wrapper text-center">
          <h3>Re-branding to join the new American Airlines</h3>
          <p>In 2003, PSA's parent company USAirways merged with American Airlines. As a subsidiary of the new American Airlines, PSA needed an updated logo and brand identity that reflected its new ownership while honoring its history. The team at Relay led the brand strategy and design process. The new logo references PSA's historical identity – the familiar smiling airplanes from the 1970s –  while bringing the overall look and feel more inline with the more modern American Airlines brand.
          </p>
        </section>

        <section class="wrapper">
          <div class="slat">
            <div class="column-half">
              <h3>Addressing industry challenges through design</h3>
              <p>The team at Relay helped PSA Airlines respond to the industry-wide pilot shortage by providing design support during recruiting initiatives, including collateral design, advertising, and photography art direction. The team at Relay also provided support for digital marketing efforts, in collaboration with third-party specialists in search engine optimization and search marketing.
              </p>
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
              <p>As a regional carrier for American Airlines, PSA's focus is on operations and recruitment. The team at Relay designed and developed a website that supports PSA's business goals by focusing on generating and tracking new-hire leads. The mobile-friendly, content-managed website allows PSA staff to update content and easily make changes as marketing efforts evolve.</p>
            </div>
            <div class="column-half">
              <img src="/static/project-psa-digital-small.jpg" />
            </div>
          </div>
        </section>


        <section class="wrapper">
          <h3>Services</h3>
          <div class="slat compressed">
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
          <a class="btn prev-btn" href="/project/garage-bar"><span>Previous</span></a>
          <a class="btn next-btn" href="/project/21c"><span>Next</span></a>
        </section>

  </div>

</template>

<script>

export default {
  name: 'ProjectPSA',
  components: {
  },
  data () {
    return {
      page_title: 'Projects',
    }
  },
  head: {
    title: function () {
      return {
        inner: this.page_title
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/project.scss";

</style>
