<template>
  <div :class="'p-8' + selectedLogo === 'monochrome' && 'bg-black'">
    <!-- logo options are color, monochrome, single -->
    <!-- <LogoLoading v-if="loading" class="logo" type="color" /> -->
    <Logo
      class="logo"
      :type="selectedLogo"
      :collapse="collapse"
      :loading="loading"
    />
    <div class="buttons pt-4 flex flex-col w-44 m-auto mt-8">
      <button class="btn" @click="loading = !loading">
        {{ 'Loading: ' + loading }}
      </button>
      <button class="btn" @click="collapse = !collapse">
        {{ 'Collapse: ' + collapse }}
      </button>
      <select v-model="selectedLogo">
        <option v-for="opt in logoOptions" :key="opt" :value="opt">
          {{ opt }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/crosby-solutions'
// import LogoLoading from '~/components/crosby-solutions-loading'
export default {
  components: { Logo },
  data() {
    return {
      loading: true,
      collapse: false,
      selectedLogo: 'color',
      logoOptions: ['color', 'monochrome', 'oneline'],
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2900)
  },
}
</script>
<style scoped>
.btn {
  @apply border border-gray-900 mb-1;
}
.logo {
  @apply p-4;
}
</style>
