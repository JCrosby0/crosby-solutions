<template>
  <div
    class="menu-container flex flex-col pt-4 pb-4 bg-gray-900 text-white text-right ml-auto w-auto"
  >
    <nuxt-link
      v-for="opt in menuOptoins"
      :key="opt"
      :to="opt.to"
      class="option pl-4 pr-4 m-0 w-full hover:bg-green-300 hover:text-gray-900"
    >
      {{ opt.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    menuOptions: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style>
.menu-container {
  z-index: 2;
  width: fit-content;
  backdrop-filter: opacity(0.5) blur(4px);
}
</style>
