<script setup lang="ts">
import ColorSection from '../components/ColorSection.vue'
import WorkListItem from '../components/WorkListItem.vue'
import Footer from '../components/Footer.vue'
import TypeHero from '../components/TypeHero.vue'
import { useBgColor } from '../composables/useBgColor.js'

const { bg, onShowBg, onHideBg } = useBgColor()
defineExpose({bg})

</script>

<template>
  <main :class="bg">

    <ColorSection bg-color="red" @showBg="onShowBg" @hideBg="onHideBg">
      <TypeHero />
    </ColorSection>

    <ColorSection bg-color="white" @showBg="onShowBg" @hideBg="onHideBg">
      <div class="px-8 md:px-32 py-12 md:mb-24">
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="American Airlines" description="An online home for a global workforce" img-src="/fpo.png" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="GE Appliances" description="A virtual experience as sales tool" img-src="/fpo.png" route-url="/work/american-airlines" />
        <WorkListItem textColor="#6CC4DF" clipColor="#ffffff" title="Embodied Labs" description="Immersive online training platform" img-src="/fpo.png" route-url="/work/american-airlines" />
      </div>
    </ColorSection>

    <ColorSection bg-color="blue" @showBg="onShowBg" @hideBg="onHideBg">
      <div class="flex flex-col md:flex-row min-h-screen py-24 md:py-56 px-8 md:px-24 items-start">
        <div class="md:w-1/2">
          <h2 class="h4 md:pr-20 mb-8 text-red leading-none">Build<br />what<br />matters.</h2>
        </div>
        <div class="md:w-1/2">
          <div class="md:pl-4">
            <p class="medium md:mt-24">We work with start-ups and brands to build apps and digital experiences that shape the way people live and work, for the better.</p>
            <p class="medium">Our designers and developers work alongside your product team – taking your concept from design to prototype to launch and beyond, while staying true to your vision and solving problems that make a difference.</p>
            <p>
              <router-link class="bar-link" to="/about"><span>More about us</span></router-link>
            </p>
          </div>
        </div>
      </div>
    </ColorSection>

    <Footer />
  </main>
</template>

<style scoped>

main {
  transition: background-color 1.2s ease;
}

</style>
