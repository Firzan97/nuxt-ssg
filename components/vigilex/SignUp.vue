<template>
  <div class="relative">
    <img
      src="https://enlightyx.io/wp-content/uploads/2020/04/professional-cctv-technician-working_35034-88.jpg"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <!-- Left Side -->
          <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <!-- Title -->
            <h2
              class="text-center sm:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              VIGILEX SMART CCTV & thermal screening system
            </h2>
            <!-- Description -->
            <p
              class="text-center sm:text-left max-w-xl mb-4 text-base text-gray-400 md:text-lg"
            >
              Sign up and get information about VIGILEX features.
            </p>
          </div>
          <!-- Right Side -->
          <v-obs v-slot="{ invalid }" class="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
              <!-- Title -->
              <h3
                class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl"
              >
                Sign up for updates
              </h3>
              <form>
                <!-- Name -->
                <div class="mb-1 sm:mb-2">
                  <v-prov v-slot="{ errors }" rules="required">
                    <label for="name" class="inline-block mb-1 font-medium"
                      >Name</label
                    >
                    <input
                      id="name"
                      v-model="contact.name"
                      placeholder="Name"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="name"
                    />
                    <label
                      class="text-sm text-red-500 font-semibold leading-none"
                    >
                      {{ errors[0] }}
                    </label></v-prov
                  >
                </div>
                <!-- Email -->
                <div class="mb-1 sm:mb-2">
                  <v-prov v-slot="{ errors }" rules="required|email">
                    <label for="email" class="inline-block mb-1 font-medium"
                      >Email</label
                    >
                    <input
                      id="email"
                      v-model="contact.email"
                      placeholder="Email"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="email"
                    />
                    <label
                      class="text-sm text-red-500 font-semibold leading-none"
                    >
                      {{ errors[0] }}
                    </label></v-prov
                  >
                </div>
                <!-- Phone -->
                <div class="mb-1 sm:mb-2">
                  <v-prov v-slot="{ errors }" rules="required">
                    <label for="phone" class="inline-block mb-1 font-medium"
                      >Phone</label
                    >
                    <input
                      id="phone"
                      v-model="contact.contact"
                      placeholder="Phone"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="phone"
                    />
                    <label
                      class="text-sm text-red-500 font-semibold leading-none"
                    >
                      {{ errors[0] }}
                    </label></v-prov
                  >
                </div>
                <!-- Company -->
                <div class="mb-1 sm:mb-2">
                  <v-prov v-slot="{ errors }" rules="required">
                    <label for="company" class="inline-block mb-1 font-medium"
                      >Company</label
                    >
                    <input
                      id="company"
                      v-model="contact.company"
                      placeholder="Company"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="company"
                    />
                    <label
                      class="text-sm text-red-500 font-semibold leading-none"
                    >
                      {{ errors[0] }}
                    </label></v-prov
                  >
                </div>
                <!-- Button -->
                <div class="mt-4 mb-2 sm:mb-4">
                  <button
                    :disabled="invalid"
                    type="submit"
                    :class="btnClass(invalid)"
                    @click="send()"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div></v-obs
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { btnClass } from '@/utils/helpers'
import { contact } from '@/utils/constants'

export default {
  data() {
    return {
      contact: { ...contact },
    }
  },
  methods: {
    btnClass,
    reset() {
      this.contact = { ...contact }
    },
    async send() {
      try {
        Swal.fire(
          'Thank you!',
          'We have received your details. We will contact you shortly.'
        )
        await this.$axios.post('/', this.contact)
        this.reset()
      } catch (e) {}
    },
  },
}
</script>

<style scoped></style>
