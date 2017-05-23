<template>
  <div class="services">

    <header class="wrapper">
        <h2 class="page_title">{{page_title}}</h2>
    </header>

    <article class="wrapper">
      <header>
        <h2>Relay designs and builds the brands, digital interactions, and physical spaces that shape how people experience your company. </h2>
        <h3>We are focused on the total experience people have with your company, from when they first search for your product, to when they rave about it to their friends.</h3>
      </header>
      <section class="service">
        <header>
          <h3>Experience Design</h3>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!</p>
        <ul>
          <li>Consulting</li>
          <li>Customer Research</li>
        </ul>
      </section>
      <section class="service">
        <header>
          <h3>Brand Development</h3>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!</p>
        <ul>
          <li>Naming</li>
          <li>Brand Strategy</li>
          <li>Identity</li>
        </ul>
      </section>
      <section class="service">
        <header>
          <h3>Product, Service, and Space Design</h3>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi officiis nostrum recusandae aut iste, nihil aliquam ea et. Quam, repellendus explicabo omnis in fugiat voluptatem suscipit corporis nihil soluta!</p>
        <ul>
          <li>Interaction Design</li>
          <li>Mobile &amp; Web Application Development</li>
          <li>Packaging</li>
          <li>Art Direction</li>
          <li>UI/UX Design</li>
          <li>Physical Environments and Exhibitions</li>
        </ul>

      </section>

      <section class="work-with-us">
        <header>
          <h3>Working with Us</h3>
        </header>
        <p>We work with forward-thinking companies of all sizes, in all stages.</p>
        <p>We partner with entrepreneurs to launch new companies, acting as the design and technology team, to help design and build initial offerings and support operations until an internal team is ready.</p>
        <p>We work with growing brands, addressing challenges of scale as the number of customers, employees, and vendors increase dramatically. How do you maintain a consistent brand? How do you visualize the ever-growing stream of data? How do you communicate with a decentralized team? We work with you to identify the biggest pain points and help design tools and systems to manage growth.  </p>
        <p>We work with established brands to address new opportunities with a fresh perspective. Test new ideas rapidly, be a bridge between departmental silos, connect with customers in new markets or verticals - our team can help spur innovation and growth within your organization.</p>
      </section>

      <section class="client-list">
        <header>
          <h3>Client List</h3>
        </header>
        [client list]
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss">

  .flex-grid {
    h4 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 18px;
    }
    p {
      margin: 0;
      font-size: .8em;
    }
  }

</style>
