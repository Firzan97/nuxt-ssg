<template>
  <div class="container rounded-lg mx-auto mt-96">
    <div class="pt-96">
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
