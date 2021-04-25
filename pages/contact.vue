<template>
  <div class="bg-page h-full p-4">
    <h1 class="text-3xl">Contact</h1>
    <div class="flex flex-row flex-wrap mx-auto justify-around">
      <form id="contact" name="contact" class="w-96 mr-8 mb-8" data-netlify>
        <h2 class="text-2xl">Contact Form</h2>
        <p class="text-sm">
          Fields indicated with <span class="text-red-400">*</span> are
          required.
        </p>
        <div v-for="key in formKeys" :key="key.name" class="form-row w-96">
          <label
            :for="key.name"
            :class="`
              inline-block w-24 mt-2 -mb-2 align-top box-border
              ${key.required && 'required'}
            `"
            >{{ key.name }}</label
          >
          <input
            v-if="key.name !== 'message'"
            v-model="form[key.name]"
            type="text"
            :name="key"
            class="w-96 max-w-full px-4 py-2 mt-2 border border-gray-500 box-border"
          />
          <textarea
            v-else
            v-model="form[key.name]"
            :name="key"
            :rows="4"
            class="w-96 max-w-full px-4 py-2 mt-2 border border-gray-500"
          ></textarea>
        </div>
        <div class="buttons text-right w-96 max-w-full mt-2 box-border">
          <input
            type="submit"
            value="Submit"
            class="py-2 border w-24 text-center border-gray-500 rounded bg-green-400"
          />
          <input
            type="reset"
            value="Reset"
            class="py-2 border w-24 text-center border-gray-500 rounded bg-white"
          />
        </div>
      </form>
      <div class="details py-4">
        <h2 class="text-2xl">Contact Details</h2>
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '~/components/contact'
export default {
  components: { Contact },
  transition: {
    name: 'page',
    // mode: 'out-in',
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      required: ['name', 'email'],
    }
  },
  computed: {
    formKeys() {
      return Object.keys(this.form).map((k) => {
        return { name: k, required: this.required.includes(k) }
      })
    },
  },
}
</script>

<style scoped>
.required:after {
  content: '*';
  @apply text-red-400;
}
#contact,
#contact input,
.form-row,
#contact textarea {
  max-width: calc(100vw - 32px);
}
</style>
