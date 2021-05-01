<template>
  <div class="hex-container relative">
    <div class="mx-auto abs-center">
      <component
        :is="require('~/assets/svg/hex.svg?inline')"
        class=""
        :style="{
          width: `${length * 0.866}px`,
          height: `${length}px`,
          fill: 'white',
        }"
      >
      </component>
    </div>
    <div class="slot-container abs-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    l: {
      required: true,
      type: Number,
    },
    s: {
      required: false,
      type: Number,
      default: () => 10,
    },
    stroke: {
      required: false,
      type: String,
      default: () => 'green',
    },
    fill: {
      required: false,
      type: String,
      default: () => 'none',
    },
  },
  computed: {
    length() {
      return this.l + this.s
    },
  },
}
</script>

<style scoped>
.abs-center {
  transform: translateX(-50%) translateY(-50%);
  @apply absolute top-1/2 left-1/2;
}
</style>
