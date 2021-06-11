<template>
  <div class="container m-auto">
    <h1>New Client Form</h1>
    <p>I can't wait to see what you've got in mind!</p>
    <p>
      To help me get to know you and to help us align our thinking for this
      project, please fill out this survey. The more detail and the more
      information you can provide in your answers, the more talking points we'll
      have in a follow-up call. Nothing is committal, we can always make
      changes, but the more you share, the quicker we iterate towards an amazing
      product!
    </p>
    <p>
      Required inputs are market in red. Additional context for the question is
      available in the question mark circle.
    </p>
    <p>Let's get started!</p>
    <form>
      <section
        v-for="(section, s) in formTemplate.sections"
        :key="'section' + s"
      >
        <h2>{{ section }}</h2>
        <div
          v-for="(input, i) in formTemplate[section].inputs"
          :key="'section' + s + 'input' + i"
          class="input-line"
        >
          <label :for="input" class="label">
            <span>{{ formTemplate[section][input].label }}</span>
            <span class="required">{{
              formTemplate[section][input].required ? '*' : ''
            }}</span>
            <div
              class="question-mark"
              :title="formTemplate[section][input].description"
            >
              ?
            </div>
          </label>
          <textarea
            v-if="formTemplate[section][input].type == 'textarea'"
            v-model="formInputs[section][input]"
            rows="3"
            :name="input"
            :required="formTemplate[section][input].required"
            :type="formTemplate[section][input].type"
          />
          <!-- :placeholder="input" -->
          <input
            v-else
            v-model="formInputs[section][input]"
            :class="{
              checkbox: formTemplate[section][input].type == 'checkbox',
            }"
            :name="input"
            :required="formTemplate[section][input].required"
            :type="formTemplate[section][input].type"
          />
          <!-- :placeholder="input" -->
        </div>
        <hr class="my-1" />
      </section>
      <p>Phew, made it!</p>
      <p>
        Feel free to have a think before you submit the form. Were there any
        sections you were intending to revisit? Again, nothing in here is final,
        but it does help to have evertyhing in the one place!
      </p>
      <p>Looks good? Let's do it!</p>
      <input
        class="form-button"
        type="submit"
        value="Submit"
        @click.prevent="handleSubmit()"
      />
      <input class="form-button" type="reset" value="Reset" />
    </form>
  </div>
</template>
<script>
import createFormObject from '@/assets/js/createFormObject'

export default {
  data() {
    const dataobj = createFormObject()
    return {
      formTemplate: dataobj.formTemplate,
      formInputs: dataobj.formInputs,
    }
  },
  methods: {
    handleSubmit() {
      console.log('form: ', this.formInputs)
    },
  },
}
</script>
<style scoped>
h1 {
  font-size: 3rem;
  padding: 1.5rem;
}
h2 {
  text-transform: capitalize;
  font-size: 2rem;
  padding: 1rem;
}
p {
  padding: 1rem;
}
.input-line {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
}
label {
  flex: 0 0 300px;
  display: inline-block;
  padding: 0.5rem;
}
input,
textarea {
  flex: 1 1 auto;
  display: inline-block;
  padding: 0.5rem;
}
.form-button {
  padding: 0.5rem 2rem;
  border: 1px grey solid;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  @apply bg-gray-200 text-green-900 border-green-900 border-2;
}
.form-button:first-of-type {
  @apply bg-green-500;
}
.checkbox {
  height: 1.5rem;
  width: 1.5rem;
  margin: auto;
}
.required {
  color: red;
}
.label {
  position: relative;
  padding-right: 3rem;
}
.question-mark {
  border-radius: 50%;
  border: 1px grey solid;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  display: inline-block;
  @apply bg-green-600 text-white;
}
</style>
