<template>
  <Container>
    <h1 class="text-3xl">Solutions</h1>
    <div v-for="item in solutionsJSON" :key="item.title" class="solutions">
      <h2 :id="item.title.replace(/ /g, '')" class="text-2xl mt-4">
        {{ item.title }}
      </h2>
      <p>{{ item.para }}</p>
    </div>
    <p class="pt-8 text-lg text-center">
      Interested in something not listed here? We'd love to hear from you!
    </p>
    <CallToAction class="text-center" />
  </Container>
</template>

<script>
import CallToAction from '~/components/callToAction'
import Container from '~/components/container'
export default {
  name: 'Solutions',
  components: {
    CallToAction,
    Container,
  },
  async asyncData({ $content }) {
    const solutionsJSON = await $content('json')
      .where({ slug: 'solutions' })
      .fetch()
    return {
      solutionsJSON,
    }
  },
}
</script>

<style></style>
