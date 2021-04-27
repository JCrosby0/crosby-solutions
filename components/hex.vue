<template>
  <div
    class="svg-container"
    :style="`width: ${length * 0.866}px; height: ${length}px`"
  >
    <svg
      :width="length * 0.866"
      :height="length + s"
      viewBox="-1 -1 2.1 2.1"
      :style="`stroke-width: ${0.1}`"
    >
      <polyline :points="hexPath" :stroke="stroke" :fill="fill" />
    </svg>
    <div
      class="slot-container"
      :style="`width: ${length}px; 
        height: ${length / 2.5}px; 
        line-height: ${length / 2.5}px; 
        font-size: ${length / 2.5}px;`"
    >
      <slot class="m-auto" />
    </div>
  </div>
</template>

<script>
const unitPath = [
  [-1, 0],
  [-0.5, 0.866],
  [0.5, 0.866],
  [1, 0],
  [0.5, -0.866],
  [-0.5, -0.866],
  [-1, 0],
  [-0.5, 0.866],
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
    length() {
      return this.l + this.s
    },
    hexPath() {
      return unitPath.reduce((acc, cur) => {
        return acc + `${cur[1]},${cur[0]} `
      }, '')
    },
  },
}
</script>

<style scoped>
.svg-container {
  position: relative;
  /* animation-name: rotate;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out; */
}
/* @keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(1080deg) scale(1);
  }
} */
.slot-container {
  position: absolute;
  top: 30%;
  left: -10%;
  margin: 0;
}
</style>
