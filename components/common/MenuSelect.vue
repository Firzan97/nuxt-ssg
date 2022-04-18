<template>
  <div
    class="relative inline-block text-left z-30"
    @mouseenter="showItem = true"
    @mouseleave="showItem = false"
  >
    <div>
      <button
        id="options-menu"
        type="button"
        class="text-gray-100 hover:text-teal-accent-400 shadow-sm flex items-center justify-center w-full rounded py-2"
        @click="redirect(menuItems)"
      >
        {{ menuItems.name }}
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="showItem"
        ref="openModal"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <div
          class="py-1 cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            v-for="i in menuItems.items"
            :key="i.name"
            class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem"
            @click="redirect(i)"
          >
            <span class="flex flex-col">
              <span> {{ i.name }} </span>
            </span>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: { type: Object, required: true },
  },
  data() {
    return {
      showItem: false,
    }
  },
  methods: {
    redirect(i) {
      if (i.isWebsite) window.location.href = i.to
      else this.$router.push(i.to)
    },
  },
}
</script>

<style>
.close {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
