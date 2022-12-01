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
    bgColor="yellow"
    title="21c Museum Hotels"
    description="Transformative business intelligence tools for a growing hospitality brand."
    heroImgSrc="/1280x768.png"
    challengeImgSrc="/630x720.png"
    intro="Since becoming our client in 2005, 21c Museum Hotels has grown from one location to nine, and been acquired by one of the largest hospitality companies in the world. To help accomodate their expansion, Relay created a custom web application to report KPIs and real-time metrics for their locations across the U.S., allowing their team to operate more effectively at scale."
    nextSrc="/1280x768.png"
    nextTitle="GE Appliances"
    nextUrl="/work/ge"
    ref="casestudy"
  >

    <template #challenge>
      <p>Replace an antiquated, manual reporting process with a custom digital product that streamlines reporting, aggregates data from a variety of sources, and is easily accessible by a diverse, distributed team.</p>
    </template>

    <template #images>
      <img src="/1280x768.png" class="w-full my-10" alt="" />
    </template>

    <template #outcome>
      <ul>
        <li>Provided the team with a clear, searchable view of company-wide and location-specific performance metrics</li>
        <li>Reduced errors and inconsistencies in reporting data</li>
        <li>Easier onboarding and increased operational efficiency thanks to a clearer, well-documented process and intuitive report authoring UI</li>
      </ul>
    </template>

    <template #images2>
      <div class="grid grid-cols-2 gap-2">
        <img src="/1280x768.png" class="w-full my-10" alt="" />
        <img src="/1280x768.png" class="w-full my-10" alt="" />
      </div>
    </template>

    <template #services>
      <ul>
        <li>User research</li>
        <li>UX/UI design</li>
        <li>Full-stack web development</li>
        <li>API integration</li>
        <li>Process design</li>
      </ul>
    </template>

  </CaseStudy>

</template>


<style scoped>
</style>
