<template>
  <Container>
    <h1 class="text-3xl pb-4">Solutions</h1>
    <Accordion :content="solutions" />
  </Container>
</template>

<script>
import Container from '~/components/container'
import Accordion from '~/components/accordion'
export default {
  name: 'Solutions',
  components: {
    Container,
    Accordion,
  },
  async asyncData({ $content }) {
    const solutions = await $content('json')
      .where({ slug: 'solutions' })
      .fetch()
    return {
      solutions,
    }
  },
}
</script>
