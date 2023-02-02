<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'
import { useWistia } from '../../composables/useWistia';
useWistia()

</script>

<template>
  <CaseStudy
    color="blue"
    secondaryColor="red"
    title="21c Museum Hotels"
    description="Transformative business intelligence tools for a growing hospitality brand."
    heroImgSrc="/21c-header.jpg"
    intro="Since becoming our client in 2005, 21c Museum Hotels has grown from one location to nine, and been acquired by one of the largest hospitality companies in the world. To help accomodate their expansion, Relay created a custom web application to report KPIs and real-time metrics for their locations across the U.S., allowing their team to operate more effectively at scale."
    nextSrc="/aa-header.jpg"
    nextTitle="American Airlines"
    nextUrl="/work/american-airlines"
    ref="casestudy"
  >

    <template #challenge>
      <div class="md:w-full">
        <div class="px-24 md:px-12 lg:px-32">
          <p class="subheading mt-24 md:mt-0 text-center">Challenge</p>
          <p>Replace an antiquated, manual reporting process with a custom digital product that streamlines reporting, aggregates data from a variety of sources, and is easily accessible by a diverse, distributed team.</p>
        </div>
      </div>
    </template>

    <template #images>

      <div class="flex w-full">
        <div class="w-full md:w-1/2">
          <div class="wistia_responsive_padding" style="padding:109.38% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/qlhux7lew0?seo=false&videoFoam=true" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
        </div>
        <div class="w-full md:w-1/2 bg-lightgray p-12 flex flex-col justify-center content-center">
          <h3>Project Features</h3>
          <ul class="ml-8 mt-8">
            <li>Revenue Dashboard</li>
            <li>Custom Content Management System</li>
            <li>Integrations with Multiple 3rd-Party Platforms</li>
            <li>Personnel Directory</li>
            <li>Automated Reporting</li>
          </ul>
        </div>
      </div>

      <img src="/21c_Slides_Tablet.jpg" class="w-full my-10" alt="" />

      <div class="w-full">
        <div class="wistia_responsive_padding" style="padding:46.88% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/t7r0ifm49c?seo=false&videoFoam=true" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
      </div>
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
            <p>As part of our ongoing relationship, Relay continues to provide 21c with brand and design services for projects such as new hotel and restaurant launches, marketing campaigns, and environmental and digital experience design.</p>
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
