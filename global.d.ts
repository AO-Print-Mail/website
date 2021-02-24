import 'little-state-machine'
import { QuoteFormInputData } from '@lib/little-state-machine'

declare module 'little-state-machine' {
  interface GlobalState {
    formData: { directMailForm: QuoteFormInputData }
  }
}
