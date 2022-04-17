<template>
  <div class="p-4 md:w-1/3 pb-20">
    <div class="text-center">
      <div
        class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24"
      >
        <!-- Image -->
        <div class="relative sm:w-3/3 w-20 h-20">
          <img :src="item.image" class="w-20 h-20 md:max-w-sm m-auto" />
        </div>
      </div>
      <!-- Feature item title -->
      <h6 class="mb-2 font-semibold leading-5">{{ item.title }}</h6>
      <!-- Description -->
      <p class="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: { item: { type: Object, required: true } },
}
</script>

<style></style>
