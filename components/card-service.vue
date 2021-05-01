<template>
  <div
    class="card flex-initial mx-4 flex-col border-4 border-green-900 p-4 mt-16"
  >
    <div class="heading-graphic relative h-20 -mt-16">
      <Hex :l="75" class="absolute top-1/2 left-1/2 reset">
        <svg-icon
          :name="service.icon"
          class="mx-auto"
          :style="{ width: '56px', height: '56px', fill: '#064e3b' }"
        />
      </Hex>
    </div>
    <h2 class="heading text-2xl flex-initial my-4">{{ service.title }}</h2>
    <div class="body text-left flex-auto mb-4">{{ service.content }}</div>
  </div>
</template>

<script>
import svgIcon from '~/components/svg-icon.vue'
import Hex from '~/components/hex'

export default {
  components: {
    svgIcon,
    Hex,
  },
  props: {
    service: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.card {
  flex: 1 0 min(300px, 70vw);
  scroll-snap-align: center;
}
.reset {
  transform: translate(-50%, -50%);
}
</style>
