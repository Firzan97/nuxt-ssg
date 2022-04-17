<template>
  <div class="container rounded-lg mx-auto">
    <div class="flex flex-col items-center justify-center my-20">
      <!-- Title -->
      <h1
        class="font-bebas-neue uppercase text-6xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800"
      >
        Optional Features
      </h1>
      <!-- Description -->
      <p class="mt-16 text-sm sm:text-base text-gray-700 dark:text-white">
        Thermal screening system enables stakeholders to be more efficient,
        discrete and effective in identifying elevated temperature individuals
        that need further screening.
      </p>
    </div>
    <!-- Features -->
    <common-feature-hero
      v-for="(i, index) in thermalScreening"
      :key="i.image"
      :item="i"
      :index="index"
      :show-learn-more="false"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const thermalScreening = await $content(
      'thermalScreening',
      params.doc
    ).fetch()

    return { thermalScreening }
  },
}
</script>

<style></style>
