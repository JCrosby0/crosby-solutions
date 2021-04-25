<template>
  <div class="bg-page h-full w-full overflow-auto">
    <section class="bg-landing"><Landing class="my-auto" /></section>
    <section class="bg-transparent"><Story /></section>
    <section class="bg-transparent"><ForYou /></section>
    <section class="bg-transparent"><Features /></section>
    <section class="bg-transparent"><Clients /></section>
    <section class="bg-transparent"><TechStack /></section>
    <section class="bg-black">
      <Footer :social="social" :solutions="solutions" />
    </section>
  </div>
</template>

<script>
import Landing from '~/components/section-landing'
import ForYou from '~/components/section-for-you'
import Features from '~/components/section-features'
import Footer from '~/components/section-footer'
import TechStack from '~/components/section-tech-stack'
import Clients from '~/components/section-clients'
import Story from '~/components/section-story'
export default {
  name: 'Home',
  components: { Landing, ForYou, Features, Footer, TechStack, Clients, Story },
  async asyncData({ $content }) {
    const solutions = await $content('json')
      .where({ slug: 'solutions' })
      .fetch()
    const social = await $content('json').where({ slug: 'social' }).fetch()
    return {
      solutions,
      social,
    }
  },
}
</script>
<style scoped>
section {
  @apply text-center;
}
.bg-landing {
  min-height: 80%;
  background-image: linear-gradient(to right, black, #064e3b, black);
}
</style>
