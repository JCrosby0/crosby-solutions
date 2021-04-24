<template>
  <Container>
    <h1 class="text-3xl">Articles</h1>
    <div class="search-box py-8">
      <label for="search">Search: </label>
      <input
        v-model="q"
        name="search"
        class="ml-4 border border-gray-500"
        @input="fetch"
      />
    </div>
    <div v-for="(item, i) in articles" :key="'article-' + i" class="">
      <nuxt-link :to="`/articles/${i}?`">
        <article class="article-preview py-4">
          <span class="text-2xl mt-4">{{ item.title }}</span>
          <p>{{ item.description }}</p>
        </article>
      </nuxt-link>
    </div>
    <div v-if="!articles.length">No articles found.</div>
  </Container>
</template>

<script>
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
      q: null,
      articles: [],
    }
  },
  mounted() {
    this.fetch().then((_) => {
      console.log(this.articles)
    })
  },
  methods: {
    async fetch() {
      this.articles = await this.$content('articles').search(this.q).fetch()
    },
  },
}
</script>

<style scoped>
.article-preview {
  text-decoration: none;
}
</style>
