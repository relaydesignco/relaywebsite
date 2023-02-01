<script setup lang="ts">
import ColorSection from '../components/ColorSection.vue'
import WorkListItem from '../components/WorkListItem.vue'
import Footer from '../components/Footer.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

</script>

<template>
  <main :class="`bg-${store.bgColor}`">

    <ColorSection bg-color="red">
      <div class="flex flex-col px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-blue mb-30 md:mb-32 mt-56">Work.</h1>
      </div>
      <div class="px-4 md:px-32 py-12 pb-36">
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="Embodied Labs" description="Immersive online training platform" img-src="/el-header.jpg" route-url="/work/embodied-labs" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="GE Appliances" description="A virtual experience as sales tool" img-src="/ge-header.jpg" route-url="/work/ge" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="21c Museum Hotels" description="Transformative business intelligence tools" img-src="/21c-header.jpg" route-url="/work/21c" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="Odessa Connect" description="A tv-based app for seniors and their families" img-src="/odessa-header.jpg" route-url="/work/odessa" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="American Airlines" description="An online home for a global workforce" img-src="/aa-header.jpg" route-url="/work/american-airlines" />
      </div>
    </ColorSection>

    <Footer />
  </main>
</template>

<style scoped>
</style>
