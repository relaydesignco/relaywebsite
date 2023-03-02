<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import { useSeoMeta } from 'unhead'
import WorkCarousel from '../components/WorkCarousel.vue'
import ColorSection from '../components/ColorSection.vue'
import HeadlineScroll from '../components/HeadlineScroll.vue'
import Footer from '../components/Footer.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

useSeoMeta({
  title: 'Relay Design Co. – About',
  description: 'Relay is a team of designers and developers who build digital products that address meaningful problems.',
  ogImage: 'https://relaydesign.co/relay-banner.png',
  twitterCard: 'summary_large_image',
})

onMounted(() => {
    AOS.init();
})

</script>

<template>
  <main :class="`bg-${store.bgColor}`">

    <ColorSection bg-color="yellow">
      <div class="flex flex-col min-h-screen px-8 md:px-36 items-center justify-center">
        <h1 class="h1 text-center text-pink">About.</h1>
        <p class="text-center large">We’re a team of designers and developers who love to build. And when the things we build help thoughtful, innovative people solve meaningful problems – all the better.</p>
      </div>
    </ColorSection>

    <ColorSection bg-color="pink">
      <div class="flex flex-col md:flex-row min-h-screen px-8 md:px-24 py-36 items-start text-white">
        <h2 class="h6 mb-12 text-white md:w-1/2 md:sticky md:top-40">Our beliefs.</h2>
        <div class="md:w-1/2">
          <div class="mb-28"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h3 class="h5 text-white">People</h3>
            <p class="medium">Everything we do begins and ends with people. You, your customers, and our team. We build trusting, meaningful relationships with our clients – and their customers – by keeping our promises and communicating clearly.</p>
          </div>
          <div class="mb-28"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h3 class="h5 text-white">Purpose</h3>
            <p class="medium">We don’t build anything until we understand why it will matter, and to whom. That’s how we keep your product aligned with your vision, and ensure that your investment makes a meaningful impact.</p>
          </div>
          <div class="mb-28"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h3 class="h5 text-white">Progress</h3>
            <p class="medium">We follow a design-led process that prioritizes progress over perfection and continually asks, “What’s the next most important thing?” Because momentum is everything when building digital products for a rapidly changing market.</p>
          </div>
        </div>
      </div>
    </ColorSection>

    <ColorSection bg-color="blue">
      <HeadlineScroll headline="Meet the team." />
      <div class="flex flex-col md:flex-row pb-24 md:pb-36 px-8 md:px-24 items-start">
        <div class="md:w-1/2">
          <p class="medium md:pr-20">Our designers understand the role brand plays in user experience, and believe great UX builds customer loyalty.</p>
          <p class="medium md:pr-20">Our in-house engineering team has decades of experience building, launching and maintaining digital products across a wide range of technologies.</p>
        </div>
        <div class="md:w-1/2">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <p class="small">
                <span class="font-sans font-bold flex items-center">
                  Drew McChesney <a class="ml-2" target="_blank" href="https://www.linkedin.com/in/drewmcchesney/"><img src="/icon-linkedin.svg" height="14" width="14" alt="LinkedIn" /></a>
                </span>
                Managing Director
              </p>
              <p class="small">
                <span class="font-sans font-bold flex items-center">
                  Brian Johnson <a class="ml-2" target="_blank" href="https://www.linkedin.com/in/brianatmindsalt/"><img src="/icon-linkedin.svg" height="14" width="14" alt="LinkedIn" /></a>
                </span>
                Creative Director
              </p>
              <p class="small">
                <span class="font-sans font-bold flex items-center">
                  Ashley Revlett <a class="ml-2" target="_blank" href="https://www.linkedin.com/in/ashleyrevlett"><img src="/icon-linkedin.svg" height="14" width="14" alt="LinkedIn" /></a>
                </span>
                Technology Director
              </p>
            </div>
            <div class="md:w-1/2">
              <p class="small">
                <span class="font-sans font-bold flex items-center">
                  Mike Casto <a class="ml-2" target="_blank" href="https://www.linkedin.com/in/mike-casto-7661817/"><img src="/icon-linkedin.svg" height="14" width="14" alt="LinkedIn" /></a>
                </span>
                Senior Designer
              </p>
              <p class="small"><span class="font-sans font-bold">Aaron Fautz</span><br />Senior Engineer</p>
              <p class="small"><span class="font-sans font-bold">Lauren Hill</span><br />Brand Designer</p>
            </div>
          </div>
        </div>
      </div>
    </ColorSection>

    <ColorSection bg-color="pink">
      <WorkCarousel />

      <Footer />
    </ColorSection>

  </main>
</template>

<style scoped>
</style>
