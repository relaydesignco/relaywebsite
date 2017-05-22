<template>
  <div class="company">

        <header class="wrapper">
            <h2 class="page_title">{{page_title}}</h2>
        </header>
        
        <img :src="feature_image_filename" class="feature" />
        
        <article class="wrapper">  
          <header class="fadein">
              <h3>{{intro}}</h3>
          </header>
          <section class="fadein">
              <p>Page content...</p>
          </section>
      </article>
     <sitefooter></sitefooter>
  </div>

</template>

<script>
import Sitefooter from '../components/Sitefooter'

export default {
  name: 'company',
  components: {
    Sitefooter
  },
  data () {
    return {
      page_title: 'Company',
      feature_image_filename: '/static/fpo_large.png',
      intro: 'Lorem ipsum',
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
