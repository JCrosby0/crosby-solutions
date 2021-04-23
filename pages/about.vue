<template>
  <Container>
    <h1 class="text-3xl">About</h1>
    <div v-for="item in aboutItems" :key="item.title" class="about-items">
      <h2 class="text-2xl mt-4">{{ item.title }}</h2>
      <p>{{ item.para }}</p>
    </div>
  </Container>
</template>

<script>
import aboutItems from '~/assets/content/about.json'
import Container from '~/components/container'
export default {
  components: {
    Container,
  },
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
