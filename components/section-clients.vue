<template>
  <SectionImages :payload="Clients" />
</template>

<script>
import SectionImages from '~/components/section-generic-images'
import Clients from '~/assets/content/clients.json'
export default {
  components: { SectionImages },
  data() {
    return { Clients }
  },
}
</script>
