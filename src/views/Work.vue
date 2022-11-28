<script setup lang="ts">
import WorkListItem from '../components/WorkListItem.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="bg-red">

    <section class="main-content">
      <div class="flex flex-col px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-blue mb-40 mt-56">Work.</h1>
      </div>
      <div class="px-8 md:px-32 py-12 pb-48">
          <WorkListItem clipColor="#F37062" textColor="#ffffff" title="American Airlines" description="An online home for a global workforce" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem clipColor="#F37062" textColor="#ffffff" title="GE Appliances" description="Virtual experience as sales tool" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem clipColor="#F37062" textColor="#ffffff" title="Embodied Labs" description="Immersive online training platform" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem clipColor="#F37062" textColor="#ffffff" title="21c Museum Hotels" description="Business intelligence tools for hospitality at scale" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem clipColor="#F37062" textColor="#ffffff" title="Odessa Connect" description="Multi-platform app for senior living residences" img-src="/fpo.png" route-url="/work/american-airlines" />
        </div>
    </section>

    <Footer />
  </main>
</template>

<style scoped>
.main-content {
  width: 100%;
  min-height: 101vh;
  position: relative;
}
</style>
