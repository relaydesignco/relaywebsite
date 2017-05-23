<template>
  <div class="wrapper">
    <article class="home">
      <header class="fadein">
        <h2>Design better experiences</h2>
      </header>
      <section class="fadein">
        <p>We help companies use design and technology to grow and innovate through <a href="#">branding</a>, <a href="#">marketing</a> and <a href="#">digital applications</a>.</p>
      </section>
      <section class="fadein" id="home-projects">
        <p>See past <a href="#">projects</a>.<br />
          Meet the <a href="#">team</a>.<br />
          Take a <a href="#">break</a>.</p>
      </section>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    },
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App',
        // users: [
        // { firstname:'jane', lastname:'harris' },
        // { firstname:'bob', lastname:'harris' },
        // { firstname:'bill', lastname:'bobert' }
        // ],
        // input_val: 'hey!',
        // counter:0
      }
    },
    head: {
      title: function () {
        return {
          inner: "Relay Design Co.",
          separator: '',
          complement: ''
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/_variables.scss";

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

  footer p:not(.copyright) {
    @media only screen and (min-width: $screen-md-min) {
      font-size: 16px;
    }
  }

</style>
