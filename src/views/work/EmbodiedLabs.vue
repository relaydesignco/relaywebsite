<script setup lang="ts">
import CaseStudy from '../../components/CaseStudy.vue'
import { useVimeo } from '../../composables/useVimeo';
useVimeo()

</script>

<template>
  <CaseStudy
    color="orange"
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
          <div class="px-24 md:px-12 lg:px-16 lg:pr-32">
            <p class="subheading mt-24 md:mt-0">Challenge</p>
            <p>The original Embodied Labs product was VR-based. It required trainees to use a VR headset, and was most commonly used on-site at their employer. When the pandemic hit, customers were reticent to bring employees on-site or share headsets, and usage dropped off. Relay was tasked with helping bring the product to the web, enabling users to access the educational content remotely via their browser.</p>
          </div>
        </div>
    </template>

    <template #images>
      <div class="grid grid-cols-1 gap-4">
        <img src="/1280x768.png" class="w-full" alt="Video goes here" />
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 bg-lightgray">
        <img src="/el-screen-1.jpg" class="w-full h-full" alt="" />
        <img src="/el-screen-2.jpg" class="w-full h-full" alt="" />
        <div class="w-full h-full">
          <div style="padding:52.38% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/790903908?h=75ffda7947&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;?background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="EL_Wizard"></iframe></div>
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
