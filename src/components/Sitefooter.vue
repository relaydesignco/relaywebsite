<template>
    <footer>
      <div class="wrapper">
        <h3>Say hello.</h3>
        <p>hello@relaydesign.co<br />
            502.337.7309
        </p>
        <ul class="inline-list icon-list">
            <li><a href="" target="_blank"><img src="/static/icon_facebook.svg" class="icon" alt="Facebook" /></a></li>
            <li><a href="" target="_blank"><img src="/static/icon_twitter.svg" class="icon" alt="Twitter" /></a></li>
            <li><a href="" target="_blank"><img src="/static/icon_instagram.svg" class="icon" alt="Instagram" /></a></li>
        </ul>
        <p class="copyright">&copy;2017 Relay, LLC. Louisville, KY. </p>
      </div>
    </footer>
</template>


<script>

  export default {
  name: 'sitefooter',
    data () {
      return {}
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss" scoped>

  footer { border-top: 1px solid #eee; margin-top: 3em; }

</style>
