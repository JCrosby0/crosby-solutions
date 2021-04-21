<template>
  <div class="border border-red-500 p-4 bg-green-50">
    <div class="header-box bg-green-100 p-4">
      <h2 class="text-2xl text-center"><slot name="title"></slot></h2>
    </div>
    <div class="description text-left p-4">
      <ul>
        <slot name="description"></slot>
      </ul>
    </div>
    <div class="body text-left"><slot></slot></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
li {
}
li:before {
  content: '+';
  padding-right: 1rem;
}
</style>
