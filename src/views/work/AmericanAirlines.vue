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
    color="green"
    title="American Airlines"
    description="An online home for a global workforce."
    heroImgSrc="/1280x768.png"
    challengeImgSrc="/630x720.png"
    intro="Relay worked with American Airlines subsidiaries Piedmont Airlines and PSA Airlines to design and develop custom employee portals to house information and tools that enable team members to stay informed while working around the globe."
    nextSrc="/1280x768.png"
    nextTitle="Embodied Labs"
    nextUrl="/work/embodied-labs"
    ref="casestudy"
  >

    <template #challenge>
      <p>Replace multiple legacy intranets that were used daily by a global team to access critical business tools and announcements. Challenges experienced by users included performance issues, sprawling information architecture, and lack of content management tools. </p>
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
        <li>Implemented a new digital platform with easy-to-use yet powerful content management tools, allowing communications teams to quickly, easily distribute information</li>
        <li>Improved employee satisfaction with the online experience by providing intuitive information architecture and clear, on-brand design</li>
        <li>Enhanced support for tablet and mobile devices, which was critical to AA’s mobile workforce’s needs</li>
        <li>Complied with AA’s rigorous information security requirements, and worked closely with their IT team to test and deploy updates</li>
      </ul>
    </template>

    <template #images2>
      <img src="/1280x768.png" class="w-full my-10 px-10" alt="" />
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
