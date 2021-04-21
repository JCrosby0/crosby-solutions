<template>
  <div class="font" :style="{ fontSize: fontSize + 'px' }">
    <div :id="type" class="logo" :style="{ width: collapse ? '4em' : '14em' }">
      <div class="letters">
        <div class="letter c1"></div>
        <div class="letter c2"></div>
        <div :class="s1Class"></div>
        <div class="letter s2"></div>
        <div :class="strokeClass"></div>
      </div>
      <transition name="words-collapse">
        <div v-if="!collapse" :class="{ words: true, wordsAnim: animate }">
          <transition name="wordsChange" mode="out-in">
            <div v-if="loading" key="loading" class="word-group">
              <div key="loading" class="type loading">loading</div>
              <div key="wait" class="type wait">please wait</div>
            </div>
            <div v-else key="crosby" class="word-group">
              <div key="crosby" class="type crosby">crosby</div>
              <div key="solutions" class="type solutions">solutions</div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      required: false,
      type: Boolean,
      default: () => true,
    },
    collapse: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    loading: {
      required: false,
      type: Boolean,
      default: () => false,
    },
    fontSize: {
      required: false,
      type: Number,
      default: () => 20,
    },
    type: {
      required: false,
      type: String,
      default: () => 'all',
    },
  },
  computed: {
    strokeClass() {
      return {
        stroke: true,
        strokeAnim: this.animate,
        strokeLoading: this.loading,
      }
    },
    s1Class() {
      return {
        letter: true,
        s1: true,
        s1Rotated: this.loading,
        s1Animate: this.animate && !this.loading,
      }
    },
  },
}
</script>

<style scoped>
/* container for the letters logo and words logo */
.logo {
  margin: auto;
  /* height: 4em; */
  /* margin: 2em; */
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  @apply bg-transparent;
}
/* container for the four letter parts and stroke */
.letters {
  flex: 0 0 4em;
  height: 4em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.stroke {
  position: absolute;
  left: calc(2em - 0.2em);
  height: calc(2em);
  width: 0.4em;
  transform-origin: 0.2em 2em;
  z-index: 3;
  transform: rotate(90deg);
  @apply bg-gray-700;
}
.letter {
  width: 2em;
  border: 0.4em solid;
  box-sizing: border-box;
  height: 2em;
  border-top-left-radius: 100%;
  border-right-width: 0;
  border-bottom-width: 0;
  @apply border-gray-700 bg-green-500;
}
.c1 {
  /* @apply bg-green-500; */
}
.c2 {
  transform: rotate(270deg);
  /* @apply bg-green-500; */
}
/* dynamic quadrant */
.s1 {
  /* (un)done with animation */
  transform: rotate(0deg);
  @apply bg-green-300;
}
.s1Rotated {
  transform: rotate(90deg) !important;
}
.s2 {
  transform: rotate(180deg);
  @apply bg-green-300;
}
/* container for words, contains both main and loading word-groups */
.words {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  line-height: 2em;
  /* position: relative; */
  flex: 1 1 initial;
  height: fit-content;
}
/* contains one of main or word-group */
.word-group {
  margin-left: 0.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
}
/* top line */
.loading,
.crosby {
  font-weight: 900;
  @apply text-green-500;
  z-index: 2;
}
.crosby {
  font-size: 3em;
}
.loading {
  font-size: 2.5em;
}
.wait,
.solutions {
  font-weight: 100;
  padding-left: 0.2em;
  letter-spacing: 0.2em;
  @apply text-green-500;
  z-index: 1;
}
.solutions {
  font-size: 1.5em;
}
.wait {
  font-size: 1.1em;
}

/* logo 2 */
.background {
  padding: 1em;
  background: none;
  width: auto;
}
#monochrome,
#monochrome .words,
#monochrome .crosby,
#monochrome .solutions,
#monochrome .loading,
#monochrome .wait {
  color: white;
}
#monochrome {
  background: none;
}
#monochrome .stroke {
  background: white;
}
#monochrome .letter {
  background: none;
  color: white;
  border-color: white;
}
/* logo 3 */
#oneline {
  font-size: 0.3em;
  height: 2em;
}
#oneline .letters {
  width: 2em;
  height: 2em;
}
#oneline .letter {
  border-width: 0.3em;
  border-right-width: 0;
  border-bottom-width: 0;
  width: 1em;
  height: 1em;
}

#oneline .word-group {
  flex-direction: row;
  margin-left: 2em;
}
#oneline .solutions {
  font-size: 3em;
  letter-spacing: -0.1em;
  padding: 0;
}
#oneline .wait {
  display: none;
}

#oneline .stroke {
  position: absolute;
  left: calc(1em - 0.105em);
  height: calc(1em);
  width: 0.2em;
  transform-origin: 0.1em 1em;
  z-index: 3;
  transform: rotate(90deg);
  @apply bg-red-700;
}

/* animation */
.strokeAnim {
  transform: rotate(360deg);
  animation: 0.75s rotate-1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
.s1Animate {
  transform: rotate(90deg);
  animation: rotate-2;
  animation-duration: 0.75s;
  animation-delay: 0.75s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}
.strokeLoading {
  animation: 1s rotate-loading;
  animation-fill-mode: repeat;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes rotate-loading {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes rotate-1 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes rotate-2 {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: translateY(-2rem) rotate(-135deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

/* vue transition */
.words-collapse-enter-active,
.words-collapse-leave-active {
  transition: transform 1s, opacity 1s;
}
.words-collapse-enter,
.words-collapse-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.wordsChange-enter-active,
.wordsChange-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}
.wordsChange-enter,
.wordsChange-leave-to {
  opacity: 0;
}
.wordsChange-enter {
  transform: translateY(2em);
}
.wordsChange-leave-to {
  transform: translateY(-2em);
}
</style>
