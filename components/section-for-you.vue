<template>
  <div>
    <div
      class="container p-4 min-h-screen w-full align-top mx-auto text-center"
    >
      <h1 class="text-3xl p-4 text-left">Where are we starting?</h1>
      <div class="option-container flex flex-col lg:flex-row justify-between">
        <Card
          v-for="(option, i) in options"
          :key="'option' + i"
          class="w-full my-4 lg:w-1/3 lg:mx-4"
        >
          <template #title>{{ option.title }}</template>
          <template #description>
            <li v-for="(li, j) in option.list" :key="'item' + i + '-' + j">
              {{ li }}
            </li>
          </template>
          <template #default>{{ option.content }}</template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/option-card'
import options from '~/assets/content/for-you-options.json'
export default {
  components: {
    Card,
  },
  data() {
    return {
      options,
    }
  },
}
</script>

<style></style>
