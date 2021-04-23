<template>
  <div>
    <div
      class="container p-4 min-h-screen w-full align-top mx-auto text-center"
    >
      <h1 class="text-3xl p-4 text-left">Features:</h1>
      <div class="feature-column flex flex-col">
        <div
          v-for="(feature, i) in features"
          :key="'feature-' + i"
          class="feature-row flex flex-row justify-start my-4"
        >
          <div
            class="feature-card w-1/2 flex-initial border border-green-500 m-auto text-left p-4 m-4"
          >
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.content }}</p>
          </div>
          <div
            class="feature-opposite relative w-1/6 flex-initial align-middle text-center text-2xl mx-4"
          >
            <Hex :l="150" stroke="#064e3b" class="hex">
              {{ feature['hex-text'] }}
            </Hex>
          </div>
          <!-- <div class="spacer w-1/3 flex-auto"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from '~/assets/content/features.json'
import Hex from '~/components/hex'
export default {
  data() {
    return {
      features,
      Hex,
    }
  },
}
</script>

<style scoped>
.feature-row {
  min-height: 10em;
}
.feature-row:nth-child(2n) {
  @apply flex-row-reverse;
}
.hex {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
}
</style>
