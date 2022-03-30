<template>
  <div
    class="container p-4 pt-24 md:p-24 h-screen w-full flex flex-col justify-between mx-auto text-left bg-white"
  >
    <div
      class="page relative border-4 border-green-900 bg-green-50 h-4/5 md:h-3/5"
    >
      <section v-show="page === 0">
        <h1 class="text-3xl p-4">Picture this:</h1>
        <div class="md:w-3/5">
          <p>
            Browsing through a social media feed, you come across an interesting
            article. You click through to their website, and you're impressed:
            the layout draws you in, the colours pop, everything fits nicely.
          </p>
          <p>
            You pull up a new tab and go to your own website. Did it always take
            this long to load? When its done adjusting itself, you notice that
            it's looking a bit tired: the layout is nothing fancy; the text is
            small; the wording doesn't quite sit well with you anymore; and that
            one page doesn't look right on your mobile.
          </p>
          <p>
            You decide it's probably time for a makeover. But where do you
            start? Do you update your current site or build a new one? Can you
            do it yourself, or do you need to get someone else to do it?
          </p>
          <p>Too-hard basket. Back to social media!</p>
        </div>
      </section>
      <section v-show="page === 1" class="page">
        <div class="md:w-1/2 mx-auto">
          <h1 class="text-3xl p-4 text-left text-green-700">
            Hang on a second!
          </h1>
          <p>
            Do you cut your own hair?<br />
            Do you alter your own clothes?<br />
            Do you service your own car?<br />
            There's nothing stopping you from doing these things: it just takes
            some time to research and develop the know-how.
          </p>
          <p>
            'But I'm too busy!' I hear you say? Fair enough! That's why we go to
            hair-dressers, tailors and mechanics.
          </p>
          <p>So go talk to someone about your website!</p>
          <p>Introducing:</p>
          <object
            class="cs-logo pt-8 mx-auto"
            type="image/svg+xml"
            :data="require(`~/assets/svg/cs-logo-one-line.svg`)"
            aria-label="crosby solutions logo"
          />
        </div>
      </section>
      <section v-show="page === 2" :class="`page page-${page}`">
        <div class="md:w-3/5 ml-auto">
          <p class="text-3xl text-center">So let's talk!</p>
          <p>It may be as simple as asking:</p>
          <ul>
            <li>
              Do you think you could make me look like this <s>celebrity</s>
              <b>website</b>?
            </li>
            <li>
              Can you alter my <s>jacket</s> <b>website</b> to make it fit
              better?
            </li>
            <li>
              Something's up when I use the <s> brakes turning left</s>
              <b>website on mobile...</b>
            </li>
          </ul>
          <p>
            The rest will come from having a chat about who you are, how your
            website is used and what you want to achieve.
          </p>
          <p>
            The solution might be that with a few pointers, or maybe a training
            session, you're up and running to maintain the website by yourself.
            Or it may be that you want to be completely hands-off and just see
            the final product. Perhaps we'll even be able solve some problems or
            identify some efficiency gains you didn't even know about!
          </p>
        </div>
      </section>
      <button
        class="next-button float-right m-4 bg-green-100 border-green-600 border-4 py-2 w-24 text-center"
        @click="nextPage"
      >
        {{ buttonText }}
      </button>
      <svg
        class="absolute -top-12 -right-1 md:-right-11"
        viewBox="-.916 -1.05 1.832 2.1"
        stroke-width="0.1"
        fill="white"
        width="84px"
      >
        <polyline
          points=" 0,-1 0.866,-0.5 0.866,0.5 0,1 -0.866,0.5 -0.866,-0.5 0,-1 0.866,-0.5 "
          stroke=" #064e3b"
        ></polyline>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      page: 0,
    }
  },
  computed: {
    buttonText() {
      return this.page === 2 ? 'Restart' : 'Next'
    },
  },
  methods: {
    nextPage() {
      this.page = (this.page + 1) % 3
    },
  },
}
</script>

<style scoped>
.hex {
  background: transparent;
}

.cs-logo {
  width: clamp(300px, 80%, 500px);
  animation: appear-logo 2s ease-out 1s forwards;
  opacity: 0;
  @apply text-center;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear-logo {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
p {
  @apply p-4;
}
li {
  @apply pl-8;
}
li::before {
  content: '-';
  @apply pr-4;
}
</style>
