import 'little-state-machine'
import {
  QuoteFormInputData,
  FeedbackFormData,
} from '@components/landing-page-quote-form'
declare module 'little-state-machine' {
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
