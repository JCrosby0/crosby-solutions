<template>
  <div class="bg-page h-full p-4">
    <h1 class="text-3xl">Contact</h1>
    <div class="flex flex-row flex-wrap mx-auto justify-around">
      <form
        id="contact"
        data-netlify
        name="contact"
        class="w-96 mr-8 mb-8"
        method="POST"
      >
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
            :required="key.required"
            class="w-96 max-w-full px-4 py-2 mt-2 border border-gray-500 box-border"
          />
          <textarea
            v-else
            v-model="form[key.name]"
            :name="key"
            :rows="4"
            :required="key.required"
            class="w-96 max-w-full px-4 py-2 mt-2 border border-gray-500"
          ></textarea>
        </div>
        <div id="message">
          <span v-show="!!message">{{ message }}</span>
        </div>
        <div class="buttons text-right w-96 max-w-full mt-2 box-border">
          <input
            type="submit"
            :value="buttonText"
            class="p-2 border w-24 text-center border-gray-500 rounded bg-green-400"
            :style="`{ pointer: ${inProgress ? 'disabled' : 'pointer'} }`"
            @click.prevent="handleSubmit"
          />
          <input
            type="reset"
            value="Reset"
            class="p-2 border w-24 text-center border-gray-500 rounded bg-white"
            @click.prevent="handleReset"
          />
        </div>
      </form>
      <div class="details py-4">
        <h2 class="text-2xl">Contact Details</h2>
        <ContactInfo />
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from '~/components/contact'
export default {
  name: 'Contact',
  components: { ContactInfo },
  data() {
    return {
      buttonText: 'Submit',
      inProgress: false,
      message: null,
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
  methods: {
    showMessage(status = 'reset', message = '') {
      // always clear any existing class
      const classes = ['success', 'error']
      const classList = document.getElementById('message').classList
      classes.forEach((c) => {
        classList.contains(c) && classList.remove(c)
      })
      // always set message
      this.message = message
      if (status === 'reset') return
      if (status === 'success') {
        // remove the message after time
        setTimeout(this.showMessage, 5000)
      }
      classList.add(status)
    },
    handleReset() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = ''
      })
    },
    handleSubmit(e) {
      e.preventDefault()

      // if missing required fields, show error
      if (!this.form.name || !this.form.email) {
        this.showMessage('error', 'Required fields are missing')
        return
      }

      // these are the same of accessing the form...
      // console.log('e.target.form', e.target.form)
      // console.log('form by id', document.getElementById('contact'))
      const encFormData = new FormData(document.getElementById('contact'))

      // User Feedback
      this.buttonText = 'Submitting...'
      this.inProgress = true
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(encFormData).toString(),
      })
        .then((response) => {
          // User Feedback
          this.showMessage('success', 'Successfully submitted. Thank-you!')
          this.buttonText = 'Submit'
          this.handleReset()
        })
        .catch((error) => {
          this.showMessage('error', error.message)
        })
        .finally(() => {
          this.inProgress = false
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
.success {
  @apply text-green-700;
}
.error {
  @apply text-red-700;
}
</style>
