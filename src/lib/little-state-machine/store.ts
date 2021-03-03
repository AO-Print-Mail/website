import { GlobalState } from 'little-state-machine'

export const store: GlobalState = {
  userData: {
    hutk: '',
    gclid: '',
    ipAddress: '',
  },
  formData: {
    directMailForm: {
      mailFormat: 'not provided',
      services: 'not provided',
      itemQuantity: 0,
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
      isComplete: false,
    },
    feedbackForm: {
      email: '',
      hutk: '',
      ipAddress: '',
      experienceRating: '',
      experienceComment: '',
    },
  },
}
