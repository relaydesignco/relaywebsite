<script setup lang="ts">
import { ref, computed } from 'vue'
import CaseStudy from '../../components/CaseStudy.vue'

// pass bg color on up to parent
const casestudy = ref<typeof CaseStudy | null>(null)
const bg = computed(() => casestudy.value?.bg) // trust that all casestudy components expose bg
defineExpose({bg})

</script>

<template>
  <CaseStudy
    bgColor="green"
    title="OdessaConnect"
    description="A television-based app for seniors, their residences, and their loved ones."
    heroImgSrc="/1280x768.png"
    challengeImgSrc="/630x720.png"
    intro="OdessaConnect turns the TV screen into a computer screen, allowing seniors to connect more easily with their loved ones, caregivers, and healthcare providers. Relay helped OdessaConnect grow their idea into a fully-realized cross-platform digital product."
    nextSrc="/1280x768.png"
    nextTitle="21c Museum Hotels"
    nextUrl="/work/21c"
    ref="casestudy"
  >

    <template #challenge>
      <p>OdessaConnect relies on proprietary hardware and a cross-platform digital product to enable seniors to use their TV to communicate with family members, caregivers and healthcare providers. Since OdessaConnect’s early days, Relay has worked alongside the product team to develop new features, support new hardware capabilities, and help the digital platform grow and scale with the business’s success.</p>
    </template>

    <template #images>
      <div class="grid grid-cols-3 gap-4" style="grid-template-rows: masonry">
        <img src="/630x720.png" class="w-full h-full object-cover" style="grid-row: span 2" alt="" />
        <img src="/1280x768.png" class="w-full" alt="" />
        <img src="/630x720.png" class="w-full h-full object-cover" style="grid-row: span 2" alt="" />
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

    <template #images2>
      <img src="/1280x768.png" class="w-full my-10 px-10" alt="" />
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
