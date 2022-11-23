<script setup lang="ts">
import { ref, Ref } from 'vue'
import ColorSection from '../components/ColorSection.vue'
import Footer from '../components/Footer.vue'
import HeadlineScroll from '../components/HeadlineScroll.vue'

const bg = ref('bg-white')
const visibleColors : Ref<Array<string>> = ref([])

function onShowBg(color: string) {
  visibleColors.value.push(color)
  bg.value = color
}

function onHideBg(color: string) {
  const idx = visibleColors.value.indexOf(color)
  if (idx >= 0) {
    const r = visibleColors.value.splice(idx, 1)
  }
  if (visibleColors.value.length > 0) {
    bg.value = visibleColors.value[0]
  }
}
</script>

<template>
  <main :class="bg">

    <ColorSection bg-color="yellow" @showBg="onShowBg" @hideBg="onHideBg">
      <div class="flex flex-col min-h-screen px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-pink">About.</h1>
        <p class="text-center large">We’re a team of designers and developers who love to build. And when the things we build help thoughtful, innovative people solve meaningful problems – all the better.</p>
      </div>
    </ColorSection>

    <ColorSection bg-color="pink" @showBg="onShowBg" @hideBg="onHideBg">
      <div class="flex flex-col md:flex-row min-h-screen px-8 md:px-24 py-36 items-start text-white">
        <h2 class="h6 mb-12 text-white md:w-1/2 md:sticky md:top-40">Our beliefs.</h2>
        <div class="md:w-1/2">
          <div class="mb-14">
            <h3 class="h5 text-white">People</h3>
            <p class="medium">Everything we do begins and ends with people. You, your customers, and our team. We build trusting, meaningful relationships with our clients – and their customers – by keeping our promises and communicating clearly.</p>
          </div>
          <div class="mb-14">
            <h3 class="h5 text-white">Purpose</h3>
            <p class="medium">We don’t build anything until we understand why it will matter, and to whom. That’s how we keep your product aligned with your vision, and ensure that your investment makes a meaningful impact.</p>
          </div>
          <div class="mb-14">
            <h3 class="h5 text-white">Progress</h3>
            <p class="medium">We follow a design-led process that prioritizes progress over perfection and continually asks, “What’s the next most important thing?” Beecause momentum is everything when building digital products for a rapidly changing market.</p>
          </div>
        </div>
      </div>
    </ColorSection>

    <ColorSection bg-color="blue" @showBg="onShowBg" @hideBg="onHideBg">
      <HeadlineScroll headline="Meet the team." />
      <div class="flex flex-col md:flex-row min-h-screen py-24 md:py-56 px-8 md:px-24 items-start">
        <div class="md:w-1/2">
          <p class="medium md:pr-20">Our designers understand the role brand plays in user experience, and believe great UX builds customer loyalty.</p>
          <p class="medium md:pr-20">Our in-house engineering team has decades of experience building, launching and maintaining digital products across a wide range of technologies.</p>
        </div>
        <div class="md:w-1/2">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
            </div>
            <div class="md:w-1/2">
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
              <p class="small"><span class="font-sans">Drew McChesney</span><br />Managing Director</p>
            </div>
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
