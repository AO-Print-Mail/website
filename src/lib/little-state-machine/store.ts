import { GlobalState } from 'little-state-machine'

export const store: GlobalState = {
  formData: {
    directMailForm: {
      jobInformation: {
        mailFormat: '[not provided]',
        services: '[not provided]',
        itemQuantity: '[not provided]',
        frequency: '[not provided]',
        urgency: '[not provided]',
      },
      additionalInformation: {
        artworkReady: '[unknown]',
        addressDataReady: '[unknown]',
        additionalInformation: '',
      },
      contactInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      marketingInformation: {
        joinMailingList: true,
        experienceRating: '',
        experienceComment: '[not provided]',
        ipAddress: '',
        hutk: '',
        gclid: '',
      },
    },
  },
}
