<template>
  <Container class="text-center">
    <Logo :collapse="true" />
    <h1 class="text-3xl p-4">{{ error.message }} ({{ error.statusCode }})</h1>
    <p class="p-4">Return to <NuxtLink to="/">Home page</NuxtLink></p>
  </Container>
</template>

<script>
import Container from '~/components/container'
import Logo from '~/components/Logo'
export default {
  components: { Logo, Container },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
