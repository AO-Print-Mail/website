import { GlobalState } from 'little-state-machine'

export const store: GlobalState = {
  userData: {
    hutk: '',
    gclid: '',
    ipAddress: '',
    utm_term: '',
    utm_campaign: '',
    utm_source: '',
    utm_medium: '',
    hsa_acc: '2818368650',
    hsa_cam: '',
    hsa_grp: '',
    hsa_ad: '',
    hsa_src: '',
    hsa_tgt: '',
    hsa_kw: '',
    hsa_mt: '',
    hsa_net: '',
    hsa_ver: '',
  },
  formData: {
    directMailForm: {
      mailFormat: 'not provided',
      services: 'not provided',
      itemQuantity: '',
      frequency: 'not provided',
      urgency: 'not provided',
      artworkReady: '[unknown]',
      addressDataReady: '[unknown]',
      additionalInformation: '',
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      joinMailingList: true,
      landingPageKeyword: '',
      'bot-field-step3': '',
      readyToSubmit: false,
      submitted: false,
    },
    feedbackForm: {
      experienceRating: '',
      experienceComment: '',
      email: '',
      firstName: '',
      lastName: '',
    },
  },
}
