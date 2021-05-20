<template>
  <Container>
    <div v-if="document.title" class="content">
      <div class="intro text-3xl">
        A <span class="crosby">crosby</span
        ><span class="solutions">solution</span> for
        <img :src="document.logo" :alt="document.title" class="client-logo" />
        <span v-if="document.showTitle">{{ document.title }}</span>
      </div>
      <aside class="float-left border-gray-900 border-2 p-8 m-8">
        <h2 class="text-xl">Table of Contents:</h2>
        <ul>
          <li
            v-for="link of document.toc"
            :key="link.id"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          >
            <a class="link" @click="goto(link.id)">{{ link.text }}</a>
          </li>
        </ul>
      </aside>
      <article class="pointer-events-none">
        <nuxt-content :document="document"></nuxt-content>
      </article>
      <div class="cta w-full m-auto mt-8 text-center">
        <p class="mb-10">Interested?</p>
        <div class="relative mb-20">
          <CTA />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Something went wrong!</p>
      {{ document }}
    </div>
  </Container>
</template>

<script>
import Container from '~/components/container'
import CTA from '~/components/callToAction'
export default {
  components: {
    Container,
    CTA,
  },
  transition(to, from) {
    if (!from) {
      return 'page-left'
    }
    return to.page < from.page ? 'page-right' : 'page-left'
  },
  async asyncData({ $content, params }) {
    const document = await $content('clients', params.slug).fetch()
    return { document, params }
  },
  data() {
    return {
      answer: null,
    }
  },
  methods: {
    goto(id) {
      // const element = this.$refs[refName]
      // element.scrollIntoView()
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style>
.toc {
  width: 200px;
  @apply mt-8;
}
.intro {
  vertical-align: middle;
  text-align: center;
}
.client-logo {
  display: inline-block;
  vertical-align: middle;
  height: 100px;
  width: auto;
}
.crosby {
  font-weight: 600;
}
.solutions {
  letter-spacing: -2px;
  font-weight: 300;
}
.link {
  cursor: pointer;
  text-decoration: underline;
}
img {
  width: 200px;
}
.nuxt-content h1 {
  @apply text-3xl pb-4 pt-8;
}
.nuxt-content h2 {
  @apply text-2xl pb-4 pt-8;
}
.nuxt-content h3 {
  @apply text-xl pb-4 mt-4;
}

.nuxt-content p {
  @apply pb-4;
}

.nuxt-content li::before {
  content: '- ';
  @apply pr-4;
}
</style>
