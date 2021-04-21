<template>
  <SectionImages :payload="TechStack" />
</template>

<script>
import SectionImages from '~/components/section-generic-images'
import TechStack from '~/assets/content/tech.json'
export default {
  components: { SectionImages },
  data() {
    return { TechStack }
  },
}
</script>
