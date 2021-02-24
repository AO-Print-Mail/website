import 'little-state-machine'
declare module 'little-state-machine' {
  interface GlobalState {
    formData: {
      directMailForm: {
        jobInformation: {
          mailFormat:
            | 'flyers'
            | 'brochures'
            | 'letters'
            | 'other'
            | '[not provided]'
          services: 'Print and mail' | 'Mail only' | '[not provided]'
          itemQuantity: number | '[not provided]'
          frequency:
            | 'One-off'
            | 'daily'
            | 'weekly'
            | 'monthly'
            | '[not provided]'
          urgency: '[not provided]' //to be built
        }
        additionalInformation: {
          artworkReady:
            | 'yes'
            | 'no'
            | 'interested in print design'
            | '[n/a]'
            | '[not provided]'
            | '[unknown]'
          addressDataReady:
            | 'yes'
            | 'no'
            | 'interested in buying a list'
            | '[n/a]'
            | '[not provided]'
            | '[unknown]'
          additionalInformation?: string
          //fileAttachments: <filetype>[] -- To be built - allow multiple attachments
          //isFileAttached: boolean  -- Useful for letting agent know something is attached in the form data
        }
        contactInformation: {
          firstName: string
          lastName: string
          email: string
          phone: string
          country: string
        }
        marketingInformation: {
          joinMailingList: boolean
          experienceRating: string
          experienceComment: string
          ipAddress: string
          hutk: string
          gclid: string
        }
      }
    }
  }
}
