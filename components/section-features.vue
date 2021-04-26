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
          <div class="feature-card text-left">
            <h2 class="text-2xl pr-4">{{ feature.title }}</h2>
            <p class="pr-4">{{ feature.content }}</p>
          </div>
          <div class="feature-opposite relative align-middle text-center">
            <Hex :l="150" stroke="#064e3b" class="hex hidden md:block">
              <div class="hex-contents">
                {{ feature['hex-text'] }}
              </div>
            </Hex>
            <Hex :l="75" stroke="#064e3b" class="hex md:hidden">
              <div class="hex-contents">
                {{ feature['hex-text'] }}
              </div>
            </Hex>
          </div>
          <div class="spacer hidden md:block"></div>
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
  min-height: 95px;
}
.feature-row:nth-child(2n) {
  @apply flex-row-reverse;
}
.feature-row:nth-child(2n) p,
.feature-row:nth-child(2n) h2 {
  @apply text-left pl-4 pr-0;
}
.hex {
  position: absolute;
  top: 25%;
  left: 50%;
  transition: 0.3s;
  transform: translate(-50%);
}
.hex:hover {
  filter: drop-shadow(0 0 24px green);
}

.feature-opposite {
  flex: 0 0 100px;
  min-width: 100px;
}
.feature-card {
  flex: 5 1 calc(90% - 100px);
  min-width: 170px;
}
.spacer {
  flex: 1 5 33%;
}
/* aka tailwindcss md: */
@media (min-width: 768px) {
  .feature-row {
    min-height: 170px;
  }
  .feature-opposite {
    flex: 0 0 202px;
    min-width: 202px;
  }
  .feature-card {
    flex: 1 1 calc(50% - 32px - 48px);
    /* min-width: 500px; */
    @apply border border-green-500  p-4 m-4;
  }
  .spacer {
    flex: 1 1 calc(50% - 170px + 48px);
  }
}
</style>
