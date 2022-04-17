<template>
  <div class="relative w-full">
    <div class="absolute hidden w-full bg-gray-50 lg:block h-96"></div>
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">Plan</span>
          </span>
        </h2>
      </div>
      <div class="grid max-w-screen-xl gap-10 md:grid-cols-2 sm:mx-auto">
        <vigilex-plan-card v-for="i in pricingPlan" :key="i.title" :plan="i" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { pricingPlan: { type: Array, required: true } },
}
</script>
