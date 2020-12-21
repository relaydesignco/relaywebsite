<template>
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/493469376?title=0&byline=0&portrait=0&autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
</template>

<script>

export default {
  name: 'holiday-message',
  components: {
  },
  data () {
    return {
      page_title: 'Relay 2020 Holiday Message',
    }
  },
  head: {
    title: function () {
      return {
        inner: this.page_title
      }
    },
  }
}
</script>

<style scoped lang="scss">

  // .page-header {
  //   margin-bottom: 3em;

  //   h2 {
  //     font-size: 2em;
  //     font-weight: normal;
  //     margin-bottom: 0;
  //   }

  //   h3 {
  //     margin: .5em 0 0 0;
  //   }
  // }

  // p {
  //   max-width: 800px;
  // }


</style>
