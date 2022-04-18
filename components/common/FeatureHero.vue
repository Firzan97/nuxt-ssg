<template>
  <div
    class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden"
  >
    <div
      v-if="!isOdd"
      class="container mx-auto px-6 flex flex-col items-center lg:flex-row relative py-16"
    >
      <div class="hidden sm:block lg:w-3/5 relative">
        <img :src="item.image" class="max-w-xl md:max-w-sm m-auto" />
      </div>
      <div class="sm:w-2/3 lg:w-4/5 flex items-center flex-col relative z-20">
        <span class="mx-auto sm:mx-0 w-24 h-2 bg-gray-800 dark:bg-white mb-12">
        </span>
        <h1
          class="text-center md:text-left font-bebas-neue uppercase text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800"
        >
          {{ item.title }}
        </h1>
        <p class="text-sm sm:text-base text-gray-700 dark:text-white">
          {{ item.description }}
        </p>
        <ul class="list-disc my-8">
          <li v-for="l in item.feature" :key="l">{{ l }}</li>
        </ul>
        <div v-if="showLearnMore" class="flex justify-center mt-2">
          <a
            href="#"
            class="uppercase py-2 px-4 rounded bg-transparent border-2 border-indigo-700 text-indigo-700 dark:text-white hover:bg-indigo-700 hover:text-white text-md"
          >
            {{ btnText }}
          </a>
        </div>
      </div>
    </div>
    <div
      v-else
      class="container mx-auto px-6 flex flex-col-reverse items-center lg:flex-row relative py-16"
    >
      <div
        class="sm:mx-auto sm:w-2/3 lg:w-4/5 flex flex-col items-center relative z-20"
      >
        <span class="mx-auto sm:mx-0 w-24 h-2 bg-gray-800 dark:bg-white mb-12">
        </span>
        <h1
          class="text-center md:text-left font-bebas-neue uppercase text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800"
        >
          {{ item.title }}
        </h1>
        <p class="text-center sm:text-base text-gray-700 dark:text-white">
          {{ item.description }}
        </p>
        <ul class="list-disc">
          <li v-for="l in item.feature" :key="l">{{ l }}</li>
        </ul>
        <div v-if="showLearnMore" class="flex justify-center mt-8">
          <a
            href="#"
            class="uppercase py-2 px-4 rounded bg-transparent border-2 border-indigo-700 text-indigo-700 dark:text-white hover:bg-indigo-700 hover:text-white text-md"
          >
            {{ btnText }}
          </a>
        </div>
      </div>
      <div class="hidden sm:block lg:w-3/5 relative">
        <img :src="item.image" class="max-w-xl md:max-w-sm m-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
    btnText: { type: String, default: 'Learn More' },
    index: { type: Number, required: true },
    showLearnMore: { type: Boolean, default: true },
  },
  computed: {
    isOdd() {
      return this.index % 2 !== 0
    },
  },
}
</script>

<style></style>
