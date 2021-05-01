<template>
  <div
    class="container text-white px-4 py-24 relative w-full align-top mx-auto text-center"
  >
    <h1 class="text-3xl text-left p-4">{{ payload.title }}</h1>
    <div class="content z-10 flex flex-wrap flex-row justify-evenly">
      <div v-for="item in payload.content" :key="item.name" class="tech md:m-4">
        <a ref="noreferrer" :href="item.link" target="_tab">
          <div class="image-container m-auto">
            <img
              :src="require(`~/assets/img/${item.img}`)"
              :alt="item.name + ' logo'"
              height="96px"
              width="96px"
              class="img m-auto"
            />
          </div>
          <span>{{ item.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.content {
  /* min-height: 50vh; */
}
.image-container {
  height: 96px;
  width: auto;
}
.img {
  box-sizing: border-box;
  filter: grayscale(1);
  @apply w-24 h-24 p-4 m-4;
}
.img:hover {
  filter: none;
}
</style>
