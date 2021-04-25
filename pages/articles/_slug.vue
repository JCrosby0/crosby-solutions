<template>
  <Container>
    <div class="content">
      <h1 class="text-3xl">{{ document.title }}</h1>
      <div class="byline mb-4">
        <span>{{ document.author }}</span>
        <span>{{ document.createdAt }}</span>
      </div>

      <nuxt-content :document="document"></nuxt-content>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/container'
export default {
  components: {
    Container,
  },
  transition(to, from) {
    if (!from) {
      return 'page-left'
    }
    return to.page < from.page ? 'page-right' : 'page-left'
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles').fetch()
    const document = articles[0]
    return { articles, document, params }
  },
}
</script>

<style></style>
