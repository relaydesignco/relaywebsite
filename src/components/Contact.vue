<template>
  <div class="contact">

        <header class="wrapper">
            contact! {{msg}}
        </header>

        <article class="wrapper">
          <header class="fadein">
              <h2>Generic headline</h2>
          </header>
          <section class="fadein">
              <p>Page content</p>
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
