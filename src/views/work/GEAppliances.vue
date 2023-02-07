<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useSeoMeta } from 'unhead'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import animation from "../../assets/gea_logos_v5.json";
import CaseStudy from '../../components/CaseStudy.vue'

useSeoMeta({
  title: 'Relay Design Co. – Work – GE Appliances',
  description: 'Case study of digital experience design and development work for GE Appliances.',
})

let hasAnimPlayed = false;
let anim = ref();
const animIsVisible = ref(useElementVisibility(anim))

onMounted(() => {
  console.log(animation)
  if (!hasAnimPlayed && animIsVisible.value == true) {
    anim.value.play()
    hasAnimPlayed = true
  }
})

watch(animIsVisible, async (newVal, oldVal) => {
  if (!hasAnimPlayed && newVal == true) {
    anim.value.play()
    hasAnimPlayed = true
  }
})

const slides = [
  '/ge-slide-1.jpg',
  '/ge-slide-2.jpg',
  '/ge-slide-3.jpg',
  '/ge-slide-4.jpg',
  '/ge-slide-5.jpg',
]

</script>

<template>
  <CaseStudy
    color="pink"
    secondaryColor="orange"
    title="GE Appliances"
    description="A virtual experience to complement an in-person trade show event."
    heroImgSrc="/ge-header.jpg"
    intro="The annual KBIS trade show is one of GE Appliances' largest opportunities to promote new products to their professional customer base. When the pandemic disrupted the show’s in-person experience, GE asked Relay to create a complementary digital experience for sales staff to use with remote attendees."
    nextSrc="/odessa-header.jpg"
    nextTitle="Odessa Connect"
    nextUrl="/work/odessa"
    ref="casestudy"
  >

    <template #challenge>
      <div class="md:w-1/2">
          <div class="md:mr-8 mb-8 md:mb-0 h-full">
            <div class="challengeEmbedGE p-4">
              <lottie-animation
                ref="anim"
                :animationData="animation"
                :loop="false"
                :autoPlay="false"
              />
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="px-16 md:px-12 lg:px-16 lg:pr-32">
            <p class="subheading mt-24 md:mt-0">Challenge</p>
            <p>Each GE Appliance brand, from Monogram to Hotpoint, has its own unique look. The in-person tradeshow expresses that through unique booth designs, and enticing technology-driven displays.</p>
            <p>Relay was tasked with translating those diverse brand experiences into a single online destination that sales staff could use to communicate with off-site customers, while also serving as a value-added resource for on-site attendees.</p>
          </div>
        </div>
    </template>

    <template #images>
      <div class="gea-carousel w-full">
        <carousel :items-to-show="1" :wrapAround="true" :autoplay="1000000" :transition="800">
          <slide v-for="slide in slides" :key="slide">
            <div class="slide-wrap w-full flex items-center justify-center p-12">
              <div class="img-wrap relative">
                <img :src="slide" alt="" class="pic relative" />
                <img src="/ipad.png" alt="" class="bg absolute top-0 left-0" />
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
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
.challengeEmbedGE {
  background: #053253 url('/ge-logos-bg.jpg') no-repeat center center;
  background-size: cover;
}

.gea-carousel {
  background: rgb(211,211,211);
  background: linear-gradient(228deg, rgba(211,211,211,1) 0%, rgba(189,189,189,1) 100%);
}

.pic {
  z-index: 2;
  padding: 4%;
}

.bg {
  z-index: 1;
  -webkit-filter: drop-shadow(10px 10px 40px rgba(0,0,0,.3));
  filter: drop-shadow(10px 10px 40px rgba(0,0,0,.3));
}

.gea-carousel {
  --vc-nav-width: 4rem;
  --vc-nav-height: 4rem;
  --vc-nav-color: white;
}
</style>
