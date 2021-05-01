<template>
  <div>
    <div class="py-24 w-full align-top mx-auto text-center">
      <h1 class="container mx-auto text-3xl p-8 pb-0 text-left">Services:</h1>
      <div class="service-row flex flex-row overflow-x-auto md:py-4">
        <CardService
          v-for="(service, i) in services"
          :key="'service-' + i"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script>
import services from '~/assets/content/services.json'
import CardService from '~/components/card-service.vue'
export default {
  components: { CardService },
  data() {
    return {
      services,
    }
  },
}
</script>

<style scoped>
.service-row {
  scroll-snap-type: x mandatory;
  scroll-padding: 50%;
}
</style>
