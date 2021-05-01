<template>
  <div
    class="menu-container flex flex-col pt-4 pb-4 text-white bg-green-900 text-right ml-auto w-auto"
  >
    <nuxt-link
      v-for="opt in menuOptions"
      :key="opt.name"
      :to="opt.to"
      class="option flex-initial px-4 py-2 w-full hover:bg-green-300 hover:text-gray-900"
    >
      {{ opt.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  inject: ['menuOptions'],
}
</script>

<style>
.menu-container {
  width: fit-content;
  backdrop-filter: blur(16px);
}
</style>
