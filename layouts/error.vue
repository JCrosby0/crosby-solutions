<template>
  <Container class="text-center h-screen">
    <div class="background p-12 h-3/5 my-auto">
      <object
        class="mx-auto"
        type="image/svg+xml"
        :data="require('~/assets/svg/cs-logo.svg')"
        height="150px"
      />
      <h1 class="text-3xl p-4">{{ error.message }} ({{ error.statusCode }})</h1>
      <p class="p-4">Return to <NuxtLink to="/">Home page</NuxtLink></p>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/container'
export default {
  components: { Container },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.background {
  backdrop-filter: blur(16px);
  @apply bg-green-50;
}
</style>
