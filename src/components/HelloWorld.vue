<template>
  <div class="services">
    <article class="wrapper">
      <header class="page-header">
          <h2>Merger Creates New Branding and Technology Company, Relay Design Co.</h2>
          <h3>Focusing on innovation through branding, design and technology</h3>
      </header>

      <p><strong>Louisville, KY. May 24, 2017</strong> – Mindsalt, a design and branding firm, and Jet A Studio, a digital design and development company, have announced a merger of their operations. The two companies will operate under the new entity Relay Design Co., specializing in creating the brands, digital interactions, and physical spaces that shape how people experience companies.</p>
      <p>“Our two companies have worked together for years to execute innovative projects for some of Louisville’s most forward-thinking companies,” says Relay Partner, Brian Johnson. “This merger brings an experienced team of designers and developers together to provide a comprehensive set of services to clients. At Relay, our mission is to help companies use design and technology to drive innovation and fuel growth.” </p>
      <p>Relay has worked with clients spanning a variety of industries including aviation, healthcare, technology and food and beverage. The firm’s Louisville-based clients include 21c Museum Hotels, Humana and Waterfront Botanical Gardens. The agency also retains clients in Nashville, Maryland, Cincinnati and Dayton. Relay plans to expand both its local and regional client base in the coming year. </p>
      <p>“Relay can partner with a variety of companies, from start-ups looking to scale their business to larger companies testing new ideas and products,” says Drew McChesney, Partner at Relay. “Our team has broad experience and skill sets across design and technology, which can help companies quickly create change that has a meaningful impact on their organization.” </p>
      <p>Relay has rehabbed the anchor spot at the historic Whitestone Building on West Main Street. The company’s new 3,100 square foot office features both private offices and open spaces for creative collaboration, with room for future growth.</p>
      <p>
        <strong>About Relay Design Co.</strong><br>
        Based in Louisville, Kentucky, Relay Design Co. partners with entrepreneurs and established businesses to improve customer experience through design. With over 20 years of experience, the Relay team works with local, regional and national companies in the hospitality, food and beverage, consumer retail, and healthcare industries. Relay’s designers and developers focus on helping companies meet business challenges – from re-inventing and introducing new brands to market, to addressing issues of scale, and helping clients better understand data through design.
      </p>
    </article>
  </div>
</template>

<script>

export default {
  name: 'hello-world',
  components: {
  },
  data () {
    return {
      page_title: 'Hello World',
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

  .page-header {
    margin-bottom: 3em;

    h2 {
      font-size: 2em;
      font-weight: normal;
      margin-bottom: 0;
    }

    h3 {
      margin: .5em 0 0 0;
    }
  }

  p {
    max-width: 800px;
  }


</style>
