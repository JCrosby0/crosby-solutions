<template>
  <div
    class="flex flex-row justify-between p-4 bg-green-100 border-b border-gray-900 shadow-lg"
  >
    <nuxt-link to="/" class="logo">
      <Logo
        key="navLogo"
        type="color"
        :font-size="10"
        :collapse="false"
        :animate="false"
      />
    </nuxt-link>
    <button
      class="md:hidden nav-button p-1 border text-gray-900 border-gray-900 w-8 h-8 text-center bg-green-500 rounded"
      @click="$emit('toggle')"
    >
      ☰
    </button>
    <div class="hidden md:inline-block links my-auto">
      <nuxt-link
        v-for="menu in menuOptions"
        :key="menu.name"
        :to="menu.to"
        class="text-green-900 p-2 align-middle my-auto"
        >{{ menu.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Logo from '~/components/crosby-solutions'
export default {
  components: { Logo },
  props: {
    menuOptions: {
      required: true,
      type: Array,
    },
  },
}
</script>
<style scoped>
.logo {
  text-decoration: none !important;
}
</style>
