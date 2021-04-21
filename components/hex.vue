<template>
  <div>
    <div
      class="svg-container"
      :style="`width: ${l + 2 * s}px; height: ${l + 2 * s}px`"
    >
      <svg :width="l + 2 * s" :height="l + 2 * s" :style="`stroke-width: ${s}`">
        <polyline :points="hexPath" :stroke="stroke" :fill="fill" />
      </svg>
    </div>
  </div>
</template>

<script>
const unitPath = [
  [0.5, 1],
  [1, 0.75],
  [1, 0.25],
  [0.5, 0],
  [0, 0.25],
  [0, 0.75],
  [0.5, 1],
  [1, 0.75],
]
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
    hexPath() {
      return unitPath.reduce((acc, cur) => {
        return acc + `${this.l * cur[0] + this.s},${this.l * cur[1] + this.s} `
      }, '')
    },
  },
}
</script>

<style scoped>
svg {
  /* fill: none;
  stroke: green; */
  stroke-linejoin: miter;
  margin: -25% 0;
  margin-right: 0;
}
</style>
