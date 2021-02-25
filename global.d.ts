import 'little-state-machine'
declare module 'little-state-machine' {
  interface GlobalState {
    formData: {
      directMailForm: {
        jobInformation: {
          mailFormat:
            | 'flyers/postcards'
            | 'brochures'
            | 'letters'
            | 'plastic wrap'
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
            | '[unknown]'
          addressDataReady:
            | 'yes'
            | 'no'
            | 'interested in buying a list'
            | '[n/a]'
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
