<template>
  <div class="accordion">
    <div
      v-for="item in contentReplaced"
      :id="item.replace"
      :key="item.title"
      :class="{
        items: true,
        'items-open': item.replace === expanded,
      }"
    >
      <a :href="'#' + item.replace">
        <div
          :class="{
            header: true,
            'header-open': item.replace === expanded,
          }"
          @click="handleClick(item.replace)"
        >
          <h2 class="text-2xl">
            {{ item.title }}
          </h2>
        </div>
        <div
          :class="{
            content: true,
            'content-visible': item.replace === expanded,
          }"
        >
          <p>{{ item.para }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expanded: this.$nuxt.$route.hash.slice(1) || null,
    }
  },
  computed: {
    // add extra key with space removed from title
    contentReplaced() {
      return this.content.map((n) => {
        n.replace = n.title.replace(/ /g, '')
        return n
      })
    },
  },
  methods: {
    handleClick(replace) {
      this.expanded = replace === this.expanded ? null : replace
    },
  },
}
</script>

<style scoped>
.header {
  transition: background-color 0.5s, padding 0.5s;
  @apply cursor-pointer p-4;
}
.header-open {
  @apply bg-green-200 pl-8;
}
.content {
  transition: height 0.5s;
  @apply h-0 p-0 invisible border-t-2 border-green-700 bg-green-100;
}
.content-visible {
  @apply h-auto p-4 visible;
}
.items {
  transition: margin 0.5s;
  @apply -my-1 border-2 border-0 border-green-700 w-full bg-green-50;
}
.items-open {
  @apply my-6;
}
a.target {
}
</style>
