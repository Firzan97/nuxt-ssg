<template>
  <body class="h-screen relative">
    <div class="bg-indigo-700 h-screen w-full">
      <!-- Contact Card -->
      <contact-card />
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
  head: {
    title: 'Contact Us',
  },
}
</script>
