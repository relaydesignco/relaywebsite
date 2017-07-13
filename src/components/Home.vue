<template>
  <div class="nowrap">

    <div class="wrapper">

      <article class="home">
          <header class="fadein">
            <h2>Design better experiences</h2>
          </header>
          <section class="fadein">
            <p>We help companies use design and technology to grow and innovate through branding, experience design, and digital applications.</p>
          </section>
          <section class="fadein" id="home-projects">
            <p>Hello <router-link :to="'hello-world'" class="major">world</router-link>.<br />
              See past <router-link :to="'projects'" class="major">projects</router-link>.<br />
              Learn about <router-link :to="'services'" class="major">our services</router-link>.<br />
              Meet the <router-link :to="'company'" class="major">team</router-link>.<br />
            </p>
          </section>
        </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {},
    mounted () {},
    head: {
      meta: [
        { name: 'description', content: 'Relay helps companies use design and technology to grow and innovate through branding, experience design, and digital applications.'}
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss">
  @import "../assets/_variables.scss";

  .Home {

    .logo {
      margin-top: 250px;
      margin-bottom: 40px;
      width: 190px;

      img {
        width: 100%;
      }
    }

    h2 {
      font-size: 2.2em;
      margin-bottom: .25em;
    }

    article {
      max-width: 620px;
      margin: 0;

      section {
        @media only screen and (min-width: $screen-md-min) {
          margin-bottom: 6em;

          p {
            font-size: 28px;
          }
        }
      }
    }

  }

</style>
