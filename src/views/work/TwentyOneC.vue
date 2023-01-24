<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'

</script>

<template>
  <CaseStudy
    color="yellow"
    title="21c Museum Hotels"
    description="Transformative business intelligence tools for a growing hospitality brand."
    heroImgSrc="/21c-header.jpg"
    challengeImgSrc="/630x720.png"
    intro="Since becoming our client in 2005, 21c Museum Hotels has grown from one location to nine, and been acquired by one of the largest hospitality companies in the world. To help accomodate their expansion, Relay created a custom web application to report KPIs and real-time metrics for their locations across the U.S., allowing their team to operate more effectively at scale."
    nextSrc="/aa-header.jpg"
    nextTitle="American Airlines"
    nextUrl="/work/aa"
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
        <img src="/21c-collateral.jpg" class="w-full my-10" alt="" />
        <div class="w-full my-10">
          <div class="h-full p-8 flex flex-col justify-center content-center">
            <h2 class="subheading mb-3">Continual Brand Support</h2>
            <p>(rewrite) Relay continues to work with 21c on a variety of brand projects such as new hotel launches, monthly campaigns, collateral and environmental graphical projects... Mention the word “Experience” - building experiences for... </p>
          </div>
        </div>
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
