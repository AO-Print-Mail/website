import 'little-state-machine'
import {
  QuoteFormInputData,
  FeedbackFormData,
} from '@components/landing-page-quote-form-copy'

module 'little-state-machine' {
  interface GlobalState {
    userData: {
      hutk: string
      gclid: string
      ipAddress: string
    }
    formData: {
      directMailForm: QuoteFormInputData
      feedbackForm: QuoteFormInputData
    }
  }
}

declare global {
  interface Window {
    dataLayer?: object[]
  }
}
