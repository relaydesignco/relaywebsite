<template>
  <div class="projects">

        <header class="wrapper">
            Projects! {{msg}}
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
  name: 'projects',
  data () {
    return {
      msg: 'projects',
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
<style>
  

</style>
