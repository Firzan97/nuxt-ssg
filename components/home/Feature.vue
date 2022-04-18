<template>
  <div class="container rounded-lg mx-auto sm:mt-96">
    <div class="pt-0 lg:pt-20 xl:pt-80">
      <!-- Feature -->
      <common-feature-hero
        v-for="(i, index) in homeFeature"
        :key="i.title"
        :item="i"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { homeFeature: { type: Array, required: true } },
}
</script>

<style></style>
