<template>
  <div
    :class="[
      $route.path === '/' ? 'bg-page-dark' : 'bg-page',
      'relative',
      'h-full',
      'w-full',
      'overflow-y-auto',
    ]"
    @scroll="stickyNavBar"
  >
    <section ref="hero" class="bg-hero">
      <Landing class="my-auto" />
    </section>
    <Nav ref="nav" class="nav mt-66"></Nav>
    <!-- <section class="bg-white afterMenu"><Story /></section>
      " -->
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
import Landing from '~/components/section-landing'
import ForYou from '~/components/section-for-you'
import Features from '~/components/section-features'
import Footer from '~/components/section-footer'
import TechStack from '~/components/section-tech-stack'
// import Clients from '~/components/section-clients'
// import Story from '~/components/section-story'
import Services from '~/components/section-services'
import Nav from '~/components/Nav'
import CTA from '~/components/section-cta'
export default {
  name: 'Home',
  components: {
    Landing,
    ForYou,
    Features,
    Footer,
    TechStack,
    // Clients,
    // Story,
    Services,
    Nav,
    CTA,
  },
  inject: ['toggleMenu'],
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
  mounted() {
    this.offset = this.$refs.nav.$el.offsetTop
  },
  methods: {
    toggleSticky(status) {
      if (status) {
        this.$parent.$parent.showNav = true
        this.$refs.nav.$el.classList.add('sticky')
        this.$refs.hero.classList.add('mt-66')
      } else {
        this.$parent.$parent.showNav = false
        this.$refs.nav.$el.classList.remove('sticky')
        this.$refs.hero.classList.remove('mt-66')
      }
    },
    stickyNavBar(e) {
      this.$nextTick(() => {
        this.toggleSticky(e.target.scrollTop > this.offset)
        this.toggleMenu()
      })
    },
  },
}
</script>
<style scoped>
.mt-66 {
  margin-top: -64px;
}
.nav {
  @apply z-20;
}
.sticky {
  display: hidden;
  height: 0;
}
section {
  @apply text-center;
}
/* .bg-light {
  background-image: linear-gradient(
    to right,
    rgb(209, 250, 229),
    #rgb(167, 243, 208),
    rgb(209, 250, 229)
  );
} */

.bg-feature {
  min-height: 100%;
  background-image: linear-gradient(135deg, transparent, #064e3b, transparent);
}
.bg-hero {
  /* background-image: url('~/assets/img/hex-back.jpg'); */
  background: #064e3b;
  /* background-image: url('https://res.cloudinary.com/crosby-solutions/image/upload/c_fill,h_1701,q_auto,w_3024/a_0/v1619594741/hex-back_e6wn2z.webp'); */
  /* background-size: cover; */
  background-image: linear-gradient(135deg, #000, #064e3b, #000);

  background-position-y: 47%;
  background-position-x: 60%;
}
</style>
