<template>
  <div
    class="container text-white relative w-full align-top mx-auto text-center text-white"
  >
    <Hex :number="3" :l="150" stroke="#064e3b" class="hex hex-top" />
    <!-- <Hex :number="6" :l="150" stroke="#064e3b" class="hex hex-bottom" /> -->
    <div class="content z-10 flex flex-col justify-between min-h-full">
      <CTA class="z-10" />
      <div
        class="links-container flex flex-wrap flex-col md:flex-row text-sm md:text-base"
      >
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
          <h2 class="text-2xl mt-4">Social Media</h2>
          <ul class="social-media text-center mx-auto md:mx-0">
            <li v-for="sm in social" :key="sm.name">
              <a ref="noreferrer" :href="sm.href" target="_blank">{{
                sm.name
              }}</a>
            </li>
          </ul>
        </section>
        <section class="section right">
          <h2 class="text-2xl">Contact:</h2>
          <Contact />
        </section>
      </div>
      <div class="powered">
        Created with 💚 by
        <a href="https://crosby.solutions" target="_self">Crosby Solutions</a>
        &copy; 2021
      </div>
    </div>
  </div>
</template>

<script>
import CTA from '~/components/callToAction'
import Hex from '~/components/hex-trio'
import Contact from '~/components/contact'
export default {
  components: { CTA, Hex, Contact },
  props: {
    social: {
      required: true,
      type: Array,
    },
    solutions: {
      required: true,
      type: Array,
    },
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
  opacity: 0.5;
  z-index: 1;
  /* filter: drop-shadow(0 0 16px green); */
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
.social-media a::after {
  content: ' | ';
}
.social-media a:last-of-type::after {
  content: '';
}

@media (max-width: 768px) {
  .social-media a:nth-child(3n)::after {
    content: '';
  }
}
</style>
