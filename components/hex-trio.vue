<template>
  <div
    class="hex-arrange flex flex-row flex-wrap justify-center content-center"
    :style="`width: ${2 * (l + 2 * s)}px;`"
  >
    <Hex
      v-for="(_, i) in new Array(number)"
      :key="'hex' + i"
      class="hex"
      :l="l"
      :s="s"
      :stroke="stroke"
      :fill="fill"
    />
  </div>
</template>

<script>
import Hex from '~/components/hex'
export default {
  components: { Hex },
  props: {
    number: {
      required: false,
      type: Number,
      default: () => 3,
    },
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
}
</script>
<style scoped>
.hex:nth-of-type(3n + 0) {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
