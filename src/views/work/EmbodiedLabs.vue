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
    bgColor="orange"
    title="Embodied Labs"
    description="An online training platform educating caregivers through immersive experiences."
    heroImgSrc="/1280x768.png"
    challengeImgSrc="/630x720.png"
    intro="Embodied Labs is a start-up that pioneered the use of VR for healthcare training. When Covid prevented users from learning on-site and in-headset, Embodied Labs turned to Relay to help translate their product to the web."
    nextSrc="/1280x768.png"
    nextTitle="OdessaConnect"
    nextUrl="/work/odessa"
    ref="casestudy"
  >

    <template #challenge>
      <p>The original Embodied Labs product was VR-based. It required trainees to use a VR headset, and was most commonly used on-site at their employer. When the pandemic hit, customers were reticent to bring employees on-site or share headsets, and usage dropped off. Relay was tasked with helping bring the product to the web, enabling users to access the educational content remotely via their browser.</p>
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
        <li>Created an online platform to house and distribute Embodied Labs content to customers without a VR headset</li>
        <li>Provided a web-based GUI for integration with the Windows VR application, allowing for a consistent cross-device user experience, and speeding up the time-to-deployment for new native application features</li>
        <li>Iterated through features with the product team to reduce onboarding friction and ease the the login process, including SSO support and custom login features</li>
        <li>Shipped new features regularly to support the sales team and new customer needs</li>
        <li>Supported the product team’s efforts to develop a product strategy for  the web-based product offering</li>
      </ul>
    </template>

    <template #images2>
      <img src="/1280x768.png" class="w-full my-10 px-10" alt="" />
    </template>

    <template #services>
      <ul>
        <li>UX/UI design</li>
        <li>Full-stack web development</li>
        <li>Content management system development</li>
        <li>API development</li>
        <li>Product strategy</li>
      </ul>
    </template>

  </CaseStudy>

</template>


<style scoped>
</style>
