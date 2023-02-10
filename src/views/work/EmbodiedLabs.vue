<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'
import { useSeoMeta } from 'unhead'
import { useWistia } from '../../composables/useWistia';

useSeoMeta({
  title: 'Relay Design Co. – Work – Embodied Labs',
  description: 'Case study of digital product design and development work for Embodied Labs.',
})

useWistia()

</script>

<template>
  <CaseStudy
    color="orange"
    secondaryColor="yellow"
    title="Embodied Labs"
    description="An online training platform educating caregivers through immersive experiences."
    heroImgSrc="/el-header.jpg"
    intro="Embodied Labs is a start-up that pioneered the use of VR for healthcare training. When Covid prevented users from learning on-site and in-headset, Embodied Labs turned to Relay to help translate their product to the web."
    nextSrc="/ge-header-2.jpg"
    nextTitle="GE Appliances"
    nextUrl="/work/ge"
    ref="casestudy"
  >

    <template #challenge>
      <div class="md:w-1/2">
          <div class="md:mr-8 mb-8 md:mb-0 h-full">
            <img src="/el-challenge.jpg" alt="" class="w-full" />
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="px-16 md:px-12 lg:px-16 lg:pr-32">
            <p class="subheading mt-24 md:mt-0">Challenge</p>
            <p>The original Embodied Labs product was VR-based. It required trainees to use a VR headset, and was most commonly used on-site at their employer. When the pandemic hit, customers were reticent to bring employees on-site or share headsets, and usage dropped off. Relay was tasked with helping bring the product to the web, enabling users to access the educational content remotely via their browser.</p>
          </div>
        </div>
    </template>

    <template #images>
      <div class="grid grid-cols-1 gap-4">
        <div class="wistia_responsive_padding" style="padding:56.04% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/as9zv8pfvt?seo=false&videoFoam=true" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-lightgray">
        <img src="/el-screen-1.jpg" class="w-full h-full" alt="" />
        <img src="/el-screen-2.jpg" class="w-full h-full" alt="" />
        <div class="w-full h-full">
          <div class="wistia_responsive_padding" style="padding:52.19% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/pr7lmyjnbj?seo=false&videoFoam=true" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div>
        </div>
        <img src="/el-screen-3.jpg" class="w-full h-full" alt="" />
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
