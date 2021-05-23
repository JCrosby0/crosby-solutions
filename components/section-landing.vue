<template>
  <div class="background">
    <div
      class="container relative h-screen w-full mx-auto text-center text-white"
    >
      <div
        class="content flex flex-col h-screen justify-center md:justify-evenly align-top"
      >
        <div class="flex-initial flex flex-row justify-evenly">
          <div class="left-box p-4 text-left text-sm md:text-base mx-auto">
            <h1 class="text-3xl text-green-400 font-bold flex-1 mb-4">
              Web Solutions to enable you,<br />
              not limit you.
            </h1>
            <ul>
              <li>Website development</li>
              <li>Web app development</li>
              <li>Consultation</li>
              <li>Audits</li>
              <li>Development</li>
              <li class="font-bold">Solutions</li>
            </ul>
            <p class="throwaway py-4">All the support you need to succeed.</p>
            <p class="mission">
              Our mission is simple: <br />We will empower you to be in control
              of your own web presence.
            </p>
          </div>
          <div
            id="logo-container"
            class="hidden md:inline-block flex-initial right-box py-12 px-16 m-auto"
          >
            <object
              id="cs-logo-2l-top"
              class="cs-logo mx-auto lg:hidden"
              type="image/svg+xml"
              :data="require(`~/assets/svg/cs-toplogo-white-two-line-font.svg`)"
              :height="280"
            />
            <object
              id="cs-logo-2l"
              class="cs-logo mx-auto hidden lg:inline-block"
              type="image/svg+xml"
              :data="require(`~/assets/svg/cs-logo-white-two-line-font.svg`)"
              :height="140"
            />
            <!-- <component
              :is="require('~/assets/svg/cs-logo-white-two-line.svg?inline')"
              height="140px"
            /> -->
            <p class="pt-4 text-lg text-white font-semibold">
              Websites, Applications, Support and Development
            </p>
          </div>
        </div>
        <div class="relative z-10 flex-auto md:flex-initial mt-8 mb-24">
          <CTA />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTA from '~/components/callToAction'

export default {
  components: { CTA },
}
</script>

<style scoped>
.background {
  background: url('~assets/svg/hex-fill.svg');
}
.left-box {
  @apply z-10 my-auto;
}
.right-box {
  width: fit-content;
  @apply z-10;
  backdrop-filter: blur(8px);
}
li {
}
li::before {
  content: '+';
  padding-right: 1em;
}
li:last-child::before {
  content: '=';
}
</style>
