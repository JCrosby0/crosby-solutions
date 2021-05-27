<template>
  <Container>
    <h1 class="text-3xl pb-4">{{ solutions[0].name }}</h1>
    <Accordion :content="solutions[0].content" />
    <div class="text-center mx-auto relative mt-16 mb-16">
      <CallToAction />
    </div>
  </Container>
</template>

<script>
import Container from '~/components/container'
import Accordion from '~/components/accordion'
import CallToAction from '~/components/callToAction'
export default {
  name: 'Solutions',
  components: {
    Container,
    Accordion,
    CallToAction,
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
