<template>
  <div>
    <div class="call-to-action">
      <button class="" @click="$router.push('/contact')">Let's Talk</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  @apply px-12 py-4 m-8 shadow-lg
  font-black text-green-900 text-xl
  border border-green-500 rounded-l-full rounded-r-full;
  transition: 0.2s;
  background-image: linear-gradient(
    to right,
    rgb(209, 250, 229),
    rgb(167, 243, 248)
  );
}
button:hover {
  @apply hover:text-green-200 shadow-inner;
  transform: scale(1.05);
  background-image: linear-gradient(to left, rgb(6, 78, 59), rgb(4, 120, 87));
}
</style>
