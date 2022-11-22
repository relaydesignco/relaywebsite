<script setup lang="ts">
import { ref } from 'vue'
import ColorSection from '../components/ColorSection.vue'
import WorkListItem from '../components/WorkListItem.vue'
import Footer from '../components/Footer.vue'

const bg = ref('bg-white')

function onChangeBg(color: string) {
  bg.value = color
}
</script>

<template>
  <main :class="bg">

    <ColorSection bg-color="red" @changeBg="onChangeBg">
      <div class="flex flex-col min-h-screen px-8 md:px-24 items-center justify-center">
        <h1 class="h1 text-center text-blue mb-40 mt-56">Work.</h1>

        <div class="w-full py-12">
          <WorkListItem title="American Airlines" description="An online home for a global workforce" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem title="GE Appliances" description="A virtual experience as sales tool" img-src="/fpo.png" route-url="/work/american-airlines" />
          <WorkListItem title="Embodied Labs" description="Immersive online training platform" img-src="/fpo.png" route-url="/work/american-airlines" />
        </div>

      </div>
    </ColorSection>


    <Footer />
  </main>
</template>

<style scoped>

main {
  transition: background-color 1.2s ease;
}

</style>
