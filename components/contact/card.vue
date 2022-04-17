<template>
  <div class="w-full flex items-center justify-center">
    <div class="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
      <p
        class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700"
      >
        Let’s chat and get a quote!
      </p>
      <div class="md:flex items-center mt-12">
        <div class="md:w-full flex flex-col">
          <label class="text-base font-semibold leading-none text-gray-800">
            Your Name (required)</label
          >
          <input
            v-model="name"
            tabindex="0"
            arial-label="Please input name"
            type="name"
            class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
            placeholder="Please input  name"
          />
        </div>
      </div>
      <div class="md:flex items-center mt-8">
        <div class="md:w-full flex flex-col md:mt-0 mt-4">
          <label class="text-base font-semibold leading-none text-gray-800">
            Your Email (required)</label
          >
          <input
            v-model="email"
            tabindex="0"
            arial-label="Please input email address"
            type="name"
            class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
            placeholder="Please input email address"
          />
        </div>
      </div>
      <div>
        <div class="w-full flex flex-col mt-8">
          <label class="text-base font-semibold leading-none text-gray-800"
            >Message</label
          >
          <textarea
            v-model="message"
            tabindex="0"
            aria-label="leave a message"
            role="textbox"
            type="name"
            class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
          ></textarea>
        </div>
      </div>
      <div class="flex items-center justify-center w-full">
        <button
          class="w-full mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
          @click="sendEmail"
        >
          SEND
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      message: null,
      email: null,
    }
  },
  methods: {
    async sendEmail() {
      try {
        const inputBody = {
          from: {
            name: 'Enlightyx',
            address: 'noreply@enlightyx.io',
          },
          subject: 'testing',
          textbody: 'testing',
          to: [
            {
              email_address: {
                address: this.email,
                name: 'Firzan',
              },
              name: 'Enlightyx.io',
            },
          ],
          // merge_info: {},
          // mail_template_key: {
          //   key: '2d6f.2b4c1a50.k1.eee8f4b0-242f-11ec-9ec2-525400e3c1b1.17c4593bf7b',
          // },
        }
        this.$axios.setHeader(
          'Authorization',
          'Zoho-enczapikey wSsVR60g/B/1B6ssmzekJOw4nQ8EVlv3HBh+i1GjuH79T/yR8Mc6kxHHU1X2HPMWFGdhHDMb9rMvmUoAgzpdiN4vzl8IWyiF9mqRe1U4J3x17qnvhDzIV29bkxuIJYMNxghqnWlnEc4q+g=='
        )
        await this.$axios.post('/email', inputBody).toPromise()
      } catch (e) {}
    },
  },
}
</script>

<style></style>
