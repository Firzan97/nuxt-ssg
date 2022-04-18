<template>
  <div class="w-full flex items-center justify-center">
    <div class="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
      <!-- Title  -->
      <p
        class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700"
      >
        Let’s chat and get a quote!
      </p>
      <v-obs v-slot="{ invalid }" tag="div">
        <!-- Name -->
        <div class="md:flex items-center mt-12">
          <v-prov
            v-slot="{ errors }"
            class="md:w-full flex flex-col"
            rules="required"
          >
            <!-- Label -->
            <label class="text-base font-semibold leading-none text-gray-800">
              Your Name
            </label>
            <input
              v-model="contact.name"
              tabindex="0"
              arial-label="Please input name"
              type="name"
              class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 mb-1 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input  name"
            />
            <label class="text-sm text-red-500 font-semibold leading-none">
              {{ errors[0] }}
            </label>
          </v-prov>
        </div>
        <!-- Email -->
        <div class="md:flex items-center mt-8">
          <v-prov
            v-slot="{ errors }"
            class="md:w-full flex flex-col md:mt-0 mt-4"
            rules="required|email"
          >
            <!-- Label -->
            <label class="text-base font-semibold leading-none text-gray-800">
              Email</label
            >
            <input
              v-model="contact.email"
              tabindex="0"
              arial-label="Please input email address"
              type="email"
              class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 mb-1 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input email address"
            />
            <label class="text-sm text-red-500 font-semibold leading-none">
              {{ errors[0] }}
            </label></v-prov
          >
        </div>
        <!-- Contact -->
        <div>
          <div class="w-full flex flex-col mt-8">
            <v-prov
              v-slot="{ errors }"
              class="md:w-full flex flex-col md:mt-0 mt-4"
              rules="required"
            >
              <!-- Label -->
              <label class="text-base font-semibold leading-none text-gray-800"
                >Contact
              </label>
              <input
                v-model="contact.contact"
                tabindex="0"
                aria-label="leave a message"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 mb-1 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              />
              <label class="text-sm text-red-500 font-semibold leading-none">
                {{ errors[0] }}
              </label></v-prov
            >
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col mt-8">
            <v-prov
              v-slot="{ errors }"
              class="md:w-full flex flex-col md:mt-0 mt-4"
              rules="required"
            >
              <!-- Company -->
              <label class="text-base font-semibold leading-none text-gray-800"
                >Company
              </label>
              <input
                v-model="contact.company"
                tabindex="0"
                aria-label="leave a message"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 mb-1 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              />
              <label class="text-sm text-red-500 font-semibold leading-none">
                {{ errors[0] }}
              </label></v-prov
            >
          </div>
        </div>
        <!-- Send -->
        <div class="flex items-center mt-8 justify-center w-full">
          <button
            :disabled="invalid"
            :class="btnClass(invalid)"
            @click="sendEmail"
          >
            SEND
          </button>
        </div></v-obs
      >
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
    async sendEmail() {
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

<style></style>
