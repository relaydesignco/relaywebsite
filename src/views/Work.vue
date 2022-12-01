<script setup lang="ts">
import ColorSection from '../components/ColorSection.vue'
import WorkListItem from '../components/WorkListItem.vue'
import Footer from '../components/Footer.vue'
import { useBgColor } from '../composables/useBgColor.js'

const { bg, onShowBg, onHideBg } = useBgColor()
defineExpose({bg})

</script>

<template>
  <main :class="`bg-${bg}`">

    <ColorSection bg-color="red" @showBg="onShowBg" @hideBg="onHideBg">
      <div class="flex flex-col px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-blue mb-30 md:mb-32 mt-56">Work.</h1>
      </div>
      <div class="px-4 md:px-32 py-12 pb-36">
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="Embodied Labs" description="Immersive online training platform" img-src="/hero-el.jpg" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="GE Appliances" description="A virtual experience as sales tool" img-src="/hero-gea.jpg" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="21c Museum Hotels" description="Immersive online training platform" img-src="/hero-el.jpg" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="Odessa Connect" description="A virtual experience as sales tool" img-src="/hero-gea.jpg" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="American Airlines" description="An online home for a global workforce" img-src="/hero-aa.jpg" route-url="/work/american-airlines" />
      </div>
    </ColorSection>

    <Footer />
  </main>
</template>

<style scoped>
</style>
