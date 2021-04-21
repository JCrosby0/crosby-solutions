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
        <Nuxt />
      </main>
    </div>
    <Menu
      v-if="showMenu"
      :menu-options="menuOptions"
      class="absolute top-12 right-4"
    />
    <!-- <div class="absolute bottom-4 right-4 bg-transparent w-full">test</div> -->
  </div>
</template>
<script>
import Nav from '~/components/Nav'
import Menu from '~/components/Menu'
// import Footer from '~/components/Footer'
export default {
  components: {
    Nav,
    Menu,
    // Footer,
  },
  data() {
    return {
      showMenu: false,
      menuOptions: ['Home', 'About', 'Solutions', 'Contact'],
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
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s;
}
.page-enter {
  transform: translate(-100%);
}

.page-leave-active {
  transform: translate(100%);
}
.screen {
  background: repeating-linear-gradient(
    /* -45deg, */ rgba(209, 250, 229, 1),
    rgba(209, 250, 229, 1) 1rem,
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
