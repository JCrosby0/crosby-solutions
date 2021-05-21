<template>
  <Container>
    <div v-if="document.title" class="content">
      <div class="intro text-3xl">
        A <span class="crosby">crosby</span
        ><span class="solutions">solution</span> for
        <img :src="document.logo" :alt="document.title" class="client-logo" />
        <span v-if="document.showTitle">{{ document.title }}</span>
      </div>
      <!-- <aside class="float-left border-gray-900 border-2 p-8 m-8">
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
      </aside> -->
      <NotionRenderer v-if="notionRender" :block-map="blockMap" full-page />
      <!-- <article class="pointer-events-none">
        <nuxt-content v-if="nuxtContent" :document="document"></nuxt-content>
      </article> -->
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

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text) {
  return text.replace(/-/, ' ').toUpperCase()
}

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
  async asyncData({
    $config: { NOTION_CLIENT_BLOCK },
    $content,
    $notion,
    params,
  }) {
    // nuxt content async
    const document = await $content('clients', params.slug).fetch()

    // notion renderer async
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const clientBlockMap = await $notion.getPageBlocks(
      process.env.NOTION_CLIENT_BLOCK
    )
    // match the available clients with the params slug
    const match = Object.entries(clientBlockMap).filter(
      (n) => n[1].value.properties?.title[0][0] === toPascalCase(params.slug)
    )[0][1].value
    // console.log('title: ', match.properties.title[0][0])

    // identify the appropriate content
    // const pageId = match.content[0]
    // console.log('pageId: ', pageId)

    // retrieve the content
    const blockMap = await $notion.getPageBlocks(match.content)
    // console.log('blockMap: ', blockMap)
    return { document, params, clientBlockMap, blockMap }
  },
  data() {
    return {
      answer: null,
      nuxtContent: false,
      notionRender: true,
      blockMap: null,
      page: null,
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
@import 'vue-notion/src/styles.css'; /* optional Notion-like styles */
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
.notion-page {
  font-family: 'Montserrat', sans-serif;
}
.notion-h1 {
  @apply text-3xl pb-4 pt-8;
}
.notion-h2 {
  @apply text-2xl pb-4;
}
.notion-h3 {
  @apply text-xl pb-4 mt-4;
}
.notion-text {
  @apply pb-4;
}

.notion-list li::marker {
  content: '- ';
  @apply pr-4;
}
</style>
