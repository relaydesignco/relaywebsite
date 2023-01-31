<script setup lang="ts">
import ColorSection from '../components/ColorSection.vue'
import WorkListItemWide from '../components/WorkListItemWide.vue'
import Footer from '../components/Footer.vue'
import TypeHero from '../components/TypeHero.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

</script>

<template>
  <TypeHero />


  <main :class="`bg-${store.bgColor}`">

    <ColorSection bg-color="red">
    </ColorSection>

    <ColorSection bg-color="orange">
      <WorkListItemWide title="American Airlines" description="An online home for a global workforce" img-src="/aa-header.jpg" route-url="/work/american-airlines" />
    </ColorSection>
    <ColorSection bg-color="green">
      <WorkListItemWide title="GE Appliances" description="A virtual experience as sales tool" img-src="/ge-header-2.jpg" route-url="/work/ge" />
    </ColorSection>
    <ColorSection bg-color="yellow">
      <WorkListItemWide title="Embodied Labs" description="Immersive online training platform" img-src="/el-header.jpg" route-url="/work/embodied-labs" />
    </ColorSection>

    <ColorSection bg-color="blue">
      <div class="flex flex-col md:flex-row py-24 md:py-56 px-8 md:px-24 items-start md:max-w-7xl md:mx-auto">
        <div class="md:w-1/2">
          <h2 class="h4 md:pr-20 mb-8 text-red leading-none">Build what<br />matters.</h2>
        </div>
        <div class="md:w-1/2">
          <div class="md:pl-4">
            <p class="medium md:mt-2">We work with start-ups and brands to build apps and digital experiences that shape the way people live and work, for the better.</p>
            <p class="medium">Our designers and developers work alongside your product team – taking your concept from design to prototype to launch and beyond, while staying true to your vision and solving problems that make a difference.</p>
            <p>
              <router-link class="bar-link" to="/about"><span>Learn more about us</span></router-link>
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
