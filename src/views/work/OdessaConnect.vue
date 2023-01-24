<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'

</script>

<template>
  <CaseStudy
    color="green"
    title="OdessaConnect"
    description="A television-based app for seniors, their residences, and their loved ones."
    heroImgSrc="/odessa-header.jpg"
    challengeImgSrc="/odessa-challenge.jpg"
    intro="OdessaConnect turns the TV screen into a computer screen, allowing seniors to connect more easily with their loved ones, caregivers, and healthcare providers. Relay helped OdessaConnect grow their idea into a fully-realized cross-platform digital product."
    nextSrc="/21c-header.jpg"
    nextTitle="21c Museum Hotels"
    nextUrl="/work/21c"
    ref="casestudy"
  >

    <template #challenge>
      <p>OdessaConnect relies on proprietary hardware and a cross-platform digital product to enable seniors to use their TV to communicate with family members, caregivers and healthcare providers. Since OdessaConnect’s early days, Relay has worked alongside the product team to develop new features, support new hardware capabilities, and help the digital platform grow and scale with the business’s success.</p>
    </template>

    <template #images>
      <div class="grid grid-cols-1 gap-4">
        <img src="/1280x768.png" class="w-full" alt="" />
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
