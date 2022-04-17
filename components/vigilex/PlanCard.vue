<template>
  <div>
    <div class="p-8 bg-gray-900 rounded">
      <div class="mb-4 text-center">
        <!-- Title -->
        <p class="text-xl font-medium tracking-wide text-white">
          {{ plan.title }}
        </p>
        <!-- Desccription -->
        <p class="text-md font-medium tracking-wide text-white">
          {{ plan.description }}
        </p>
        <!-- Pricing -->
        <div class="flex flex-col items-center justify-center">
          <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
            {{ plan.price }}
          </p>
          <!-- Unit -->
          <p class="text-lg text-gray-500">{{ plan.priceDescription }}</p>
        </div>
      </div>
      <ul class="mb-8 space-y-2">
        <li class="flex items-center">
          <div class="mr-3">
            <!-- Svg logo for camera feed-->
            <svg
              class="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-width="2"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="6,12 10,16 18,8"
              ></polyline>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="11"
                stroke="currentColor"
              ></circle>
            </svg>
          </div>
          <!-- Camera Feed -->
          <p class="font-medium text-gray-300">
            {{ plan.cameraFeedDay }}
          </p>
        </li>
        <li class="flex items-center">
          <div class="mr-3">
            <!-- Svg logo for remote access -->
            <svg
              class="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-width="2"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="6,12 10,16 18,8"
              ></polyline>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="11"
                stroke="currentColor"
              ></circle>
            </svg>
          </div>
          <!-- Remote Access -->
          <p class="font-medium text-gray-300">
            {{ plan.remoteAccess }}
          </p>
        </li>
        <li class="flex items-center">
          <div class="mr-3">
            <!-- Svg logo for connect sensor -->
            <svg
              class="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-width="2"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="6,12 10,16 18,8"
              ></polyline>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="11"
                stroke="currentColor"
              ></circle>
            </svg>
          </div>
          <!-- Connect Sensor  -->
          <p class="font-medium text-gray-300">
            {{ plan.connectSensor }}
          </p>
        </li>
        <li class="flex items-center">
          <div class="mr-3">
            <!-- Svg logo for  Notification Telegram  -->
            <svg
              class="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-width="2"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                points="6,12 10,16 18,8"
              ></polyline>
              <circle
                cx="12"
                cy="12"
                fill="none"
                r="11"
                stroke="currentColor"
              ></circle>
            </svg>
          </div>
          <!-- Notification Telegram  -->
          <p class="font-medium text-gray-300">
            {{ plan.notificationTelegram }}
          </p>
        </li>
      </ul>
      <button
        type="submit"
        class="bg-white text-gray-900 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        {{ btnText }}
      </button>
    </div>
    <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75"></div>
    <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50"></div>
    <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25"></div>
  </div>
</template>

<script>
export default {
  props: {
    plan: { type: Object, required: true },
    btnText: { type: String, default: 'Learn More' },
  },
}
</script>

<style></style>
