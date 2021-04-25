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
import Container from '~/components/container'
export default {
  name: 'About',
  components: {
    Container,
  },
  async asyncData({ $content }) {
    const aboutItems = await $content('json').where({ slug: 'about' }).fetch()
    return {
      aboutItems,
    }
  },
}
</script>

<style></style>
