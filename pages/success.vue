<template>
  <Container class="text-center">
    <Logo :collapse="true" />
    <h1 class="text-3xl p-4">Submission Successful</h1>
    <p class="p-4">Thank-you kindly!</p>
    <p class="p-4">
      You will be returned to the <NuxtLink to="/">Home page</NuxtLink> in a few
      moments.
    </p>
  </Container>
</template>

<script>
import Container from '~/components/container'
import Logo from '~/components/Logo'
export default {
  components: { Logo, Container },
  mounted() {
    setTimeout(() => this.$router.push('/'), 5000)
  },
}
</script>
