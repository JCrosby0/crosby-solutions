<template>
  <div
    :class="[
      $route.path === '/' ? 'bg-page-dark' : 'bg-page',
      'relative',
      'h-full',
      'w-full',
    ]"
  >
    <section class="bg-green-50 afterMenu">
      <Services />
      <CTA />
    </section>
    <section class="bg-feature">
      <ForYou />
      <CTA />
    </section>
    <section class="bg-white">
      <Features />
      <CTA />
    </section>
    <!-- <section class="bg-transparent"><Clients /></section> -->
    <section class="bg-transparent">
      <TechStack />
      <CTA />
    </section>
    <section class="bg-transparent">
      <Footer :social="social" :solutions="solutions" />
    </section>
  </div>
</template>

<script>
// import Landing from '~/components/section-landing'
import ForYou from '~/components/section-for-you'
import Features from '~/components/section-features'
import Footer from '~/components/section-footer'
import TechStack from '~/components/section-tech-stack'
// import Clients from '~/components/section-clients'
// import Story from '~/components/section-story'
import Services from '~/components/section-services'
import CTA from '~/components/section-cta'
export default {
  name: 'Home',
  components: {
    // Landing,
    ForYou,
    Features,
    Footer,
    TechStack,
    // Clients,
    // Story,
    Services,
    CTA,
  },

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
  data() {
    return {
      offset: null,
      addSticky: false,
    }
  },
}
</script>
<style scoped>
section {
  @apply text-center;
}

.bg-feature {
  background-image: linear-gradient(135deg, transparent, #064e3b, transparent);
}
.bg-hero {
  background: #064e3b;
  background-image: linear-gradient(135deg, #000, #064e3b, #000);

  background-position-y: 47%;
  background-position-x: 60%;
}
</style>
