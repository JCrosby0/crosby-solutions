<template>
  <Container>
    <h1 class="text-3xl pb-4">About</h1>
    <Accordion :content="aboutItems" />
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
  name: 'About',
  components: {
    Container,
    Accordion,
    CallToAction,
  },
  async asyncData({ $content }) {
    const aboutItems = await $content('json').where({ slug: 'about' }).fetch()

    return {
      aboutItems,
    }
  },
}
</script>
