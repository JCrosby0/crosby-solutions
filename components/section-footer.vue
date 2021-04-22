<template>
  <div
    class="container text-white relative w-full align-top mx-auto text-center text-white"
  >
    <Hex :number="3" :l="150" stroke="#064e3b" class="hex hex-top" />
    <!-- <Hex :number="6" :l="150" stroke="#064e3b" class="hex hex-bottom" /> -->
    <div class="content z-10 flex flex-col justify-between min-h-full">
      <CTA class="mt-16 z-10" />
      <div class="links-container flex flex-wrap flex-col md:flex-row">
        <section class="section left">
          <h2 class="text-2xl">Solutions:</h2>
          <ul>
            <li v-for="(li, i) in solutions" :key="'solution' + i">
              <nuxt-link :to="`solutions#${li.title.replace(/ /g, '')}`">{{
                li.title
              }}</nuxt-link>
            </li>
          </ul>
        </section>
        <section class="section mid">
          <h2 class="text-2xl">About:</h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section class="section right">
          <h2 class="text-2xl">Contact:</h2>
          <Contact />
        </section>
      </div>
      <div class="baseline z-10 flex flex-row justify-between mt-8">
        <div class="powered">
          Created with ♡ by Crosby Solutions &copy; 2021
        </div>
        <div class="social-media">
          <a href="https://www.facebook.com/SolutionsCrosby/" target="_blank"
            >Facebook</a
          >
          |
          <a href="https://twitter.com/SolutionsCrosby" target="_blank"
            >Twitter</a
          >
          |
          <a
            href="https://www.youtube.com/channel/UCOoCc7UNktWJGiLVAYD_t6g"
            target="_blank"
            >YouTube</a
          >
          |
          <a
            href="https://www.linkedin.com/company/crosby-solutions"
            target="_blank"
            >LinkedIn</a
          >
          |
          <a href="https://github.com/Crosby-Solutions" target="_blank"
            >GitHub</a
          >
          |
          <a href="https://www.instagram.com/solutionscrosby/" target="_blank"
            >Instagram</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import solutions from '~/assets/content/solutions.json'
import CTA from '~/components/callToAction'
import Hex from '~/components/hex-trio'
import Contact from '~/components/contact'
export default {
  components: { CTA, Hex, Contact },
  data() {
    return { solutions }
  },
}
</script>

<style scoped>
.section {
  @apply w-full md:w-1/3 my-4 z-10;
}
.tri-hex * {
  transform: translateZ(10px);
}
.hex {
  transform-style: preserve-3d;
  perspective: 100px;
  position: absolute;
  opacity: 1;
  z-index: 1;
  @apply hidden md:flex;
}

.hex-top {
  transform: rotateX(30deg) translateY(110px);
  left: 10px;
  top: 10px;
}
.hex-bottom {
  transform: rotateX(30deg) translatey(-200px) rotateZ(180deg);
  right: 10px;
  bottom: 10px;
}
</style>
