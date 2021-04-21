<template>
  <div class="bg-page h-full p-8">
    <h1 class="text-3xl">Solutions</h1>
    <div v-for="item in solutions" :key="item.title" class="solutions">
      <h2 class="text-2xl mt-4">{{ item.title }}</h2>
      <p>{{ item.para }}</p>
    </div>
  </div>
</template>

<script>
import solutions from '~/assets/content/solutions.json'
export default {
  transition: {
    name: 'page',
    // mode: 'out-in',
  },
  data() {
    return {
      solutions,
    }
  },
}
</script>

<style></style>
