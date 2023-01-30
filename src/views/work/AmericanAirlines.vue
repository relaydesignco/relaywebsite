<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'
import { useVimeo } from '../../composables/useVimeo';
useVimeo()

</script>

<template>
  <CaseStudy
    color="green"
    title="American Airlines"
    description="An online home for a global workforce."
    heroImgSrc="/aa-header.jpg"
    intro="Relay worked with American Airlines subsidiaries Piedmont Airlines and PSA Airlines to design and develop custom employee portals to house information and tools that enable team members to stay informed while working around the globe."
    nextSrc="/el-header.jpg"
    nextTitle="Embodied Labs"
    nextUrl="/work/embodied-labs"
    ref="casestudy"
  >

    <template #challenge>
      <div class="md:w-1/2">
          <div class="md:mr-8 mb-8 md:mb-0 h-full">
            <img src="/aa-challenge.jpg" alt="" class="w-full" />
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="px-24 md:px-12 lg:px-16 lg:pr-32">
            <p class="subheading mt-24 md:mt-0">Challenge</p>
            <p>Replace multiple legacy intranets that were used daily by a global team to access critical business tools and announcements. Challenges experienced by users included performance issues, sprawling information architecture, and lack of content management tools. </p>
          </div>
        </div>
    </template>

    <template #images>
      <div class="grid grid-cols-1 gap-2 p-6 pb-0 bg-lightgray">
        <div style="padding:46.88% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790903821?h=901d7628e3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;?background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="AA_ScreenRec"></iframe></div>
      </div>
      <div class="grid grid-cols-2 gap-4 p-6 bg-lightgray">
        <img src="/aa-psa-home.jpg" class="w-full h-full object-cover" alt="" />
        <img src="/aa-piedmont-home.jpg" class="w-full h-full object-cover" alt="" />
      </div>
      <div class="grid grid-cols-2 gap-4 py-6">
        <div class="h-full object-cover">
          <div style="padding:42.86% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790903850?h=877ca4e113&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;?background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="PSA Logo Animation 4"></iframe></div>
        </div>
        <img src="/aa-collateral.jpg" class="w-full h-full" alt="" />
      </div>
    </template>

    <template #outcome>
      <ul>
        <li>Implemented a new digital platform with easy-to-use yet powerful content management tools, allowing communications teams to quickly, easily distribute information</li>
        <li>Improved employee satisfaction with the online experience by providing intuitive information architecture and clear, on-brand design</li>
        <li>Enhanced support for tablet and mobile devices, which was critical to AA’s mobile workforce’s needs</li>
        <li>Complied with AA’s rigorous information security requirements, and worked closely with their IT team to test and deploy updates</li>
      </ul>
    </template>

    <template #images2>

    </template>

    <template #services>
      <ul>
        <li>User research</li>
        <li>UX/UI design</li>
        <li>Information architecture</li>
        <li>Full-stack web development</li>
        <li>Content management system development</li>
      </ul>
    </template>

  </CaseStudy>

</template>


<style scoped>
</style>
