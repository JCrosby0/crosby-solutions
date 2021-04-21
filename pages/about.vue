<template>
  <div class="bg-page h-full p-8">
    <h1 class="text-3xl">About</h1>
    <div v-for="item in aboutItems" :key="item.title" class="about-items">
      <h2 class="text-2xl mt-4">{{ item.title }}</h2>
      <p>{{ item.para }}</p>
    </div>
  </div>
</template>

<script>
import aboutItems from '~/assets/content/about.json'
export default {
  transition: {
    name: 'page',
    // mode: 'out-in',
  },
  data() {
    return {
      aboutItems,
    }
  },
}
</script>

<style></style>
