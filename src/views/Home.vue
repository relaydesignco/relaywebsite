<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import { useSeoMeta } from 'unhead'
import ColorSection from '../components/ColorSection.vue'
import WorkListItemWide from '../components/WorkListItemWide.vue'
import Footer from '../components/Footer.vue'
import TypeHero from '../components/TypeHero.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

useSeoMeta({
  title: 'Relay Design Co. – Software Product Studio',
  description: 'Software product design and development for start-ups and established brands.',
  ogImage: 'https://relaydesign.co/relay-banner.png',
  twitterCard: 'summary_large_image',
})

onMounted(() => {
    AOS.init();
})

</script>

<template>
  <div class="body">

    <main :class="`bg-${store.bgColor}`">

      <ColorSection bg-color="red">
        <TypeHero />
      </ColorSection>

      <ColorSection bg-color="yellow">
        <WorkListItemWide title="Embodied Labs" description="Immersive online training platform"
          img-src="/el-header.jpg" route-url="/work/embodied-labs" />
      </ColorSection>
      <ColorSection bg-color="orange">
        <WorkListItemWide title="Odessa Connect"
          description="A television-based app for seniors, their communities, and their loved ones."
          img-src=" /odessa-header.jpg" route-url="/work/odessa" />
      </ColorSection>
      <ColorSection bg-color="green">
        <WorkListItemWide title="GE Appliances" description="A virtual experience as sales tool"
          img-src="/ge-header-2.jpg" route-url="/work/ge" />
      </ColorSection>

      <ColorSection bg-color="blue">
        <div
          class="flex flex-col md:flex-row py-24 md:py-56 md:pt-24 px-8 md:px-24 items-start md:max-w-7xl md:mx-auto">
          <div class="md:w-1/2" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out" data-aos-mirror="true">
            <h2 class="h4 md:pr-20 mb-8 text-red leading-none">Build what<br />matters.</h2>
          </div>
          <div class="md:w-1/2" data-aos="fade-up" data-aos-offset="100" data-aos-delay="550" data-aos-duration="500"
            data-aos-easing="ease-in-out" data-aos-mirror="true">
            <div class="md:pl-4">
              <p class="medium md:mt-2">We work with start-ups and brands to build software products that
                shape the way people live and work, for the better.</p>
              <p class="medium">Our designers and developers work alongside your team – taking your concept from
                design to prototype to launch and beyond, while staying true to your vision and solving problems that
                make a difference.</p>
              <p>
                <router-link class="bar-link" to="/about"><span>Learn more about us</span></router-link>
              </p>
            </div>
          </div>
        </div>
      </ColorSection>

      <Footer />
    </main>
  </div>
</template>

<style scoped>
.body {
  @apply bg-red;
}
</style>
