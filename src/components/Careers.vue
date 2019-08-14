<template>
  <div class="careers detail wrapper">
    <!--
    <header class="wrapper">
    <h2 class="page_title">{{page_title}}</h2>
    </header>
    -->



    <section class="slat">
      <div class="column-three-quarters">
        <h1>Careers</h1>
        <h5>Current openings:</h5>
        <h3 v-for="career in careers" class="career_title"><router-link :to="{ path: career.url }"><strong>{{career.title}}</strong></router-link></h3>
      </div>
    </section>

  </div>

</template>

<script>

  export default {
    name: 'careers',
    components: {
    },
    data () {
      return {
        page_title: 'Careers',
        careers: [
          {
            title:'Digital Designer',
            url:'/careers/digital-designer',
          },
          {
            title:'Front-end Developer',
            url:'/careers/front-end-developer',
          },
        ]
      }
    },
    head: {
      title: function () {
        return {
          inner: this.page_title
        }
      },
      meta: [
        { name: 'description', content: 'Relay is now hiring. View our current openings.'},
        { property: 'og:title', content: 'Careers at Relay Design Co.' },
        { property: 'og:image', content: 'https://relaydesign.co/static/fb-hiring.png' },
        { property: 'og:description', content: 'Relay is now hiring. View our current openings.' },
        { property: 'og:url', content: 'https://relaydesign.co/careers' },
        { name: 'twitter:title', content: 'Careers at Relay Design Co.' },
        { name: 'twitter:description', content: 'Relay is now hiring. View our current openings.'},
      ]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

  @import "../assets/project.scss";

  section { position: relative; }

  h5 {
    margin: 3em 0 .5em;
  }

</style>
