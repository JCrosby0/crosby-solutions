<template>
  <div class="card border border-green-500 p-4 bg-green-50 shadow-sm">
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
.card:hover {
  transform: scale(1.05);
  @apply shadow-xl;
}
li {
}
li:before {
  content: '+';
  padding-right: 1rem;
}
</style>
