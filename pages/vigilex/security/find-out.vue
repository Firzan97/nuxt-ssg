<template>
  <div class="mt-28 h-96 flex items-center justify-center">
    <div
      class="max-w-screen-md h-full p-6 flex flex-col items-center justify-start"
    >
      <h1
        class="uppercase text-6xl sm:text-4xl font-semibold leading-none dark:text-white text-gray-800"
      >
        Vigilex Smart CCTV and security
      </h1>
      <div>
        <p class="mt-16 text-sm sm:text-base text-gray-700 dark:text-white">
          Integrates with cameras and sensors, let's you stay on top of your
          security.
        </p>
        <ul class="list-disc list-outside my-8">
          <li>Cloud-connected, accessible anywhere</li>
          <li>Quick and easy installation</li>
          <li>Affordable and flexible pricing. No upfront cost.</li>
          <li>Safe and secure</li>
          <!-- ... -->
        </ul>
      </div>
      <div
        class="cursor-pointer flex justify-center items-center mb-10 sm:mb-20 z-30"
      >
        <button
          class="text-white bg-indigo-500 border-white border transition duration-150 ease-in-out focus:outline-none rounded px-4 sm:px-8 py-1 sm:py-3 text-sm"
          @click="$router.push('#feature')"
        >
          Learn More
        </button>
      </div>
    </div>
    <div class="h-full block p-6 max-w-md">
      <form>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <label
              class="form-check-label inline-block text-gray-800"
              for="firstname"
              >Name</label
            >
            <input
              id="firstname"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp123"
              placeholder="First name"
            />
          </div>
          <div class="form-group mb-6">
            <label
              class="form-check-label inline-block text-gray-800"
              for="lastname"
            />
            <input
              id="lastname"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp124"
              placeholder="Last name"
            />
          </div>
        </div>
        <div class="form-group mb-6">
          <label class="form-check-label inline-block text-gray-800" for="email"
            >Email</label
          >
          <input
            id="email"
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-6">
          <label class="form-check-label inline-block text-gray-800" for="phone"
            >Mobile</label
          >
          <input
            id="phone"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="phone"
          />
        </div>
      </form>
      <div
        class="cursor-pointer flex justify-start items-center mb-10 sm:mb-20 z-30"
      >
        <button
          class="text-black bg-gray-300 border-white border transition duration-150 ease-in-out focus:outline-none rounded px-4 sm:px-8 py-1 sm:py-3 text-sm"
          @click="$router.push('#feature')"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
