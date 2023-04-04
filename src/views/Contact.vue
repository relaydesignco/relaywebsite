<script setup lang="ts">
import { useSeoMeta } from 'unhead'
import ColorSection from '../components/ColorSection.vue'
import Footer from '../components/Footer.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

useSeoMeta({
  title: 'Relay Design Co. – Contact',
  description: 'Contact information for Relay Design Co. Drop us a line to see what we can build together.',
  ogImage: 'https://relaydesign.co/relay-banner.png',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <main :class="`bg-${store.bgColor}`">

    <ColorSection bg-color="blue">
      <div class="flex flex-col min-h-screen px-8 md:px-36 items-center justify-center w-full">
        <h1 class="h1 text-center text-red mt-48">Contact.</h1>
        <p class="text-center text-white large mb-20">Drop us a line to see what we can build together.</p>
        <div class="flex flex-col md:flex-row px-8 md:px-32 mb-60 items-start text-white w-full">
          <div class="lg:w-3/4">
            <h3 class="text-lg md:text-2xl font-bold font-sans leading-tight mb-2">New Business</h3>
            <p><a href="mailto:hello@relaydesign.co" class="text-red font-sans font-bold text-lg md:text-2xl">hello@relaydesign.co</a></p>
            <h3 class="text-lg md:text-2xl font-bold font-sans leading-tight mt-12  mb-2">Careers</h3>
            <p class="mb-2"><a href="mailto:careers@relaydesign.co" class="text-red font-sans font-bold text-lg md:text-2xl">careers@relaydesign.co</a></p>
            <h3 class="text-lg md:text-2xl font-bold font-sans leading-tight mt-12  mb-2">Office</h3>
            <p class="mb-2"><a href="https://www.google.com/maps/place/Relay+Design+Co./@38.257386,-85.760121,15z/data=!4m2!3m1!1s0x0:0xa981de6cfa0800fe?sa=X&ved=2ahUKEwjXyMmyyJD-AhW7CjQIHdXPB-EQ_BJ6BAgzEAk" target="_blank" class="text-red font-sans font-bold text-lg md:text-2xl">607 West Main Street<br />Louisville, KY 40202</a></p>
          </div>
          <div class="lg:w-1/4">
            <p class=" text-lg font-bold font-sans leading-tightloose mt-3 mb-3">Follow Us</p>
            <p class="mt-2 mb-2 leading-loose"><a href="https://www.linkedin.com/company/relaydesignco" target="_blank" class="text-red font-sans font-bold text-lg">LinkedIn.</a></p>
            <p><a href="https://www.instagram.com/relaydesignco" target="_blank" class="text-red font-sans font-bold text-lg">Instagram.</a></p>
          </div>
        </div>
      </div>

      <Footer />

    </ColorSection>
  </main>

</template>

<style scoped>
</style>
