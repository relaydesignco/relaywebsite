<script setup lang="ts">
import { useSeoMeta } from 'unhead'
import CaseStudy from '../../components/CaseStudy.vue'
import { useWistia } from '../../composables/useWistia';

useSeoMeta({
  title: 'Relay Design Co. – Work – Odessa Connect',
  description: 'Case study of digital product design and development work for Odessa Connect.',
})

useWistia()

</script>

<template>
  <CaseStudy
    color="green"
    secondaryColor="red"
    title="Odessa Connect"
    description="A television-based app for seniors, their communities, and their loved ones."
    heroImgSrc="/odessa-header.jpg"
    intro="Odessa Connect turns the TV screen into a computer screen, allowing seniors to connect more easily with their loved ones, caregivers, and healthcare providers. Relay helped Odessa Connect grow their idea into a fully-realized cross-platform digital product."
    nextSrc="/21c-header.jpg"
    nextTitle="21c Museum Hotels"
    nextUrl="/work/21c"
    ref="casestudy"
  >

  <template #challenge>
      <div class="md:w-1/2">
          <div class="md:mr-8 mb-8 md:mb-0 h-full">
            <img src="/odessa-challenge.jpg" alt="" class="w-full" />
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="px-16 md:px-12 lg:px-16 lg:pr-32">
            <p class="subheading mt-24 md:mt-0">Challenge</p>
            <p>Odessa Connect relies on proprietary hardware and a cross-platform digital product to enable seniors to use their TV to communicate with family members, caregivers and healthcare providers. Since Odessa Connect’s early days, Relay has worked alongside the product team to develop new features, support new hardware capabilities, and help the digital platform grow and scale with the business’s success.</p>
          </div>
        </div>
    </template>

    <template #images>
      <div class="wistia_responsive_padding" style="padding:53.13% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/lwxkjmwb46?seo=false&videoFoam=true" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <img src="/odessa-sm-1.jpg" alt="" />
        <img src="/odessa-sm-2.jpg" alt="" />
      </div>
    </template>

    <template #outcome>
      <ul>
        <li>Created a digital platform to connect proprietary television-based hardware to an online communications hub for caregivers, assisted living facilities, and family members</li>
        <li>Supported the product team’s design iterations through rapid prototyping and custom software development</li>
        <li>Worked closely with hardware and technology partners to develop, test and launch new devices and technology platforms</li>
      </ul>
    </template>

    <template #services>
      <ul>
        <li>Software engineering</li>
        <li>UX design</li>
        <li>API & hardware integration</li>
      </ul>
    </template>

  </CaseStudy>

</template>


<style scoped>
</style>
