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
    color="pink"
    title="GE Appliances"
    description="A virtual experience to complement an in-person trade show event."
    heroImgSrc="/ge-header.jpg"
    challengeImgSrc="/630x720.png"
    intro="The annual KBIS trade show is one of GE Appliances' largest opportunities to promote new products to their professional customer base. When the pandemic disrupted the show’s in-person experience, GE asked Relay to create a complementary digital experience for sales staff to use with remote attendees."
    nextSrc="/aa-header.jpg"
    nextTitle="American Airlines"
    nextUrl="/work/american-airlines"
    ref="casestudy"
  >

    <template #challenge>
      <p>Each GE Appliance brand, from Monogram to Hotpoint, has its own unique look. The in-person tradeshow expresses that through unique booth designs, and enticing technology-driven displays.</p>
      <p>Relay was tasked with translating those diverse brand experiences into a single online destination that sales staff could use to communicate with off-site customers, while also serving as a value-added resource for on-site attendees.</p>
    </template>

    <template #images>
      <div class="grid grid-cols-1 gap-4">
        <img src="/1280x768.png" class="w-full" alt="" />
      </div>
    </template>

    <template #outcome>
      <ul>
        <li>Created an online destination that met the needs of a large, diverse group of corporate stakeholders across multiple brands</li>
        <li>Simulated the in-person booth experience by supporting 360º video and a web-based VR experience</li>
        <li>Designed a cross-brand user experience that surfaced highlights to support the larger GE Appliances brand story</li>
        <li>Provided QR-code-based access to digital resources to support on-site sales staff and customers</li>
        <li>Accomodated large traffic spikes throughout the show dates and during press events</li>
      </ul>
    </template>

    <template #images2>
      <img src="/1280x768.png" class="w-full my-10 px-10" alt="" />
    </template>

    <template #services>
      <ul>
        <li>UX design</li>
        <li>Information architecture</li>
        <li>Full-stack web development</li>
        <li>Content management system development</li>
      </ul>
    </template>

  </CaseStudy>

</template>


<style scoped>
</style>
