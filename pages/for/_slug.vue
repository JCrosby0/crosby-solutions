<template>
  <Container>
    <div v-if="clientName" class="content relative">
      <div class="intro text-3xl">
        A <span class="crosby">crosby</span
        ><span class="solutions">solution</span> for:<br />
        <img
          v-if="clientLogo"
          :src="clientLogo"
          :alt="clientName + ' logo'"
          class="client-logo"
        />
        <client-only placeholder="...loading">
          <span v-show="showCompany" class="text-6xl">{{ clientName }}</span>
        </client-only>
      </div>

      <aside
        class="float-left bg-green-50 border-gray-900 border-2 p-8 mt-8 mb-8 md:m-8 w-full md:w-64"
      >
        <h2 class="text-xl">Table of Contents:</h2>
        <NotionRenderer :block-map="toc" class="toc" />
        <!-- <ul>
          <li
            v-for="link of document.toc"
            :key="link.id"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          >
            <a class="link" @click="goto(link.id)">{{ link.text }}</a>
          </li>
        </ul> -->
      </aside>
      <NotionRenderer :block-map="blockMap" full-page />
      <div class="cta w-full m-auto mt-8 text-center">
        <p class="mb-10">Interested?</p>
        <div class="relative mb-20">
          <CTA />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Something went wrong!</p>
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
const tocHeadings = ['page', 'header', 'sub_header', 'sub_sub_header']

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
  async asyncData({ $config: { NOTION_CLIENT_BLOCK }, $notion, params }) {
    /**
     * use Notion module to get Notion blocks from the API via a Notion pageId
     * Query(1): retrieve client index information
     * requested page id is index-0 of object
     * two clients are index-1 and index-2
     */
    const clientsBlockMap = await $notion.getPageBlocks(NOTION_CLIENT_BLOCK)

    // store queried ids in an array - they are used later to isolate the desired page
    const knownPages = [NOTION_CLIENT_BLOCK]

    // match the available clients entries via title property with the params slug
    const match = Object.entries(clientsBlockMap).find(
      (n) => n[1].value.properties?.title[0][0] === toPascalCase(params.slug)
    )[1].value

    // get information as required
    const clientId = match.id
    const clientName = match.properties.title[0][0]
    const clientLogo = match.format.page_icon
    // the desired page is here in match.content, but no way to identify?

    /**
     * Query(2) retrieve index page content for the matching client id
     * the client page is the index page for the specific client
     */
    const clientBlockMap = await $notion.getPageBlocks(clientId)
    knownPages.push(clientId)

    /**
     * filter down to entries that are of type 'page'
     * this will return pages including those with the two ids identified previously
     * additionally filter to remove previously seen pages
     */
    const proposalId = Object.entries(clientBlockMap).filter(
      (n) => n[1].value.type === 'page' && !knownPages.includes(n[1].value.id)
    )[0][1].value.id

    /**
     * Query(3): retrieve the proposal page content for the matched client
     */

    const blockMap = await $notion.getPageBlocks(proposalId)
    // const blockMap = {}
    return {
      clientName,
      clientLogo,
      params,
      blockMap,
    }
  },
  data() {
    return {
      answer: null,
      clientName: null,
      blockMap: {},
      page: null,
      showCompany: false,
    }
  },
  computed: {
    toc() {
      if (!this.blockMap) return null
      return Object.fromEntries(
        Object.entries(this.blockMap).filter((n) =>
          tocHeadings.includes(n[1].value.type)
        )
      )
    },
  },
  mounted() {
    this.showCompany =
      document &&
      document.getElementsByClassName('client-logo')[0].clientWidth <= 300
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
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
.notion,
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

.toc .notion-h1,
.toc .notion-h2,
.toc .notion-h3 {
  @apply text-base p-0 m-0 mb-4 font-normal;
}
.toc .notion-h3 {
  @apply ml-8;
}

.notion-list li::marker {
  content: '- ';
  @apply pr-4;
}
</style>
