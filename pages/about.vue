<template>
  <Container>
    <h1 class="text-3xl pb-4">About</h1>
    <Accordion :content="aboutItems" />
  </Container>
</template>

<script>
import Container from '~/components/container'
import Accordion from '~/components/accordion'
export default {
  name: 'About',
  components: {
    Container,
    Accordion,
  },
  async asyncData({ $content }) {
    const aboutItems = await $content('json').where({ slug: 'about' }).fetch()

    return {
      aboutItems,
    }
  },
}
</script>
