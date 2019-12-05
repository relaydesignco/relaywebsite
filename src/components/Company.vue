<template>
  <div class="company">
    <!--
        <header class="wrapper">
            <h2 class="page_title">{{page_title}}</h2>
        </header>
    -->

    <img :src="feature_image_filename" class="featured-image" :alt="feature_image_alt" />

    <article class="wrapper">
      <header class="fadein">
        <h2
          class="intro"
        >We&rsquo;re a cross-disciplinary team that helps clients use design and technology to meet business challenges and improve customer experiences.</h2>
      </header>
      <section class="slat">
        <div class="column-half">
          <h3>We speak digital... and analog.</h3>
          <p>Our team understands that successful brands communicate consistently across all channels – from print to digital to environmental experiences. Our designers, developers, and strategists help bridge the gap between channels to deliver a cohesive, compelling experience for your customers.</p>
        </div>
        <div class="column-half">
          <img src="/static/company-small-1.jpg" alt="the team at work in the meeting room" />
        </div>
      </section>

      <section class="slat">
        <div class="column-half">
          <h3>Experience counts.</h3>
          <p>Relay may be the new kid on the block, but the team behind Relay has been in the industry for a good while. With over 20 years of experience, our team understands that although design trends come and go, the principles of good design are timeless. We try to reflect those principles in every project.</p>
        </div>
        <div class="column-half">
          <img src="/static/company-small-2.jpg" alt="the team and 1 of the office dogs" />
        </div>
      </section>

      <h2>The Team</h2>
      <section class="row compressed flex-grid" id="teamMembers">
        <div class="column-quarter">
          <img src="/static/company-headshot-brian.jpg" alt="Brian Johnson" />
          <h4>Brian Johnson</h4>
          <p>Designer / Operations</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.instagram.com/pokehill/" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brianatmindsalt/" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-drew.jpg" alt="Drew McChesney" />
          <h4>Drew McChesney</h4>
          <p>Strategy / Operations</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://twitter.com/mcchesney" target="_blank">
                <img src="/static/icon_twitter.svg" class="icon" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/drewmcchesney/" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-mike.jpg" alt="Mike Casto" />
          <h4>Mike Casto</h4>
          <p>Designer</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.linkedin.com/in/mike-casto-7661817/" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-ashley.jpg" alt="Ashley Revlett" />
          <h4>Ashley Revlett</h4>
          <p>Designer / Developer</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.instagram.com/backlashblues/" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashley-revlett-40a96917/" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-lauren.jpg" alt="Lauren Graehler" />
          <h4>Lauren Graehler</h4>
          <p>Designer</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.instagram.com/lagraeh/" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-aaron.jpg" alt="Aaron Fautz" />
          <h4>Aaron Fautz</h4>
          <p>Developer</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://www.instagram.com/corpsegrindersneck/" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div class="column-quarter">
          <img src="/static/company-headshot-david.jpg" alt="David Soards" />
          <h4>David Soards</h4>
          <p>Developer</p>
          <ul class="inline-list icon-list">
            <li>
              <a href="https://twitter.com/ninjasoards" target="_blank">
                <img src="/static/icon_twitter.svg" class="icon" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davidysoards/" target="_blank">
                <img src="/static/icon_linkedin.svg" class="icon" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ninjasoards/" target="_blank">
                <img src="/static/icon_instagram.svg" class="icon" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "company",
  components: {},
  data() {
    return {
      page_title: "Company",
      feature_image_filename: "/static/company-large.jpg",
      feature_image_alt: "Relay Design Co bullpen"
    };
  },
  head: {
    title: function() {
      return {
        inner: this.page_title
      };
    },
    meta: [
      {
        name: "description",
        content:
          "Relay is a cross-disciplinary team that helps clients use design and technology to meet business challenges and improve customer experiences."
      }
    ]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss">
#teamMembers {
  margin-top: 2rem;
}
.flex-grid {
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
  }
  p {
    margin: 0;
    font-size: 0.8em;
  }
}
</style>
