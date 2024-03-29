<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import { useSeoMeta } from 'unhead'
import WorkCarousel from '../components/WorkCarousel.vue'
import ColorSection from '../components/ColorSection.vue'
import Footer from '../components/Footer.vue'
import HeadlineScroll from '../components/HeadlineScroll.vue'
import { useMainStore } from "../stores/index"

const store = useMainStore()

useSeoMeta({
  title: 'Relay Design Co. – Approach',
  description: 'Our design-led process helps clients build what matters – to their customers, and their businesses.',
  ogImage: 'https://relaydesign.co/relay-banner.png',
  twitterCard: 'summary_large_image',
})

onMounted(() => {
    AOS.init();
})

</script>

<template>
  <main :class="`bg-${store.bgColor}`">
    <ColorSection bg-color="pink">
      <div class="flex flex-col min-h-screen px-8 md:px-36 items-center justify-center">
        <h1 class="h1 text-center text-blue">Approach.</h1>
        <p class="text-center large">Our design-led process helps clients build what matters – to their customers, and their businesses – reliably and effectively.</p>
      </div>
    </ColorSection>

    <ColorSection bg-color="white">
      <div class="min-h-screen w-full px-8 md:px-24 lg:px-56 py-36 items-start grid approach-grid">
        <div class="area1"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <h2 class="h5 text-pink">Product x Brand</h2>
          <p>We believe that the most successful products are built around clear, consistent brands – and the strongest brands are built around thoughtful, useful products.</p>
          <p>That’s why our approach starts with both brand and product strategy. When aligned, they have an exponential effect on your ability to create engaged and loyal customers.</p>
        </div>
        <div class="area2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <h2 class="h5 text-pink mt-5">Tight-knit Teams</h2>
          <p>Our product managers, designers, and engineers work closely together throughout the entire engagement. It’s a model that allows us to move quickly, catch issues early, and avoid lapses in communication.</p>
          <p>We can fill gaps in your existing team, or serve as a complete product team – helping you take your product from now to whatever comes next, quickly.</p>
        </div>
        <div class="area3"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <h2 class="h5 text-pink mt-5 md:mt-2">Experiment &amp; Iterate</h2>
          <p>We believe in discovery and research to help us make informed bets on what to build. But even more than that, we believe in learning from observing customers using an actual product.</p>
          <p>That’s why our approach is centered around learning by doing – through design iteration, quick prototyping,  validating ideas through user testing, and shipping often.</p>
        </div>
      </div>
    </ColorSection>


    <ColorSection bg-color="red">
      <HeadlineScroll headline="What we do." />
      <div class="flex flex-col md:flex-row min-h-screen px-8 md:px-24 pb-36 items-start text-white capabilities">
        <h2 class="h6 hidden md:block mb-12 text-white md:w-1/2 md:sticky md:top-32">Our capabilities.</h2>
        <div class="md:w-1/2">
          <div class="mb-14">
            <h3 class="h5 text-white mt-4">Product Management</h3>
            <ul>
              <li>Brand strategy</li>
              <li>Product strategy</li>
              <li>Product roadmap</li>
              <li>Customer interviews & research</li>
            </ul>
          </div>
          <div class="mb-14">
            <h3 class="h5 text-white">Design</h3>
            <ul>
              <li>UX/UI design</li>
              <li>Brand identity</li>
              <li>Design systems</li>
              <li>Rapid prototyping</li>
              <li>User testing</li>
            </ul>
          </div>
          <div class="mb-14">
            <h3 class="h5 text-white">Technology</h3>
            <ul>
              <li>Full-stack web development</li>
              <li>Mobile development</li>
              <li>API development</li>
              <li>Software for physical spaces</li>
              <li>Systems integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </ColorSection>

    <ColorSection bg-color="blue">
      <WorkCarousel />

      <Footer />
    </ColorSection>

  </main>
</template>

<style scoped>
.approach-grid .h5 {
  @apply text-4xl leading-none mb-3
}

.approach-grid p {
  @apply mb-6 text-xl;

  line-height: 1.6;
}
.approach-grid {
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}


.area1 { grid-area: 1 / 1 / 2 / 13; }
.area2 { grid-area: 2 / 1 / 3 / 13; }
.area3 { grid-area: 3 / 1 / 4 / 13; }

@screen md {

  .approach-grid {
    grid-template-rows: repeat(5, 1fr);
  }

  .area1 { grid-area: 1 / 1 / 3 / 6; }
  .area2 { grid-area: 2 / 8 / 4 / 13; }
  .area3 { grid-area: 4 / 2 / 6 / 7; }
}

.capabilities .h5 {
  @apply text-4xl leading-none mb-3
}
</style>
