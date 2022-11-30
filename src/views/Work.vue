<script setup lang="ts">
import WorkListItemType from '../components/WorkListItemType.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="bg-red">

    <section class="main-content">
      <div class="flex flex-col px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-blue mb-40 mt-56">Work.</h1>
      </div>
      <div class="px-4 md:px-32 py-12 pb-36">
          <WorkListItemType title="American Airlines" img-src="/hero-aa.jpg" route-url="/work/american-airlines" />
          <WorkListItemType title="GE Appliances" img-src="/hero-gea.jpg" route-url="/work/american-airlines" />
          <WorkListItemType title="Embodied Labs" img-src="/hero-el.jpg" route-url="/work/american-airlines" />
          <WorkListItemType title="21c Museum Hotels" img-src="/hero-aa.jpg" route-url="/work/american-airlines" />
          <WorkListItemType title="OdessaConnect" img-src="/hero-gea.jpg" route-url="/work/american-airlines" />
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
