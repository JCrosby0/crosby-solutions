<template>
  <div
    class="nav-back relative z-50 flex flex-row justify-between p-4 bg-green-200 border-b border-t border-gray-900 shadow-lg"
  >
    <nuxt-link to="/" class="logo relative">
      <h1>
        <object
          id="cs-logo-1l"
          class="cs-logo"
          type="image/svg+xml"
          :data="require('~/assets/svg/cs-logo-one-line.svg')"
          :height="30"
          aria-label="Crosby Solutions"
        />
        <span class="hidden">Menu</span>
      </h1>
      <div class="click-mask absolute w-full h-full top-0 left-0"></div>
    </nuxt-link>
    <div class="spacer w-12 flex-auto"></div>
    <Menu-Hex
      :menu-options="menuOptions"
      class="z-30"
      @toggleModal="(e) => $emit('toggleModal', e)"
    />
    <div class="spacer w-6 flex-initial"></div>
  </div>
</template>

<script>
import MenuHex from '~/components/Menu-Hex'
export default {
  components: {
    MenuHex,
  },
  props: {
    menuOptions: {
      required: false,
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showMenuAbove: true,
    }
  },
  methods: {
    handleMenuClick(e) {
      // handle differently if its in the top half of the screen
      const topHalf = e.y < document.body.scrollHeight / 2
      this.showMenuAbove = !topHalf
      this.$emit('toggle')
    },
  },
}
</script>
<style scoped>
.menu-above,
.menu-below {
  position: absolute;
  right: 0;
  z-index: 10;
}
.menu-above {
  bottom: 64px;
  transform-origin: bottom right;
  animation: 0.3s spin-left;
}
.menu-below {
  top: 64px;
  transform-origin: top right;
  animation: 0.3s spin-right;
}
@keyframes spin-left {
  0% {
    transform: rotate(90deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes spin-right {
  0% {
    transform: rotate(-90deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}

.logo {
  text-decoration: none !important;
}
.cs-logo:before {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
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
