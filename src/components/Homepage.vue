<template>
  <div class="home">

        <header class="wrapper">
            <img src="/static/logo.svg" class="logo" alt="Relay Design Co." />
        </header>

        <article class="wrapper">
          <header class="fadein">
              <h2>Design that works.</h2>
          </header>
          <section class="fadein">
              <p>We help companies use design and technology to grow and innovate through <a href="#">branding</a>, <a href="#">marketing</a> and <a href="#">digital applications</a>.</p>
          </section>
          <section class="fadein" id="home-projects">
              <p>See past <a href="#">projects</a>.<br />
                  Meet the <a href="#">team</a>.<br />
                  Take a <a href="#">break</a>.</p>
          </section>
          <footer class="fadein">
              <h3>Say hello.</h3>
              <p>hello@relaydesign.co<br />
                  502.562.2338
              </p>
              <ul class="inline-list icon-list">
                  <li><a href="" target="_blank"><img src="/static/icon_facebook.svg" class="icon" alt="Facebook" /></a></li>
                  <li><a href="" target="_blank"><img src="/static/icon_twitter.svg" class="icon" alt="Twitter" /></a></li>
                  <li><a href="" target="_blank"><img src="/static/icon_instagram.svg" class="icon" alt="Instagram" /></a></li>
              </ul>
              <p class="copyright">&copy; 2017 Relay Design Co., Louisville, KY. </p>
          </footer>
        
      </article>

  </div>

</template>

<script>
export default {
  name: 'homepage',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/_variables.scss";

 .logo { 
    @media only screen and (min-width: $screen-md-min) {
      margin-top: 11em;
      margin-bottom: 1.6em;
      width: 180px;
    }
 }

  article {
    max-width: 540px;
    margin: 0;
    section {
      @media only screen and (min-width: $screen-md-min) {
        margin-bottom: 6em;
        p {font-size: 28px;}
      }
    }
  }

  footer p:not(.copyright) {
    @media only screen and (min-width: $screen-md-min) {
          font-size: 16px;
      }
  }

  

</style>
