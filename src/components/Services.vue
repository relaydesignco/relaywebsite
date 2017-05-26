<template>
  <div class="services">
    <!--
    <header class="wrapper">
        <h2 class="page_title">{{page_title}}</h2>
    </header>
    -->
    <article class="wrapper">
      <header class="fadein">
          <h2 class="intro">We design the brands, digital interactions, and physical spaces that shape how people experience your company.</h2>
      </header>
        <!--
        <h3>We are focused on the total experience people have with your company, from when they first search for your product, to when they rave about it to their friends.</h3>
        -->
      <section class="slat">
        <div class="column-two-thirds">
          <h3>Experience Design</h3>
          <p></p>
          <ul class="dash-list">
            <li>Customer Touchpoint Analysis</li>
            <li>User Research</li>
            <li>Competitive Audits</li>
            <li>Experience Strategy</li>
          </ul>
        </div>
        <!--
        <div class="column-half">
          <img src="/static/company-small-1.jpg" />
        </div>
        -->
      </section>

      <section class="slat">
        <div class="column-two-thirds">
          <h3>Brand Development</h3>
          <p></p>
          <ul class="dash-list">
            <li>Naming</li>
            <li>Brand Strategy</li>
            <li>Logo and Identity System Design</li>
            <li>Print Collateral Design</li>
          </ul>
        </div>
        <!--
        <div class="column-half">
          <img src="/static/company-small-1.jpg" />
        </div>
        -->
      </section>

      <section class="slat">
        <div class="column-two-thirds">
          <h3>Product, Service, and Space Design</h3>
          <p></p>
          <ul class="dash-list">
            <li>UI/UX Design</li>
            <li>Mobile Application Development</li>
            <li>Packaging</li>
            <li>Web Design & Development</li>
            <li>Environment & Exhibit Design</li>
          </ul>
        </div>
        <!--
        <div class="column-half">
          <img src="/static/company-small-1.jpg" />
        </div>
        -->
      </section>

      <section>
        <header class="section-heading">
          <h2>We work with forward-thinking companies of all sizes, in all stages.</h2>
        </header>
        <div class="body">
          <p>
            <strong>New Businesses</strong><br>
            We partner with entrepreneurs to launch new companies, acting as the design and technology team, to help design and build initial offerings and support operations until an internal team is ready.
          </p>
          <p>
            <strong>Growing Companies</strong><br>
            Expansion exposes new challenges of scale as the number of customers, employees, and vendors increase dramatically. How do you maintain a consistent brand? How do you communicate with a decentralized team? We work with you to identify the biggest pain points and help design tools and systems to manage growth.
          </p>
          <p>
            <strong>Mature Brands</strong><br>
            We work with established brands to address new opportunities with a fresh perspective. Test new ideas rapidly, be a bridge between departments, connect with customers in new markets or verticals - our team can help spur innovation and growth within your organization.
          </p>
        </div>
      </section>

    </article>
  </div>

</template>

<script>

export default {
  name: 'services',
  components: {
  },
  data () {
    return {
      page_title: 'Services',
      feature_image_filename: ''
    }
  },
  head: {
    title: function () {
      return {
        inner: this.page_title
      }
    },
    meta: [
      { name: 'description', content: 'Relay designs the brands, digital interactions, and physical spaces that shape how people experience your company.'}
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/_variables.scss";

  .column-two-thirds {

    .dash-list li {
      margin-bottom: .3em;
    }
  }

</style>
