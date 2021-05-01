<template>
  <button class="mx-auto" @click="$router.push('/contact')">Let's Talk</button>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  @apply px-12 py-4 m-4 shadow-lg
   text-green-900 text-xl
  absolute top-0
  border-4 border-green-500 rounded-l-full rounded-r-full;
  transition: 0.2s;
  background-image: linear-gradient(
    to right,
    rgb(209, 250, 229),
    rgb(167, 243, 248)
  );
  transform: translate(-60%, -70%);
}
button:hover {
  @apply hover:text-green-200 shadow-inner;
  transform: translate(-60%, -70%) scale(1.05);
  background-image: linear-gradient(to left, rgb(6, 78, 59), rgb(4, 120, 87));
}
</style>
