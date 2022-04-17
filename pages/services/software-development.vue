<template>
  <div
    class="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div
      class="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto"
    >
      <div>
        <p
          class="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase"
        >
          OFFERINGS
        </p>
        <h2
          class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Software Development
        </h2>
        <div class="flex">
          <span
            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-event mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
              />
              <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
              />
            </svg>
            Posted March 11, 2020
          </span>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
            admin@enlightyx.io</span
          >
        </div>
        <div class="w-full">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src="https://enlightyx.io/wp-content/uploads/2020/03/3411109-e1583912240867.jpg"
          />
        </div>
        <p class="text-base text-gray-700 md:text-lg mb-28">
          Our team is experienced in Web and Mobile development as well as Cloud
          Infrastructure design, deployment and maintenance.
        </p>
        <div
          @click="$router.push('/services/growth-strategy')"
          class="cursor-pointer flex mb-28 items-center my-8 p-8 bg-gray-100 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-left mr-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
          <p>Growth Strategy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
