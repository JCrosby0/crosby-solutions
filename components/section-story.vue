<template>
  <div class="container p-4 min-h-screen w-full align-top mx-auto text-left">
    <h1 class="text-3xl p-4">Picture this:</h1>
    <img
      class="float-right p-4"
      width="400px"
      :src="require('~/assets/img/browse-social-media.jpg')"
      alt="Browsing Social Media"
    />
    <p>
      You're browsing through your favorite social media feed and you come
      across an interesting topic. You click through and find yourself on their
      website. You like it. The layout draws you in, the colours pop, everything
      fits nicely.
    </p>
    <p>
      You pull up a new tab and go to your own website. Did it always take this
      long to load? When its done adjusting itself, you notice that it's looking
      a bit tired: the layout is nothing fancy; the text is small; the wording
      doesn't quite sit well with you anymore; and that one page doesn't look
      right on your mobile.
    </p>
    <p>
      You decide it's probably time for a makeover. But where do you start? Do
      you update your current site or build a new one? Can you do it yourself,
      or do you need to get someone else to do it?
    </p>
    <p>Too-hard basket. Back to social media!</p>

    <h1 class="text-2xl p-4 clear-both text-green-700">Hang on a second!</h1>
    <p>
      Do you cut your own hair? Do you alter your own clothes? Do you service
      your own car? There's nothing stopping you from doing these things: it
      just takes some time to research and develop the know-how. 'But I'm too
      busy!' I hear you say? Fair enough! That's why we go to hair-dressers,
      tailors and mechanics.
    </p>
    <p>So go talk to someone about your website!</p>
    <h1 class="text-3xl p-4">Introducing Crosby Solutions</h1>
    <img
      class="float-left p-4"
      width="500px"
      :src="require('~/assets/img/business-meeting-over-coffee.jpg')"
      alt="Business Meeting Over Coffee"
    />
    <p>
      Let's talk about what you want to achieve with your website. It may be as
      simple as asking:
    </p>
    <ul>
      <li>
        Do you think you could make me look like this <s>celebrity</s>
        <b>website</b>?
      </li>
      <li>
        Can you alter my <s>jacket</s> <b>website</b> to make it fit better?
      </li>
      <li>
        Something's up when I use the <s> brakes turning left</s>
        <b>website on mobile...</b>
      </li>
    </ul>
    <p>
      The rest will come from having a chat about who you are, how your website
      is used and what you want to achieve.
    </p>
    <p>
      The solution might be that with a few pointers, or maybe a training
      session, you're up and running to maintain the website by yourself. Or it
      may be that you want to be completely hands-off and just see the final
      product. Perhaps we'll even be able solve some problems or identify some
      efficiency gains you didn't even know about!
    </p>
    <CTA class="text-center clear-both" />
  </div>
</template>

<script>
import CTA from '~/components/callToAction'
export default {
  components: { CTA },
}
</script>

<style scoped>
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
