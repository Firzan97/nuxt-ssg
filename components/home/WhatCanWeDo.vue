<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1
        class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white"
      >
        What can we do for you?
      </h1>

      <div
        class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-2"
      >
        <div
          v-for="s in services"
          :key="s.id"
          class="flex flex-col items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800"
        >
          <div class="hidden sm:block lg:w-4/5 relative">
            <img :src="s.image" class="max-w-xl md:max-w-sm m-auto" />
          </div>

          <h1
            class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
          >
            {{ s.title }}
          </h1>

          <p class="text-gray-500 dark:text-gray-300">
            {{ s.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { services: { type: Array, required: true } },
}
</script>

<style></style>
