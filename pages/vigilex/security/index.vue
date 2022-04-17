<template>
  <div class="container rounded-lg mx-auto">
    <div class="flex flex-col items-center justify-center my-20">
      <h1
        class="font-bebas-neue uppercase text-6xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800"
      >
        Vigilex
      </h1>
      <p class="mt-16 text-sm sm:text-base text-gray-700 dark:text-white">
        Smart CCTV and Security
      </p>
    </div>

    <common-feature-hero
      v-for="(i, index) in features"
      :key="i.image"
      :item="i"
      :index="index"
      :show-learn-more="false"
    />
    <vigilex-plan1 :pricing-plan="pricingPlan" />
    <!-- <vigilex-plan2 /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const features = await $content('security', params.doc).fetch()
    const pricingPlan = await $content('price', params.doc).fetch()

    return { features, pricingPlan }
  },
}
</script>

<style></style>
