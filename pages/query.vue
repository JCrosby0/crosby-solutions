<template>
  <div>
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
          <label :for="input"
            >{{ formTemplate[section][input].label }}
            {{ formTemplate[section][input].required ? '*' : '' }}</label
          >
          <textarea
            v-if="formTemplate[section][input].type == 'textarea'"
            v-model="formInputs[section][input]"
            rows="3"
            :name="input"
            :required="formTemplate[section][input].required"
            :type="formTemplate[section][input].type"
            :placeholder="input"
          />
          <input
            v-else
            v-model="formInputs[section][input]"
            :name="input"
            :required="formTemplate[section][input].required"
            :type="formTemplate[section][input].type"
            :placeholder="input"
          />
        </div>
      </section>
    </form>
  </div>
</template>
<script>
function createFormObject() {
  function createSection(obj, section) {
    obj.formTemplate.sections.push(section)
    obj.formTemplate[section] = { inputs: [] }
    obj.formInputs[section] = {}
  }
  function createInput(obj, section, key, label, description, required, type) {
    if (!obj.formTemplate[section]) {
      createSection(obj, section)
    }
    obj.formTemplate[section].inputs.push(key)
    obj.formTemplate[section][key] = {
      label,
      description,
      required,
      type,
    }
    obj.formInputs[section][key] = ''
  }
  const obj = {
    formTemplate: {
      sections: [],
    },
    formInputs: {},
  }
  //   Business
  createInput(
    obj,
    'business',
    'name',
    'Business Name',
    'The name of your Business',
    true,
    'text'
  )
  createInput(
    obj,
    'business',
    'address',
    'Business Address',
    'The address of your Business',
    false,
    'text'
  )
  createInput(
    obj,
    'business',
    'phone',
    'Phone Number',
    'How can I call you?',
    true,
    'tel'
  )
  createInput(
    obj,
    'business',
    'email',
    'Email Address',
    'How can I email you?',
    true,
    'email'
  )
  createInput(
    obj,
    'business',
    'products',
    'Describe your Products',
    'Tell me about what you sell',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'services',
    'Describe your Services',
    'Tell me about what you do',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessModel',
    'Explain your Business Model',
    'Tell me how your Business works',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessStory',
    'Explain your Business Story',
    'Does your Business have a story to share?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessMotivation',
    'Explain your Business Motivation',
    'Why do you do what you do?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessJourney',
    'Explain your Business Journey',
    'Where are you at in your Journey? Where have you come from? Where are you going?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessVision',
    'What is your Business Vision',
    'What does sucess look like for you?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessMission',
    'What is your Business Mission',
    'What are you here to do?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'business',
    'businessValues',
    'What are your Business Values',
    'What makes you who you are?',
    false,
    'textarea'
  )
  //   Customer
  createInput(
    obj,
    'customer',
    'customerAge',
    'What is their age?',
    'How old are they?',
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerGender',
    'What is their gender?',
    'What is their gender?',
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerLocation',
    'What is their location?',
    'What is their location?',
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerTitle',
    'What is their job title?',
    'What is their job title?',
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerIndustry',
    'What is their Industry?',
    'What is their Industry?',
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerCompanySize',
    'How big is their company?',
    "How big is the customer's company?",
    false,
    'text'
  )
  createInput(
    obj,
    'customer',
    'customerProficiency',
    'Are they an expert? A novice?',
    'How proficient are they at what they do?',
    false,
    'text'
  )
  createInput(
    obj,
    'USP',
    'usp',
    'What is your Unique Selling Proposition?',
    'What makes you different from the competition?',
    false,
    'textarea'
  )
  createInput(
    obj,
    'Website',
    'upgrade',
    'Upgrade or New Website?',
    'Are you looking to update / upgrade an existing site or build a new one?',
    false,
    'text'
  )
  return obj
}

export default {
  data() {
    const dataobj = createFormObject()
    return {
      formTemplate: dataobj.formTemplate,
      formInputs: dataobj.formInputs,
      form: {
        usp: '',
        upgradeOrNew: '',
        websiteUpgrade: {
          url: '',
          hosting: '',
          likes: '',
          dislikes: '',
        },
        websiteNew: {
          needsDomain: '',
          domainName: '',
          needsHosting: '',
        },
        seo: {
          optimised: '',
          keywords: '',
        },
        otherSites: {
          listOfSites: '',
        },
        pages: {
          homeLanding: true,
          aboutUs: true,
          contactUs: true,
          termsConditions: true,
          products: false,
          shipping: false,
          pricing: false,
          productDemo: false,
        },
        features: {
          search: false,
          forms: false,
          maps: false,
          portfolioGallery: false,
          socialMediaButtons: false,
          bookingScheduling: false,
          loginMembership: false,
          clickToCallButton: false,
          onlineOrdering: false,
          pricingTables: false,
          liveChat: false,
          chatBots: false,
        },
        underlyingGoal: '',
        clientContent: {
          copy: false,
          brand: false,
          brandBook: false,
          logos: false,
          colorTheme: false,
          fonts: false,
        },
        timeline: {
          fixedTimeLine: '',
          launchDate: '',
        },
        budget: {},
        maintenance: {
          updates: '',
          futureDevelopment: '',
          backups: '',
        },
        marketing: {
          blogging: '',
          contentCreation: '',
        },
      },
    }
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
</style>
