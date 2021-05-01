<template>
  <component
    :is="require(`assets/svg/material/${name}_black_24dp.svg?inline`)"
  />
  <!-- :style="style" -->
</template>
<script>
export default {
  name: 'Icon',
  props: {
    styleObj: {
      type: Object,
      required: false,
      default: () => {
        return {
          height: '72px',
          width: '72px',
          fill: 'black',
          //   stroke: 'black',
          border: 'none',
        }
      },
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
