<template>
  <Container>
    <h1 class="text-3xl">Solutions</h1>
    <div v-for="item in solutions" :key="item.title" class="solutions">
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
import solutions from '~/assets/content/solutions.json'
import CallToAction from '~/components/callToAction'
import Container from '~/components/container'
export default {
  components: {
    CallToAction,
    Container,
  },
  transition: {
    name: 'page',
    // mode: 'out-in',
  },
  data() {
    return {
      solutions,
    }
  },
}
</script>

<style></style>
