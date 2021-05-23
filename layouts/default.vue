<template>
  <div :class="screenClass">
    <div
      class="scrollable h-screen flex flex-col overflow-y-auto relative"
      @scroll="handleScrollEvent"
    >
      <h1 class="hidden">Crosby Solutions</h1>
      <section v-if="$route.path === '/'">
        <Landing class="flex-initial -mb-66" />
      </section>
      <nav class="sticky z-20">
        <Nav
          ref="nav"
          class="nav shadow-lg"
          :show-menu="showMenu"
          :menu-options="menuOptions"
          @toggle="handleClickNav(!showMenu)"
          @clickNav="handleClickNav(false)"
          @toggleModal="(e) => handleModal(e)"
        />
      </nav>
      <main class="flex-auto">
        <transition name="page-left" mode="out-in">
          <Nuxt />
        </transition>
      </main>
      <div v-show="showModal" class="modal" @click="handleModal"></div>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/Nav'
import menuOptions from '~/assets/content/menu.json'
import Landing from '~/components/section-landing'
export default {
  components: {
    Nav,
    Landing,
  },
  data() {
    return {
      showMenu: false,
      showModal: false,
      menuOptions: menuOptions.filter((f) => f.live),
    }
  },
  computed: {
    screenClass() {
      return {
        'screen-dark': this.$route.path === '/',
        'screen-light': this.$route.path !== '/',
        relative: true,
      }
    },
  },
  mounted() {
    this.offset = this.$refs.nav.$el.offsetTop
  },
  methods: {
    handleModal(e) {
      this.showModal = !this.showModal
    },
    handleScrollEvent(e) {
      this.handleClickNav(false)
    },
    handleClickNav(status = null) {
      if (status !== null) {
        this.showMenu = status
      } else {
        this.showMenu = false
      }
    },
  },
}
</script>
<style>
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-300.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-italic.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-regular.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: local(''),
    url('~/assets/fonts/montserrat-v15-latin-600.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~/assets/fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
html {
  font-family: 'Montserrat', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  @apply bg-green-50;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* navigation */
.nuxt-link-exact-active {
  @apply underline font-bold;
}

/* page transitions */
.page-left-enter-active,
.page-left-leave-active,
.page-right-enter-active,
.page-right-leave-active {
  transition: transform 0.3s;
}
.page-left-leave-active,
.page-right-enter {
  transform: translate(-100%);
}
.page-left-enter,
.page-right-leave-active {
  transform: translate(100%);
}
/* nav bar transition */
.pull-down-enter-active {
  transition: transform 0.3s;
}
.pull-down-enter {
  transform: translateY(100%);
}
@keyframes pull-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.screen-light {
  /* light gradient background */
  background: linear-gradient(
    45deg,
    rgba(209, 250, 229, 0),
    rgba(209, 250, 229, 0.5),
    rgba(209, 250, 229, 1),
    rgba(209, 250, 229, 0.5),
    rgba(209, 250, 229, 0)
  );
}

.screen-dark {
  /* dark background */
  background: linear-gradient(135deg, black, black);
  @apply bg-green-900;
}
/* hex background */
.bg-page-dark {
  background-image: linear-gradient(to right, black, #064e3b, black);
  background: url('~assets/svg/hex-fill.svg');
}
/* line background */
.bg-page {
  background: repeating-linear-gradient(
      0deg,
      rgba(209, 250, 229, 0.5) 0.3rem,
      rgba(209, 250, 229, 0.5) 1.3rem,
      rgba(209, 250, 229, 0) 1.3rem,
      rgba(209, 250, 229, 0) 2.3rem
    ),
    repeating-linear-gradient(
      60deg,
      rgba(209, 250, 229, 0.5) 0rem,
      rgba(209, 250, 229, 0.5) 1rem,
      rgba(209, 250, 229, 0) 1rem,
      rgba(209, 250, 229, 0) 2rem
    ),
    repeating-linear-gradient(
      -60deg,
      rgba(209, 250, 229, 0.5),
      rgba(209, 250, 229, 0.5) 1rem,
      rgba(209, 250, 229, 0) 1rem,
      rgba(209, 250, 229, 0) 2rem
    );
}
/* Sticky Nav Bar */
.-mb-66 {
  margin-bottom: -64px;
}
.nav {
  @apply z-20;
}
.sticky {
  position: sticky;
  top: 0;
}
/* allow for nav bar in scrollable area */
.scrollable {
  scroll-padding-top: 100px;
}
/* allow for modal overlay when opening menu */
.modal {
  position: absolute;
  height: 700vh;
  width: 100%;
  top: -100vh;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}
</style>
