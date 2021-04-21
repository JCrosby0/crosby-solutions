<template>
  <div
    class="container relative min-h-screen w-full align-top mx-auto text-center text-white"
  >
    <Hex :number="3" :l="150" stroke="#064e3b" class="hex hex-top" />
    <Hex :number="6" :l="150" stroke="#064e3b" class="hex hex-bottom" />
    <div class="content flex flex-col justify-evenly h-full">
      <div class="flex flex-row">
        <div class="left-box p-4 text-left">
          <h1 class="p-4 text-3xl text-green-50 font-bold flex-1">
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
          <p class="throwaway p-4">All the support you need to succeed.</p>
          <p class="mission p-4">
            Our mission is simple: <br />We will empower you to be in control of
            your own web presence.
          </p>
        </div>
        <div class="hidden md:inline-block flex-1 right-box p-4 m-auto">
          <Logo class="" :size="30" type="monochrome" />
          <p class="pt-4 text-lg">Web Apps, Support and Development</p>
        </div>
      </div>
      <CTA />
    </div>
  </div>
</template>

<script>
import CTA from '~/components/callToAction'
import Logo from '~/components/Logo'
import Hex from '~/components/hex-trio'
export default {
  components: { CTA, Logo, Hex },
}
</script>

<style scoped>
.left-box,
.right-box {
  z-index: 1;
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
.tri-hex * {
  transform: translateZ(10px);
}
.hex {
  transform-style: preserve-3d;
  perspective: 100px;
  position: absolute;
  opacity: 1;
  z-index: 0;
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
