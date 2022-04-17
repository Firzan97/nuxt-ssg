<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h2
        class="flex pb-16 justify-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-4xl mx-auto"
      >
        <!-- Title -->
        <span class="relative inline-block">
          <span class="relative">FEATURES </span>
        </span>
      </h2>
      <div class="flex flex-wrap -m-4 justify-center">
        <!-- Feature -->
        <common-feature-card v-for="i in features" :key="i.image" :item="i" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          image: 'http://enlightyx.io/wp-content/uploads/2020/04/16-512.png',
          name: 'Cloud Connected',
          description:
            ' Works in parallel with the thermal camera providing real-time visual stream & auto-save detection clips.',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/04/flat_seo-47-512.png',
          name: 'Quick & Easy Installation',
          description:
            'Your live camera views, recordings & events can be accessed anytime, anywhere.',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/04/Security-43-512.png',
          name: 'Safe & Secure 24/7',
          description:
            ' Integrates with cameras & sensors that detect irregular events. Promptly send alert ensuring most appropriate intervention for any situation. ',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/04/smart-home-01-512.png',
          name: 'Detect Temperature',
          description:
            ' See beyond the surface, provide fast screening for elevated temperature. Non-invasive, non-contact.',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/03/Notification-512.png',
          name: 'Send Heat Sources Alert',
          description:
            ' Temperature above the threshold will instantly receive push notification via email or Telegram.',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/04/energy-management-512-1.png',
          name: 'Auto-record Detection Clips',
          description:
            ' See beyond the surface, provide fast screening for elevated temperature. Non-invasive, non-contact.',
        },
        {
          image:
            'http://enlightyx.io/wp-content/uploads/2020/04/Ecommerce-filledline-05-512.png',
          name: 'Affordable & Flexible Pricing',
          description:
            ' Expand or reduce the level of service according to your current needs. No upfront cost required.',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
