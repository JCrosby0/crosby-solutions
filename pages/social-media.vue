<template>
  <div class="container p-4">
    <h1 class="text-3xl">Social Media Images</h1>
    <div v-for="soc in social" :key="soc.name" class="social-each">
      <h2 class="text-2xl">{{ soc.name }}</h2>
      <a :href="soc.href" target="_blank">{{ soc.href }}</a>
      <div
        v-for="con in contentTypes"
        :key="soc.name + con.name"
        class="content"
      >
        <h3 class="text-xl">{{ con.title }}:</h3>
        <span>{{ soc[con.name].dimensions }}</span>
        <div
          :class="['image', con.name]"
          :style="{
            width:
              (soc[con.name].displays.x ||
                parseDim(soc[con.name].dimensions).x) + 'px',
            height:
              (soc[con.name].displays.y ||
                parseDim(soc[con.name].dimensions).y) + 'px',
          }"
        >
          <object
            v-if="con.name === 'banner' && soc.name !== 'Instagram'"
            id="cs-logo-2l"
            class="cs-logo"
            type="image/svg+xml"
            :data="require(`~/assets/svg/cs-logo-white-two-line-font.svg`)"
            height="50%"
          />
          <object
            v-if="con.name === 'banner' && soc.name === 'Instagram'"
            id="cs-logo-2l"
            class="cs-logo"
            type="image/svg+xml"
            :data="require(`~/assets/svg/cs-toplogo-white-two-line-font.svg`)"
            height="50%"
          />
        </div>
        <!-- <figure>
          <img :src="require(`~/assets/img/sm/${soc[con.name].src}`)" />
          <figcaption>{{ soc[con.name].dimensions }}</figcaption>
        </figure> -->
      </div>
    </div>
  </div>
</template>

<script>
import social from '~/content/json/social.json'
export default {
  //   async asyncData({ $content }) {
  //     const social = await $content('json').where({ slug: 'social' }).fetch()
  //     console.log('social: ', social)
  //     return {
  //       social,
  //     }
  //   },
  data() {
    return {
      social,
      contentTypes: [
        { title: 'Avatar', name: 'avatar' },
        { title: 'Banner', name: 'banner' },
        // { title: 'Content', name: 'content' },
      ],
    }
  },
  methods: {
    parseDim(dim) {
      const temp = dim.slice(0, -2).trim().split(' x ')
      const [x, y] = temp
      return { x, y }
    },
  },
}
</script>

<style scoped>
.image {
  @apply bg-gray-400 border-2 border-gray-900 relative;
}
.avatar {
  background-image: url('~assets/img/sm/youtube-avatar-800x800.png');
  background-size: cover;
}
.banner {
  color: white;
  background: black;
  background-image: url('~assets/svg/hex-fill.svg');
  background-size: cover;
  position: relative;
}
.cs-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
}
</style>
