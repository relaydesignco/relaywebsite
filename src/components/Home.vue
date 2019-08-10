<template>
  <div class="wrapper">
    <article class="home">
      <header class="fadein">
        <h2>Design better experiences</h2>
      </header>
      <section class="fadein">
        <!-- <p>We help companies use design and technology to grow and innovate through <router-link :to="'project/waterfront-botanical-gardens'">branding</router-link>, <router-link :to="'services'">experience design</router-link> and <router-link :to="'project/21c'">digital applications</router-link>.</p>-->
        <p>We help companies use design and technology to grow and innovate through branding, experience design, and digital applications.</p>
      </section>
      <section class="fadein" id="home-projects">
        <p>See past <router-link :to="'projects'" class="major">projects</router-link>.<br />
          Learn about <router-link :to="'services'" class="major">our services</router-link>.<br />
          Meet the <router-link :to="'company'" class="major">team</router-link>.<br />
        </p>
        <p>We are <router-link :to="'careers'" class="major">hiring</router-link>.</p>
      </section>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data () { return {} },
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

      @media only screen and (min-width: $screen-md-min) {
        margin-top: 8em;
        margin-bottom: 2em;
      }

      // .designco {
      //   transform: rotateX(0);
      //   fill-opacity: 1;
      // }
    }

    h2 {
      font-size: 2.2em;
      margin-bottom: .25em;
    }

    article {
      max-width: 540px;
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
