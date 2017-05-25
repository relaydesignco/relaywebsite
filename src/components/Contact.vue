<template>
  <div class="contact">
        <!--
        <header class="wrapper">
            <h2 class="page_title">{{page_title}}</h2>
        </header>
        -->
        <article class="wrapper">
          <section class="slat">
              <div class="column-half">
                <h2>Get in touch.</h2>
                <p><strong>Tel</strong>
                <a href="tel:5023377309">502 337 7309</a><br />
                <strong>Email</strong>
                <a href="mailto:hello@relaydesign.co">hello@relaydesign.co</a><br />
                <strong>Twitter</strong> <a href="https://www.twitter.com/relaydesignco" target="_blank">@relaydesignco</a></p>

                <p><strong>Mailing Address</strong><br />
                607 West Main Street, #100<br />
                Louisville, Kentucky 40202</p>


              </div>
              <div class="column-half">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.952917922801!2d-85.762332684709!3d38.25739799201804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886972a3bfcc2ae3%3A0x6ef9a61385b0c880!2s607+W+Main+St%2C+Louisville%2C+KY+40202!5e0!3m2!1sen!2sus!4v1495589809080" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>

          </section>
      </article>

  </div>

</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'contact',
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
        inner: "Contact"
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style>


</style>
