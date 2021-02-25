import { GlobalState } from 'little-state-machine'

export const store: GlobalState = {
  formData: {
    directMailForm: {
      mailFormat: '[not provided]',
      services: '[not provided]',
      itemQuantity: '[not provided]',
      frequency: '[not provided]',
      urgency: '[not provided]',
      artworkReady: '[unknown]',
      addressDataReady: '[unknown]',
      additionalInformation: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      joinMailingList: true,
      experienceRating: '',
      experienceComment: '[not provided]',
      ipAddress: '',
      hutk: '',
      gclid: '',
    },
  },
}
