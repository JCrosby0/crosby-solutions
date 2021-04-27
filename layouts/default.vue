<template>
  <div class="screen relative">
    <div class="h-screen flex flex-col overflow-hidden">
      <nav class="flex-initial">
        <Nav
          :menu-options="menuOptions"
          @toggle="handleClickNav(!showMenu)"
          @clickNav="handleClickNav(false)"
        />
      </nav>
      <main class="flex-auto overflow-auto">
        <transition name="page-left" mode="out-in">
          <Nuxt />
        </transition>
      </main>
    </div>
    <Menu
      v-if="showMenu"
      :menu-options="menuOptions"
      class="absolute top-12 right-4"
    />
  </div>
</template>
<script>
import Nav from '~/components/Nav'
import Menu from '~/components/Menu'
import menuOptions from '~/assets/content/menu.json'
export default {
  components: {
    Nav,
    Menu,
  },
  data() {
    return {
      showMenu: false,
      menuOptions: menuOptions.filter((f) => f.live),
    }
  },
  methods: {
    handleClickNav(status = null) {
      this.showMenu = status || false
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

.screen {
  background: repeating-linear-gradient(
    /* -45deg, */ rgba(209, 250, 229, 1),
    #d1fae5 1rem,
    rgba(209, 250, 229, 0) 1rem,
    rgba(209, 250, 229, 0) 2rem
  );
}
.bg-page {
  background: linear-gradient(
    45deg,
    rgba(209, 250, 229, 0),
    rgba(209, 250, 229, 1),
    rgba(209, 250, 229, 1),
    rgba(236, 253, 245, 1),
    rgba(209, 250, 229, 0)
  );
}
</style>
