export default function () {
  function createSection(obj, section) {
    obj.formTemplate.sections.push(section)
    obj.formTemplate[section] = { inputs: [] }
    obj.formInputs[section] = {}
  }
  function createInput(
    obj,
    section,
    key,
    label,
    description,
    required = false,
    type = 'textarea'
  ) {
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
    'you',
    'name',
    'Your Name',
    'What shall I call you?',
    true,
    'text'
  )
  createInput(
    obj,
    'your business',
    'businessName',
    'Business Name',
    'The name of your Business',
    true,
    'text'
  )
  createInput(
    obj,
    'your business',
    'address',
    'Address',
    'Postal address for receiving mail',
    false,
    'text'
  )
  createInput(
    obj,
    'your business',
    'suburb',
    'Suburb',
    'Postal address for receiving mail',
    false,
    'text'
  )
  createInput(
    obj,
    'your business',
    'state',
    'State',
    'Postal address for receiving mail',
    false,
    'text'
  )
  createInput(
    obj,
    'your business',
    'postCode',
    'Post Code',
    'Postal address for receiving mail',
    false,
    'number'
  )
  createInput(
    obj,
    'your business',
    'phone',
    'Phone Number',
    'How can I call you?',
    true,
    'tel'
  )
  createInput(
    obj,
    'your business',
    'email',
    'Email Address',
    'How can I email you?',
    true,
    'email'
  )
  createInput(
    obj,
    'your business',
    'products',
    'Describe your Products',
    'Tell me about what you sell'
  )
  createInput(
    obj,
    'your business',
    'services',
    'Describe your Services',
    'Tell me about what you do'
  )
  createInput(
    obj,
    'your business',
    'businessModel',
    'Explain your Business Model',
    'Tell me how your Business works'
  )
  createInput(
    obj,
    'your business',
    'businessStory',
    'Explain your Business Story',
    'Does your Business have a story to share?'
  )
  createInput(
    obj,
    'your business',
    'businessMotivation',
    'Explain your Business Motivation',
    'Why do you do what you do?'
  )
  createInput(
    obj,
    'your business',
    'businessJourney',
    'Explain your Business Journey',
    'Where are you at in your Journey? Where have you come from? Where are you going?'
  )
  createInput(
    obj,
    'your business',
    'businessVision',
    'What is your Business Vision',
    'What does sucess look like for you?'
  )
  createInput(
    obj,
    'your business',
    'businessMission',
    'What is your Business Mission',
    'What are you here to do?'
  )
  createInput(
    obj,
    'your business',
    'businessValues',
    'What are your Business Values',
    'What makes you who you are?'
  )
  //   Customer
  createInput(
    obj,
    'your customer',
    'customerAge',
    'What is their age?',
    'How old are they?',
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
    'customerGender',
    'What is their gender?',
    'What is their gender?',
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
    'customerLocation',
    'What is their location?',
    'What is their location?',
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
    'customerTitle',
    'What is their job title?',
    'What is their job title?',
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
    'customerIndustry',
    'What is their Industry?',
    'What is their Industry?',
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
    'customerCompanySize',
    'How big is their company?',
    "How big is the customer's company?",
    false,
    'text'
  )
  createInput(
    obj,
    'your customer',
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
    'What makes you different from the competition?'
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
  createInput(
    obj,
    'Website Upgrade',
    'url',
    'Existing website URL?',
    'What is the URL of your existing website (if any)?',
    false,
    'text'
  )
  createInput(
    obj,
    'Website Upgrade',
    'host',
    'Hosting Provider?',
    'Who is hosting your current website?',
    false,
    'text'
  )
  createInput(
    obj,
    'Website Upgrade',
    'likes',
    'Likes about existing website?',
    'What do you like about your current website?'
  )
  createInput(
    obj,
    'Website Upgrade',
    'dislikes',
    'Dislikes about existing website?',
    'What do you dislike about your current website?'
  )
  createInput(
    obj,
    'Website New',
    'domain',
    'Existing Domain?',
    'Do you already have a domain? What is it?',
    false,
    'text'
  )
  createInput(
    obj,
    'Website New',
    'hosting',
    'Existing Host?',
    'Do you already have a hosting provider? If so, who?',
    false,
    'text'
  )
  createInput(
    obj,
    'SEO',
    'optimised',
    'Do you require SEO?',
    'Is the purpose of the website to rank highly in search results?',
    false,
    'text'
  )
  createInput(
    obj,
    'SEO',
    'keywords',
    'Target keywords?',
    'Which keywords do you want to target?',
    false,
    'text'
  )
  createInput(
    obj,
    'Other Sites',
    'otherSites',
    'Which other websites do you like? What do you like about them?',
    'Provide some examples of websites that you like, and what you like about then. The more detail you provide, the better understanding I can get of what you like in a website.',
    false,
    'textarea'
  )
  createInput(
    obj,
    'Pages',
    'homeLanding',
    'Home / Landing',
    'Initial page to entice the viewer to investigate more',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'about',
    'About',
    'Information about your business',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'contact',
    'Contact',
    'Contact details to help the visitor reach you',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'tandc',
    'Terms and Conditions',
    'Terms and Conditions of using the website, and/or doing business with you',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'products',
    'Products',
    'A catalog of product pages to highlight your products',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'shipping',
    'Shipping',
    'Details and options for product shipping',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'pricing',
    'Pricing',
    'Information about the pricing and inclusions of your services',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Pages',
    'productDemo',
    'Product Demo',
    'Show off your product online',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'search',
    'Search',
    "Search box to help the visitor find what they're after",
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'forms',
    'Forms',
    'Forms to collect information from the visitor',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'maps',
    'Maps',
    'Map to your location',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'portfolioGallery',
    'Portfolio / Gallery',
    'A portfolio or gallery of your work',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'socialMedia',
    'Social Media',
    'Links to your Social Media presence',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'booking',
    'Booking & Scheduling',
    'A way for visitors to book meetings or schedule appointments',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'login',
    'Login & Membership',
    'Do your visitors need to be able to log in to access private information?',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'clickToCall',
    'Click to Call Button',
    'For Mobile users to initiate a call from their phone',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'onlineOrdering',
    'Online Ordering',
    'For visitors to be able to order your prodcut online',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'pricingTables',
    'Pricing Tables',
    'Summary tables of pricing levels with included functionality summary',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'liveChat',
    'Live Chat',
    'Enable your visitors to chat with you directly',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Features',
    'chatbots',
    'Chat Bots',
    'Automated chat bots to repond to your visitors questions',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Goal',
    'underlyingGoal',
    'Underlying Goal',
    'What is the underlying goal of your website? To convert sales? To serve as a business card? User portal?'
  )
  createInput(
    obj,
    'Features',
    'forms',
    'Forms',
    'Forms to collect information from the visitor',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'copy',
    'Copy',
    'The writing on your website pages',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'brand',
    'Brand',
    'Your Brand',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'brandbook',
    'Brand Book',
    'A detailed explanatino of how to use your brand',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'logo',
    'Logo(s)',
    'Company Logos',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'colorTheme',
    'Color Theme',
    'Color Theme for your branding and website',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Client Provided Content',
    'fonts',
    'Fonts',
    'Font selection to match your branding',
    false,
    'checkbox'
  )
  createInput(
    obj,
    'Timeline',
    'fixedTimeline',
    'Fixed Timeline?',
    'Are you working to a fixed timeline for launching the website?',
    false,
    'text'
  )
  createInput(
    obj,
    'Timeline',
    'launchDate',
    'Launch Date?',
    'When is the target launch date',
    false,
    'date'
  )
  createInput(
    obj,
    'Budget',
    'budget',
    'Budget Expectations',
    'What are your budget expectations for website development?',
    false,
    'text'
  )
  createInput(
    obj,
    'Maintenance',
    'updates',
    'Planned Updates',
    'Will you be requiring support with future updates to the website?',
    false,
    'text'
  )
  createInput(
    obj,
    'Maintenance',
    'development',
    'Future Development',
    'Are you planning future additions and development to the website?',
    false,
    'text'
  )
  createInput(
    obj,
    'Maintenance',
    'backups',
    'Backups',
    'Will you be requiring assistance with maintaining a back up of the website?',
    false,
    'text'
  )
  createInput(
    obj,
    'Marketing',
    'blogging',
    'Blogging',
    'Will you be requiring support with making blog posts to help promote your site?',
    false,
    'text'
  )
  createInput(
    obj,
    'Marketing',
    'content',
    'Content Creation',
    'Will you be requiring support with creating content to help promote your site?',
    false,
    'text'
  )
  createInput(
    obj,
    'Other',
    'comments',
    'Anything else?',
    'Is there anything else you want to inlcude?',
    false,
    'textarea'
  )
  return obj
}
