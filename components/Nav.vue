<template>
  <div
    class="nav-back relative z-50 flex flex-row justify-between p-4 bg-green-200 border-b border-t border-gray-900 shadow-lg"
  >
    <nuxt-link to="/" class="logo">
      <object
        id="cs-logo-1l"
        class="cs-logo"
        type="image/svg+xml"
        :data="require('~/assets/svg/cs-logo-one-line.svg')"
        height="30px"
      />
    </nuxt-link>
    <button
      ref="menuButton"
      class="md:hidden nav-button p-1 border text-gray-900 border-gray-900 w-8 h-8 text-center bg-green-500 rounded"
      @click="handleMenuClick"
    >
      ☰
    </button>
    <div class="hidden md:inline-block links my-auto">
      <nuxt-link
        v-for="menu in menuOptions"
        :key="menu.name"
        :to="menu.to"
        class="text-green-900 p-2 align-middle my-auto"
        >{{ menu.name }}</nuxt-link
      >
    </div>
    <Menu
      v-show="localShowMenu"
      :class="[showMenuAbove ? 'menu-above' : 'menu-below']"
    ></Menu>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
export default {
  components: { Menu },
  inject: ['toggleMenu', 'menuOptions'],
  data() {
    return {
      showMenuAbove: true,
    }
  },
  computed: {
    localShowMenu() {
      return (
        this.$root &&
        this.$root.$children[2] &&
        this.$root?.$children[2]?.showMenu
      )
    },
  },
  methods: {
    handleMenuClick(e) {
      const topHalf = e.y < document.body.scrollHeight / 2
      this.showMenuAbove = !topHalf
      // toggle menu in root component
      this.toggleMenu(!this.localShowMenu)
    },
  },
}
</script>
<style scoped>
.menu-above,
.menu-below {
  position: absolute;
  right: 2rem;
  z-index: 20;
}
.menu-above {
  bottom: 64px;
  animation: 0.3s pull-down;
}
.menu-below {
  top: 64px;
  animation: 0.3s pull-up;
}
@keyframes pull-down {
  0% {
    transform: translateY(100%);
    z-index: -1;
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    z-index: 20;
    opacity: 1;
  }
}
@keyframes pull-up {
  0% {
    transform: translateY(-100%);
    z-index: -1;
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    z-index: 20;
    opacity: 1;
  }
}
.logo {
  text-decoration: none !important;
}
.nav-back {
  background-image: linear-gradient(
    to right,
    rgb(236, 253, 245, 0.5),
    rgb(167, 243, 208, 0.5),
    rgb(189, 240, 220, 0.5)
  );
}
</style>
