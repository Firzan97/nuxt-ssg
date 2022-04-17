<template>
  <div class="w-full">
    <!-- Learn More -->
    <home-learn-more />
    <!-- Feature -->
    <home-feature id="feature" :home-feature="homeFeature" />
    <!-- What can we do -->
    <home-what-can-we-do :services="services" class="mb-28" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const homeFeature = await $content('homeFeature', params.doc).fetch()
    const services = await $content('services', params.doc).fetch()

    return { homeFeature, services }
  },
  head: { title: 'Home' },
}
</script>
