<template>
  <div>
    <Logo
      class="logo"
      :type="selectedLogo"
      :collapse="collapse"
      :loading="loading"
      :font-size="size"
    />
  </div>
</template>

<script>
import Logo from '~/components/crosby-solutions'
export default {
  components: { Logo },
  props: {
    collapse: {
      required: false,
      type: Boolean,
      default: false,
    },
    size: {
      required: false,
      type: Number,
      default: 20,
    },
    type: {
      required: false,
      type: String,
      default: () => 'color',
    },
  },
  data() {
    return {
      loading: false,
      selectedLogo: this.$props.type || 'monochrome',
      logoOptions: ['color', 'monochrome', 'oneline'],
    }
  },
}
</script>
<style scoped>
.logo {
  @apply p-4;
}
</style>
